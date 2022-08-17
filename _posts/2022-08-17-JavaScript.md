---
title: ES6 CLASS 模块化
author: lzx
date: 2022-08-17
category: Jekyll
layout: post
---

---
实例
---
学会面向对象思想，封装可复用组件。
```javascript
class TestClass {
	constructor(options){
		console.log(options)
		this.name = options.name;
		this.role = options.role; 
		this.hp = 10000;
		this.success = options.success;
	}
		
	static ommessage(){
		console.log("message")
	}
	onplay(callback){
		let me = this
		console.log(me.name)
		console.log(me.role)
		console.log(me.hp);
		setTimeout(()=>{
			callback("i am " + this.name)//onplay回调函数
		},2000)
        //判断success是否为function,是为了判断前端是否有调用。
		if(this.success == function){
			this.success("success");
		}
		setTimeout(()=>{
			if(this.success == function){
				this.success("success2");
			}
		},3000)
	}
}
export default TestClass
```
---
使用
---
```vue
<template>
	<view>
		<view class="">
			测试数据，class , 回调函数等等。
		</view>
		<view class="">
			{{msg}}
		</view>
	</view>
</template>

<script>
	import TestClass from '@/js/testClass.js';
	export default {
		data() {
			return {
				msg: ''
			}
		},
		onLoad() {
			this.init();
		},
		methods: {
			init(){
				let test = new TestClass({
					name: "孙悟空",
					role: "上单",
					success: (res)=>{
						this.msg = res
						console.log("res====" + res)
					}
				});
				test.onplay((res)=>{
					this.msg = res
					console.log("res====" + res);
				})
			}
		}
	}
</script>

<style>

</style>

```
    这是比较基础的使用方式。后续参考ajax，uni.request(),wx,request()等封装方式方法。

<!-- GitBook is an amazing frontend style to present and organize contents (such as book chapters
and blogs) on Web. The typical to deploy GitBook at [Github Pages][1]
is building HTML files locally and then push to Github repository, usually to the `gh-pages`
branch. However, it's quite annoying to repeat such workload and make it hard for people do
version control via git for when there are generated HTML files to be staged in and out.

This theme takes style definition out of generated GitBook site and provided the template
for Jekyll to rendering markdown documents to HTML, thus the whole site can be deployed
to [Github Pages][1] without generating and uploading HTML bundle every time when there are
changes to the original repository. -->

<!-- [1]: https://pages.github.com -->