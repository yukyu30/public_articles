# Newt Content Backup

このリポジトリはyukyu.netのバックアップのためのリポジトリです。

## 概要

NewtのCDN APIからコンテンツを取得し、Markdownファイルとしてリポジトリに保存するGitHub Actionsワークフローを実装しています。

## 機能

- NewtのCDN APIからコンテンツを取得
- 記事、タグ、作品の3種類のコンテンツに対応
- コンテンツをMarkdownファイルとして保存（`/<slug>/index.md`形式）
- コンテンツ内の画像をダウンロードして保存
- 画像参照を更新

## 実行方法

GitHub Actionsは以下のタイミングで実行されます：

1. 毎日午前0時（UTC）に自動実行
2. Newtからのwebhookトリガー（コンテンツ更新時）
3. 手動実行（GitHub Actionsタブから）

## Webhookの設定方法

Newtでwebhookを設定するには：

1. Newtの管理画面で「App settings」→「Webhooks」を選択
2. 「Add webhook」をクリック
3. 以下の情報を入力：
   - URL: `https://api.github.com/repos/yukyu30/public_articles/dispatches`
   - Content type: `application/json`
   - Secret: GitHubのPersonal Access Token
   - Events: コンテンツの公開/更新時
4. ペイロードに以下を設定：
   ```json
   {
     "event_type": "newt_content_updated"
   }
   ```

詳細は[Newtのドキュメント](https://www.newt.so/docs/tutorials/trigger-github-actions-with-webhooks)を参照してください。
