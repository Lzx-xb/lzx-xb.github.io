---
title: WeakMap and WeakSet
icon: edit
date: 2024-06-11
category:
  - javascript
tag:
    - weekMap
---

# 图片拖动及放大缩小

::: info 概述
    `WeakMap` 和 `WeakSet` 是 ECMAScript 2015（ES6）中引入的两种新的数据结构。它们的键（对于 WeakMap）或值（对于 WeakSet）是弱引用，即如果没有其他对这些对象的引用，它们可以被垃圾回收。这对于避免内存泄漏特别有用。
:::

## WeakMap
`WeakMap` 是一个键值对的集合，其中的键必须是对象，而值可以是任意类型。当键不再被其他引用持有时，键值对会自动被垃圾回收。

### 使用方法
  1. 创建实例
      ``` javascript
      const weakMap = new WeakMap();
      ```
  2. 添加键值对
    ``` javascript
      let obj = {};
      weakMap.set(obj, 'some value');

    ```
  3. 获取值
    ``` javascript
      console.log(weakMap.get(obj)); // 输出: 'some value'
    ```

  4. 检查是否存在某个值
    ``` javascript
      console.log(weakMap.has(obj)); // 输出: true
    ```

  5. 删除键值对
    ``` javascript
      weakMap.delete(obj);
      console.log(weakMap.has(obj)); // 输出: false

    ```

### 示例
``` javascript
const weakMap = new WeakMap();
let user = { name: "John Doe" };

// 设置键值对
weakMap.set(user, "User Data");

// 获取值
console.log(weakMap.get(user)); // 输出: 'User Data'

// 检查是否存在某个键
console.log(weakMap.has(user)); // 输出: true

// 删除键值对
weakMap.delete(user);
console.log(weakMap.has(user)); // 输出: false

// 当没有其他引用时，'user' 将被垃圾回收
user = null;

```