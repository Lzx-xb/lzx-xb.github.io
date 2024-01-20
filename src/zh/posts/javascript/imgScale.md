---
title: 图片拖动及放大缩小
icon: edit
date: 2024-01-20
category:
  - javascript
tag:
    - 图片缩放
---

::: info 概述
    使用原生html,js，在指定区域内实现图片的放大缩小，以及拖动效果。
    也可用canvas绘制，演示效果为canvas
:::

## 代码演示

<ImgScale/>

## 相关代码
::: details 查看代码
``` js
function bindCanvasEvent(id) {
    let targetDom = document.getElementById(id);
    let isDragging = false;
    let lastX = 0;
    let lastY = 0;
    let scale = 1;
    let imgX = 0;
    let imgY = 0;

    targetDom.onmousedown = function(e) {
        e.preventDefault();
        isDragging = true;
        lastX = e.clientX;
        lastY = e.clientY;
    };
    targetDom.onmousemove = function(e) {
        if (isDragging) {
            let deltaX = e.clientX - lastX;
            let deltaY = e.clientY - lastY;
            imgX += deltaX;
            imgY += deltaY;
            lastX = e.clientX;
            lastY = e.clientY;
            drawImage(targetDom, imgX, imgY, scale);
        }
    }
    targetDom.onmouseleave = function(e) {
        isDragging = false;
    };
    targetDom.onmouseup = function(e) {
        isDragging = false;
    };
    targetDom.onmousewheel = function(e) {
        const delta = Math.sign(e.deltaY);
        if (delta > 0) {
            scale *= 0.9;
        } else {
            scale *= 1.1;
        }
        drawImage(targetDom, imgX, imgY, scale);
        e.preventDefault();
    }
}

function drawImage(targetDom, imgX, imgY, scale) {
    targetDom.style.transform = `scale(${scale},${scale}) translate(${imgX / scale}px, ${imgY / scale}px)`;
}
    
```


:::

::: details canvas 代码
```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let isDragging = false;
let lastX = 0;
let lastY = 0;
let scale = 1;
let imgX = 0;
let imgY = 0;

let initialDistance = 0;
let initialScale = 1;

const img = new Image();
img.src = './原神.png';

img.onload = function() {
    drawImage();
};

function drawImage() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, imgX, imgY, img.width * scale, img.height * scale);
}

canvas.addEventListener('mousedown', function(e) {
    isDragging = true;
    lastX = e.clientX;
    lastY = e.clientY;
});

canvas.addEventListener('mousemove', function(e) {
    if (isDragging) {
        const deltaX = e.clientX - lastX;
        const deltaY = e.clientY - lastY;
        imgX += deltaX;
        imgY += deltaY;
        lastX = e.clientX;
        lastY = e.clientY;
        drawImage();
    }
});

canvas.addEventListener('mouseup', function(e) {
    isDragging = false;
});

canvas.addEventListener('wheel', function(e) {
    const delta = Math.sign(e.deltaY);
    if (delta > 0) {
        scale *= 0.9;
    } else {
        scale *= 1.1;
    }
    drawImage();
    e.preventDefault();
});

canvas.addEventListener('touchstart', function(e) {
    if (e.touches.length === 2) {
        initialDistance = Math.hypot(
            e.touches[0].pageX - e.touches[1].pageX,
            e.touches[0].pageY - e.touches[1].pageY
        );
        initialScale = scale;
    } else if (e.touches.length === 1) {
        isDragging = true;
        lastX = e.touches[0].pageX;
        lastY = e.touches[0].pageY;
    }
});

canvas.addEventListener('touchmove', function(e) {
    if (e.touches.length === 2) {
        const currentDistance = Math.hypot(
            e.touches[0].pageX - e.touches[1].pageX,
            e.touches[0].pageY - e.touches[1].pageY
        );
        scale = initialScale * (currentDistance / initialDistance);
        drawImage();
    } else if (isDragging && e.touches.length === 1) {
        const deltaX = e.touches[0].pageX - lastX;
        const deltaY = e.touches[0].pageY - lastY;
        imgX += deltaX;
        imgY += deltaY;
        lastX = e.touches[0].pageX;
        lastY = e.touches[0].pageY;
        drawImage();
    }
});

canvas.addEventListener('touchend', function(e) {
    isDragging = false;
});

canvas.addEventListener('touchcancel', function(e) {
    isDragging = false;
});
```
:::
