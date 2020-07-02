### 应用案例
- Reddit
- HackerNews
- https://raddle.me/
- https://news.ycombinator.com/

### 功能
- W3 标准支持
    - https://www.w3.org/ns/activitystreams
    - Activitypub API : https://dev.lemmy.ml/docs/contributing_apub_api_outline.html
    - https://www.w3.org/TR/activitystreams-vocabulary/
- 决策机构
    - https://dev.lemmy.ml/docs/lemmy_council.html

- API 
    - https://dev.lemmy.ml/docs/contributing_websocket_http_api.html
    
- 用户界面
    - 实时更新界面内容
    - 支持多款主题模板

- 用户系统
    - 注册
        - 最少的用户名和密码
    - 登录
    - 头像
    - 用户状态
        - 正常
        - 查封
    - 用户信息流

- 社区
    - 热门社区算法
    - 版主
        - 网站管理员和社区版主可以指定其他版主

- 帖子
    - 排序算法(Ranking/Sorting Algorithm)
        - 参考
            - Lemmy算法
                - https://dev.lemmy.ml/docs/about_ranking.html
            - Reddit 排序算法
                - https://medium.com/hacking-and-gonzo/how-reddit-ranking-algorithms-work-ef111e33d0d9
            - HackerNews排序算法
                - https://medium.com/hacking-and-gonzo/how-hacker-news-ranking-algorithm-works-1d9b0cf2c08d
    - 投票系统
        - 投票算法
    - 数据结构
        - 标题
        - 内容
        - url
    - 发布帖子
        - 发布时要进行类似帖子搜索,避免内容重复
    - 帖子置顶
    - 帖子状态
        - 锁定
        - 删除
        - 恢复

- 评论
    - 评论状态
        - 删除
    - 嵌套评论
        - https://stackoverflow.com/questions/192220/what-is-the-most-efficient-elegant-way-to-parse-a-flat-table-into-a-tree/192462#192462

- 消息通知
    - 通知可以是发送电子邮件

- 国际化支持 i18n

- 搜索系统

- 富文本编辑器
    - 支持 :表情
    - 支持 @user
    - 支持 #topic
    - 支持 图片上传
        - 拖拽上传
