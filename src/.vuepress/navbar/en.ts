import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  // { text: "Page config", icon: "discover", link: "/demo/" },
  { text: "Start", icon: "discover", link: "/intro" },
  {
    text: "Posts",
    icon: "edit",
    prefix: "/posts/",
    children: [
      {
        text: "Css",
        icon: "edit",
        prefix: "css/",
        children: [
          { text: "Left aligned", icon: "edit", link: "flex-bewteen" },
          { text: "Text clamp", icon: "edit", link: "cssclamp" },
        ],
      },
      {
        text: "Tool",
        icon: "edit",
        prefix: "tool/",
        children: [
          {
            text: "Watermark",
            icon: "edit",
            link: "watermark",
          },
        ],
      },
      // { text: "Cherry", icon: "edit", link: "cherry" },
    ],
  },
  { text: "考试笔记", icon: "ci", link: "/posts/civil/intro" }
]);
