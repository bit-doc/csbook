## Tcp Connection

### 关于tcp connection

世界上几乎所有的 HTTP 通信都是通过TCP/IP 进行的，TCP/IP 是一组流行的分组交换网络协议，由全球各地的计算机和网络设备使用。客户端应用程序可以打开与服务器应用程序的 TCP/IP 连接，几乎在世界任何地方运行。建立连接后，客户端和服务器的计算机之间交换的消息将永远不会丢失、损坏或接收顺序

**HTTP 连接只不过是 TCP 连接，外加一些有关如何使用它们的规则**。TCP 连接是互联网的可靠连接。要准确、快速地发送数据，您需要了解 TCP 的基础知识

### How Http Work 

- Client 
    1. get IP Address & Port
    2. create new socket
    3. connect to server ip:port
    4. connection successful
    5. send http request(write)
    6. wait for http response(read)
    7. process http response
    8. close connection
- Server
    1. create new socket
    2. bind socket to port(bind)
    3. permit socket connections(listen)
    4. wait for connection(accept)
    5. application notified of connection
    6. start reading request(read)
    7. process http request message
    8. send back http response(write)
    9. close connection(close)

### Tcp Stream
TCP 以称为 IP 数据包（或IP 数据报）的小块发送数据.
当 HTTP 想要传输消息时，它会按顺序通过打开的 TCP 连接流式传输消息数据的内容。
TCP 接收数据流，将数据流切成称为段的块，并在称为 IP 数据包的信封内跨 Internet 传输段.这一切都由TCP/IP软件处理;HTTP 程序员看不到它。

每个 TCP 段由IP 数据包从一个 IP 地址携带到另一个 IP 地址。每个 IP 数据包都包含：
- IP 数据包头（通常为 20 字节）
- TCP 段标头（通常为 20 字节）
- TCP 数据块（0 个或更多字节）

IP 标头包含源和目标 IP 地址、大小和其他标志。TCP 段标头包含 TCP 端口号、TCP 控制标志和用于数据排序和完整性检查的数值。

### reference 
https://www.oreilly.com/library/view/http-the-definitive/1565925092/ch04s01.html