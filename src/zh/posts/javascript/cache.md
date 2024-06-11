---
title: 缓存(cache)
icon: edit
date: 2024-06-11
category:
  - javascript
tag:
    - cache
---

# 缓存
::: info 概述
在前端开发中，Cookies、LocalStorage 和 SessionStorage 是三种常用的客户端存储机制，
它们用于在用户浏览器中存储数据。每种机制有不同的特性和用途，以下是它们的详细介绍：
:::

## Cookies

### 特点
1. **存储数据**：通常用于存储少量数据（每个 Cookie 最大 4KB）。
2. **有效期**：可以设置过期时间。如果未设置过期时间，Cookie 在浏览器关闭时失效。
3. **数据共享**：每次 HTTP 请求都会将所有相关的 Cookies 发送到服务器，因此可以在客户端和服务器之间共享数据。
4. **安全性**：可以设置 HttpOnly 和 Secure 属性，增加安全性。HttpOnly 阻止客户端脚本访问 Cookie，Secure 确保 Cookie 只在 HTTPS 协议下传输。

### 用途
1. 保存用户登录状态。
2. 记录用户偏好和设置。
3. 跟踪用户会话。

### 示例
``` javascript
// 设置一个 Cookie
document.cookie = "username=John Doe; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";

// 读取所有 Cookie
console.log(document.cookie);

// 删除一个 Cookie
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
```


## LocalStorage

### 特点
1. **存储数据**：用于存储大量数据（通常限制为 5-10MB）。
2. **有效期**：数据持久存储，除非主动删除，否则数据不会过期，即使浏览器关闭也不会丢失。
3. **数据共享**：只能在同源的所有页面间共享数据（同一协议、主机和端口）。

### 用途
1. 保存用户的长时间数据，如用户设置、主题偏好等。
2. 缓存大量数据，减少服务器请求。

### 示例
``` javascript
// 设置数据
localStorage.setItem("username", "John Doe");

// 读取数据
const username = localStorage.getItem("username");
console.log(username);

// 删除数据
localStorage.removeItem("username");

// 清除所有数据
localStorage.clear();

```


## SessionStorage

### 特点
1. **存储数据**：用于存储少量数据（通常限制为 5-10MB）。
2. **有效期**：数据仅在会话期间有效，浏览器关闭后数据丢失。
3. **数据共享**：只能在同一个窗口或标签页中共享数据，不同窗口或标签页间不能共享。

### 用途
1. 临时存储会话数据，如表单数据、临时状态等。
2. 不需要在页面刷新或导航时保留的数据。

### 示例
``` javascript
// 设置数据
sessionStorage.setItem("username", "John Doe");

// 读取数据
const username = sessionStorage.getItem("username");
console.log(username);

// 删除数据
sessionStorage.removeItem("username");

// 清除所有数据
sessionStorage.clear();


```
