---
title: 添加ssh公钥
date: 2023-10-05
icon: tag
category:
  - git
tag:
  - ssh
---


要将 SSH 公钥添加到您的 GitHub 帐户中，您可以按照以下步骤操作：

## 生成 SSH 密钥对

   如果您尚未生成 SSH 密钥对，请在终端中运行以下命令（确保您已登录到正确的用户帐户中）：

   ```bash
   ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
   ```

   在这个命令中，`your_email@example.com` 应该替换为您在 GitHub 帐户中使用的电子邮件地址。命令执行后，您可以选择保存密钥对的位置和设置密码。

## 查看 SSH 公钥

   运行以下命令来查看您生成的 SSH 公钥：

   ```bash
   cat ~/.ssh/id_rsa.pub
   ```

   这将显示您的 SSH 公钥内容。

## 将 SSH 公钥添加到 GitHub 帐户

   - 登录到您的 GitHub 帐户。

   - 点击右上角的头像，然后选择 "Settings"（设置）。

   - 在左侧导航栏中，选择 "SSH and GPG keys"（SSH 和 GPG 密钥）。

   - 点击 "New SSH key"（新的 SSH 密钥）按钮。

   - 在 "Title"（标题）字段中，为此密钥添加一个描述性的名称，以便您可以识别它。

   - 在 "Key"（密钥）字段中，粘贴您之前生成的 SSH 公钥。

   - 最后，点击 "Add SSH key"（添加 SSH 密钥）按钮。

   GitHub 现在应该已经将您的 SSH 公钥添加到您的帐户中。您可以使用 SSH 密钥与 GitHub 通信，而无需每次都输入用户名和密码。确保在使用 Git 命令或在 Jenkins 等自动化构建工具中配置 SSH 以访问 GitHub 时，使用正确的 SSH 密钥。在`gitee` 上也是同理

## github 报错

```bash
ssh: connect to host github.com port 22: Connection timed out
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
```

::: tip 解決方案

找到ssh/config 文件 配置
```
Host github.com
	User xxxxx@xxx.com
	Hostname ssh.github.com
	PreferredAuthentications publickey
	IdentityFile ~/.ssh/id_rsa
	Port 443
```