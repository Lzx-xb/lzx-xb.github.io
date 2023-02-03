---
title: 文本省略符
icon: edit
date: 2022-12-10
category:
  - CSS
tag:
    - clamp
    - css
    - 文本省略符
---

# 文本省略符
::: info 问题描述
描述：在制作卡片过程中，title，description 有可能会超出边界，所以需要将超出边界部分做省略处理，这样可以维持设计的美观.
:::

## 代码演示

<cssclamp/>


::: details 查看代码
```vue
<span class="clamp">介绍：lzx的博客，lzx的博客，lzx的博客，lzx的博客，lzx的博客，lzx的博客，lzx的博客，lzx的博客，lzx的博客，lzx的博客，</span>

<style>
    .clamp{
        overflow: hidden;
        -webkit-line-clamp: 2;//设置行数;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
    }
</style>

```
:::