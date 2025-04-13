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

## セットアップ手順

### 1. GitHubシークレットの設定

このワークフローを実行するには、以下のシークレットをGitHubリポジトリに設定する必要があります：

1. GitHubリポジトリの「Settings」タブを開く
2. 左側のメニューから「Secrets and variables」→「Actions」を選択
3. 「New repository secret」ボタンをクリックして、以下のシークレットを追加：
   - `NEWT_SPACE_UID`: NewtのスペースUID
   - `NEWT_APP_UID`: NewtのアプリケーションUID
   - `NEWT_API_TOKEN`: NewtのCDN APIトークン
   - `NEWT_ARTICLE_MODEL_UID`: 記事モデルのUID
   - `NEWT_TAG_MODEL_UID`: タグモデルのUID（オプション）
   - `NEWT_WORK_MODEL_UID`: 作品モデルのUID（オプション）

### 2. Personal Access Tokenの作成（Webhook用）

Newtからのwebhookを設定するには、GitHubのPersonal Access Tokenが必要です：

1. GitHubの「Settings」→「Developer settings」→「Personal access tokens」→「Tokens (classic)」を開く
2. 「Generate new token」→「Generate new token (classic)」をクリック
3. 以下の権限を付与：
   - `repo` (Full control of private repositories)
4. トークンを生成し、安全な場所に保存

## 実行方法

GitHub Actionsは以下のタイミングで実行されます：

1. 毎日午前0時（UTC）に自動実行
2. Newtからのwebhookトリガー（コンテンツ更新時）
3. 手動実行（GitHub Actionsタブから）

### 手動実行の方法

1. GitHubリポジトリの「Actions」タブを開く
2. 左側のワークフローリストから「Backup Newt Content」を選択
3. 右側の「Run workflow」ボタンをクリック
4. 「Run workflow」ボタンを再度クリックして実行

### 実行結果の確認

1. GitHubリポジトリの「Actions」タブを開く
2. 実行されたワークフローをクリック
3. 「Backup」ジョブをクリックして詳細を表示
4. 「Run backup script」ステップの出力を確認

## Webhookの設定方法

Newtでwebhookを設定するには：

1. Newtの管理画面で「App settings」→「Webhooks」を選択
2. 「Add webhook」をクリック
3. 以下の情報を入力：
   - URL: `https://api.github.com/repos/yukyu30/public_articles/dispatches`
   - Content type: `application/json`
   - Secret: 先ほど作成したGitHubのPersonal Access Token
   - Events: コンテンツの公開/更新時
4. ペイロードに以下を設定：
   ```json
   {
     "event_type": "newt_content_updated"
   }
   ```

詳細は[Newtのドキュメント](https://www.newt.so/docs/tutorials/trigger-github-actions-with-webhooks)を参照してください。

## トラブルシューティング

### ワークフローが失敗する場合

1. GitHubシークレットが正しく設定されているか確認
2. APIトークンが有効か確認
3. ワークフローの実行ログを確認して、エラーメッセージを確認

### 画像のダウンロードに失敗する場合

1. 画像URLが公開されているか確認
2. 画像URLが正しいか確認
3. 画像のサイズが大きすぎないか確認
