const e=JSON.parse('{"key":"v-0ece2852","path":"/zh/posts/vue/vue3.lifecycle_hooks.html","title":"vue3_生命周期钩子","lang":"zh-CN","frontmatter":{"icon":"edit","date":"2023-02-15T00:00:00.000Z","title":"vue3_生命周期钩子","category":["vue"],"tag":["Lifecycle Hooks"],"description":"生命周期钩子 vue3.0中可以继续使用vue2.x中的生命周期钩子，但有两个被更名： beforeDestroy 改名为 beforeUnmount destroyed 改名为 unmounted vue3.0也提供了Composition API 形式的生命周期钩子，与vue2.x中钩子对应关系如下：     beforeCreate   = =&gt; setup()     created        = =&gt; setup()     beforeMount   = =&gt; onBeforeMount()     mounted       = =&gt; onMounted()     beforeUpdate  = =&gt; onBeforeUpdate()     updated        ==&gt; onUpdated()     beforeUnmount  = =&gt; onBeforeUnmount()     unmounted      = =&gt; onUnmounted()","head":[["meta",{"property":"og:url","content":"https://github.com/Lzx-xb/lzx-xb.github.io/zh/posts/vue/vue3.lifecycle_hooks.html"}],["meta",{"property":"og:site_name","content":"漫步人生路"}],["meta",{"property":"og:title","content":"vue3_生命周期钩子"}],["meta",{"property":"og:description","content":"生命周期钩子 vue3.0中可以继续使用vue2.x中的生命周期钩子，但有两个被更名： beforeDestroy 改名为 beforeUnmount destroyed 改名为 unmounted vue3.0也提供了Composition API 形式的生命周期钩子，与vue2.x中钩子对应关系如下：     beforeCreate   = =&gt; setup()     created        = =&gt; setup()     beforeMount   = =&gt; onBeforeMount()     mounted       = =&gt; onMounted()     beforeUpdate  = =&gt; onBeforeUpdate()     updated        ==&gt; onUpdated()     beforeUnmount  = =&gt; onBeforeUnmount()     unmounted      = =&gt; onUnmounted()"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-02-15T03:04:07.000Z"}],["meta",{"property":"article:tag","content":"Lifecycle Hooks"}],["meta",{"property":"article:published_time","content":"2023-02-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-15T03:04:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"vue3_生命周期钩子\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-02-15T00:00:00.000Z\\",\\"dateModified\\":\\"2023-02-15T03:04:07.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","hreflang":"en-us","href":"https://github.com/Lzx-xb/lzx-xb.github.io/posts/vue/vue3.lifecycle_hooks.html"}]]},"headers":[],"git":{"createdTime":1676430247000,"updatedTime":1676430247000,"contributors":[{"name":"lzx-xb","email":"321337450@qq.com","commits":1}]},"readingTime":{"minutes":0.56,"words":168},"filePathRelative":"zh/posts/vue/vue3.lifecycle_hooks.md","localizedDate":"2023年2月15日","excerpt":"<h1> 生命周期钩子</h1>\\n<ul>\\n<li>\\n<p>vue3.0中可以继续使用vue2.x中的生命周期钩子，但有两个被更名：<br>\\nbeforeDestroy 改名为 beforeUnmount<br>\\ndestroyed 改名为 unmounted</p>\\n</li>\\n<li>\\n<p>vue3.0也提供了Composition API 形式的生命周期钩子，与vue2.x中钩子对应关系如下：<br>\\n    beforeCreate   = =&gt; setup()<br>\\n    created        = =&gt; setup()<br>\\n    beforeMount   = =&gt; onBeforeMount()<br>\\n    mounted       = =&gt; onMounted()<br>\\n    beforeUpdate  = =&gt; onBeforeUpdate()<br>\\n    updated        ==&gt; onUpdated()<br>\\n    beforeUnmount  = =&gt; onBeforeUnmount()<br>\\n    unmounted        = =&gt; onUnmounted()</p>\\n</li>\\n</ul>","autoDesc":true}');export{e as data};