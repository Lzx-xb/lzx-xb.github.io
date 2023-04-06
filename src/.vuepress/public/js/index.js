
import { fairyDustCursor } from '/js/fairyDustCursor.js';
// 鼠標移動效果，判斷是否存在canvas 若存在則不需new 實例；
let fairDustDom = document.getElementById("fairDust");
if (!fairDustDom) {
    new fairyDustCursor();
}
// 判斷canvas看板娘是否存在
let parent = document.getElementById("live2d-widget");
if (!parent) {
    initKanban();
}
async function initKanban() {
    if (window.screen.width > 419) {
        let a = L2Dwidget.init({
            // model:{jsonPath:"/kanban/asuna/asuna_04.model.json"}
            // model:{jsonPath:"/kanban/shizuku-pajama/index.json"}
            model: { jsonPath: "/kanban/vert_swimwear/index.json" }
            // model: { jsonPath: "/kanban/Potion-Maker/Tia/index.json" }
        })
    }
}