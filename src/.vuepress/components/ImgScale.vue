<template>
    <div id="container">

        <canvas id="canvas" width="600" height="400" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000"
            v-if="pc"></canvas>
        <span v-else>暂未支持移动端</span>
    </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
export default {
    data() {
        return {
            width: 600,
            height: 400,
            isDragging: false,
            lastX: 0,
            lastY: 0,
            scale: 0.4,
            imgX: 0,
            imgY: 0,
            img: null,
            canvas: null,
            pc: true,
        }
    },
    beforeMount() {
        if (window.screen.width < 419) {
            this.pc = false;
        }
    },
    mounted() {
        AOS.init();
        if (this.pc) {
            this.bindCanvasEvent("container");
        }
    },
    methods: {
        bindCanvasEvent(id) {
            let that = this;
            this.canvas = document.getElementById('canvas');
            const ctx = this.canvas.getContext('2d');

            let initialDistance = 0;
            let initialScale = 1;
            this.img = new Image();
            this.img.src = '/bgwallhaven.png';

            this.img.onload = function () {
                that.drawImage(ctx);
            };

            this.canvas.addEventListener('mousedown', function (e) {
                that.isDragging = true;
                that.lastX = e.clientX;
                that.lastY = e.clientY;
            });

            window.addEventListener("mouseup", function (e) {
                that.isDragging = false;
            })

            this.canvas.addEventListener('mouseup', function (e) {
                that.isDragging = false;
            });

            this.canvas.addEventListener('wheel', function (e) {
                const delta = Math.sign(e.deltaY);
                if (delta > 0) {
                    that.scale *= 0.9;
                } else {
                    that.scale *= 1.1;
                }
                that.drawImage(ctx);
                e.preventDefault();
            });

            this.canvas.addEventListener('mousemove', function (e) {
                if (that.isDragging) {
                    const deltaX = e.clientX - that.lastX;
                    const deltaY = e.clientY - that.lastY;
                    that.imgX += deltaX;
                    that.imgY += deltaY;
                    that.lastX = e.clientX;
                    that.lastY = e.clientY;
                    that.drawImage(ctx);
                }
            });

            this.canvas.addEventListener('touchstart', function (e) {
                if (e.touches.length === 2) {
                    initialDistance = Math.hypot(
                        e.touches[0].pageX - e.touches[1].pageX,
                        e.touches[0].pageY - e.touches[1].pageY
                    );
                    initialScale = that.scale;
                } else if (e.touches.length === 1) {
                    that.isDragging = true;
                    that.lastX = e.touches[0].pageX;
                    that.lastY = e.touches[0].pageY;
                }
            });

            this.canvas.addEventListener('touchmove', function (e) {
                if (e.touches.length === 2) {
                    const currentDistance = Math.hypot(
                        e.touches[0].pageX - e.touches[1].pageX,
                        e.touches[0].pageY - e.touches[1].pageY
                    );
                    that.scale = initialScale * (currentDistance / initialDistance);
                    that.drawImage(ctx);
                } else if (that.isDragging && e.touches.length === 1) {
                    const deltaX = e.touches[0].pageX - that.lastX;
                    const deltaY = e.touches[0].pageY - that.lastY;
                    that.imgX += deltaX;
                    that.imgY += deltaY;
                    that.lastX = e.touches[0].pageX;
                    that.lastY = e.touches[0].pageY;
                    that.drawImage(ctx);
                }
            });

            this.canvas.addEventListener('touchend', function (e) {
                that.isDragging = false;
            });

            this.canvas.addEventListener('touchcancel', function (e) {
                that.isDragging = false;
            });


        },

        drawImage(ctx) {
            ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            ctx.drawImage(this.img, this.imgX, this.imgY, this.img.width * this.scale, this.img.height * this.scale);
        }
    }
}
</script>


<style>
#container {
    display: flex;
    align-items: center;
    justify-content: center;
}

#container>canvas {
    cursor: move;
}
</style>
