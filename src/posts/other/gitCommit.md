---
title: 同步提交代码
date: 2023-10-05
icon: tag
category:
  - git
tag:
  - commit
---

# 同步提交代码

要一次性将代码同步提交到 GitHub 和 Gitee 仓库，您可以按照以下步骤操作：

## 在本地仓库中配置远程仓库地址

   首先，您需要为您的 Git 项目配置两个远程仓库地址，一个指向 GitHub 仓库，另一个指向 Gitee 仓库。假设您已经拥有了这两个仓库的 URL。

   ```bash
   git remote add github <GitHub_Repo_URL>
   git remote add gitee <Gitee_Repo_URL>
   ```

   这里，`<GitHub_Repo_URL>` 是您 GitHub 仓库的 URL，`<Gitee_Repo_URL>` 是您 Gitee 仓库的 URL。

## 提交更改并推送到多个远程仓库

   现在，您可以提交更改并将它们推送到多个远程仓库。使用以下命令将更改提交到所有配置的远程仓库：

   ```bash
   git commit -m "提交消息"
   git push --all
   ```

   这将会把您的更改推送到 `origin`（默认的远程仓库）、`github` 和 `gitee`，从而同步到 GitHub 和 Gitee 仓库。

这样，您的代码将同时提交到两个远程仓库，保持它们的同步。请确保您对这些操作有适当的权限，并且在提交代码之前备份好重要数据，以防万一。

## 相关git操作
```bash
# 查看已经设置的远程仓库别名列表
git remote
#查看别名对应的远程仓库地址
git remote -v
# 查看别名更详细信息
git remote show origin
# 拉取远程仓库最新代码
git pull <远程仓库别名> <本地分支名称>
# 例 git pull github master 拉取github仓库代码
# 推送到远程仓库
git push <远程仓库别名> <本地分支名称>
# 例 git push github master 推送github仓库代码
```