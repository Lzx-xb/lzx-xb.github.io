---
icon: tag
date: 2023-02-15
title: vue3_Lifecycle Hooks
category:
  - vue
tag:
  - Lifecycle Hooks
---


# 生命周期钩子

+ vue3.0中可以继续使用vue2.x中的生命周期钩子，但有两个被更名：  
  beforeDestroy 改名为 beforeUnmount  
  destroyed 改名为 unmounted

+ vue3.0也提供了Composition API 形式的生命周期钩子，与vue2.x中钩子对应关系如下：  
&emsp;&emsp;&emsp;&emsp;beforeCreate&ensp;&ensp;&ensp;= => setup()  
&emsp;&emsp;&emsp;&emsp;created&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;= => setup()  
&emsp;&emsp;&emsp;&emsp;beforeMount&ensp;&ensp;&ensp;= => onBeforeMount()  
&emsp;&emsp;&emsp;&emsp;mounted&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; = => onMounted()    
&emsp;&emsp;&emsp;&emsp;beforeUpdate&ensp;&ensp;= => onBeforeUpdate()  
&emsp;&emsp;&emsp;&emsp;updated&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; = => onUpdated()  
&emsp;&emsp;&emsp;&emsp;beforeUnmount &ensp;= => onBeforeUnmount()  
&emsp;&emsp;&emsp;&emsp;unmounted  &ensp;&ensp;&ensp;&ensp;  ==> onUnmounted()  