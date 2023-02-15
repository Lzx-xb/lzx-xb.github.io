---
icon: edit
date: 2023-02-14
title: vue3_watchEffect
category:
  - vue
tag:
  - watchEffect
---

# wachtEffect()

+ watch的套路是：既要指明监听的属性，也要指明监听的回调
+ watchEffect的套路是： 不用指明监听哪个属性，监听的回调中用到哪个属性，那就监视哪个属性。

```js
const todoId = ref(1)
const data = ref(null)

watch(todoId, async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  )
  data.value = await response.json()
}, { immediate: true })
```

我们可以用 watchEffect 函数 来简化上面的代码。watchEffect() 允许我们自动跟踪回调的响应式依赖。上面的侦听器可以重写为：  

```js
watchEffect(async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  )
  data.value = await response.json()
})
```

这个例子中，==回调会立即执行==，不需要指定 `immediate: true`。在执行期间，它会==自动追踪== todoId.value 作为依赖（==和计算属性类似==）。每当 todoId.value 变化时，回调会再次执行。有了 watchEffect()，我们不再需要明确传递 todoId 作为源值。