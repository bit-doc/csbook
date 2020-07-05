## RedisImpl

```js title= RedisImpl
class RedisImpl {
    get isConnected(){}
    constructor(private connection: RedisConnection}

    hlen(key: string) {
        return this.execIntegerReply("HLEN", key);
    }

    hmget(key: string, ...fields: string[]) {
        return this.execArrayReply<BulkString>("HMGET", key, ...fields);
    }

    hmset(key: string, ...field_values: string[]) {
        return this.execStatusReply("HMSET", key, ...field_values);
    }
    //... 每个方法对应一个Redis命令
}
```