import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as e,f as s}from"./app-e4c3d7ff.js";const i={},l=s(`<h2 id="部署问题" tabindex="-1"><a class="header-anchor" href="#部署问题" aria-hidden="true">#</a> 部署问题</h2><div class="hint-container info"><p class="hint-container-title">问题描述</p><pre><code>6.18剁手在腾讯云买了一台2核2G的服务器，用来学习一下docker，尝试一下jenkins的自动化构建。 
在部署构建时，当构建到npm build步骤，服务器直接宕机，发现是内存爆表了。百度了一堆都没有解决到我的这个问题，升级服务器配置但又不划算。 
在这卡很久了，所以记录一下问题。
</code></pre></div><h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h2><ol><li>升级配置,价格翻倍（不想）</li><li>添加虚拟内存(来自ChatGPT)</li></ol><h2 id="添加虚拟内存方法" tabindex="-1"><a class="header-anchor" href="#添加虚拟内存方法" aria-hidden="true">#</a> 添加虚拟内存方法</h2><ol><li><strong>检查当前虚拟内存情况</strong>：首先，您可以使用以下命令检查当前系统的虚拟内存情况：</li></ol><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>free -h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>这将显示已用和可用的内存以及交换空间的情况。请确保您的系统尚未使用交换空间，或者已使用的很少。 
</code></pre><ol start="2"><li><strong>创建交换文件</strong>：要创建4GB的交换文件，您可以执行以下命令：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> fallocate <span class="token parameter variable">-l</span> 4G /swapfile   <span class="token comment"># 创建一个4GB的交换文件</span>
<span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token number">600</span> /swapfile         <span class="token comment"># 设置交换文件的权限</span>
<span class="token function">sudo</span> <span class="token function">mkswap</span> /swapfile            <span class="token comment"># 将其标记为交换文件</span>
<span class="token function">sudo</span> <span class="token function">swapon</span> /swapfile            <span class="token comment"># 启用交换文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>这将创建一个4GB大小的交换文件并启用它。您可以根据需要调整文件大小。
</code></pre><ol start="3"><li><strong>设置开机自启动</strong>：为了确保交换文件在系统重启后仍然可用，您需要将其添加到 /etc/fstab 文件中：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&#39;/swapfile none swap sw 0 0&#39;</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> <span class="token parameter variable">-a</span> /etc/fstab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li><strong>验证虚拟内存配置</strong>：您可以再次运行 <code>free -h</code> 命令来验证虚拟内存的配置，确保交换空间已经启用并且总可用内存增加到了4GB。</li></ol><div class="hint-container warning"><p class="hint-container-title">温馨提示</p><p>请注意，虚拟内存可以帮助您在内存资源紧张时保持系统的稳定性，但它不应成为替代物理内存的解决方案。如果您的应用程序需要更多内存来运行，最好考虑升级服务器的物理内存，这将是提高性能的更可靠方法。</p></div><h2 id="相关命令" tabindex="-1"><a class="header-anchor" href="#相关命令" aria-hidden="true">#</a> 相关命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 实时查看内存使用情况</span>
<span class="token function">top</span>
<span class="token comment"># 停止正在使用的swap分区</span>
swapoff /swapfile
<span class="token comment"># 删除swap分区文件</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /swapfile
<span class="token comment"># 删除或注释掉我们之前在fstab文件里追加的开机自动挂载配置内容</span>
<span class="token function">vim</span>    /etc/fstab
<span class="token comment">#把下面内容删除</span>
/swapfile   swap  swap  defaults  <span class="token number">0</span>  <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结果" tabindex="-1"><a class="header-anchor" href="#结果" aria-hidden="true">#</a> 结果</h2><p>添加虚拟内存后，确实解决了服务器宕机问题，但是又出现了一个新的问题，<strong>打包时内存溢出</strong>。为了解决这个问题，我也ChatGPT了许多答案，都没有解决我的问题，能彻底解决我的问题只有升级配置。<br> 报错信息如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;--- Last few GCs ---&gt;

[7472:0x70481c0]    56063 ms: Scavenge (reduce) 981.0 (1005.2) -&gt; 980.2 (1005.4) MB, 2.2 / 0.0 ms  (average mu = 0.201, current mu = 0.003) allocation failure; 
[7472:0x70481c0]    56929 ms: Mark-sweep (reduce) 981.2 (1005.4) -&gt; 979.8 (1005.4) MB, 863.8 / 0.0 ms  (average mu = 0.218, current mu = 0.237) allocation failure; scavenge might not succeed


&lt;--- JS stacktrace ---&gt;

FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
 1: 0xb83f50 node::Abort() [node]
 2: 0xa94834  [node]
 3: 0xd647c0 v8::Utils::ReportOOMFailure(v8::internal::Isolate*, char const*, bool) [node]
 4: 0xd64b67 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, bool) [node]
 5: 0xf42265  [node]
 6: 0xf43168 v8::internal::Heap::RecomputeLimits(v8::internal::GarbageCollector) [node]
 7: 0xf53673  [node]
 8: 0xf544e8 v8::internal::Heap::CollectGarbage(v8::internal::AllocationSpace, v8::internal::GarbageCollectionReason, v8::GCCallbackFlags) [node]
 9: 0xf2ee4e v8::internal::HeapAllocator::AllocateRawWithLightRetrySlowPath(int, v8::internal::AllocationType, v8::internal::AllocationOrigin, v8::internal::AllocationAlignment) [node]
10: 0xf30217 v8::internal::HeapAllocator::AllocateRawWithRetryOrFailSlowPath(int, v8::internal::AllocationType, v8::internal::AllocationOrigin, v8::internal::AllocationAlignment) [node]
11: 0xf10760 v8::internal::Factory::AllocateRaw(int, v8::internal::AllocationType, v8::internal::AllocationAlignment) [node]
12: 0xf07d2c v8::internal::FactoryBase&lt;v8::internal::Factory&gt;::AllocateRawArray(int, v8::internal::AllocationType) [node]
13: 0xf07ea5 v8::internal::FactoryBase&lt;v8::internal::Factory&gt;::NewFixedArrayWithFiller(v8::internal::Handle&lt;v8::internal::Map&gt;, int, v8::internal::Handle&lt;v8::internal::Oddball&gt;, v8::internal::AllocationType) [node]
14: 0x11ba933 v8::internal::Handle&lt;v8::internal::NameDictionary&gt; v8::internal::HashTable&lt;v8::internal::NameDictionary, v8::internal::NameDictionaryShape&gt;::NewInternal&lt;v8::internal::Isolate&gt;(v8::internal::Isolate*, int, v8::internal::AllocationType) [node]
15: 0x11ba9d9 v8::internal::Handle&lt;v8::internal::NameDictionary&gt; v8::internal::BaseNameDictionary&lt;v8::internal::NameDictionary, v8::internal::NameDictionaryShape&gt;::New&lt;v8::internal::Isolate&gt;(v8::internal::Isolate*, int, v8::internal::AllocationType, v8::internal::MinimumCapacity) [node]
16: 0xf1b838 v8::internal::Factory::NewSlowJSObjectFromMap(v8::internal::Handle&lt;v8::internal::Map&gt;, int, v8::internal::AllocationType, v8::internal::Handle&lt;v8::internal::AllocationSite&gt;) [node]
17: 0x1146014 v8::internal::JSObject::ObjectCreate(v8::internal::Isolate*, v8::internal::Handle&lt;v8::internal::Object&gt;) [node]
18: 0x12e026b v8::internal::Runtime_ObjectCreate(int, unsigned long*, v8::internal::Isolate*) [node]
19: 0x17035b9  [node]
Aborted (core dumped)
Build step &#39;Execute shell&#39; marked build as failure
Finished: FAILURE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个报错信息跟JavaScript环境中的垃圾回收（GC）有关。GC是JavaScript引擎通过识别和删除不再使用的对象来释放内存的过程。</p><p>垃圾回收（GC）是JavaScript运行时环境中的一个关键概念，用于管理内存分配和释放。JavaScript是一种高级编程语言，它自动处理内存分配和释放，以减轻开发人员的负担。下面是关于JavaScript环境中的垃圾回收的一些重要信息：</p><ol><li><p><strong>自动内存管理</strong>：JavaScript具有自动内存管理功能，这意味着开发人员不需要手动分配或释放内存。垃圾回收器负责跟踪和释放不再使用的内存。</p></li><li><p><strong>标记-清除算法</strong>：JavaScript中最常用的垃圾回收算法是标记-清除（Mark and Sweep）算法。该算法分为两个主要阶段：</p><ul><li><strong>标记（Marking）</strong>：在此阶段，垃圾回收器标记所有仍然在使用中的对象。它从根对象（通常是全局对象或执行上下文中的变量）开始遍历，标记可以从根对象访问到的所有对象。</li><li><strong>清除（Sweeping）</strong>：在此阶段，垃圾回收器清除（释放）未被标记的对象的内存。这些对象不再可访问，因此它们被认为是垃圾。</li></ul></li><li><p><strong>内存泄漏</strong>：虽然JavaScript有垃圾回收器，但仍然可能发生内存泄漏。内存泄漏是指程序中的对象占用内存，但永远不会被垃圾回收器清除。这通常发生在开发人员忘记释放对对象的引用时，或者对象之间存在循环引用。</p></li><li><p><strong>性能影响</strong>：垃圾回收会影响性能，因为它需要时间来执行。在大型应用程序中，不合理的内存管理可能导致频繁的垃圾回收，从而降低性能。因此，开发人员应该努力避免内存泄漏和减少不必要的对象分配。</p></li><li><p><strong>手动内存管理</strong>：在一些特殊情况下，开发人员可以使用<code>delete</code>操作符手动释放对象引用，但这在现代JavaScript中并不常见。现代的JavaScript引擎在大多数情况下能够高效地处理内存管理。</p></li><li><p><strong>优化垃圾回收</strong>：一些JavaScript引擎（例如V8引擎）在执行上采用了增量垃圾回收，以减少暂停时间。这意味着它们会尝试在后台进行垃圾回收，而不会阻塞主线程的执行。</p></li></ol><p>总之，垃圾回收是JavaScript中的一个关键概念，它有助于自动管理内存，但开发人员仍然需要理解它的原理以避免内存泄漏并优化性能。</p><h2 id="打包内存溢出解决方案" tabindex="-1"><a class="header-anchor" href="#打包内存溢出解决方案" aria-hidden="true">#</a> 打包内存溢出解决方案</h2><p>这是符合我自身问题解决方案，仅供参考，如有更好的解决方案，可以在下方评论指出。<br> 百度了许多答案以及ChatGPT都有提到添加 <strong>NODE_OPTIONS 环境变量</strong> ，又因为我的项目的打包工具是<code>vite</code>，而且框架还封装了一层，加上我还是个新手，不知道从哪里去设置 <strong>NODE_OPTIONS</strong>，所以最后想到的办法就是使用别人的插件去处理这个。</p><h3 id="使用cross-env插件" tabindex="-1"><a class="header-anchor" href="#使用cross-env插件" aria-hidden="true">#</a> 使用cross-env插件</h3><p>这个插件能解决我打包时内存溢出的问题</p><ol><li>安装cross-env</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> cross-env
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>修改package.json打包命令<br> 将package.json中的build语句前面增加一句<code>cross-env NODE_OPTIONS=--max_old_sapce_size=8192</code>,配置多大视自身情况而定。<br> 但由于这个问题只在我的<strong>垃圾服务器</strong>上打包才会出现，本地环境并不会有这些问题，所以只能通过脚本去添加或修改才比较合适。所以我加了一个脚本去替换我要修改的内容</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># 设置要替换的目标文本和替换文本</span>
<span class="token assign-left variable">target_text</span><span class="token operator">=</span><span class="token string">&quot;旧的文本&quot;</span>
<span class="token assign-left variable">replace_text</span><span class="token operator">=</span><span class="token string">&quot;新的文本&quot;</span>

<span class="token comment"># 设置要处理的文件路径</span>
<span class="token assign-left variable">file_path</span><span class="token operator">=</span><span class="token string">&quot;/path/to/your/file.txt&quot;</span>

<span class="token comment"># 使用sed命令替换文件中的文本</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s/<span class="token variable">$target_text</span>/<span class="token variable">$replace_text</span>/g&quot;</span> <span class="token string">&quot;<span class="token variable">$file_path</span>&quot;</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;文件内容替换完成。&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="最后" tabindex="-1"><a class="header-anchor" href="#最后" aria-hidden="true">#</a> 最后</h2><p>成功打包，jenkins上构建了将近50次才成功，攻克这个问题后，后面就是将打包文件打包到对应文件夹就算是成功了。就能实现提交代码后，自动构建打包部署一条龙了。💬 🍂 🍁</p>`,34),t=[l];function r(o,c){return a(),e("div",null,t)}const p=n(i,[["render",r],["__file","dockerJenkins.html.vue"]]);export{p as default};
