<template>
    <div class="container">
        <div class="card">
            <img class="img" src="../public/logo.png" alt="">
            <span data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">标题：文本超出边界处理</span>
            <span data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="1000">作者：lzx</span>
            <span class="clamp" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="2000">介绍：lzx的博客，lzx的博客，lzx的博客，lzx的博客，lzx的博客，lzx的博客，lzx的博客，lzx的博客，lzx的博客，lzx的博客，</span>
        </div>
    </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
export default{
    data(){
        return{
            
        }
    },
    mounted(){
        AOS.init();
    }
}
</script>


<style>
.container{
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.card{
    padding: 10px;
    width: 200px;
    height: 250px;
    background-color: #ddffdd;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    
}
.img{
    width: 100px; 
    height: 100px;
    border-radius: 10px;
    margin: auto;
}
.clamp{
    overflow: hidden;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
}
</style>
