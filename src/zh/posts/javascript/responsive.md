---
title: 响应式设计
icon: edit
date: 2024-06-11
category:
  - javascript
tag:
    - design
---

# 响应式设计(Responsive Design)
你可以使用 document.body.clientWidth / 375 * 16 来根据设备的实际宽度动态计算字体大小。这种方法特别适用于移动设备页面，以 375 像素作为基准宽度（例如 iPhone 6/7/8 的屏幕宽度），然后根据实际的设备宽度动态调整字体大小。

## 实例代码
``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Font Size</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    .content {
      padding: 20px;
    }
  </style>
</head>
<body>
  <div class="content">
    <h1>这是一个标题</h1>
    <p>这是一些文本内容，根据视口宽度自动调整字体大小。</p>
  </div>

  <script>
    function adjustFontSize() {
      const baseWidth = 375;
      const baseFontSize = 16; // 基准字体大小为 16px
      const currentWidth = document.body.clientWidth;
      const fontSize = (currentWidth / baseWidth) * baseFontSize;
      document.documentElement.style.fontSize = fontSize + 'px';
    }

    // 初次加载时调用
    adjustFontSize();

    // 监听窗口大小变化事件
    window.addEventListener('resize', adjustFontSize);
  </script>
</body>
</html>

```

## 解释
**基准宽度**： baseWidth 设置为 375 像素，这是一个常见的移动设备宽度（如 iPhone 6/7/8）。
**基准字体大小**： baseFontSize 设置为 16 像素，这是基准设备下的字体大小。
**计算当前设备的字体大小**： 通过 currentWidth / baseWidth * baseFontSize 计算当前设备的字体大小。
**设置字体大小**： 将计算出的字体大小应用到 document.documentElement.style.fontSize，从而全局调整字体大小。
**响应窗口大小变化**： 使用 window.addEventListener('resize', adjustFontSize) 监听窗口大小变化，每当窗口大小改变时，重新计算字体大小。

## 效果
这样可以确保你的页面在不同设备上看起来都合适，字体大小会根据设备的实际宽度动态调整。