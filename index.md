---
layout: home
---

<canvas id="canvas">你的游览器不支持canvas</canvas>

<script>
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
var arrList = [];

function init() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
}
window.onresize = init
init()

function random(max, min) {
    return (max - min) * Math.random() + min; //平均值
}
//构造函数，创建球形对象
function Ball(x, y) {
    this.x = x;
    this.y = y;
    this.r = 30;
    this.vx = random(5, -5);
    this.vy = random(5, -5);
    this.colorList = ['red', 'yellow', 'white', 'green', 'pink'];
    this.color = this.colorList[Math.floor(random(0, 6))];
    this.a = 1;
    this.va = 0.969
}
Ball.prototype = {
    updata: function() {
        this.x += this.vx;
        this.y += this.vy;
        this.a *= this.va;
    },
    draw: function() {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.bezierCurveTo(this.x, this.y - 3, this.x, this.y - 15, this.x - 25, this.y - 15);
        ctx.bezierCurveTo(this.x - 55, this.y - 15, this.x - 55, this.y + 22.5, this.x - 55, this.y + 22.5);
        ctx.bezierCurveTo(this.x - 55, this.y + 40, this.x - 35, this.y + 62, this.x, this.y + 80);
        ctx.bezierCurveTo(this.x + 40, this.y + 62, this.x + 55, this.y + 40, this.x + 55, this.y + 22.5);
        ctx.bezierCurveTo(this.x + 55, this.y + 22.5, this.x + 55, this.y - 15, this.x + 25, this.y - 15);
        ctx.bezierCurveTo(this.x + 10, this.y - 15, this.x, this.y - 3, this.x, this.y);
        ctx.fill();
        ctx.font = "24px serif";
        ctx.fillText("热巴", this.x - 25, this.y + 35)
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.a;
        ctx.globalCompositeOperation = 'lighter';
        ctx.fill();
        this.updata();
    }
}

function main() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    arrList.forEach(item => {
        item.draw()
    })
    requestAnimationFrame(main); //递归调用
}
canvas.addEventListener('mousemove', function(e) {
    creat(e.clientX, e.clientY)
})

function creat(x, y) {
    var temp = new Ball(x, y)
    arrList.push(new Ball(x, y))
    arrList[0].x = -2000
    arrList[0].y = -2000
}
main()

</script>

<style>
* {
	margin:0;
	padding:0;
}
#canvas {
	background-color:#000;
}
body {
	overflow:hidden;
}
</style>

