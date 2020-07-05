## WebSocket 

### 数据结构
- WebSocketImpl
``` title = WebSocketImpl acceptWebSocket 返回的数据结构

acceptWebSocket({
    conn: req.conn,
    bufReader: req.r,
    bufWriter: req.w,
    headers: req.headers,
}).then(WebSocketImpl);

WebSocketImpl {
  sendQueue: [],
  _isClosed: false,
  conn: ConnImpl {
    rid: 8,
    remoteAddr: { hostname: "127.0.0.1", port: 55910, transport: "tcp" },
    localAddr: { hostname: "127.0.0.1", port: 3000, transport: "tcp" }
  },
  mask: undefined,
  bufReader: BufReader {
    r: 798,
    w: 798,
    eof: false,
    buf: Uint8Array(4096) [
      71, 69, 84, 32, 47, 119, 115, 32, 72, 84, 84, 80, 47,  49,
      46, 49, 13, 10, 72, 111, 115, 116, 58, 32, 108, 111, 99,  97,
      108, 104, 111, 115, 116, 58, 51, 48, 48, 48, 13, 10, 67, 111,
      110, 110, 101, 99, 116, 105, 111, 110, 58, 32, 85, 112, 103, 114,
      97, 100, 101, 13, 10, 80, 114, 97, 103, 109, 97, 58, 32, 110,
      111, 45, 99, 97, 99, 104, 101, 13, 10, 67, 97, 99, 104, 101,
      45, 67, 111, 110, 116, 114, 111, 108, 58, 32, 110, 111, 45,  99,
      97,  99,
      ... 3996 more items
    ],
    rd: ConnImpl {
      rid: 8,
      remoteAddr: { hostname: "127.0.0.1", port: 55910,0, transport: "tcp" },
      localAddr: { hostname: "127.0.0.1", port: 3000, t transport: "tcp" }
    }
  },
  bufWriter: BufWriter {
    usedBufferBytes: 0,
    err: null,
    writer: ConnImpl {
      rid: 8,
      remoteAddr: { hostname: "127.0.0.1", port: 55910,0, transport: "tcp" },
      localAddr: { hostname: "127.0.0.1", port: 3000, t transport: "tcp" }
    },
    buf: Uint8Array(4096) [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,     
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,     
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,     
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,     
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,     
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,     
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ... 3996 more items
    ]
  }
}
```

- WebSocket用户存储数据结构
``` title= UserStorage
const UserStorage = new Map<string, WebSocket>();
const userId = v4.generate();
UserStorage.set(userId, ws);

//向所有用户发送消息
for (const user of UserStorage.values()) {
  user.send(senderId ? `[${senderId}]: ${message}` : message);
}

//UserStorage存储
Map {
  "08517585-2e21-47ad-bfcc-a1a2ec0998f8" => WebSocketImpl {
      sendQueue: [],
      _isClosed: false,
      conn: ConnImpl { rid: 8, remoteAddr: [Object], localAddr: [Object] },
      mask: undefined,
      bufReader: BufReader { r: 12, w: 12, eof: false, buf: [Uint8Array], rd: [Object] },
      bufWriter: BufWriter { usedBufferBytes: 0, err: null, writer: [Object], buf: [Uint8Array] }
    }
}
```
