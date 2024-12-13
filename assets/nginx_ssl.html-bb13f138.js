import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-693dd048.js";const i={},t=e(`<h1 id="轻量级服务器部署ssl证书" tabindex="-1"><a class="header-anchor" href="#轻量级服务器部署ssl证书" aria-hidden="true">#</a> 轻量级服务器部署SSL证书</h1><ol><li>将下载好的ssl证书压缩包上传的nginx目录下conf.d，解压</li><li>编辑 default.conf</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
     <span class="token comment">#SSL 默认访问端口号为 443</span>
     listen <span class="token number">443</span> ssl<span class="token punctuation">;</span>
     <span class="token comment">#请填写绑定证书的域名</span>
     server_name liuyuedeyu.top<span class="token punctuation">;</span>
     <span class="token comment">#请填写证书文件的相对路径或绝对路径</span>
     ssl_certificate conf.d/liuyuedeyu.top_nginx/liuyuedeyu.top_bundle.crt<span class="token punctuation">;</span>
     <span class="token comment">#请填写私钥文件的相对路径或绝对路径</span>
     ssl_certificate_key conf.d/liuyuedeyu.top_nginx/liuyuedeyu.top.key<span class="token punctuation">;</span>
     ssl_session_timeout 5m<span class="token punctuation">;</span>
     <span class="token comment">#请按照以下协议配置</span>
     ssl_protocols TLSv1.2 TLSv1.3<span class="token punctuation">;</span>
     <span class="token comment">#请按照以下套件配置，配置加密套件，写法遵循 openssl 标准。</span>
     ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:<span class="token operator">!</span>aNULL:<span class="token operator">!</span>MD5:<span class="token operator">!</span>RC4:<span class="token operator">!</span>DHE<span class="token punctuation">;</span>
     ssl_prefer_server_ciphers on<span class="token punctuation">;</span>
     location / <span class="token punctuation">{</span>
        root /usr/share/nginx/html<span class="token punctuation">;</span>
        index index.html index.htm<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
     error_page <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span> /50x.html<span class="token punctuation">;</span>
     location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
        root /usr/share/nginx/html<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
server <span class="token punctuation">{</span>
 listen <span class="token number">80</span><span class="token punctuation">;</span>
 listen <span class="token punctuation">[</span>::<span class="token punctuation">]</span>:80<span class="token punctuation">;</span>
 <span class="token comment">#请填写绑定证书的域名</span>
 server_name liuyuedeyu.top<span class="token punctuation">;</span> 
 <span class="token comment">#把http的域名请求转成https</span>
 <span class="token builtin class-name">return</span> <span class="token number">301</span> https://<span class="token variable">$host</span><span class="token variable">$request_uri</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>重启容器 <code>sudo docker ps -a</code>，查看容器，<code>sudo docker restart 容器ID</code>;</li></ol>`,4),l=[t];function c(o,p){return s(),a("div",null,l)}const d=n(i,[["render",c],["__file","nginx_ssl.html.vue"]]);export{d as default};
