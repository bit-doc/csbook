## Input & Output

### 概念

输入是系统接收的信号或数据，输出是系统发送的信号或数据.
I/O设备是人类（或其他系统）用于与计算机通信的硬件部件。
**何向 CPU/内存组合传输的信息，例如通过读取磁盘驱动器的数据，都被视为I/O**
输入设备将信息发送到计算机系统进行处理，并且输出设备复制或显示该处理的结果。输入设备只允许向计算机输入数据，输出设备仅接收来自其他设备的数据输出。

大多数设备只是输入设备或输出设备，因为它们只能接受来自用户的数据输入或计算机生成的输出数据。但是，某些设备可以接受输入和显示输出，它们称为I/O 设备（输入/输出设备）。

例如，键盘发送电气信号，这些信号由计算机接收为输入。然后，这些信号由计算机解释，并在监视器上显示为文本或图像或输出。在图像的下半部分，计算机向打印机发送或输出数据，打印机将数据打印到一张纸上，也被视为输出。

### 设备
**Input Device**
将用户输入的数据传递给计算机
输入设备可以将数据发送到其他设备，但不能从其他设备接收数据。输入设备的示例包括以下内容。
- 键盘和鼠标- 接受用户的输入，并将该数据（输入）发送到计算机。他们不能接受或复制来自计算机的信息（输出）。
- 麦克风- 接收输入源生成的声音，并将该声音发送到计算机。
- 网络摄像头 - 接收由指向（输入）的任何图像生成的图像，并将这些图像发送到计算机。

**Output Device**
将计算机的输出传递给显示器等设备
输出设备可以从其他设备接收数据，并生成该数据的输出，但不能将数据发送到其他设备。输出设备的示例包括以下内容。
- 监视器- 从计算机（输出）接收数据，将该信息显示为文本和图像供用户查看。它不能接受来- 自用户的数据，并且将数据发送到其他设备。
- 投影仪- 从计算机（输出）接收数据，将该信息作为文本和图像显示到表面上，如墙壁或屏幕。它不能接受来自用户的数据，并且将数据发送到其他设备。
- 扬声器- 从计算机接收声音数据，并播放供用户听到的声音。它不能接受用户生成的声音，并且无法将该声音发送到其他设备。

**Input/Output Device**
输入/输出设备可以从用户或其他设备（输入）接收数据，并将数据发送到其他设备（输出）。输入/输出设备的示例包括：
- CD-RW驱动器和 DVD-RW 驱动器- 从计算机接收数据（输入），以复制到可写 CD 或 DVD 上。此外，驱动器还将 CD 或 DVD（输出）中包含的数据发送到计算机。
- USB 闪存驱动器- 从计算机接收或保存数据（输入）。此外，驱动器将数据发送到计算机或其他设备（输出）。

### I/O工作原理


### 概念

**Bus**
Bus是连接计算机所有设备的线路,所有的设备连接其他设备通过总线通信,常见的输入输出设备连接总线通信的方式为Controller:
![Bus](/csbook/img/bus.png)

**DeviceController**

**I/O Channel**
![Chanle](/csbook/img/Channel.png)

**Standard Input**
- keyboard

**Standard Output**
- monitor

**Device**
A piece of equipment that is electronically connected to the memory so that data can be transferred between the memory and the device.

**extraction**
Aka reading or getting data from an input device.

**escape code**
A code directing an output device to do something.

**insertion**
Aka writing or sending data to an output device.

**Channel I/O**



### 编程语言实现