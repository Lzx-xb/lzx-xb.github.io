---
title: Linux备忘手册
date: 2023-02-22
index: false
icon: discover
category:
  - Other
tag:
  - linux
footer: 页脚
---

## 关机/重启/注销

|      常用命令         |           作用            |
| :-------------------  | :----------------------  |
|   shutdown -h now     |   立即关机                |
|   shutdown -h 10      |   十分钟后关机            |
|   shutdown -h 10:00   |   10：00关机              |
|   shutdown -h +10     |   预定时间关机（10分钟后)  |
|   shutdown -c         |   取消指定时间关机         |
|   shutdown -r now     |   重启                    |
|   shutdown -r 10      |   10分钟后重启            |
|   shutdown -r 11:00   |   定时重启                |
|   reboot              |   重启                    |
|   init 6              |   重启                    |
|   init 0              |   立刻关机                 |
|   telinit 0           |   关机                     |
|   poweroff            |   立刻关机                 |
|   halt                |   关机                     |
|   sync                |   buff数据同步到磁盘       |
|   logout              |   推出登录shell            |
