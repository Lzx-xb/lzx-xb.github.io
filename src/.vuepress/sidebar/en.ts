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
      children: "structure",
    },
    
    "slides",
  ],
});
