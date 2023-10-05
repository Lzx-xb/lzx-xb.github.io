---
icon: tag
date: 2022-12-10
pure: true
category:
  - CSS
tag:
  - 左对齐
---

# Left-aligned
::: info 问题描述
使用弹性盒布局，当最后一行不是整行时，justify-content: space-between;布局不是我们想要的结果。
:::

## 代码演示

<flexBewteen/>

## 解决办法


在卡片的父节点，增加一个伪元素:after，该方法只针对使用弹性布局，且使用space-bewteen布局方式生效  



::: details 查看代码
```css
.container::after{
    width: 30%;
    content: '';
}
```
:::
