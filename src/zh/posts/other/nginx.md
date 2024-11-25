---
title: nginx容器
date: 2024-11-25
icon: tag
category:
  - docker
tag:
  - nginx
---

# docker 创建nginx容器

创建 yml文件
```yml
version: '3'
services:
  nginx:
    image: nginx:latest
    container_name: nginx
    user: root
    restart: always
    ports:
      - "443:443"
      - "80:80"
    volumes:
      - /home/ubuntu/nginx/conf.d:/etc/nginx/conf.d
      - /var/lib/docker/volumes/myjenkins_jenkins-data/_data/workspace/giteeBlog/src/.vuepress/dist:/usr/share/nginx/html
    environment:
      TZ: "Asia/Shanghai"
```
```bash
# 执行
docker-compose up -d
```