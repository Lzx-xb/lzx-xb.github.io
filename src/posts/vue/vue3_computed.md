---
icon: edit
date: 2023-02-14
title: vue3_computed
category:
  - vue
tag:
  - computed
---

# computed

- 与vue2.x中的computed配置功能一致；

```vue
<template>
    <h1>个人信息</h1>
    姓: <input type="text" v-modal="person.firstName" />
    名：<input type="text" v-modal="person.lastName" />
    <br/>
    全名：<span>{{ person.fullName }} </span>
</tempalte>
<script>
    import { reactive, computed } from "vue";
    export default {
        setup(){
            let person = reactive({
              firstName: "张",
              lastName: "三",
            })
            //计算属性--简写（没有考虑计算属性被修改的情况）
            // person.fullName = computed( () => {
            //   return person.firstName + person.lastName;
            // })

            //计算属性--完整写法（考虑读和写）
            person.fullName = computed({
              get(){
                return person.firstName + "-" + person.lastName;
              }
              set(value){
                const arr = value.split("-");
                person.firstName = arr[0];
                person.lastName = arr[1];
              }
            })
            return {
              person,
            }
        }
    }  
</script>
```