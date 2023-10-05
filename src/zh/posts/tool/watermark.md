---
icon: tag
date: 2022-12-10
title: 水印效果
category:
  - 实用工具
tag:
  - watermark
---

# 水印效果

::: info 问题描述
水印封装工具
:::

### 演示

<watermark/>

### 代码

::: details 点击查看代码

```js
/**  水印添加方法  */
const setWatermark = (str1, str2) => {
    const id = '1.23452384164.123412415'
 
    if (document.getElementById(id) !== null) {
      document.body.removeChild(document.getElementById(id))
    }
 
    const can = document.createElement('canvas')
    // 设置canvas画布大小
    can.width = 360
    can.height = 210
 
    const cans = can.getContext('2d')
    cans.rotate(-25 * Math.PI / 180) // 水印旋转角度
    cans.font = '1.2rem Vedana'
    cans.fillStyle = '#666'
    cans.textAlign = 'center'
    cans.textBaseline = 'Middle'
    cans.fillText(str1, can.width / 2, can.height) // 水印在画布的位置x，y轴
    cans.fillText(str2, can.width / 2, can.height + 25)
 
    const div = document.createElement('div')
    div.id = id
    div.style.pointerEvents = 'none'
    div.style.top = '20px'
    div.style.left = '0px'
    div.style.opacity = '0.2'
    div.style.position = 'fixed'
    div.style.zIndex = '100000'
    div.style.width = document.documentElement.clientWidth + 'px'
    div.style.height = document.documentElement.clientHeight + 'px'
    div.style.background = 'url(' + can.toDataURL('image/png') + ') left top repeat'
    document.body.appendChild(div)
    return id
  }

  // 添加水印方法
  export const setWaterMark = (str1, str2) => {
    let id = setWatermark(str1, str2)
    if (document.getElementById(id) === null) {
      id = setWatermark(str1, str2)
    }
  }
 
  // 移除水印方法
  export const removeWatermark = () => {
    const id = '1.23452384164.123412415'
    if (document.getElementById(id) !== null) {
      document.body.removeChild(document.getElementById(id))
    }
  }
```

:::

