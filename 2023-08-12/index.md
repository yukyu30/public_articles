---
id: 67756682c30fdb8001bbdce5
title: ブログにクイズ機能をつけた
created_at: 2023-08-12T00:00:00.000Z
updated_at: 2025-01-01T16:00:45.365Z
---

<h2>これは以前のブログの機能で現在のブログには搭載されていません</h2>
<p>ブログにクイズ機能をつけたので</p>
<h1>どうやったらクイズが表示されるの</h1>
<p>ブログをスクロールすると生成が開始、生成が完了するとクイズが表示されるようになっています。<br>
スクロールできないような短い文章ならクイズを生成しなくても良いか割り切ってます</p>
<p>(クイズの作成のたびにお金がかかるのでちゃんと読んでもらって楽しんでもらえたらうれしいなぁ)</p>
<h1>技術的な話</h1>
<p>Langchaiとgpt-3.5-turboを使っています。またlangchainでfunction callingで決まったJSON形式でデータを返すようにしてます。<br>
これらはAPIとしてデプロイしてあります。<br>
APIの動作は以下のようになっています。</p>
<ol>
<li>urlからサイトのデータを取得</li>
<li>サイトのデータ、プロンプトをOpenAI APIへPOST</li>
<li>生成されたデータを返す</li>
</ol>
<p>あとはフロントで選択肢をシャッフルしたり、正解を選択したら正解かどうかを判定したりしています。</p>
<h1>今後の予定</h1>
<p>技術記事のURLを入力したら理解度を測るクイズが生成されるWebアプリケーションを作りたいな思っています。<br>
DBに保存して、同じURLだったらDBから取得するなどして、APIの呼び出し回数を減らしたいです。</p>
