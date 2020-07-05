---
title : 监视I/O子系统
---
## iostat:监视I/O子系统

> iostat是I/O statistics（输入/输出统计）的缩写，用来动态监视系统的磁盘操作活动。

### 命令格式
```
iostat 参数 时间 次数
```
### 功能

通过iostat方便查看CPU、网卡、tty设备、磁盘、CD-ROM 等等设备的活动情况, 负载信息。

### 命令参数
```
-C 显示CPU使用情况
-d 显示磁盘使用情况
-k 以 KB 为单位显示
-m 以 M 为单位显示
-N 显示磁盘阵列(LVM) 信息
-n 显示NFS 使用情况
-p[磁盘] 显示磁盘和分区的情况
-t 显示终端和CPU的信息
-x 显示详细信息
-V 显示版本信息
```
https://linuxtools-rst.readthedocs.io/zh_CN/latest/tool/iostat.html

