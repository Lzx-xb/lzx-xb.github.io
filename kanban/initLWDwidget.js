// console.log(window.screen.width);
initKanban();
async function initKanban(){
if (window.screen.width > 419) {
    let p =  new Promise((resolve, reject) => {
        try {
            let a =L2Dwidget.init({
                // model:{jsonPath:"/kanban/asuna/asuna_04.model.json"}
                // model:{jsonPath:"/kanban/shizuku-pajama/index.json"}
                model:{jsonPath:"/kanban/vert_swimwear/index.json"}
                // model: { jsonPath: "/kanban/Potion-Maker/Tia/index.json" }
            })
            setTimeout(() => {
                resolve({status: 1})
            }, 2000);
        } catch (error) {
            reject({
                status: 0
            })
        }
    })
    p.then((res) => {
        if (res.status == 1) {
            let parent = document.getElementById("live2d-widget");
            let node = document.createElement("div");
            node.setAttribute("id", "changeSkip");
            node.className = "change-skip-btn";
            parent.prepend(node);
        }else {
            console.log("加载出错了 ┑(￣Д ￣)┍ , 异步加载问题")
        }
    }).catch((res)=> {
        console.log("promise catch", res)
    })
    console.log(document.getElementById("live2d-widget"))
}
}
