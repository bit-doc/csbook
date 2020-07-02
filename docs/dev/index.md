## 开发手册

**服务器环境**
- Code Server 代码编辑器
https://github.com/cdr/code-server
    - 下载安装
        - 将deb文件下载上传至 阿里云oss,然后使用该地址进行安装
    - 配置
        - 打开~/.config/code-server/config.yaml,将 bind-addr改为0.0.0.0再重启访问

