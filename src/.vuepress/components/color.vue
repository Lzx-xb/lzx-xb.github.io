<template>
    <div class="container">
        <div v-for="item in colorList" class="card" :style="{ backgroundColor: item.hex }">
            <h2 class="title">{{ item.name }}</h2>
            <div class="copy">
                <span>{{ item.rgb }}</span>
                <span>{{ item.hex }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
export default {
    data() {
        return {
            colorList: [
                {
                    name: '凌霄',
                    rgb: 'RGB(233,112,64)',
                    hex: '#E97040',
                },
                {
                    name: '十样锦',
                    rgb: 'RGB(248,198,181)',
                    hex: '#F8C6B5',
                },
                {
                    name: '丹枫',
                    rgb: 'RGB(216,25,24)',
                    hex: '#D81918',
                },
                {
                    name: '金红',
                    rgb: 'RGB(238,120,31)',
                    hex: '#EE781F',
                },
                {
                    name: '雄黄',
                    rgb: 'RGB(243,153,58)',
                    hex: '#F3993A',
                },
                {
                    name: '黄粱',
                    rgb: 'RGB(233,187,65)',
                    hex: '#E9BB41',
                },
                {
                    name: '黄琉璃',
                    rgb: 'RGB(229,168,75)',
                    hex: '#E5A84B',
                },
                {
                    name: '柑黄',
                    rgb: 'RGB(244,207,57)',
                    hex: '#F4CF39',
                },
                {
                    name: '泥金',
                    rgb: 'RGB(200,160,98)',
                    hex: '#C8A062',
                },
                {
                    name: '欧碧',
                    rgb: 'RGB(216,230,153)',
                    hex: '#D8E699',
                },
                {
                    name: '四绿',
                    rgb: 'RGB(107,179,146)',
                    hex: '#6BB392',
                },
                {
                    name: '绿茶',
                    rgb: 'RGB(145,184,33)',
                    hex: '#91B821',
                },
                {
                    name: '品月',
                    rgb: 'RGB(60,118,153)',
                    hex: '#3C7699',
                },
                {
                    name: '松石',
                    rgb: 'RGB(117,193,196)',
                    hex: '#75C1C4',
                },
                {
                    name: '紫茄',
                    rgb: 'RGB(73,33,74)',
                    hex: '#49214A',
                },
                {
                    name: '鹄白',
                    rgb: 'RGB(235,238,240)',
                    hex: '#91B821',
                },
                {
                    name: '月白',
                    rgb: 'RGB(212,229,239)',
                    hex: '#D4E5EF',
                },
                {
                    name: '碧落',
                    rgb: 'RGB(174,208,237)',
                    hex: '#AED0ED',
                },
                {
                    name: '东方亮',
                    rgb: 'RGB(245,251,254)',
                    hex: '#F5FBFE',
                }
            ]
        }
    },
    mounted() {
        AOS.init();
    }
}
</script>


<style>
.container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.card {
    margin: 1vw;
    padding: 10px;
    width: 200px;
    height: 250px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.copy {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
