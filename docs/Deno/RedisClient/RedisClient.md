## Redis Client 

### 实现原理
```js title=RedisClient
//建立连接
export async function connect(options:RedisConnectOptions): Promise<Redis>{
    //初始化连接属性
    const connection = new RedisConnection(hostname,port);

    //建立连接
    await connection.connect();

    //将连接注入到RedisImpl
    return new RedisImpl(connection);  
};

```


### Data Structure
- RedisConnection
    - Redis 客户端连接
- RedisConnectOptions
    - Redis客户端连接选项
- RedisImpl
    - 对Redis功能得所有封装

### References
Deno-Redis