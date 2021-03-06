## 分库分表

### 参考
- https://zhuanlan.zhihu.com/p/87144535
- https://zhuanlan.zhihu.com/p/62984253
- https://juejin.im/post/5efefaaa6fb9a07e644ee60f

### 为什么分库分表?

刚开始，可能公司的技术团队规模比较小，所有的数据都位于一个库中。随着公司业务的发展，技术团队人员也得到了扩张，划分为不同的技术小组，不同的小组负责不同的业务模块。例如A小组负责用户模块，B小组负责产品模块。此时数据库也迎来了第一次拆分：垂直拆分。

- 用户请求量太大
因为单服务器TPS，内存，IO都是有限的
- 单库太大
单个数据库处理能力有限；单库所在服务器上磁盘空间不足；单库上操作的IO瓶颈 解决方法：切分成更多更小的库
- 单表太大
CRUD都成问题；索引膨胀，查询超时 解决方法：切分成多个数据集更小的表。

### 如何分库分表?
- 开源方案: http://shardingsphere.apache.org/index_zh.html
- http://mycat.org.cn/
#### 垂直拆分
垂直拆分的一个典型应用场景是服务化(SOA)改造。在服务化的背景下，除了业务上需要进行拆分，底层的存储也需要进行隔离。 垂直拆分会使得单个用户请求的响应时间变长，原因在于，在单体应用的场景下，所有的业务都可以在一个节点内部完成，而垂直拆分之后，通常会需要进行RPC调用。然后虽然单个请求的响应时间增加了，但是整个服务的吞吐量却会大大的增加。

**垂直分表**
大表拆分为小表,对字段较多不常用的进行拆分

**垂直分库**
垂直分库针对的是一个系统中的不同业务进行拆分，比如用户User一个库，商品Producet一个库，订单Order一个库。 切分后，要放在多个服务器上，而不是一个服务器上。为什么？ 我们想象一下，一个购物网站对外提供服务，会有用户，商品，订单等的CRUD。没拆分之前， 全部都是落到单一的库上的，这会让数据库的单库处理能力成为瓶颈。按垂直分库后，如果还是放在一个数据库服务器上， 随着用户量增大，这会让单个数据库的处理能力成为瓶颈，还有单个服务器的磁盘空间，内存，tps等非常吃紧。 所以我们要拆分到多个服务器上，这样上面的问题都解决了，以后也不会面对单机资源问题。

数据库业务层面的拆分，和服务的“治理”，“降级”机制类似，也能对不同业务的数据分别的进行管理，维护，监控，扩展等。 数据库往往最容易成为应用系统的瓶颈，而数据库本身属于“有状态”的，相对于Web和应用服务器来讲，是比较难实现“横向扩展”的。 数据库的连接资源比较宝贵且单机处理能力也有限，在高并发场景下，垂直分库一定程度上能够突破IO、连接数及单机硬件资源的瓶颈。


#### 水平拆分

**水平分表**
针对数据量巨大的单张表（比如订单表），按照某种规则（RANGE,HASH取模等），切分到多张表里面去。 但是这些表还是在同一个库中，所以库级别的数据库操作还是有IO瓶颈。不建议采用。
**水平分库分表**
将单张表的数据切分到多个服务器上去，每个服务器具有相应的库与表，只是表中数据集合不同。 水平分库分表能够有效的缓解单机和单库的性能瓶颈和压力，突破IO、连接数、硬件资源等的瓶颈。
**水平分库分表切分规则**
- RANGE
从0到10000一个表，10001到20000一个表；
- HASH取模
一个商场系统，一般都是将用户，订单作为主表，然后将和它们相关的作为附表，这样不会造成跨库事务之类的问题。 取用户id，然后hash取模，分配到不同的数据库上。
- 地理区域
比如按照华东，华南，华北这样来区分业务，七牛云应该就是如此。
- 时间
按照时间切分，就是将6个月前，甚至一年前的数据切出去放到另外的一张表，因为随着时间流逝，这些表的数据 被查询的概率变小，所以没必要和“热数据”放在一起，这个也是“冷热数据分离”。

#### 读写分离
随着业务的不断发展，用户数量和并发量不断上升。这时如果仅靠单个数据库实例来支撑所有访问压力,几乎是在 自寻死路 。以产品库为例，可能库中包含了几万种商品，并且每天新增几十种，而产品库每天的访问了可能有几亿甚至几十亿次。数据库读的压力太大，单台mysql实例扛不住，此时大部分 Mysql DBA 就会将数据库设置成 读写分离状态 。也就是一个 Master 节点(主库)对应多个 Salve 节点(从库)。可以将slave节点的数据理解为master节点数据的全量备份。slave服务器通过 master得 binary log进行同步

### 分库分表后面临的问题有哪些?

#### 基本的增删改查
对于开发人员而言，虽然分库分表的，但是其还是希望能和单库单表那样的去操作数据库。例如我们要批量插入四条用户记录，并且希望根据用户的id字段，确定这条记录插入哪个库的哪张表。例如1号记录插入user1表，2号记录插入user2表，3号记录插入user3表，4号记录插入user0表，以此类推。sql如下所示：
```sql
insert into user(id,name) values (1,”tianshouzhi”),(2,”huhuamin”), (3,”wanghanao”),(4,”luyang”)
```
这样的sql明显是无法执行的，因为我们已经对库和表进行了拆分,这种sql语法只能操作mysql的单个库和单个表。所以必须将sql改成4条如下所示，然后分别到每个库上去执行。
```sql
insert into user0(id,name) values (4,”luyang”)
insert into user1(id,name) values (1,”tianshouzhi”)
insert into user2(id,name) values (2,”huhuamin”)
insert into user3(id,name) values (3,”wanghanao”)
```
具体流程可以用下图进行描述：
![中间件](/csbook/img/db-middleware.jpg)

解释如下：

sql解析：首先对sql进行解析，得到需要插入的四条记录的id字段的值分别为1,2,3,4

sql路由：sql路由包括库路由和表路由。库路由用于确定这条记录应该插入哪个库，表路由用于确定这条记录应该插入哪个表。

sql改写：因为一条记录只能插入到一个库中，而上述批量插入的语法将会在 每个库中都插入四条记录，明显是不合适的，因此需要对sql进行改写，每个库只插入一条记录。

sql执行：一条sql经过改写后变成了多条sql，为了提升效率应该并发的到不同的库上去执行，而不是按照顺序逐一执行

结果集合并：每个sql执行之后，都会有一个执行结果，我们需要对分库分表的结果集进行合并，从而得到一个完整的结果。

#### 分布式id
在分库分表后，我们不能再使用mysql的自增主键。因为在插入记录的时候，不同的库生成的记录的自增id可能会出现冲突(基本上肯定会是一样的)。因此需要有一个全局的id生成器。目前分布式id有很多种方案，其中一个比较轻量级的方案是twitter的snowflake算法。

#### 分布式事务
分布式事务是分库分表绕不过去的一个坎，因为涉及到了同时更新多个分片数据。例如上面的批量插入记录到四个不同的库，如何保证要么同时成功，要么同时失败。关于分布式事务，mysql支持XA事务，但是效率较低。柔性事务是目前比较主流的方案，柔性事务包括：最大努力通知型、可靠消息最终一致性方案以及TCC两阶段提交。但是无论XA事务还是柔性事务，实现起来都是非常复杂的。

- 蚂蚁金服分布式事务解决方案: https://github.com/seata/seata

#### 动态扩容
动态扩容指的是增加分库分表的数量。例如原来的user表拆分到2个库的四张表上。现在我们希望将分库的数量变为4个，分表的数量变为8个。这种情况下一般要伴随着数据迁移。例如在4张表的情况下，id为7的记录，7%4=3，因此这条记录位于user3这张表上。但是现在分表的数量变为了8个，而7%8=0，而user0这张表上根本就没有id=7的这条记录，因此如果不进行数据迁移的话，就会出现记录找不到的情况。本教程后面将会介绍一种在动态扩容时不需要进行数据迁移的方案。

#### group by 

#### order by 

#### 跨库 join
分库分表后表之间的关联操作将受到限制，我们无法join位于不同分库的表，也无法join分表粒度不同的表， 结果原本一次查询能够完成的业务，可能需要多次查询才能完成。 粗略的解决方法： 
全局表：基础数据，所有库都拷贝一份。 
字段冗余：这样有些字段就不用join去查询了。 
系统层组装：分别查询出所有，然后组装起来，较复杂。

#### 分库分表产品方案
- MySQL Proxy
- MySQL Fabric : 官方产品,支持java,php,python
- Cobar: Alibaba产品
- Atlas : 360产品 https://github.com/Qihoo360/Atlas
- Bitess : Youtube产品
- Heisenbery : 百度产品
- mycat : https://github.com/MyCATApache/Mycat-Server