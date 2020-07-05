## RedisConnection

```js title=Connect连接方法得具体实现
private thunkifyConnect(
    hostname: string,
    port: string | number,
    options: RedisConnectionOptions,
  ): () => Promise<RedisConnection> {
    return async () => {
      const dialOpts: Deno.ConnectOptions = {
        hostname,
        port: parsePortLike(port),
      };
      if (!Number.isSafeInteger(dialOpts.port)) {
        throw new Error("deno-redis: opts.port is invalid");
      }
      const conn: Deno.Conn = options?.tls
        ? await Deno.connectTls(dialOpts)
        : await Deno.connect(dialOpts);

      if (options.name) this.name = options.name;
      if (options.maxRetryCount) this.maxRetryCount = options.maxRetryCount;

      this.closer = conn;
      this.reader = new BufReader(conn);
      this.writer = new BufWriter(conn);
      this.executor = muxExecutor(this, this.maxRetryCount > 0);

      this._isClosed = false;
      this._isConnected = true;

      try {
        if (options?.password != null) {
          await this.authenticate(options.password);
        }
        if (options?.db) await this.selectDb(options.db);
      } catch (error) {
        this.close();
        throw error;
      }

      return this as RedisConnection;
    };
  }
```