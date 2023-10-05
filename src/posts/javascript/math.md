---
title: Math()
icon: tag
date: 2023-02-08
category:
  - javascript
tag:
    - Math
---

# JavaScript中的算术

::: info 概述
JavaScript程序使用语言提供的算术操作符来操作数值，包括表示加法的 `+` ，表示减法的 `-` ，表示乘法的 `*`，表示除法的 `//`和表示取模（做除后的余数）的 `%`。ES2016 增加了取幂的 `**`。  
除了上述基本的算术操作符之外，JavaScript还通过Math对象的属性提供了一组函数和常量，以支持更复杂的数学计算。
:::

``` javascript

    Math.pow(2,53)              // => 9007199254740992 : 2的52 次方;
    Math.round(.6)              // => 1.0: 舍入到最接近的整数
    Math.cell(.6)               // => 1.0: 向上舍入到一个整数
    Math.floor(.6)              // => 0.0: 向下舍入到一个整数
    Math.abs(-5)                // => 5: 绝对值
    Math.max(x,y,z)             // 返回最大参数
    Math.min(x,y,z)             // 返回最小参数
    Math.random()               // 伪随机数x,其中 0 <= x < 1.0
    Math.PI                     // π: 圆周率
    Math.E                      // e: 自然对数的底数
    Math.sqrt(3)                // => 3**0.5: 3的平方根
    Math.pow(3,1/3)             // => 3**1/3: 3的立方根
    Math.sin(0)                 // 三角函数： 还有 Math.cos,Math.atan等
    Math.log()                  // 10的自然对数
    Math.log(100)/Math.LN10     // 以10为底100的对数
    Math.log(512)/Math.LN2      // 以2为底512的对数
    Math.exp(3)                 // Math.E 的立方


```

**ES6在Math对象上又定义了一批函数**

``` javascript

    Math.cbrt(27)               // => 3: 立方根
    Math.hypot(3,4)             // => 5: 所有参数平方和的平方根
    Math.log10(100)             // => 2: 以10为底的对数
    Math.log2(1024)             // => 10: 以2为底的对数
    Math.log1p(x)               // (1+x)的自然对数；精确到非常小的x
    Math.expm1(x)               // Math.exp(x) - 1; Math.log1p()的逆运算 
    Math.sign(x)                // 对 <, == 或 >0 的参数返回 -1, 0 或 1
    Math.imul(2,3)              // => 6: 优化的32位整数乘法
    Math.clz32(0xf)             // => 28: 32位整数中前导0的位数
    Math.trunc(3,9)             // => 3: 剪掉分数部分得到的整数
    Math.fround(x)              // 舍入到最接近的32位浮点数
    Math.sinh(x)                // 双曲线正弦，还有Math.cosh()和Math.tanh()
    Math.asinh(x)               // 双曲线的反正弦，还有Math.acosh()和Math.atanh()

```

::: warning 提示
    JavaScript中的算术在遇到上溢出，下溢出或被零除时不会发生错误。（详情在《JavaScript权威指南》 P28 )  

    JavaScript 预定义了全局常量 Infinity 和 NaN 以对应正无穷和非数值。 可通过Number 对象的属性获取。  

``` javascript
    1/0                         // => Infinity
    Number.MAX_VALUE * 2        // => Infinity
    
    Number.NaN                  // 非数值
    0/0                         // => NaN

    //ES6定义了一下Number属性
    Number.parseInt()           // 同全局parseInt()函数
    Number.parseFloat()         // 同全局parseFloat()函数
    Number.isNaN(x)              // 判断 x 是不是NaN
    Number.isFinite(x)          // 判断 x 是数值还是无穷
    Number.isInteger(x)         // 判断 x 是不是整数
    Number.isSafeInteger(x)     //
    Number.MIN_SAFE_INTEGER     // => -(2**53 - 1)
    Number.MAX_SAFE_INTEGER     // => 2**53 - 1
    Number.EPSILON              // => 2**-52: 数值与数值之间最小的差
```

非数值在JavaScript中有一个不同寻常的特性： 它与任何值比较都不相等，也不等于自己。这意味着不能通过
x === NaN 来确定某个变量x的值是NaN。

:::


