import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "漫步人生路",
      description: "A blog for 漫步人生路",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "漫步人生路",
      description: "漫步人生路的博客",
    },
  },

  theme,

  shouldPrefetch: false,
});
