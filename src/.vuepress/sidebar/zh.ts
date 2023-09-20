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
          collapsible: true,
          children: "structure",
        },
        {
          text: "JavaScript",
          icon: "edit",
          prefix: "javascript/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "Vue",
          icon: "edit",
          prefix: "vue/",
          collapsible: true,
          children: "structure",
        }
      ],
    },
    {
      text: "考试笔记",
      icon: "study",
      prefix: "posts/civil/",
      children: [
        "intro",
        {
          text: "事业单位",
          icon: "people",
          prefix: "shiye/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "公务员",
          icon: "ability",
          prefix: "kaogong/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "公共基础知识",
          icon: "repo",
          prefix: "common/",
          collapsible: true,
          children: "structure",
        }
      ]
    },
    "slides",
  ],
});
