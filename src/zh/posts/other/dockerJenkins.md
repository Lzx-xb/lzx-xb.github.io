---
title: jenkins构建问题
date: 2023-09-13
icon: discover
category:
  - 部署
tag:
  - jenkins
footer: docker jenkins
---

## 部署问题

::: info 问题描述
    6.18剁手在腾讯云买了一台2核2G的服务器，用来学习一下docker，尝试一下jenkins的自动化构建。 
    在部署构建时，当构建到npm build步骤，服务器直接宕机，发现是内存爆表了。百度了一堆都没有解决到我的这个问题，升级服务器配置但又不划算。 
    在这卡很久了，所以记录一下问题。
:::

## 解决方案
1. 升级配置,价格翻倍
2. 添加虚拟内存(ChatGPT)

## 添加虚拟内存方法

1. **检查当前虚拟内存情况**：首先，您可以使用以下命令检查当前系统的虚拟内存情况：
``` linux
free -h
```
    这将显示已用和可用的内存以及交换空间的情况。请确保您的系统尚未使用交换空间，或者已使用的很少。 

2. **创建交换文件**：要创建4GB的交换文件，您可以执行以下命令：
``` bash
sudo fallocate -l 4G /swapfile   # 创建一个4GB的交换文件
sudo chmod 600 /swapfile         # 设置交换文件的权限
sudo mkswap /swapfile            # 将其标记为交换文件
sudo swapon /swapfile            # 启用交换文件
```
    这将创建一个4GB大小的交换文件并启用它。您可以根据需要调整文件大小。
3. **设置开机自启动**：为了确保交换文件在系统重启后仍然可用，您需要将其添加到 /etc/fstab 文件中：
``` bash
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

4. **验证虚拟内存配置**：您可以再次运行 `free -h` 命令来验证虚拟内存的配置，确保交换空间已经启用并且总可用内存增加到了4GB。

::: warning 温馨提示
请注意，虚拟内存可以帮助您在内存资源紧张时保持系统的稳定性，但它不应成为替代物理内存的解决方案。如果您的应用程序需要更多内存来运行，最好考虑升级服务器的物理内存，这将是提高性能的更可靠方法。
:::

## 相关命令

```bash
# 实时查看内存使用情况
top
# 停止正在使用的swap分区
swapoff /swapfile
# 删除swap分区文件
rm -rf /swapfile
# 删除或注释掉我们之前在fstab文件里追加的开机自动挂载配置内容
vim    /etc/fstab
#把下面内容删除
/swapfile   swap  swap  defaults  0  0
```

## 结果
添加虚拟内存后，确实解决了服务器宕机问题，但是又出现了一个新的问题，**打包时内存溢出**。为了解决这个问题，我也ChatGPT了许多答案，都没有解决我的问题，能彻底解决我的问题只有升级配置。 
报错信息如下
```
<--- Last few GCs --->

[7472:0x70481c0]    56063 ms: Scavenge (reduce) 981.0 (1005.2) -> 980.2 (1005.4) MB, 2.2 / 0.0 ms  (average mu = 0.201, current mu = 0.003) allocation failure; 
[7472:0x70481c0]    56929 ms: Mark-sweep (reduce) 981.2 (1005.4) -> 979.8 (1005.4) MB, 863.8 / 0.0 ms  (average mu = 0.218, current mu = 0.237) allocation failure; scavenge might not succeed


<--- JS stacktrace --->

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
12: 0xf07d2c v8::internal::FactoryBase<v8::internal::Factory>::AllocateRawArray(int, v8::internal::AllocationType) [node]
13: 0xf07ea5 v8::internal::FactoryBase<v8::internal::Factory>::NewFixedArrayWithFiller(v8::internal::Handle<v8::internal::Map>, int, v8::internal::Handle<v8::internal::Oddball>, v8::internal::AllocationType) [node]
14: 0x11ba933 v8::internal::Handle<v8::internal::NameDictionary> v8::internal::HashTable<v8::internal::NameDictionary, v8::internal::NameDictionaryShape>::NewInternal<v8::internal::Isolate>(v8::internal::Isolate*, int, v8::internal::AllocationType) [node]
15: 0x11ba9d9 v8::internal::Handle<v8::internal::NameDictionary> v8::internal::BaseNameDictionary<v8::internal::NameDictionary, v8::internal::NameDictionaryShape>::New<v8::internal::Isolate>(v8::internal::Isolate*, int, v8::internal::AllocationType, v8::internal::MinimumCapacity) [node]
16: 0xf1b838 v8::internal::Factory::NewSlowJSObjectFromMap(v8::internal::Handle<v8::internal::Map>, int, v8::internal::AllocationType, v8::internal::Handle<v8::internal::AllocationSite>) [node]
17: 0x1146014 v8::internal::JSObject::ObjectCreate(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>) [node]
18: 0x12e026b v8::internal::Runtime_ObjectCreate(int, unsigned long*, v8::internal::Isolate*) [node]
19: 0x17035b9  [node]
Aborted (core dumped)
Build step 'Execute shell' marked build as failure
Finished: FAILURE
```
这个报错信息跟JavaScript环境中的垃圾回收（GC）有关。GC是JavaScript引擎通过识别和删除不再使用的对象来释放内存的过程。

垃圾回收（GC）是JavaScript运行时环境中的一个关键概念，用于管理内存分配和释放。JavaScript是一种高级编程语言，它自动处理内存分配和释放，以减轻开发人员的负担。下面是关于JavaScript环境中的垃圾回收的一些重要信息：

1. **自动内存管理**：JavaScript具有自动内存管理功能，这意味着开发人员不需要手动分配或释放内存。垃圾回收器负责跟踪和释放不再使用的内存。

2. **标记-清除算法**：JavaScript中最常用的垃圾回收算法是标记-清除（Mark and Sweep）算法。该算法分为两个主要阶段：
   - **标记（Marking）**：在此阶段，垃圾回收器标记所有仍然在使用中的对象。它从根对象（通常是全局对象或执行上下文中的变量）开始遍历，标记可以从根对象访问到的所有对象。
   - **清除（Sweeping）**：在此阶段，垃圾回收器清除（释放）未被标记的对象的内存。这些对象不再可访问，因此它们被认为是垃圾。

3. **内存泄漏**：虽然JavaScript有垃圾回收器，但仍然可能发生内存泄漏。内存泄漏是指程序中的对象占用内存，但永远不会被垃圾回收器清除。这通常发生在开发人员忘记释放对对象的引用时，或者对象之间存在循环引用。

4. **性能影响**：垃圾回收会影响性能，因为它需要时间来执行。在大型应用程序中，不合理的内存管理可能导致频繁的垃圾回收，从而降低性能。因此，开发人员应该努力避免内存泄漏和减少不必要的对象分配。

5. **手动内存管理**：在一些特殊情况下，开发人员可以使用`delete`操作符手动释放对象引用，但这在现代JavaScript中并不常见。现代的JavaScript引擎在大多数情况下能够高效地处理内存管理。

6. **优化垃圾回收**：一些JavaScript引擎（例如V8引擎）在执行上采用了增量垃圾回收，以减少暂停时间。这意味着它们会尝试在后台进行垃圾回收，而不会阻塞主线程的执行。

总之，垃圾回收是JavaScript中的一个关键概念，它有助于自动管理内存，但开发人员仍然需要理解它的原理以避免内存泄漏并优化性能。

## 打包内存溢出解决方案
[**官方问题链接**][1]
```bash
npm i vuepress@next vuepress-theme-hope@latest -E
npx vp-update
# 一开始打算配置node_options，但发现更新框架，能解决这个问题。仅适用使用vuepress-theme-hope框架。
```

```bash
#!/bin/bash
# 设置要替换的目标文本和替换文本
target_text="旧的文本"
replace_text="新的文本"

# 设置要处理的文件路径
file_path="/path/to/your/file.txt"

# 使用sed命令替换文件中的文本
sed -i "s/$target_text/$replace_text/g" "$file_path"

echo "文件内容替换完成。"
```

::: tip
当target_text中含有空格，则可以使用`[[:space:]]`特殊符号来转义。:speech_balloon: :fallen_leaf: :maple_leaf:
:::

[1]:https://vuepress-theme-hope.github.io/v2/zh/faq/common-error.html#usexxx-is-called-without-provider
