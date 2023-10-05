---
icon: tag
date: 2023-02-14
title: vue3_watch
category:
  - vue
tag:
  - watch
---

# watch

+ 与vue2.x中watch配置一致

+ 监视reactive定义的响应式数据中某个属性时： deep配置有效

::: info vue2写法
```vue
<template>
    <h1>求和：{{ sum }}</h1>
    <button @click="sum++">点我+1</button>
</tempalte>
<script>
    
    export default {
        watch: {
            //简写
            // sum(newValue, oldValue){
            //     console.log("sum变化了", newValue, oldValue);
            // }
            // 可配置属性
            sum: {
                immediate: true,    //立即监听
                deep: true,         //深度监听
                handler(newValue, oldValue){
                    console.log("sum变化了", newValue, oldValue);
                }
            }
        }
    }  
</script>
```
:::

::: info 情况一
<!-- 情况一，监视ref定义的响应式数据 -->
watch( sum, (newValue, oldValue ) => {
    console.log("sum变化了", newValue, oldValue);
},{ immediate: true })
:::

```vue
<template>
    <h1>求和：{{ sum }}</h1>
    <button @click="sum++">点我+1</button>
</tempalte>
<script>
    import { ref, watch } from "vue";
    export default {
        setup(){
            let sum = ref(0);
            //监视
            watch(sum, (newValue, oldValue) => {
                console.log("sum变化了", newVlaue, oldValue);
            })
            return {
                sum,
            }
        }
    }  
</script>
```
::: info 情况二
<!-- 情况二，监视多个ref定义的响应式数据 -->
watch( [sum, msg], (newValue, oldValue ) => {
    console.log("sum或msg变化了", newValue, oldValue);
},{ immediate: true })
```vue
<template>
    <h1>求和：{{ sum }}</h1>
    <button @click="sum++">点我+1</button>
    <br>
    <h1>消息：{{ msg }}</h1>
    <button @click="msg+='!!'">点我+1</button>
</tempalte>
<script>
    import { ref, watch } from "vue";
    export default {
        setup(){
            let sum = ref(0);
            let msg = ref("你好啊")
            //监视多个ref定义的响应式数据,newValue,oldValue也以数组形式返回。
            watch([sum, msg], (newValue, oldValue) => {
                console.log("sum或msg变化了", newVlaue, oldValue);
            },{immediate: true})
            
            return {
                sum,
                msg,
            }
        }
    }  
</script>
```
:::  

::: info 情况三，四
```vue

<!-- 情况三，监视reactive定义的响应式数据
        若watch监视的是reactive定义的响应式数据，则无法正确获得oldValue！！
        若watch监视的是reactive定义的响应式数据，则强制开启了深度监听 -->
watch( person, (newValue, oldValue ) => {
    console.log("person变化了", newValue, oldValue);
},{ immediate: true, deep: false })//此处的deep配置不再奏效

<!-- 情况四，监视reactive定义的响应式数据中某个属性 -->
watch( () => person.job, (newValue, oldValue ) => {
    console.log("person中的job变化了", newValue, oldValue);
},{ immediate: true, deep: true })

```
:::