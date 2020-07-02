---
title: Storing text in binary
---
export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );

Computers store more than <Highlight color="#25c2a0">just numbers in binary</Highlight>. But <Highlight color="#25c2a0">how can binary numbers represent non-numbers</Highlight> such as letters and symbols?

As it turns out, all it requires is a bit of human cooperation.  <Highlight color="#25c2a0">We must agree on "encodings", mappings from a character to a binary number</Highlight>.

**A simple encoding**
For example, what if we wanted to store the following symbols in binary?
☮️❤️😀
We can invent this simple encoding:
```
Binary	Symbol
01	☮️
10	❤️
11	😀
```

Let's call it the HPE encoding. It helps for encodings to have names, so that programmers know they're using the same encoding.

If a computer program needs to store the ❤️ symbol in computer memory, it can store 10 instead. When the program needs to display 10 to the user, it just needs to remember the HPE encoding and display ❤️ instead.

Computer programs and files often need to store multiple characters, which they can do by stringing each character's encoding together.

A program could write a file called "msg.hpe" with this data:
010111111010

A program on another computer that understands the HPE encoding can then open "msg.hpe" and display the sequence of symbols.

The HPE encoding only uses 2 bits, so that limits how many symbols it can represent.
2bit * 2 = 4

However, with more bits of information, an encoding can represent enough letters for computers to store messages, documents, and webpages.

**ASCII encoding**
ASCII was one of the first standardized encodings. It was invented back in the 1960s when telegraphy was the primary form of long-distance communication, but is still in use today on modern computing systems. 
```
Dec  = Decimal Value
Char = Character

'5' has the int value 53
if we write '5'-'0' it evaluates to 53-48, or the int 5
if we write char c = 'B'+32; then c stores 'b'


Dec  Char                           Dec  Char     Dec  Char     Dec  Char
---------                           ---------     ---------     ----------
  0  NUL (null)                      32  SPACE     64  @         96  `
  1  SOH (start of heading)          33  !         65  A         97  a
  2  STX (start of text)             34  "         66  B         98  b
  3  ETX (end of text)               35  #         67  C         99  c
  4  EOT (end of transmission)       36  $         68  D        100  d
  5  ENQ (enquiry)                   37  %         69  E        101  e
  6  ACK (acknowledge)               38  &         70  F        102  f
  7  BEL (bell)                      39  '         71  G        103  g
  8  BS  (backspace)                 40  (         72  H        104  h
  9  TAB (horizontal tab)            41  )         73  I        105  i
 10  LF  (NL line feed, new line)    42  *         74  J        106  j
 11  VT  (vertical tab)              43  +         75  K        107  k
 12  FF  (NP form feed, new page)    44  ,         76  L        108  l
 13  CR  (carriage return)           45  -         77  M        109  m
 14  SO  (shift out)                 46  .         78  N        110  n
 15  SI  (shift in)                  47  /         79  O        111  o
 16  DLE (data link escape)          48  0         80  P        112  p
 17  DC1 (device control 1)          49  1         81  Q        113  q
 18  DC2 (device control 2)          50  2         82  R        114  r
 19  DC3 (device control 3)          51  3         83  S        115  s
 20  DC4 (device control 4)          52  4         84  T        116  t
 21  NAK (negative acknowledge)      53  5         85  U        117  u
 22  SYN (synchronous idle)          54  6         86  V        118  v
 23  ETB (end of trans. block)       55  7         87  W        119  w
 24  CAN (cancel)                    56  8         88  X        120  x
 25  EM  (end of medium)             57  9         89  Y        121  y
 26  SUB (substitute)                58  :         90  Z        122  z
 27  ESC (escape)                    59  ;         91  [        123  {
 28  FS  (file separator)            60  <         92  \        124  |
 29  GS  (group separator)           61  =         93  ]        125  }
 30  RS  (record separator)          62  >         94  ^        126  ~
 31  US  (unit separator)            63  ?         95  _        127  DEL
```
Each ASCII character is encoded in binary using 7 bits. In the chart above, the column heading indicates the first 3 bits and the row heading indicates the final 4 bits. The very first character is "NUL", encoded as 0000000.

The first 32 codes represent "control characters," characters which cause some effect besides printing a letter. "BEL" (encoded in binary as 0000111) caused an audible bell or beep. "ENQ" (encoded as 0000101) represented an enquiry, a request for the receiving station to identify themselves.

The control characters were originally designed for teleprinters and telegraphy, but many have been re-purposed for modern computers and the Internet—especially "CR" and "LF". "CR" (0001101) represented a "carriage return" on teleprinters, moving the printing head to the start of the line. "LF" (0001010) represented a "line feed", moving the printing head down one line. Modern Internet protocols, such as HTTP, FTP, and SMTP, use a combination of "CR" + "LF" to represent the end of lines.

The remaining 96 ASCII characters look much more familiar.
Here are the first 8 uppercase letters:

```
Binary	Character
1000001	A
1000010	B
1000011	C
1000100	D
1000101	E
1000110	F
1000111	G
1001000	H
```
Following the ASCII standard, we can encode a four-letter message into binary:
1000011 1001000 1000101 1000110 = CHEF

There are several problems with the ASCII encoding, however.
The first big problem is that ASCII only includes letters from the English alphabet and a limited set of symbols.

A language that uses less than 128 characters could come up with their own version of ASCII to encode text in just their language, but what about a text file with characters from multiple languages? ASCII couldn't encode a string like: "Hello, José, would you care for Glühwein? It costs 10 €".

And what about languages with thousands of logograms? ASCII could not encode enough logograms to cover a Chinese sentence like "我的氣墊船滿是鱔魚".

The other problem with the ASCII encoding is that it uses 7 bits to represent each character, whereas computers typically store information in bytes—units of 8 bits—and programmers don't like to waste memory.

When the earliest computers first started using ASCII to encode characters, different computers would come up with various ways to utilize the final bit. For example, HP computers used the eighth bit to represent characters used in European countries (e.g. "£" and "Ü"), TRS-80 computers used the bit for colored graphics, and Atari computers used the bit for inverted white-on-black versions of the first 128 characters. 

The result? An "ASCII" file created in one application might look like gobbledy gook when opened in another "ASCII"-compatible application.

Computers needed a new encoding, an encoding based on 8-bit bytes that could represent all the languages of the world.

**Unicode encoding**

But first, how many characters do you even need to represent the world's languages? Which characters are basically the same across languages, even if they have different sounds?

In 1987, a group of computer engineers attempted to answer those questions. They eventually came up with Unicode, a universal character set which assigns each a "code point" (a hexadecimal number) and a name to each character. 

For example, the character "ą" is assigned to "U+0105" and named "Latin Small Letter A with Ogonek". There's a character that looks like "ą" in 13 languages, such as Polish and Lithuanian. Thus, according to Unicode, the "ą" in the Polish word "robią" and the "ą" in the Lithuanian word "aslą" are both the same character. Unicode saves space by unifying characters across languages.

But there are still quite a few characters to encode. The Unicode character set started with 7,129 named characters in 1991 and has grown to 137,929 named characters in 2019. The majority of those characters describe logograms from Chinese, Japanese, and Korean, such as "U+6728" which refers to "木". It also includes over 1,200 emoji symbols ("U+1F389" = "🎉"). 

<Highlight color="#25c2a0">Unicode is a character set, but it is not an encoding. Fortunately, another group of engineers tackled the problem of efficiently encoding Unicode into binary.</Highlight>

<Highlight color="#25c2a0">[unicode Official Website](https://home.unicode.org/)</Highlight>

**UTF-8 encoding**
In 1992, computer scientists invented UTF-8, an encoding that is compatible with ASCII encoding but also solves its problems.

<Highlight color="#25c2a0">UTF-8 can describe every character from the Unicode standard using either 1, 2, 3, or 4 bytes.</Highlight>

When a computer program is reading a UTF-8 text file, it knows how many bytes represent the next character based on how many 1 bits it finds at the beginning of the byte.

```
Number of bytes	Byte 1	Byte 2	Byte 3	Byte 4
1	0xxxxxxx			
2	110xxxxx	10xxxxxx		
3	1110xxxx	10xxxxxx	10xxxxxx	
4	11110xxx	10xxxxxx	10xxxxxx	10xxxxxx
```
If there are no 1 bits in the prefix (if the first bit is a 0), that indicates a character represented by a single byte. The remaining 7 bits of the byte are used to represent the original 128 ASCII characters. That means a sequence of 8-bit ASCII characters is also a valid UTF-8 sequence.

Two bytes beginning with 110 are used to encode the rest of the characters from Latin-script languages (e.g. Spanish, German) plus other languages such as Greek, Hebrew, and Arabic. Three bytes starting with 1110 encode most of the characters for Asian languages (e.g. Chinese, Japanese, Korean). Four bytes starting with 11110 encode everything else, from rarely used historical scripts to the increasingly commonly used emoji symbols.

According to the UTF-8 standard, how many characters are represented by these 8 bytes?
```
01001001 11110000 10011111 10010010 10011001 11100010 10010011 10001010
```

<Highlight color="#25c2a0">Most modern programming languages have built-in support for UTF-8</Highlight>, so most programmers never need to know exactly how to convert from characters to binary.

**Byte Order Mark(BOM)**
[The byte order mark (BOM)](https://en.wikipedia.org/wiki/Byte_order_mark) is a Unicode character, U+FEFF that appears as a magic number at the start of a text stream and can signal several things to a program consuming the text
- The byte order, or endianness, of the text stream;
- The fact that the text stream’s encoding is Unicode, to a high level of confidence;
- Which Unicode encoding the text stream is encoded as.
The BOM is different for UTF-8, UTF-16 and UTF-32 encoded text


### references
- https://www.khanacademy.org/computing/computers-and-the-internet/xcae6f4a7ff015e7d:digital-information
- https://www.khanacademy.org/computing/computers-and-the-internet/xcae6f4a7ff015e7d:digital-information/xcae6f4a7ff015e7d:storing-text-in-binary/a/storing-text-in-binary
- http://www.steves-internet-guide.com/guide-data-character-encoding/
