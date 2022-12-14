---
layout: home
title: 博客简介
---

>建立自己的知识库，记录问题，以及常用的工具。

## 官网

<div class="container">
        <div class="card" onclick="window.open('https://cn.vuejs.org/')">
            <img class="img" src="./gitbook/images/vue.png" alt="">
            <span>vue官网</span>
        </div>
        <div class="card" onclick="window.open('https://react.docschina.org/')">
            <img class="img" src="./gitbook/images/react.png" alt="">
            <span>react官网</span>
        </div>
        <div class="card" onclick="window.open('https://uniapp.dcloud.net.cn/')">
            <img class="img" src="./gitbook/images/uniapp.png" alt="">
            <span>uniapp官网</span>
        </div>
        <div class="card" onclick="window.open('https://ant.design/index-cn')">
            <img class="img" src="./gitbook/images/ant.svg" alt="">
            <span>ant官网</span>
        </div>
        <div class="card" onclick="window.open('https://element.eleme.cn/#/zh-CN')">
            <img class="img" src="./gitbook/images/elementUi.jpg" alt="">
            <span>element官网</span>
        </div>
</div>

<style>
    .container{
        width: 100%;
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }
    .container:after{
        width: 100px;
        padding: 20px;
        content: ''
    }
    .card{
        padding: 20px;
        width: 200px;
        height: 300px;
        margin: 40px 0;
        background-color: #fff;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        cursor: pointer;
        transition: all 0.5s;
        font-weight: bolder;
    }
    .img{
        width: 150px; 
        height: 150px;
        border-radius: 10px;
    }
    .clamp{
        overflow: hidden;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
    }

    .card span {
        cursor: pointer;
        display: inline-block;
        position: relative;
        transition: 0.5s;
    }

    .card span:after {
        content: '»';
        position: absolute;
        opacity: 0;
        top: 0;
        right: -5px;
        transition: 0.5s;
    }
    .card:hover {
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    }

    .card:hover span {
        padding-right: 15px;
    }

    .card:hover span:after {
        opacity: 1;
        right: 0;
    }
</style>

