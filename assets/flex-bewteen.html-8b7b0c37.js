import{_ as a,W as s,X as t,a0 as i,a1 as e,F as c}from"./framework-95d2f262.js";const l={},o=e('<h1 id="left-aligned" tabindex="-1"><a class="header-anchor" href="#left-aligned" aria-hidden="true">#</a> Left-aligned</h1><div class="hint-container info"><p class="hint-container-title">问题描述</p><p>使用弹性盒布局，当最后一行不是整行时，justify-content: space-between;布局不是我们想要的结果。</p></div><h2 id="代码演示" tabindex="-1"><a class="header-anchor" href="#代码演示" aria-hidden="true">#</a> 代码演示</h2>',3),r=e(`<h2 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法" aria-hidden="true">#</a> 解决办法</h2><p>在卡片的父节点，增加一个伪元素:after，该方法只针对使用弹性布局，且使用space-bewteen布局方式生效</p><details class="hint-container details"><summary>查看代码</summary><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.container::after</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 30%<span class="token punctuation">;</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,3);function d(p,u){const n=c("flexBewteen");return s(),t("div",null,[o,i(n),r])}const f=a(l,[["render",d],["__file","flex-bewteen.html.vue"]]);export{f as default};