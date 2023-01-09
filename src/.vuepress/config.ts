import { defineUserConfig } from "vuepress";
import { docsearchPlugin } from '@vuepress/plugin-docsearch';
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  plugins: [
    docsearchPlugin({
      apiKey: 'f85ad85e4f4f2e660f17a66ef7c05648',
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
        '/zh/': {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
            },
          },
        },
      },
    }),
  ],
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
