---
title: nginx_SSL证书部署
date: 2024-11-25
icon: tag
category:
  - nginx
tag:
  - SSL
---

# 轻量级服务器部署SSL证书

1. 将下载好的ssl证书压缩包上传的nginx目录下conf.d，解压
2. 编辑 default.conf
```bash
server {
     #SSL 默认访问端口号为 443
     listen 443 ssl;
     #请填写绑定证书的域名
     server_name liuyuedeyu.top;
     #请填写证书文件的相对路径或绝对路径
     ssl_certificate conf.d/liuyuedeyu.top_nginx/liuyuedeyu.top_bundle.crt;
     #请填写私钥文件的相对路径或绝对路径
     ssl_certificate_key conf.d/liuyuedeyu.top_nginx/liuyuedeyu.top.key;
     ssl_session_timeout 5m;
     #请按照以下协议配置
     ssl_protocols TLSv1.2 TLSv1.3;
     #请按照以下套件配置，配置加密套件，写法遵循 openssl 标准。
     ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
     ssl_prefer_server_ciphers on;
     location / {
        root /usr/share/nginx/html;
        index index.html index.htm;
     }
     error_page 500 502 503 504 /50x.html;
     location = /50x.html {
        root /usr/share/nginx/html;
     }
 }
server {
 listen 80;
 listen [::]:80;
 #请填写绑定证书的域名
 server_name liuyuedeyu.top; 
 #把http的域名请求转成https
 return 301 https://$host$request_uri; 
}
```
3. 重启容器 `sudo docker ps -a`，查看容器，`sudo docker restart 容器ID`;