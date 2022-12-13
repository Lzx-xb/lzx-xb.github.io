---
title: Design Draft
author: lzx
date: 2022-02-06
category: Jekyll
layout: post
---

## markdown写html代码
使用在md中使用编写html代码，下面是代码演示

### 代码演示

<div class="myBtn" onclick="clickme()"><span>hello</span></div>
<button class="myBtn" type="button" onclick="clickme()">
<span>点我</span>
</button>

### 参考代码

```html
    <div class="myBtn" onclick="clickme()">
        <span>hello</span>
    </div>
    <button class="myBtn" type="button" onclick="clickme()">
        <span>点我</span>
    </button>

    /** javascript */
    <script>
	    function clickme(){
		    alert("你好，请开始你的表演");
	    }
    </script>
    /** css */
    <style>
        .myBtn {
            display: inline-block;
            border-radius: 4px;
            background-color: #ddffdd;
            border: none;
            color: #FF0053;
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

```

<script>
	function clickme(){
		alert("你好，请开始你的表演");
	}
</script>
<style>
.myBtn {
  display: inline-block;
  border-radius: 4px;
  background-color: #ddffdd;
  border: none;
  color: #FF0053;
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
