## 数据结构和算法

### 数据结构
数据结构 简单的理解就是数据之间的关系, 

**数据结构的分类**

#### 逻辑结构
是指数据对象中数据元素之间的相互关系
    
**集合结构**
集合结构中的数据元素除了同属于一个集合外，它们之间没有其他关系。各个数据元素是“平等”的，它们的共同属性是“同属于一个集合”
![set](/csbook/img/set.svg)

**线性结构 (linear structure)**

线性结构中的数据元素之间是一对一的关系（如图1-5-2所示）
![set](/csbook/img/linear.jpg)

**树形结构**

树形结构中的数据元素之间存在一种一对多的层次关系
![set](/csbook/img/tree.png)

**图形结构**

图形结构的数据元素是多对多的关系
![set](/csbook/img/graph.png)

#### 物理结构
数据的逻辑结构在计算机中的存储形式.如何把数据元素存储到计算机的存储器中

**顺序存储结构**
是把数据元素存放在地址连续的存储单元里，其数据间的逻辑关系和物理关系是一致的.这种存储结构其实很简单，说白了，就是排队占位。大家都按顺序排好，每个人占一小段空间，大家谁也别插谁的队。
- 数组
    - 如果建立一个9个整型的数组,申请内存时按照单个元素所占位置的大小乘以9

**链式存储结构**
顺序存储结构中的元素时刻都在变化,数组的增删改查操作会不停的影响存储,所以,顺序存储并不十分科学. 
链式存储结构是把数据元素存放在任意的存储单元里，这组存储单元可以是连续的，也可以是不连续的。数据元素的存储关系并不能反映其逻辑关系，因此需要用一个指针存放数据元素的地址，这样通过地址就可以找到相关联数据元素的位置
链式存储灵活多了，数据存在哪里不重要，只要有一个指针存放了相应的地址就能找到它了

#### 抽象数据类型 Abstract Data Type
是指一个数学模型及定义在该模型上的一组操作,抽象数据类型的定义仅取决于它的一组逻辑特性，而与其在计算机内部如何表示和实现无关

```
ADT 
    抽象数据结构类型名
Data
    数据元素之间逻辑关系的定义
Operation
    操作1
        初始条件
        操作结果描述
    操作2
endADT
```

#### 常见的数据结构及其应用场景
**线性表**
- 单向链表
- 双向链表

**栈**
**队列**
****

### 算法
算法时问题解决得思路以及具体实现

#### 特征
- 有输入和输出
- 有穷性
- 确定性
- 可行性

#### 算法时间复杂度

#### 算法空间复杂度

#### 常见的算法及其应用场景

- 分布式系统算法
    - 雪花算法(snowflake), 全局唯一ID生成


### 数据结构和算法之间得关系