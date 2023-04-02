import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  // { text: "博客官方配置", icon: "discover", link: "/zh/demo/" },
  { text: "开始学习", icon: "discover", link: "/zh/intro" },
  {
    text: "博文",
    icon: "edit",
    prefix: "/zh/posts/",
    children: [
      {
        text: "Css",
        icon: "edit",
        prefix: "css/",
        children: [
          { text: "左对齐", icon: "edit", link: "flex-bewteen" },
          { text: "文本省略符", icon: "edit", link: "cssclamp" },
        ],
      },
      {
        text: "实用工具",
        icon: "edit",
        prefix: "tool/",
        children: [
          {
            text: "水印效果",
            icon: "edit",
            link: "watermark",
          },
        ],
      },
      // { text: "樱桃", icon: "edit", link: "cherry" },
    ],
  },
  { text: "考试笔记", icon: "ci", link: "/zh/posts/civil/intro" }
]);
