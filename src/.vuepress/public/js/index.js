
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
        // 初始化 衣橱
        initClothes();
    }
    let a = L2Dwidget.init({
        // model:{jsonPath:"/kanban/asuna/asuna_04.model.json"},
        // model:{jsonPath:"/kanban/shizuku-pajama/index.json"},
        model: { jsonPath: "/kanban/vert_swimwear/index.json" },
        // model: { jsonPath: "/kanban/Potion-Maker/Tia/index.json" },
        mobile: {
            show: false,
            scale: 0.1
        }
    })
}
/**
 * The init function
 * @param {Object}   [userConfig] User's custom config 用户自定义设置
 * @param {String}   [userConfig.model.jsonPath = ''] Path to Live2D model's main json eg. `https://test.com/miku.model.json` model主文件路径
 * @param {Number}   [userConfig.model.scale = 1] Scale between the model and the canvas 模型与canvas的缩放
 * @param {Number}   [userConfig.model.hHeadPos = 0.5] Horizontal position of model's head 模型头部横坐标
 * @param {Number}   [userConfig.model.vHeadPos = 0.618] Vertical position of model's head 模型头部纵坐标
 * @param {Array}    [userConfig.model.myDefine = []] User's custom Defines which will override LDefine 自定义的LDefine
 * @param {Number}   [userConfig.display.superSample = 2] rate for super sampling rate 超采样等级
 * @param {Number}   [userConfig.display.width = 150] Width to the canvas which shows the model canvas的长度
 * @param {Number}   [userConfig.display.height = 300] Height to the canvas which shows the model canvas的高度
 * @param {String}   [userConfig.display.position = 'right'] Left of right side to show 显示位置：左或右
 * @param {Number}   [userConfig.display.hOffset = 0] Horizontal offset of the canvas canvas水平偏移
 * @param {Number}   [userConfig.display.vOffset = -20] Vertical offset of the canvas canvas垂直偏移
 * @param {Boolean}  [userConfig.mobile.show = true] Whether to show on mobile device 是否在移动设备上显示
 * @param {Number}   [userConfig.mobile.scale = 0.5] Scale on mobile device 移动设备上的缩放
 * @param {Boolean}  [userConfig.mobile.motion = true] Whether to enable motion detection on mobile devices 移动设备是否开启重力感应
 * @param {String}   [userConfig.name.canvas = 'live2dcanvas'] ID name of the canvas canvas元素的ID
 * @param {String}   [userConfig.name.div = 'live2d-widget'] ID name of the div div元素的ID
 * @param {Number}   [userConfig.react.opacityDefault = 0.7] Default opacity 默认透明度
 * @param {Number}   [userConfig.react.opacityOnHover = 0.2] OnHover opacity 鼠标移上透明度
 * @param {Function} [userConfig.react.myFunc = func(e)] Custom event handler, won't override main handler, will reveice the event type. 自定义事件接收器
 * @param {Boolean}  [userConfig.dev.log = false] Whether to show log 显示日志
 * @param {Boolean}  [userConfig.dev.border = false] Whether to show border around the canvas 在canvas周围显示边界
 * @param {Boolean}  [userConfig.dev.mouseLog = false] Whether to show mouse log (tons of log), only work when dev.log is enabled 显示鼠标移动
 * @param {Function} [userConfig.dev.mouseFunc = func(x, y, ix, iy)] Custom logger, only work when dev.log is enabled, will receive (x, y, ix, iy), which presents the actucally position and vitural position 自定义鼠标移动处理函数
 * @return {null}
 */

function initClothes() {
    let chothesContain = document.createElement("div");
    chothesContain.id = 'chothesContain';
    chothesContain.className = 'chothesContain';
    // clothesBtn.onmouseover = function () { chooseClothes() };
    // 衣橱按钮背景图
    let imgBox = document.createElement("div");
    imgBox.className = 'imgBox';
    let img = document.createElement('img')
    img.setAttribute("src", "/head.png");
    img.className = 'img-class';
    imgBox.appendChild(img)
    // img.addEventListener("click", );

    chothesContain.appendChild(imgBox);
    // 衣橱菜单
    let clothesWin = document.createElement("div");
    clothesWin.id = 'clothesWin';
    clothesWin.className = 'clothesWin';
    // TODO 关闭按钮
    let closedBtn = document.createElement('div');
    let spanEl = document.createElement('span');
    spanEl.innerHTML = '&times;';
    spanEl.classList.add('close');
    // 点击关闭按钮隐藏弹窗
    spanEl.onclick = function (e) {
        clothesWinHide(e, chothesContain)
    }
    closedBtn.appendChild(spanEl);
    // TODO swiper 卡片选择
    // TODO 确定按钮
    clothesWin.appendChild(closedBtn);
    chothesContain.appendChild(clothesWin);
    // clothesWin.addEventListener("click", chooseClothes);
    document.querySelector("body").appendChild(chothesContain);
    img.onclick = function () {
        chooseClothes(chothesContain);
    }
    // 鼠标移出后关闭衣橱菜单
    // clothesWin.onmouseleave = function(e){
    //     clothesWinHide(e, chothesContain)
    // }
}

function chooseClothes() {
    console.log("----请选择衣服");
    // let chothesContain = document.getElementById("chothesContain");
    chothesContain.classList.remove("clothesWinHide");
    chothesContain.classList.add("clothesWinShow");
}

function clothesWinHide(e, chothesContain) {
    chothesContain.classList.add("clothesWinHide");
    chothesContain.classList.remove("clothesWinShow");
}