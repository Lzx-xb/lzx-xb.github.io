
import { fairyDustCursor } from '/js/fairyDustCursor.js';
// import { Swiper } from '/js/swiper-bundle.min.js';
import { clothesData } from '/js/clothesData.js';

var activeIndex = 0;// 衣橱选择索引值；
var widget; // 看板娘；
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

function changeKanban(item) {
    localStorage.removeItem("model");
    localStorage.setItem("model", JSON.stringify(item));
    L2Dwidget.init({
        model: { jsonPath: item.jsonPath ? item.jsonPath : "/kanban/vert_swimwear/index.json" },
        display: {
            width: item.width ? item.width : 150,
            height: item.height ? item.height : 300,
            hOffset: item.hOffset ? item.hOffset : 0,
            vOffset: item.vOffset ? item.vOffset : -20,
        },
        mobile: {
            show: false,
            scale: 0.1
        }
    })
}

async function initKanban(jsonPath) {
    if (window.screen.width > 419) {
        // 初始化 衣橱
        initClothes();
    }
    let modelItem = JSON.parse(localStorage.getItem("model"));
    if (!modelItem) {
        modelItem = clothesData[0];
        localStorage.setItem("model", JSON.stringify(modelItem));
    }
    widget = L2Dwidget.init({

        model: { jsonPath: modelItem.jsonPath ? modelItem.jsonPath : "/kanban/vert_swimwear/index.json" },
        display: {
            width: modelItem.width ? modelItem.width : 100,
            height: modelItem.height ? modelItem.height : 250,
            hOffset: modelItem.hOffset ? modelItem.hOffset : 0,
            vOffset: modelItem.vOffset ? modelItem.vOffset : -20,
        },
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
    closedBtn.classList.add('closedBox');
    let spanEl = document.createElement('span');
    spanEl.innerHTML = '&times;';
    spanEl.classList.add('close');
    // 点击关闭按钮隐藏弹窗
    spanEl.onclick = function (e) {
        clothesWinHide(e, chothesContain)
    }
    closedBtn.appendChild(spanEl);
    // TODO swiper 卡片选择
    let swiperBox = document.createElement('div');
    swiperBox.classList.add("swiper", "mySwiper");
    let swiperWrapper = document.createElement('div');
    swiperWrapper.classList.add('swiper-wrapper');
    //渲染swiper
    clothesData.forEach((data, index, arr) => {
        let cardEl = document.createElement("div");
        cardEl.classList.add("swiper-slide");
        let imgEl = document.createElement("img");
        imgEl.setAttribute("src", data.image);
        imgEl.classList.add("cards");
        cardEl.appendChild(imgEl);
        swiperWrapper.appendChild(cardEl);
    });
    swiperBox.appendChild(swiperWrapper);

    // TODO 确定按钮
    let confirmBtn = document.createElement('div');
    confirmBtn.classList.add("confirmBox")
    let btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerHTML = "选择";
    confirmBtn.appendChild(btn);


    clothesWin.appendChild(closedBtn);//关闭按钮
    clothesWin.appendChild(swiperBox);//swiper
    clothesWin.appendChild(confirmBtn);// 选择按钮
    chothesContain.appendChild(clothesWin);
    // clothesWin.addEventListener("click", chooseClothes);
    document.querySelector("body").appendChild(chothesContain);
    img.onclick = function () {
        chooseClothes(chothesContain);
    }

    //使用swiper
    new Swiper(".mySwiper", {
        effect: "cards",
        grabCursor: true,
        // loop: true,
        on: {
            slideChange: function (swiper) {
                activeIndex = swiper.activeIndex;
            },
        }
    });

    btn.onclick = function (e) {
        changeKanban(clothesData[activeIndex]);
        clothesWinHide(e, chothesContain);
    }

    // 鼠标移出后关闭衣橱菜单
    // clothesWin.onmouseleave = function(e){
    //     clothesWinHide(e, chothesContain)
    // }
}

function chooseClothes() {
    // let chothesContain = document.getElementById("chothesContain");
    chothesContain.classList.remove("clothesWinHide");
    chothesContain.classList.add("clothesWinShow");
}

function clothesWinHide(e, chothesContain) {
    chothesContain.classList.add("clothesWinHide");
    chothesContain.classList.remove("clothesWinShow");
}