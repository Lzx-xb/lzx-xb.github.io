import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    // {
    //   text: "如何使用",
    //   icon: "creative",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    "intro",
    {
      text: "文章",
      icon: "note",
      prefix: "posts/",
      // collapsible: true,
      children: [
        {
          text: "Css样式",
          icon: "edit",
          prefix: "css/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "实用工具",
          icon: "edit",
          prefix: "tool/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "其他内容",
          icon: "edit",
          prefix: "other/",
          link: 'other/',
          collapsible: true,
          children: "structure",
        },
      ],
    },
    "slides",
  ],
});
