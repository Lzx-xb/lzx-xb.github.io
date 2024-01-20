import { defineUserConfig } from "vuepress";
import { docsearchPlugin } from '@vuepress/plugin-docsearch';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { getDirname, path } from '@vuepress/utils';
import theme from "./theme.js";

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  base: "/",
  plugins: [
    docsearchPlugin({
      appId: 'WPYE5MFAE8',
      apiKey: 'fa9d6589c026727c9f0034c079139c6d',
      indexName: 'dev_blogSearch',
      locales: {
        '/': {
          placeholder: 'Search Documentation',
          translations: {
            button: {
              buttonText: 'Search Documentation',
            },
          },
        },
        "/zh/": {
          placeholder: "搜索文档",
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "清除查询条件",
                resetButtonAriaLabel: "清除查询条件",
                cancelButtonText: "取消",
                cancelButtonAriaLabel: "取消",
              },
              startScreen: {
                recentSearchesTitle: "搜索历史",
                noRecentSearchesText: "没有搜索历史",
                saveRecentSearchButtonTitle: "保存至搜索历史",
                removeRecentSearchButtonTitle: "从搜索历史中移除",
                favoriteSearchesTitle: "收藏",
                removeFavoriteSearchButtonTitle: "从收藏中移除",
              },
              errorScreen: {
                titleText: "无法获取结果",
                helpText: "你可能需要检查你的网络连接",
              },
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
                searchByText: "搜索提供者",
              },
              noResultsScreen: {
                noResultsText: "无法找到相关结果",
                suggestedQueryText: "你可以尝试查询",
                reportMissingResultsText: "你认为该查询应该有结果？",
                reportMissingResultsLinkText: "点击反馈",
              },
            },
          },
        },
      },
    }),
    registerComponentsPlugin({
      // 配置项
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],
  locales: {
    "/": {
      lang: "en-US",
      title: "漫步人生路",
      description: "A blog for 漫步人生路",
      // head: [
      //   ["link", { rel: "stylesheet", href: "/css/style.css" }],
      //   //waifu-tips.js 依赖 JQuery 库
      //   // <script src="assets/jquery.min.js?v=3.3.1"></script>
      //   ["script", {src: "/kanban/lib/L2Dwidget.min.js"}],
      //   ["script", {src: "/kanban/initLWDwidget.js"}],
      //   ["script", {type: "module"}, 
      //   ` import { fairyDustCursor } from "/js/fairyDustCursor.js";
      //     new fairyDustCursor();`
      //   ],
      //   // ["script", {src: "/js/index.js"}],
        
      //   // ["script", { src: "YOUR_SCRIPT_LINK" }],
      //   // ["link", { rel: "stylesheet", href: "./wowjs/animate.css" }],
      // ],
    },
    "/zh/": {
      lang: "zh-CN",
      title: "漫步人生路",
      description: "漫步人生路的博客",
      // head: [
      //   ["link", { rel: "stylesheet", href: "/css/style.css" }],
      //   //waifu-tips.js 依赖 JQuery 库
      //   // <script src="assets/jquery.min.js?v=3.3.1"></script>
      //   ["script", {src: "/kanban/lib/L2Dwidget.min.js"}],
      //   ["script", {src: "/kanban/initLWDwidget.js"}],
      //   ["script", {type: "module"},
      //   ` import { fairyDustCursor } from "/js/fairyDustCursor.js";
      //   console.log("執行")
        
      //   if(!fairDust){
      //     var fairDust =  new fairyDustCursor();
      //   }else {
      //     fairDust.destroy()
      //   }
      //   `],
        // ["script", {src: "/js/index.js"}],
        // ["script", { src: "YOUR_SCRIPT_LINK" }],
        
      // ],
    },
  },
  

  theme,
  head: [
  //   ["link", { rel: "stylesheet", href: "/css/style.css" }],
  //   //waifu-tips.js 依赖 JQuery 库
    // <script src="assets/jquery.min.js?v=3.3.1"></script>
    ['link', { rel: 'stylesheet', href: '/css/swiper-bundle.min.css'}],
    ["script", {src: "/js/swiper-bundle.min.js"}],
    ["script", {src: "/kanban/lib/L2Dwidget.min.js"}],
    ["script", {type: "module", src: "/js/index.js"}],
  //   ["script", {type: "module"},
  //   ` import { fairyDustCursor } from "/js/fairyDustCursor.js";
    
  //   let fairDustDom = document.getElementById("fairDust");
  //   console.log(fairDustDom);
  //   if(!fairDustDom){
  //     console.log("執行")
  //     new fairyDustCursor();
  //   }
  //   `], 
  ],
  
  
  shouldPrefetch: false,
});
