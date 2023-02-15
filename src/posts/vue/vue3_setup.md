---
icon: edit
date: 2023-02-13
title: vue3_setup
category:
  - vue
tag:
  - setup
  - composition API
---

# 拉开序幕的setup

## setup

- 理解：vue3.0的新的配置项，值为一个函数
- setup是所有composition API(组合API)的“表演舞台”；
- 组件中所用到的：数据，方法等等，均要配置在setup中；
- setup函数的两种返回值：  
    &emsp;1、若返回一个对象，则对象中的属性，方法，在模板中均可以直接使用。  
    &emsp;2、若返回一个渲染函数：则可以自定义渲染内容  
- 注意点：  
    &emsp;1、尽量不要与vue2.x配置混用  
        &emsp;&emsp;· vue2.x配置（data,methods,computed...）中可以访问到setup中的属性，方法。  
        &emsp;&emsp;· 但在setup中==不能访问==到vue2.x配置（data，methods，computed...）。  
        &emsp;&emsp;· 如有重名，setup优先。  
    &emsp;2、setup不能是一个async函数，因为返回值不再是return对象，而是promise，模板中看不到return对象中的属性  

``` vue

```

## ref函数

对数据进行响应式处理  

作用： 定义一个响应式数据；
语法： const xxx = ref(initvalue);  
&emsp;&emsp;- 创建一个包含响应式数据的引用对象（reference对象，简称ref对象）  
&emsp;&emsp;- js中操作数据：xxx.value;  
&emsp;&emsp;- 模板中读取数据，不需要value，直接`<div>{{xxx}}</div>`  
备注：   
&emsp;&emsp;·接收数据类型可以是基本数据类型，也可以是对象类型；  
&emsp;&emsp;·基本数据类型：响应式依然是靠Object.defineProperty()的get和set完成的。  
&emsp;&emsp;·对象数据类型：内部使用了vue3.0中的reactive函数

```vue

<template>
    <h1>我是： {{ name }}</h1>
    <h1>年龄： {{ age }}</h1>
    <h1>工作： {{ job.type }}</h1>
    <button @click="change">chanage</button>
</tempalte>
<script>
    import { ref } from "vue";
    export default {
        setup(){
            let name = ref("tom"); //ref函数把 "tom" 值封装为 RefImpl{}引用对象
            let age = ref(18);
            let job = ref({         //ref函数把对象封装为 Proxy 对象
                type: "前端工程师",
                salary: "20k"
            })
            function change(){
                name.vlaue = "李四";
                age.value = 20;
                job.value.type = "UI设计师";
            }
            return {
                name,
                age,
                change,
            }
        }
    }  
</script>
<style>

</style>
```
## reactive函数

+ 作用：定义一个对象类型的响应式数据（==基本别用它，用ref函数==）；
+ 语法：`const 代理对象 = reactive(被代理对象);`接收一个对象（或数组），返回一个代理器对象（Proxy对象）；
+ reactive定义的响应式数据是“==深层次的==”；
+ 内部基于ES6的Proxy实现，通过代理对象操作源对象内部数据都是响应式的


```vue

<template>
    <h1>我是： {{ person.name }}</h1>
    <h1>年龄： {{ person.age }}</h1>
    <h1>工作： {{ person.job.type }}</h1>
    <button @click="change">chanage</button>
</tempalte>
<script>
    import { reactive } from "vue";
    export default {
        setup(){
            let person = reactive({
                name: "tom",
                age: 18,
                job: {
                    type: "前端工程师",
                    salary: "20k"
                }
            })
            function change(){
                person.name = "李四";
                person.age = 20;
                person.job.type = "UI设计师";
            }
            return {
                person,
                change,
            }
        }
    }  
</script>
<style>

</style>
```

## vue3中的响应式原理

### vue2.x的响应式
&emsp;&emsp;原理：  
&emsp;&emsp;&emsp;&emsp;对象类型： 通过Object.defineProperty()对属性的读取，修改进行拦截（数据劫持）；  
&emsp;&emsp;&emsp;&emsp;数组类型： 通过重写更新数组的一系列方法来实现拦截。（对数组的变更方法进行了包裹）
```javascript
Object.defineProperty(data,"count",{
    get(){

    },
    set(){

    }
})
```
::: warning 存在问题  
&emsp;&emsp;- 新增属性，删除属性，界面不会更新  
&emsp;&emsp;- 直接通过下标修改数组，界面不会更新
:::

### vue3.0的响应式
&emsp;&emsp;实现原理：  
&emsp;&emsp;&emsp;&emsp;· 通过[Proxy][1]（代理）：拦截对象中任意属性的变化；包括：属性的值的读写，属性的添加，属性的删除等。  
&emsp;&emsp;&emsp;&emsp;· 通过[Reflect][2]（反射）：对被代理对象的属性进行操作。

## reactive对比ref
&emsp;&emsp;**从定义数据角度对比**：  
&emsp;&emsp;&emsp;&emsp;· ref用来定义：==基本数据类型==。  
&emsp;&emsp;&emsp;&emsp;· reactive用来定义：==对象（数组）类型数据==  
::: tip 备注  
ref也可以用来定义==对象（或数组）类型数据==，它内部会自动通过`reactive`转为`Proxy`对象。  
:::  
&emsp;&emsp;**从原理角度对比**：  
&emsp;&emsp;&emsp;&emsp;· ref通过`Object.defineProperty()`的`get`和`set`来实现响应式（数据劫持）.  
&emsp;&emsp;&emsp;&emsp;· reactive通过使用`Proxy`来实现响应式（数据劫持），并通过`Reflect`操作==源对象==内部的数据。  
&emsp;&emsp;**从使用角度对比**：  
&emsp;&emsp;&emsp;&emsp;· ref定义的数据：操作数据需要`.value`,读取数据时模板中直接读取，不需要`.value`。  
&emsp;&emsp;&emsp;&emsp;· reactive定义的数据:操作数据和读取数据，均不需要`.value`。

## setup的两个注意点
+ setup执行时机  
&emsp;&emsp;在beforeCreate之前执行一次，this是undefined。
+ setup的参数  
&emsp;&emsp;props：值为对象，包含组件外部传递过来，且组件内部声明接收了属性。  
&emsp;&emsp;context：上下文对象  
&emsp;&emsp;&emsp;&emsp;· attrs：值为对象，包含：组件外部传递过来，但没有在props配置中声明的属性，相当于`this.$attrs`。  
&emsp;&emsp;&emsp;&emsp;· slots：收到插槽内容，相当于`this.$slots`。  
&emsp;&emsp;&emsp;&emsp;· emit：分发自定义事件的函数，相当于`this.$emit`。

```vue
<!-- 调用demo 组件 -->
<template>
    <!-- 传入两个参数 -->
    <Demo @hello="showMsg" msg="你好" school="gdou">
    <!-- 插槽 -->
        <template v-slot:test>
            <span>你好</span>
        </template>
    </Demo>
</tempalte>
<script>
    import Demo from "./components/demo.vue";
    export default {
        components: { Demo },

        setup(){
            function showMsg(value){
                console.log(`你好啊，我收到的参数是${value}`);
            }
            return {
                showMsg,
            }
        }
    }  
</script>
```

```vue
<!-- Demo 组件 -->
<template>
    <div>
        <buttom @click="test">触发emit事件</button>
    </div>
</tempalte>
<script>
    import { reactive } from "vue";
    export default {
        //传入什么值，props就要设置什么值，否则会出现警告。
        props: ["msg","school"],
        //传什么事件，则需要声明，否则出现警告。
        emit: ["hello"],
        setup(props, context){//第一个参数为props值,第二个是context值，上下文对象
            console.log("---setup---",props);
            console.log("---setup---",context.attrs);//相当于vue2中的$attrs
            console.log("---setup---",context.emit);//触发自定义事件
            console.log("---setup---",context.slots);//插槽

            function test(){
                context.emit("hello",666)
            }

            return {
                test,
            }
            
        }
    }  
</script>
<style>

</style>
```



[1]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy
[2]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect







