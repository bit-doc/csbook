## Request
### 数据结构
- **ConnImpl**
- **ServerRequest**

``` title= ConnImpl 连接数据结构 可以从ServerRequest直接获取
  conn: ConnImpl {
    rid: 7,
    remoteAddr: { hostname: "127.0.0.1", port: 55098, transport: "tcp" },
    localAddr: { hostname: "127.0.0.1", port: 3000, transport: "tcp" }
  }
```


``` title= Request listenAndServe接收到的数据结构

listenAndServe({ port: 3000 }, async (ServerRequest) => {}

ServerRequest {
  done: Promise { <pending> },
  _contentLength: undefined,
  _body: null,
  finalized: false,
  conn: ConnImpl {
    rid: 7,
    remoteAddr: { hostname: "127.0.0.1", port: 55098, transport: "tcp" },
    localAddr: { hostname: "127.0.0.1", port: 3000, transport: "tcp" }
  },
  r: BufReader {
    r: 798,
    w: 798,
    eof: false,
    buf: Uint8Array(4096) [
      71, 69, 84, 32, 47, 119, 115, 32, 72, 84, 84, 80, 47,  49,
      46, 49, 13, 10, 72, 111, 115, 116, 58, 32, 108, 111, 99,  97,
      108, 104, 111, 115, 116, 58, 51, 48, 48, 48, 13, 10, 67, 111,
      110, 110, 101, 99, 116, 105, 111, 110, 58, 32, 85, 112, 103, 114,
      97, 100, 101, 13, 10, 80, 114, 97, 103, 109, 97, 58, 32, 110,
      111, 45, 99, 97, 99, 104, 101, 13, 10, 67, 97, 99, 104, 101,      45, 67, 111, 110, 116, 114, 111, 108, 58, 32, 110, 111, 45, 
 99,
      97,  99,
      ... 3996 more items
    ],
    rd: ConnImpl {
      rid: 7,
      remoteAddr: { hostname: "127.0.0.1", port: 55098, transport: "tcp" },
      localAddr: { hostname: "127.0.0.1", port: 3000, transport: "tcp" }
    }
  },
  method: "GET",
  url: "/ws",
  proto: "HTTP/1.1",
  protoMinor: 1,
srftoken=slf42Kb9JYXlPkq710WGTu7lvOomvHhDOqTUOvoVBpG67ZSQA0uMIY9bHdVrNrNrb7; sessionid=ctfuxt1e1mv9oe92cm1huqftt98pzw4g; grafana_session=500a20020386bdeca73fea758eac53aca7; portainer.LOGIN_STATE_UUID=bc1328457-srftoken=slf42Kb9JYXlPkq710WGTu7lvOomvHhDOqTUOvoVBpG67ZSQA0uMIY9bHdVrNSQA0uMIY9bHdVrNrb7; sessionid=ctfuxt1e1mv9oe92cm1huqftta_session=5a20098pzw4g; grafana_session=5a20020386bdeca73fea758eac53ac=bc132845-45b7-a7; portainer.LOGIN_STATE_UUID=bc132845-45b7-46e4-8e9d-KCbdfMC86A==, s215b8e8ecf07, sec-websocket-key: 6ci3e7DBUm4sKCbdfMC86A_window_bits },==, sec-websocket-extensions: permessage-deflate; client_max_window_bits },
  w: BufWriter {
    usedBufferBytes: 0,
    err: null,
    writer: ConnImpl {
      rid: 7,                                           transport: "tc
      remoteAddr: { hostname: "127.0.0.1", port: 55098, transport: "tcp" },                                   ransport: "tcp"
      localAddr: { hostname: "127.0.0.1", port: 3000, transport: "tcp" }
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