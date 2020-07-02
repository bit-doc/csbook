---
title: 技术原理
---
### 即时通讯 

**应用**
- 微信
- whatsApp

**示例**
- https://github.com/aralroca/chat-with-deno-and-preact
    - 参考文章:https://aralroca.com/blog/learn-deno-chat-app

**实现原理**
- Client-Server模式
    - im-server
    - im-client
- Server实现原理
    - 如何实现实现Server
        - Socket监听端口
        - 在监听的端口处处理外来请求
            - 外来请求为纯文本格式,在很多编程语言中将Socket进行封装,比如Deno中WebSocket已经提供了很多封装
            - 示例
            Server.ts
```js title="Server.ts"
listenAndServe({ port: 3000 }, async (req) => {
// 默认走HTTP协议
  if (req.method === 'GET' && req.url === '/') {
    req.respond({
      status: 200,
      headers: new Headers({
        'content-type': 'text/html',
      }),
      body: await Deno.open('./index.html'),
    })
  }

  // 当判断为WebSocket请求时,接收WebSocket连接
  //acceptWebSocket 返回 Promise, 
  if (req.method === 'GET' && req.url === '/ws') {
    if (acceptable(req)) {
      acceptWebSocket({
        conn: req.conn,
        bufReader: req.r,
        bufWriter: req.w,
        headers: req.headers,//这里可以接收请求头,用于身份认证,比如jwt
      }).then(handleUserWebSocketRequest)
    }
  }
})

const users = new Map<string, WebSocket>()

function broadcast(message: string, senderId?: string): void {
  if (!message) return
  for (const user of users.values()) {
    user.send(senderId ? `[${senderId}]: ${message}` : message)
  }
}

export async function handleUserWebSocketRequest(ws: WebSocket): Promise<void> {
//新用户进入,每个连接都是一个用户(刷新页面会导致连接中断)
  const userId = v4.generate()

  // 注册用户connection 到users,将所有的用户放在一个地方
  users.set(userId, ws)

  //广播到聊天室说 该用户已经接入
  broadcast(`> User with the id ${userId} is connected`)

  //等待该用户发送新消息
  for await (const event of ws) {
    const message = typeof event === 'string' ? event : ''

    broadcast(message, userId)

    // Unregister user conection
    if (!message && isWebSocketCloseEvent(event)) {
      users.delete(userId)
      broadcast(`> User with the id ${userId} is disconnected`)
      break
    }
  }
}
```
- Client实现原理
    - 客户端使用Javascript WebSocket实现

**参考文档**
[mirrorfly](https://www.mirrorfly.com/chat-features.php)

**功能模块**
- 账户 | Account
- 联系人 | Contact
- 频道 | Channels
- 会话 | Conversion
    - 会话信息 | Conversion Information
    - 未读会话 | Unread Message
    - 会话类型 | Conversion Type
        - 一对一聊天 | Private 1-to-1 Chat
        - 群聊 | Group Chat Room
- 聊天机器人
- 消息 | Message
    - 消息撤回 
    - 自动回复 | Smart Reply
    - 消息通知 | Push Notifications
    - 离线消息 | Offline Message
    - 消息历史 | Message History 
    - 消息解析 | Message Parser
        - #hashTag
        - @联系人
        - :表情
    - 消息状态 | Message Status
        - 发送中 | Sending
        - 发送失败 | Failed
        - 发送成功 | Succeed
    - 消息翻译
    - 语音输入 | Speech To Text
    - 消息类型 | Message Type
        - 文本消息 | Text Message
        - 图片消息 | Image Message
            - Gif Image
        - 音频消息 | Sound Message
        - 视频消息 | Video Message
        - VOIP
        - 语音通信
        - 视频通信
        - 红包消息
        - 联系人名片
        - 提醒消息
        - URL消息  | URL Message
        - 文件消息 | File Message
        - 地理位置 | Location Sharing Message
        - 自定义卡片消息 | Card Message
- 安全
    - 端到端聊天加密
- 云服务
    - 托管环境的存储和伸缩
- 监控报告 | Monitor & Report
    - With an intuitive contact center dashboard, manage, analyze, track call handling time, call drop ratio and call conversion rate for better decision making.
        - Chat Analytics
            - Manage chat app’s performance accessing concurrent user base, data usage, active users in real-time within a dashboard.
        - Reporting
            - Monitor, optimize & track chat app’s key metrics in real-time and export the entire app’s report for decision making.
        - Backup & Storage
            - Scale up to any volume of data storage with the inbuilt database and extend the scalability with cloud infrastructure.
        - Centralized Administration
            - Control the entire chat app in a centralized dashboard to monitor any group or end-users activity in a real-time.

