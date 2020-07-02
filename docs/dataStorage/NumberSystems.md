---
title: Number Systems
---
- Goals
    - distinguish among categories of numbers.
    - describe positional notation.
    - convert numbers in other bases to base ten.
    - convert base-ten numbers to numbers in other bases.
    - describe the relationship between bases 2, 8, and 16.
    - explain the importance to computing of bases that are powers of 2.

- Positional Notation
Numbers are written using positional notation. 
The rightmost digit represents its value times the base to the zeroth power. The digit to the left of that one represents its value times the base to the first power. The nextdigit represents its value times the base to the second power. The next digitrepresents its value times the base to the third power, and so on. You are so familiar with positional notation that you probably don’t think about it.
We used it instinctively to calculate the number of ones in 943.

```
//x acting as the base
9 * x^2 + 4 * x^1 + 3 * x^0
```

- Binary, Octal, and Hexadecimal
``` title = Octal
  7*8^2 = 7*64 = 448 
+ 5*8^1 =5* 8  = 40 
+ 4*8^0 =4* 1  = 4
492
```

``` title=Hexadecimal
  A * 16^2 = 10 * 256 = 2560
+ B * 16^1 = 11 * 16 = 176
+ C * 16^0 = 12 * 1 = 12
2748
```