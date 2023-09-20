import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    // {
    //   text: "Demo",
    //   icon: "discover",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    "intro",
    {
      text: "Articles",
      icon: "note",
      prefix: "posts/",
      children: [
        {
          text: "Css",
          icon: "edit",
          prefix: "css/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "Tool",
          icon: "edit",
          prefix: "tool/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "Other",
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
