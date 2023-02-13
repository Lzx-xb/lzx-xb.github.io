<template>
    <div class="container" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
        <span>当前页面展示效果</span>
    </div>
</template>

<script>
    import { removeWatermark, setWaterMark } from '../js/watermark';
    import AOS from 'aos';
    import 'aos/dist/aos.css';
    export default{
        data() {
            return {
                content: 'hello world!',
            }
        },
        mounted(){
            setWaterMark("lzx","梅花香自苦寒来")
            AOS.init();
        },
        unmounted(){
            removeWatermark();
        },
        methods: {
            
        }
    }
</script>
<style > 
    .container{
        margin: 20px;
    }
</style>
