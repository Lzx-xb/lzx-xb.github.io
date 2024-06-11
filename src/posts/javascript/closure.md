---
title: 闭包(closure)
icon: edit
date: 2024-06-11
category:
  - javascript
tag:
    - closure
---

# 闭包
::: info 概述
    闭包是 JavaScript 中一个非常重要且常用的概念。它是指在一个函数内部定义的另一个函数，
    该内部函数可以访问其外部函数的作用域（即使外部函数已经执行完毕）。
    闭包可以用来创建私有变量、避免全局变量污染、实现封装等。
:::

## 闭包的特性
1. **函数内部定义函数**：闭包是在一个函数内部定义的另一个函数。
2. **函数可以访问其外部函数的变量**：内部函数可以访问其外部函数的作用域中的变量。
3. **变量的持久化**：外部函数的变量在闭包中会被持久化，不会在外部函数执行完毕后销毁

## 闭包的应用
1. 创建私有变量
闭包可以用来创建私有变量，从而避免全局变量的污染：
``` javascript
function createCounter() {
    let count = 0;

    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment()); // 输出: 1
console.log(counter.increment()); // 输出: 2
console.log(counter.decrement()); // 输出: 1

```

2. 模拟块级作用域
``` javascript
for (var i = 0; i < 3; i++) {
    (function(i) {
        setTimeout(function() {
            console.log(i);
        }, 1000);
    })(i);
}
// 输出: 0, 1, 2

```

3. 延迟执行
``` javascript
function delayMessage(message, delay) {
    setTimeout(function() {
        console.log(message);
    }, delay);
}

delayMessage("Hello, World!", 2000); // 2 秒后输出: Hello, World!

```

## 注意事项
释放闭包主要是为了避免内存泄漏。在 JavaScript 中，闭包会持有对其外部作用域变量的引用，如果这些变量在不再需要时未被正确释放，可能会导致内存无法被回收。为了释放闭包，我们需要确保不再需要的引用被正确处理。

### 释放闭包的几种方法
1. 将闭包变量设为 `null` 或 `undefined`
当闭包中包含的引用不再需要时，可以将其设为 null 或 undefined，这样可以断开引用关系，允许垃圾回收机制回收这些内存。
``` javascript
function createClosure() {
    let someData = "important data";

    return function() {
        console.log(someData);
    };
}

let closure = createClosure();
closure(); // 输出: important data

// 释放闭包引用
closure = null;


```

2. 移除事件监听器
在事件处理中，如果使用了闭包，要确保在不再需要时移除事件监听器，这样可以避免内存泄漏。
``` javascript
function addClickListener() {
    let element = document.getElementById('myElement');
    let clickHandler = function() {
        console.log('Element clicked');
    };

    element.addEventListener('click', clickHandler);

    // 当不再需要时移除事件监听器
    element.removeEventListener('click', clickHandler);
    clickHandler = null; // 释放闭包引用
}


```
3. 使用 WeakMap 或 WeakSet
如果需要在对象之间保存一些关联数据，可以考虑使用 WeakMap 或 WeakSet，因为它们的键是弱引用，不会阻止垃圾回收。
``` javascript
const weakMap = new WeakMap();

function createClosure(obj) {
    let someData = "important data";
    weakMap.set(obj, someData);

    return function() {
        console.log(weakMap.get(obj));
    };
}

let obj = {};
let closure = createClosure(obj);
closure(); // 输出: important data

// 释放对象引用
obj = null;

```




