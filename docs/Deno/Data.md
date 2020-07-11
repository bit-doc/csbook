## Data

### 文本与二进制之间的转换

浏览器默认只支持UTF8文本进行encode和decode转换

- [textEncoder](https://developer.mozilla.org/zh-CN/docs/Web/API/TextEncoder) 将UTF8文本转换为字节流
    
    ```js title=textEncoder
        const encoder = new TextEncoder()
        //去utf8表中查询欧元符号,并返回十进制的缓冲区内容
        const view = encoder.encode('€')
        console.log(view);
        //输出3个字节的缓冲区, Uint8Array(3) [226, 130, 172]
        // € 符号是一个UTF8符号,可以查询到他的资料:https://www.fileformat.info/info/unicode/char/20ac/index.htm, 可见,对应的utf8的二进制为
        //11100010:10000010:10101100, 占了3个字节,其中第一个11100010转换为十进制整数就是226, 可见,textEncoder就是去UTF8表中进行查找返回
    ```

- textDecoder 将字节流转换为UTF文本
