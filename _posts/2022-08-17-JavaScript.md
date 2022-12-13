---
title: JavaScript
author: lzx
date: 2022-08-17
category: Jekyll
layout: post
---


## ES6 CLASS 模块化
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

使用
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

<div class="myBtn" onclick="clickme()"><span>hello</span></div>
<button class="myBtn" type="button" onclick="clickme()">
<span>点我</span>
</button>

<script>
	function clickme(){
		alert("你好，请开始你的表演");
	}
</script>
<style>
.myBtn {
  display: inline-block;
  border-radius: 4px;
  background-color: #f4511e;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 28px;
  padding: 20px;
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.myBtn span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.myBtn span:after {
  content: '»';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}
.myBtn:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}

.myBtn:hover span {
  padding-right: 25px;
}

.myBtn:hover span:after {
  opacity: 1;
  right: 0;
}
</style>


[1]: https://lzx-xb.github.io/blog
