(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{119:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"Highlight",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(6),o=(n(0),n(146)),i={title:"Storing text in binary"},c={id:"dataStorage/StoringTextInBinary",isDocsHomePage:!1,title:"Storing text in binary",description:"export const Highlight = ({children, color}) => ( <span style={{",source:"@site/docs/dataStorage/StoringTextInBinary.md",permalink:"/csbook/docs/dataStorage/StoringTextInBinary",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/dataStorage/StoringTextInBinary.md",sidebar:"someSidebar",previous:{title:"index",permalink:"/csbook/docs/api/index"},next:{title:"Binary",permalink:"/csbook/docs/dataStorage/Binary"}},s=[{value:"references",id:"references",children:[]}],l=function(e){var t=e.children,n=e.color;return Object(o.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},h={rightToc:s,Highlight:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Computers store more than ",Object(o.b)(l,{color:"#25c2a0",mdxType:"Highlight"},"just numbers in binary"),". But ",Object(o.b)(l,{color:"#25c2a0",mdxType:"Highlight"},"how can binary numbers represent non-numbers")," such as letters and symbols?"),Object(o.b)("p",null,"As it turns out, all it requires is a bit of human cooperation.  ",Object(o.b)(l,{color:"#25c2a0",mdxType:"Highlight"},'We must agree on "encodings", mappings from a character to a binary number'),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"A simple encoding"),"\nFor example, what if we wanted to store the following symbols in binary?\n\u262e\ufe0f\u2764\ufe0f\ud83d\ude00\nWe can invent this simple encoding:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"Binary  Symbol\n01  \u262e\ufe0f\n10  \u2764\ufe0f\n11  \ud83d\ude00\n")),Object(o.b)("p",null,"Let's call it the HPE encoding. It helps for encodings to have names, so that programmers know they're using the same encoding."),Object(o.b)("p",null,"If a computer program needs to store the \u2764\ufe0f symbol in computer memory, it can store 10 instead. When the program needs to display 10 to the user, it just needs to remember the HPE encoding and display \u2764\ufe0f instead."),Object(o.b)("p",null,"Computer programs and files often need to store multiple characters, which they can do by stringing each character's encoding together."),Object(o.b)("p",null,'A program could write a file called "msg.hpe" with this data:\n010111111010'),Object(o.b)("p",null,'A program on another computer that understands the HPE encoding can then open "msg.hpe" and display the sequence of symbols.'),Object(o.b)("p",null,"The HPE encoding only uses 2 bits, so that limits how many symbols it can represent.\n2bit * 2 = 4"),Object(o.b)("p",null,"However, with more bits of information, an encoding can represent enough letters for computers to store messages, documents, and webpages."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"ASCII encoding"),"\nASCII was one of the first standardized encodings. It was invented back in the 1960s when telegraphy was the primary form of long-distance communication, but is still in use today on modern computing systems. "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"Dec  = Decimal Value\nChar = Character\n\n'5' has the int value 53\nif we write '5'-'0' it evaluates to 53-48, or the int 5\nif we write char c = 'B'+32; then c stores 'b'\n\n\nDec  Char                           Dec  Char     Dec  Char     Dec  Char\n---------                           ---------     ---------     ----------\n  0  NUL (null)                      32  SPACE     64  @         96  `\n  1  SOH (start of heading)          33  !         65  A         97  a\n  2  STX (start of text)             34  \"         66  B         98  b\n  3  ETX (end of text)               35  #         67  C         99  c\n  4  EOT (end of transmission)       36  $         68  D        100  d\n  5  ENQ (enquiry)                   37  %         69  E        101  e\n  6  ACK (acknowledge)               38  &         70  F        102  f\n  7  BEL (bell)                      39  '         71  G        103  g\n  8  BS  (backspace)                 40  (         72  H        104  h\n  9  TAB (horizontal tab)            41  )         73  I        105  i\n 10  LF  (NL line feed, new line)    42  *         74  J        106  j\n 11  VT  (vertical tab)              43  +         75  K        107  k\n 12  FF  (NP form feed, new page)    44  ,         76  L        108  l\n 13  CR  (carriage return)           45  -         77  M        109  m\n 14  SO  (shift out)                 46  .         78  N        110  n\n 15  SI  (shift in)                  47  /         79  O        111  o\n 16  DLE (data link escape)          48  0         80  P        112  p\n 17  DC1 (device control 1)          49  1         81  Q        113  q\n 18  DC2 (device control 2)          50  2         82  R        114  r\n 19  DC3 (device control 3)          51  3         83  S        115  s\n 20  DC4 (device control 4)          52  4         84  T        116  t\n 21  NAK (negative acknowledge)      53  5         85  U        117  u\n 22  SYN (synchronous idle)          54  6         86  V        118  v\n 23  ETB (end of trans. block)       55  7         87  W        119  w\n 24  CAN (cancel)                    56  8         88  X        120  x\n 25  EM  (end of medium)             57  9         89  Y        121  y\n 26  SUB (substitute)                58  :         90  Z        122  z\n 27  ESC (escape)                    59  ;         91  [        123  {\n 28  FS  (file separator)            60  <         92  \\        124  |\n 29  GS  (group separator)           61  =         93  ]        125  }\n 30  RS  (record separator)          62  >         94  ^        126  ~\n 31  US  (unit separator)            63  ?         95  _        127  DEL\n")),Object(o.b)("p",null,'Each ASCII character is encoded in binary using 7 bits. In the chart above, the column heading indicates the first 3 bits and the row heading indicates the final 4 bits. The very first character is "NUL", encoded as 0000000.'),Object(o.b)("p",null,'The first 32 codes represent "control characters," characters which cause some effect besides printing a letter. "BEL" (encoded in binary as 0000111) caused an audible bell or beep. "ENQ" (encoded as 0000101) represented an enquiry, a request for the receiving station to identify themselves.'),Object(o.b)("p",null,'The control characters were originally designed for teleprinters and telegraphy, but many have been re-purposed for modern computers and the Internet\u2014especially "CR" and "LF". "CR" (0001101) represented a "carriage return" on teleprinters, moving the printing head to the start of the line. "LF" (0001010) represented a "line feed", moving the printing head down one line. Modern Internet protocols, such as HTTP, FTP, and SMTP, use a combination of "CR" + "LF" to represent the end of lines.'),Object(o.b)("p",null,"The remaining 96 ASCII characters look much more familiar.\nHere are the first 8 uppercase letters:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"Binary  Character\n1000001 A\n1000010 B\n1000011 C\n1000100 D\n1000101 E\n1000110 F\n1000111 G\n1001000 H\n")),Object(o.b)("p",null,"Following the ASCII standard, we can encode a four-letter message into binary:\n1000011 1001000 1000101 1000110 = CHEF"),Object(o.b)("p",null,"There are several problems with the ASCII encoding, however.\nThe first big problem is that ASCII only includes letters from the English alphabet and a limited set of symbols."),Object(o.b)("p",null,'A language that uses less than 128 characters could come up with their own version of ASCII to encode text in just their language, but what about a text file with characters from multiple languages? ASCII couldn\'t encode a string like: "Hello, Jos\xe9, would you care for Gl\xfchwein? It costs 10 \u20ac".'),Object(o.b)("p",null,'And what about languages with thousands of logograms? ASCII could not encode enough logograms to cover a Chinese sentence like "\u6211\u7684\u6c23\u588a\u8239\u6eff\u662f\u9c54\u9b5a".'),Object(o.b)("p",null,"The other problem with the ASCII encoding is that it uses 7 bits to represent each character, whereas computers typically store information in bytes\u2014units of 8 bits\u2014and programmers don't like to waste memory."),Object(o.b)("p",null,'When the earliest computers first started using ASCII to encode characters, different computers would come up with various ways to utilize the final bit. For example, HP computers used the eighth bit to represent characters used in European countries (e.g. "\xa3" and "\xdc"), TRS-80 computers used the bit for colored graphics, and Atari computers used the bit for inverted white-on-black versions of the first 128 characters. '),Object(o.b)("p",null,'The result? An "ASCII" file created in one application might look like gobbledy gook when opened in another "ASCII"-compatible application.'),Object(o.b)("p",null,"Computers needed a new encoding, an encoding based on 8-bit bytes that could represent all the languages of the world."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Unicode encoding")),Object(o.b)("p",null,"But first, how many characters do you even need to represent the world's languages? Which characters are basically the same across languages, even if they have different sounds?"),Object(o.b)("p",null,'In 1987, a group of computer engineers attempted to answer those questions. They eventually came up with Unicode, a universal character set which assigns each a "code point" (a hexadecimal number) and a name to each character. '),Object(o.b)("p",null,'For example, the character "\u0105" is assigned to "U+0105" and named "Latin Small Letter A with Ogonek". There\'s a character that looks like "\u0105" in 13 languages, such as Polish and Lithuanian. Thus, according to Unicode, the "\u0105" in the Polish word "robi\u0105" and the "\u0105" in the Lithuanian word "asl\u0105" are both the same character. Unicode saves space by unifying characters across languages.'),Object(o.b)("p",null,'But there are still quite a few characters to encode. The Unicode character set started with 7,129 named characters in 1991 and has grown to 137,929 named characters in 2019. The majority of those characters describe logograms from Chinese, Japanese, and Korean, such as "U+6728" which refers to "\u6728". It also includes over 1,200 emoji symbols ("U+1F389" = "\ud83c\udf89"). '),Object(o.b)(l,{color:"#25c2a0",mdxType:"Highlight"},"Unicode is a character set, but it is not an encoding. Fortunately, another group of engineers tackled the problem of efficiently encoding Unicode into binary."),Object(o.b)(l,{color:"#25c2a0",mdxType:"Highlight"},"[unicode Official Website](https://home.unicode.org/)"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"UTF-8 encoding"),"\nIn 1992, computer scientists invented UTF-8, an encoding that is compatible with ASCII encoding but also solves its problems."),Object(o.b)(l,{color:"#25c2a0",mdxType:"Highlight"},"UTF-8 can describe every character from the Unicode standard using either 1, 2, 3, or 4 bytes."),Object(o.b)("p",null,"When a computer program is reading a UTF-8 text file, it knows how many bytes represent the next character based on how many 1 bits it finds at the beginning of the byte."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"Number of bytes Byte 1  Byte 2  Byte 3  Byte 4\n1   0xxxxxxx            \n2   110xxxxx    10xxxxxx        \n3   1110xxxx    10xxxxxx    10xxxxxx    \n4   11110xxx    10xxxxxx    10xxxxxx    10xxxxxx\n")),Object(o.b)("p",null,"If there are no 1 bits in the prefix (if the first bit is a 0), that indicates a character represented by a single byte. The remaining 7 bits of the byte are used to represent the original 128 ASCII characters. That means a sequence of 8-bit ASCII characters is also a valid UTF-8 sequence."),Object(o.b)("p",null,"Two bytes beginning with 110 are used to encode the rest of the characters from Latin-script languages (e.g. Spanish, German) plus other languages such as Greek, Hebrew, and Arabic. Three bytes starting with 1110 encode most of the characters for Asian languages (e.g. Chinese, Japanese, Korean). Four bytes starting with 11110 encode everything else, from rarely used historical scripts to the increasingly commonly used emoji symbols."),Object(o.b)("p",null,"According to the UTF-8 standard, how many characters are represented by these 8 bytes?"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"01001001 11110000 10011111 10010010 10011001 11100010 10010011 10001010\n")),Object(o.b)(l,{color:"#25c2a0",mdxType:"Highlight"},"Most modern programming languages have built-in support for UTF-8"),", so most programmers never need to know exactly how to convert from characters to binary.",Object(o.b)("h3",{id:"references"},"references"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.khanacademy.org/computing/computers-and-the-internet/xcae6f4a7ff015e7d:digital-information/xcae6f4a7ff015e7d:storing-text-in-binary/a/storing-text-in-binary"}),"https://www.khanacademy.org/computing/computers-and-the-internet/xcae6f4a7ff015e7d:digital-information/xcae6f4a7ff015e7d:storing-text-in-binary/a/storing-text-in-binary"))))}d.isMDXComponent=!0},146:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),h=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=h(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=h(n),u=r,p=d["".concat(i,".").concat(u)]||d[u]||b[u]||o;return n?a.a.createElement(p,c(c({ref:t},l),{},{components:n})):a.a.createElement(p,c({ref:t},l))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);