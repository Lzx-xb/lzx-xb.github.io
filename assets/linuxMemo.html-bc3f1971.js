const t=JSON.parse('{"key":"v-61c7089f","path":"/posts/other/linuxMemo.html","title":"Linux Memo","lang":"en-US","frontmatter":{"title":"Linux Memo","date":"2023-02-22T00:00:00.000Z","icon":"tag","category":["Other"],"tag":["linux"],"description":"Linux备忘手册 关机/重启/注销 常用命令 作用 shutdown -h now 立即关机 shutdown -h 10 十分钟后关机 shutdown -h 10:00 10：00关机 shutdown -h +10 预定时间关机（10分钟后) shutdown -c 取消指定时间关机 shutdown -r now 重启 shutdown -r 10 10分钟后重启 shutdown -r 11:00 定时重启 reboot 重启 init 6 重启 init 0 立刻关机 telinit 0 关机 poweroff 立刻关机 halt 关机 sync buff数据同步到磁盘 logout 推出登录shell","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://github.com/Lzx-xb/lzx-xb.github.io/zh/posts/other/linuxMemo.html"}],["meta",{"property":"og:url","content":"https://github.com/Lzx-xb/lzx-xb.github.io/posts/other/linuxMemo.html"}],["meta",{"property":"og:site_name","content":"漫步人生路"}],["meta",{"property":"og:title","content":"Linux Memo"}],["meta",{"property":"og:description","content":"Linux备忘手册 关机/重启/注销 常用命令 作用 shutdown -h now 立即关机 shutdown -h 10 十分钟后关机 shutdown -h 10:00 10：00关机 shutdown -h +10 预定时间关机（10分钟后) shutdown -c 取消指定时间关机 shutdown -r now 重启 shutdown -r 10 10分钟后重启 shutdown -r 11:00 定时重启 reboot 重启 init 6 重启 init 0 立刻关机 telinit 0 关机 poweroff 立刻关机 halt 关机 sync buff数据同步到磁盘 logout 推出登录shell"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-19T12:14:04.000Z"}],["meta",{"property":"article:author","content":"漫步人生路"}],["meta",{"property":"article:tag","content":"linux"}],["meta",{"property":"article:published_time","content":"2023-02-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-19T12:14:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux Memo\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-02-22T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-19T12:14:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"漫步人生路\\",\\"url\\":\\"https://liuyuedeyu.top\\"}]}"]]},"headers":[{"level":2,"title":"关机/重启/注销","slug":"关机-重启-注销","link":"#关机-重启-注销","children":[]}],"git":{"createdTime":1677075546000,"updatedTime":1710850444000,"contributors":[{"name":"lzx-xb","email":"321337450@qq.com","commits":6}]},"readingTime":{"minutes":0.47,"words":141},"filePathRelative":"posts/other/linuxMemo.md","localizedDate":"February 22, 2023","excerpt":"<h1> Linux备忘手册</h1>\\n<h2> 关机/重启/注销</h2>\\n<table>\\n<thead>\\n<tr>\\n<th style=\\"text-align:left\\">常用命令</th>\\n<th style=\\"text-align:left\\">作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td style=\\"text-align:left\\">shutdown -h now</td>\\n<td style=\\"text-align:left\\">立即关机</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">shutdown -h 10</td>\\n<td style=\\"text-align:left\\">十分钟后关机</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">shutdown -h 10:00</td>\\n<td style=\\"text-align:left\\">10：00关机</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">shutdown -h +10</td>\\n<td style=\\"text-align:left\\">预定时间关机（10分钟后)</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">shutdown -c</td>\\n<td style=\\"text-align:left\\">取消指定时间关机</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">shutdown -r now</td>\\n<td style=\\"text-align:left\\">重启</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">shutdown -r 10</td>\\n<td style=\\"text-align:left\\">10分钟后重启</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">shutdown -r 11:00</td>\\n<td style=\\"text-align:left\\">定时重启</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">reboot</td>\\n<td style=\\"text-align:left\\">重启</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">init 6</td>\\n<td style=\\"text-align:left\\">重启</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">init 0</td>\\n<td style=\\"text-align:left\\">立刻关机</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">telinit 0</td>\\n<td style=\\"text-align:left\\">关机</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">poweroff</td>\\n<td style=\\"text-align:left\\">立刻关机</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">halt</td>\\n<td style=\\"text-align:left\\">关机</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">sync</td>\\n<td style=\\"text-align:left\\">buff数据同步到磁盘</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">logout</td>\\n<td style=\\"text-align:left\\">推出登录shell</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{t as data};