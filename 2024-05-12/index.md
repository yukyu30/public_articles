---
id: 67643f7c3e1a6e2b1afae1b3
title: 入社前から考えていた機能を実装した
created_at: 2024-05-11T15:45:00.000Z
updated_at: 2025-01-01T15:16:56.463Z
---

<p>この記事では技術的な話はしません。</p>
<h2>入社前からのアイデア</h2>
<p>SUZURI の運営元である GMO ペパボの面接で作ってみたいサービスや将来やりたいことはありますか？と聞かれ、自分は<br>
SUZURI のように画像から T シャツのような 3D モデルを購入できるサービスを作りたいと答えていた。</p>
<p>大学、大学院生では HMD(ヘッドマウントディスプレイ)の研究をしていて、もちろん Chat もプレイしていた。<br>
その中で SUZURI のように画像から 3D モデルを作る機能が欲しいなと思っていた。</p>
<p>そして入社して 3 年目で、<a href="https://suzuri.jp/lp/3d-badge">SUZURI での 3D グッズ作成機能</a>のリリースをした。</p>
<blockquote class="twitter-tweet" data-dnt="true" align="center"><p lang="ja" dir="ltr">CTOのあんちぽさんとの二次面接で画像から3Dモデルを作りたい！といっててまさか数年後に実現するとは思ってもいませんでした！<br>まだまだこれからですが引き続き頑張っていきます！ <a href="https://t.co/DkZino2IG7">https://t.co/DkZino2IG7</a> <a href="https://t.co/KDnjE7eadl">pic.twitter.com/KDnjE7eadl</a></p>&mdash; yukyu (a.k.a ugo) (@yukyu30) <a href="https://twitter.com/yukyu30/status/1783531127841706198?ref_src=twsrc%5Etfw">April 25, 2024</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<h2>リリースまで</h2>
<p>新しいアプリケーションの開発環境を作るのが上手くうまくいかず、時間がかかった。arm64 や x86 といった CPU アーキテクチャに依存するような問題があったので「Linux の知識つけると良いですよ」とアドバイスをもらい、モダン Linux 入門を読んだ。<br>
最終的にはソフトウェアのバグもあり、CPU アーキテクチャだけの問題ではなかったが Linux に対する知識のインデックスを得ることができたのでよかった。</p>
<p>Three.js での 3D モデルのプレビューを実装した。3D での表現はコードより最終的な描画されたイメージが良いかで判断されるため、これで完成というのが判断できず、難しかった。<br>
プレビューは最後の最後まで調整をしていた。リリース後に「社内検証時よりめっちゃ良くなった！」といってもらえたので良かった。</p>
<p>3D 缶バッジのモデルのベースは自分が作って、デザイナーさんにブラッシュアップしてもらった。エンジニアでありながら 3D モデルを作るという新たな実績を解除した。</p>
<h2>リリースされてからの印象的な出来事</h2>
<p>自分が愛用しているワークシャツのデザインが、缶バッジになり嬉しかった。もちろん買った。</p>
<iframe height="162" width="375" src="https://suzuri.jp/kocoon/10538350/work-shirt/l/offwhite/embed"></iframe>
<iframe height="162" width="375" src="https://suzuri.jp/kocoon/digital_products/48101/embed"></iframe>
<p>さらに嬉しいことに、自分のフォントを使ってメッセージカードを作成いただいた！<br>
好きなクリエイターさんと実質コラボでき、とてつもなく嬉しかった！</p>
<blockquote class="twitter-tweet" data-dnt="true" align="center"><p lang="ja" dir="ltr">満腹ハッピー犬・空腹ハングリー犬 <br>3D缶バッジ（セット）が売れたよ🎉 <br>VRChatは未知の世界ですが<br>使ってもらえるみたいで嬉しいです！<br>ありがとうございます！<br>勝手ながら記念にyukyuさん作のフォントを<br>背景に使わせてもらってます。<a href="https://twitter.com/hashtag/SUZURI%E3%81%AE%E3%83%87%E3%82%B8%E3%82%B3%E3%83%B3?src=hash&amp;ref_src=twsrc%5Etfw">#SUZURIのデジコン</a> <a href="https://twitter.com/hashtag/suzuri?src=hash&amp;ref_src=twsrc%5Etfw">#suzuri</a> <a href="https://twitter.com/hashtag/VRChat?src=hash&amp;ref_src=twsrc%5Etfw">#VRChat</a><a href="https://t.co/V2lXeTPxWj">https://t.co/V2lXeTPxWj</a> <a href="https://t.co/ivFyOyqLyJ">https://t.co/ivFyOyqLyJ</a> <a href="https://t.co/OVjCevalHq">pic.twitter.com/OVjCevalHq</a></p>&mdash; kocoon（コクーン） (@kocoon7) <a href="https://twitter.com/kocoon7/status/1788573539295170618?ref_src=twsrc%5Etfw">May 9, 2024</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<h2>おわりに</h2>
<p>技術的な話、作る上での試行錯誤など色々話したいが、それはまた別で書こうと思う。<br>
アバターに缶バッジを身につけたので、このあと VRChat に行って写真をとってこようと思う。</p>
<p><a href="https://suzuri.jp/account/beta/3d-products/new">告知の通り</a>、2024 年夏頃 T シャツ 3D モデルの作成・販売が可能となる予定なので続報をお待ちください。</p>
