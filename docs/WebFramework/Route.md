## Route

### 功能
URL与物理文件之间的映射,路由使我们能够定义映射到请求处理程序的 URL 模式.

每个MVC程序必须有一个路由,

URL 可以映射到 MVC中的控制器和操作方法

```
http://domain/students -> http://domain/studentsinfo.aspx
```

### RoutingEngine 工作步骤
1. 本地路由文件配置
2. 接收Request
3. 与本地路由配置文件进行匹配
4. 执行控制器和控制器操作
5. 返回响应,包括200,404等等

### Route Table
路由配置文件解析后的表, 包含Route, URL Pattern, Handler

### 如何实现路由配置?
```js title='routeRegister.js'
http://localhost:1234/controller/action/id

type = {
    resource,
}
//示例
class routes{
    register(){}
    route_table(){}
}
routes.register([
    {
        name:"www",
        type:"resource",
        domain:"www.hello.com",
        route:"/",
        controller:"wwwController",
        middleware:""
    },
    {
        name:"book",
        type:"resource",
        domain:"book.hello.com",
        route:"/",
        controller:"bookController"
    }
]);
```

