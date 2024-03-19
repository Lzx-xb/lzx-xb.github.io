---
title: Table Drag
icon: tag
date: 2023-03-21
category:
  - javascript
tag:
    - 表格
---

# 表格拖拽功能

::: info 概述
    使用原生html,js，实现表格拖动，动态改变列宽。
:::

::: normal-demo 表格拖拽功能

``` html
    <div>
        <table>
            <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Savings</th>
                <th>Savings1</th>
                <th>Savings2</th>
                <th>Savings3</th>
                <th>Savings4</th>
            </tr>
            <tr>
                <td>Bill</td>
                <td>Gates</td>
                <td>$100</td>
                <td>$100</td>
                <td>$100</td>
                <td>$100</td>
                <td>$100</td>
            </tr>
            <tr>
                <td>Steve</td>
                <td>Jobs</td>
                <td>$150</td>
                <td>$100</td>
                <td>$100</td>
                <td>$100</td>
                <td>$100</td>
            </tr>
        </table>
    </div>
```

``` js
    //1、表头添加 mouseover事件，在th内部添加一个元素，用于处理后续拖动事件
    let th, table, tableHeight, tableWidth;
    let currentOffsetX = 0;//记录当前offsetX值
    let move = false, // 判断是否按住
        tableMove = false,
        lineX = 0,
        offsetX = 0;
    let line;
    let thNode, thNodeKey;
    let nextThNode, nextThNodeKey;
    let ths = new Map();
    initEvent();

    function initEvent() {
        th = document.getElementsByTagName("th");
        table = document.getElementsByTagName("table")[0];
        tableHeight = table.clientHeight;
        /**
         * TODO 监听table table宽度可变
         * 1、宽度变化只增不减
         **/
        if (!tableWidth) {
            tableWidth = table.clientWidth;
        }
        window.onmouseup = function (e) {
            e.stopPropagation();
            e.preventDefault();
            if(line){
                line.removeEventListener("onmousemove", mouseMove);
            }
            
            //鼠标移动蒙层 清除
            if (document.getElementById("siselayer")) {
                document.getElementsByTagName("body")[0].removeChild(document.getElementById("siselayer"))
            }
            move = false
            initHover();
        }

        for (let i = 0; i < th.length; i++) {
            // ths.set(i, th[i].clientWidth - 8);
            // let thWidth = th[i].offsetWidth; // th 宽度
            // th[i].style.width = thWidth - 8 + 'px';
            th[i].onmouseover = function () {

                if (th[i].children.length == 0 && i < th.length - 1) {
                    // console.log("add line")
                    line = document.createElement("div");
                    line.className = "line";
                    line.setAttribute('id', 'line' + i);
                    line.style.height = (tableHeight) + "px";
                    line.style.left = th[i].clientWidth - 4 + "px";
                    th[i].appendChild(line);
                    line.onmouseover = function (e) {
                        thNode = e.target.parentNode;
                        thNodeKey = i;
                        nextThNode = thNode.nextElementSibling;
                        nextThNodeKey = i + 1;
                        line = e.target;
                        // line 按下后 记录位置
                        line.onmousedown = function (e) {
                            e.stopPropagation();
                            e.preventDefault();
                            mouseDown(e);
                        }
                        line.onmouseup = function (e) {
                            e.stopPropagation();
                            e.preventDefault();
                            move = false;
                            line.removeEventListener("onmousemove", mouseMove);
                            initHover();
                        }
                    };
                }
            }

            th[i].onmouseleave = function () {
                while (th[i].children.length > 0) {
                    th[i].removeChild(th[i].children[0])
                }
            }
        }
        //更新grid th标签宽度。
        updateThWidth();
        // 监听浏览器窗口变化
        window.addEventListener("resize", function (e) {
            tableWidth = e.target.innerWidth - 16;
            table.style.width = "100%";
            console.log("tablewidth = "+ tableWidth)
            updateThWidth();
        })
    }

    function updateThWidth(){
        for(let i = 0; i< th.length; i++){
            ths.set(i, th[i].clientWidth - 8);//存储各个列宽
        }
    }

    function initHover() {
        for (let i = 0; i < th.length; i++) {
            while (th[i].children.length > 0) {
                th[i].removeChild(th[i].children[0])
            }
        }
        initEvent();
    }

    function mouseDown(arguments) {
        currentOffsetX = arguments.clientX;
        move = true;
        lineX = line.offsetLeft;
        offsetX = arguments.clientX;

        //添加鼠标移动蒙层
        let changeSizeLayer = document.createElement("div");
        changeSizeLayer.setAttribute("id", "siselayer");
        changeSizeLayer.className = "sizelayer";
        document.getElementsByTagName("body")[0].append(changeSizeLayer);
        changeSizeLayer.onmousemove = function (e) {
            mouseMove(e);
        }
    }

    function changeThWidth(thNodeKey, del) {
        //当前列宽度计算
        if (ths.get(thNodeKey)) {
            ths.set(thNodeKey, ths.get(thNodeKey) + del);
        }
        let total = 8;
        ths.forEach((value, key, map) => {
            total += value + 8;
        });
        // 判断总宽度 是否大于初始宽度； 若总宽度小于初始宽度，最后一列自适应，与初始宽度保持一致
        if(total <= tableWidth && del < 0){
            ths.set(th.length - 1, ths.get(th.length - 1 ) - del);
        }else {
            // 当总宽度大于 初始宽度，若最后一列宽度 大于 60（最小宽度） 则最后一列缩小。否则只增加thNode宽度
            if(ths.get(th.length - 1) > 60){
                ths.set(th.length - 1, ths.get(th.length - 1 ) - del);
            }
        };
        table.style.width = total + 'px';
        for (let i = 0; i < th.length; i++) {
            th[i].style.width = ths.get(i) + 'px';
        }
    }

    function mouseMove(arguments) {
        if (move) {
            let total = arguments.clientX - offsetX;//记录初始clientX与当前clientX的差；
            let del = Math.ceil(arguments.clientX - currentOffsetX)//差值
            // 最小宽度停止拖动
            if ((total < 0 && (thNode.clientWidth + del) < 60)) {
                tableMove = false;
            } else {
                tableMove = true;
            }
            if (tableMove) {
                line.style.left = arguments.clientX - (offsetX - lineX) + 'px'; //线条偏移
                changeThWidth(thNodeKey, del);
                currentOffsetX = JSON.parse(JSON.stringify(arguments.clientX));
            }
        }
    }
```

```css
table,
td,
th {
    border: 1px solid #ddd;
    text-align: left;
}

body html {
    padding: 0;
    margin-top: 0;
}

table {
    border-collapse: collapse;
    width: 100%;
    table-layout: fixed;
    position: relative;
}


th,
td {
    padding: 4px;
    position: relative;
    user-select: none;
    text-overflow: ellipsis;
    word-break: break-all;
}

.line {
    width: 4px;
    float: left;
    background-color: red;
    border: none;
    position: absolute;
    top: 0;
    z-index: 99;
}

.line:hover {
    cursor: col-resize;
    background-color: aqua;
}

.sizelayer {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    background-color: #4445a049;
    /*演示为了看效果加上的，可以去掉*/
    cursor: col-resize;
}
```
:::