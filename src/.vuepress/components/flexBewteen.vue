<template>
    <div>
        <div data-aos="zoom-in"  style="margin: 10px;">
            <span>处理前</span>
        </div>
        <div class="container1">
            <div class="flex-card" data-aos="fade-left" data-aos-delay="300" v-for="item in list">
                <span style="padding: 10px;">{{ item }}</span>
            </div>
        </div>
        <div data-aos="zoom-in"  style="margin: 10px;">
            <span>处理后</span>
        </div>
        <div class="main">
            <div class="flex-card " data-aos="fade-left" data-aos-delay="300" v-for="item in list">
                <span style="padding: 10px;">{{ item }}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
// import 'animate.css';
//  import '../wowjs/animate.css';
// import "wow.js/css/libs/animate.css";
//  import  WOW  from '../wowjs/WOW.js';
// import WOW from "wow.js";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
export default {
    data() {
        return {
            list: ['1', '2', '3', '4', '5']
        }
    },
    mounted() {
        // const wow = new WOW({
        //     boxClass: 'wow',      // default
        //     animateClass: 'animated', // default
        //     offset: 100,          // default
        //     mobile: true,       // default
        //     live: true        // default
        // });
        // wow.init();

        AOS.init();
    }
}
</script>

<style>
.container1,
.main {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
}

.main::after {
    width: 30%;
    content: '';
}

.flex-card {
    border-radius: 10px;
    width: 30%;
    height: 150px;
    background-color: #ddffdd;
    margin-bottom: 20px;
}
</style>
