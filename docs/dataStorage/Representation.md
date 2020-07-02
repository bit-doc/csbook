---
title : Data Representation
---
- Data and Computers
    - Without data, computers would be useless. 
    - different types of data, including:Numbers,Text, Audio,Images and graphics,Video. all this data is stored as binary digits.

- Binary Representations
- Representing Numeric Data
    - Representing Negative Values
        - Signed-Magnitude Representation
        - Fixed-Sized Numbers
    - Number Overflow
    - Representing Real Numbers
- Representing Text
    - The ASCII Character Set
    - The Unicode Character Set
    - Text Compression
    - Keyword Encoding
    - Run-Length Encoding
    - Huffman Encoding
- Representing Audio Information
    - Audio Formats
        - The MP3 Audio Format
- Representing Images and Graphics
    - Representing Color
    - Digitized Images and Graphics
    - Vector Representation of Graphics
- Representing Video
    - Video Codecs


### Binary

### Decimal

### Hexadecimal 

**What is Hexadecimal?**
Hexadecimal is a base 16 number system used in computing.

a big benefit of hexadecimals is that they are easy to convert to binary

In comparison, the counting we learnt at primary school is actually a base 10 number system (often called decimal or denary), and binary is base 2.

Base 16 means that each position in a hexadecimal number comprises of one of 16 options.

Hex looks odd because we don’t have 16 original number symbols that we can use to represent these 16 possible options, so we have to use both numbers and letters from the alphabet.

E.g. **We use “A” to represent ten.  We cannot use “10” to represent ten, because 1 and 0 are symbols that have already been used in our number system to represent other numbers**.

Symbols available for use in each number system:
```
Hexadecimal(base 16) Decimal(base 10) Binary(base 2)		
0	0	0
1	1	1
2	2
3	3
4	4
5	5
6	6
7	7
8	8
9	9
A
B
C
D
E
F
```
Using a base 16 number system means that **large numbers can be achieved using less positional spaces**.  Compare this to binary (base 2) which requires lots of bits (positional spaces) to create even small numbers.

```
Base 2: 255

128	64	32	16	8	4	2	1
2^9 2^8 2^74 2^6 2^5 2^4 2^3 2^2 2^1 2^0
1	1	1	1	1	1	1	1
```

```
Base 10: 255
100	10	1
2	5	5
```

```
Base 16: 255
16	1
F	F
```

**十六进制的应用场景**

- HTML/CSS颜色代码
    十六进制数字通常用于表示HTML或CSS中的颜色。
    6 位十六进制颜色代码应分三部分考虑
        - 前两位数字表示红色（最大 FF 或 255）的量
        - 接下来的两位数字表示颜色中的绿色量（最大 FF 或 255）
        - 最后两位数字表示蓝色（最大 FF 或 255）
    通过改变红色、绿色和蓝色强度，我们可以创建几乎任何颜色。
    例如，橙色可以表示为#FFA500，即（255 红色、165 绿色、0 蓝色
- MAC 地址
    媒体访问控制 （MAC） 地址是一个数字，用于唯一标识互联网上的设备。
    MAC 地址与设备内部的网络接口卡 （NIC） 相关.
    例如 D5-BE-E9-8D-44-9C
    以十六进制格式表示MAC 地址使其更易于阅读和使用。
- 程序集代码和内存转储
    十六进制是有益的 （超过二进制）， 因为
    - 它们更易于使用，使用速度更快，占用的屏幕空间更少
    - 错误不太可能，更容易跟踪/调试

## 进制转换
**Converting Binary to Decimal**
**Converting Binary to Hexadecimal**
**Converting Decimal to Binary**
**Converting Decimal to Hexadecimal**
**Converting Hexadecimal to Binary**
**Converting Hexadecimal to Decimal**
