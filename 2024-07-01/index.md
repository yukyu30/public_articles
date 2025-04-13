---
id: 67754de9c30fdb8001b1979a
title: End-User Developmentと生成AI
created_at: 2024-07-01T00:00:00.000Z
updated_at: 2025-01-01T14:16:24.285Z
---

<p>結論も、オチもない話です。</p>
<h2>ClaudeのArtifacts機能</h2>
<p>ClaudeにArtifacts機能が追加された。<br>
対話をしながらWebサイトやスライド、チャートの作成を行うことができるようになった。コードを書くだけではなく、そのコードが実行できる環境まで提供されるので、<br>
ClaudeにWebサイトをつくらせて、それを隣のウィンドウでリアルタイムに触ることができる。</p>
<iframe
  frameBorder='0'
  src='https://www.youtube.com/embed/rHqk0ZGb6qo?si=FtwFJQ2rS9hH2PyJ'
  allowFullScreen={true}
  style={{
    width: '100%',
    height: 'auto',
    aspectRatio: '16 / 9',
  }}
  data-ratio='1.755485893416928'
></iframe>
Artifacts機能を試してみて、生成したものをその場で触って試すことができとても体験として良くて感動した。
<p>いっそのこと、Webサービスはシステムを提供して、フロントエンドはユーザーがAIに作らせ、思うがままにカスタマイズできるようなことができないだろうかと考えた。</p>
<blockquote class="twitter-tweet" data-dnt="true" align="center"><p lang="ja" dir="ltr">いろんなサービスがAPIだけ準備して、フロントエンドはLLMにユーザーに好きな様に作らせる未来こい</p>&mdash; yukyu (a.k.a ugo) (@yukyu30) <a href="https://twitter.com/yukyu30/status/1804856990268874948?ref_src=twsrc%5Etfw">June 23, 2024</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<p>そして、このような考え方は近い概念としてEnd-User Developmentというものを知った。</p>
<h2>End-User Develoment</h2>
<blockquote>
<p>エンドユーザー・デベロプメント（英: End-user development, EUD）とは、エンドユーザーがEUCよりもさらに積極的にシステムの開発に関わるという考え方。 <br/><a href="https://ja.wikipedia.org/wiki/%E3%82%A8%E3%83%B3%E3%83%89%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%83%BB%E3%83%87%E3%83%99%E3%83%AD%E3%83%97%E3%83%A1%E3%83%B3%E3%83%88">wikipedia</a> より引用</p>
</blockquote>
<p>この考えを巡らせている時に、<a href="https://www.youtube.com/watch?v=k8UFLqxn02M&amp;t=4583s">多摩美エンターテイメント論「映像、ツール、不思議の輪」2/2</a>を観た。</p>
<p>この中で、<a href="https://s.baku89.com/pentool/">プログラマブルペンツール</a>というWebアプリが紹介されていた。</p>
<iframe
  frameBorder='0'
  src='https://www.youtube.com/embed/k8UFLqxn02M?si=zWncH2koUKWtz13F&amp;start=292'
  allowFullScreen={true}
  style={{
    width: '100%',
    height: 'auto',
    aspectRatio: '16 / 9',
  }}
  data-ratio='1.755485893416928'
></iframe>
<p>これは、プログラムを書くことで、新しいペンツールを追加できることが特徴のペイントアプリである。<br>
つまり、ユーザーが欲しいペンをプログラムを書くことで、欲しいペンを機能として組み込むことができる。</p>
<p>このWebアプリにAIによるツール生成が組み合わさったら面白いことになるんじゃなかろうか。</p>
<p>ちなみにソースコードは公開されているので、組み合わせることはできそうだ。後日やってみようと思う。</p>
<p>https://github.com/baku89/pentool</p>
<h2>橋本 麦</h2>
<p>このプログラマブルペンツールを作った、橋本麦さんは Google ストリートビューを利用したMV作成(group_inouのEYE)を行うなどしていて、面白いのでぜひいろんな作品を見て欲しい。</p>
<iframe
  frameBorder='0'
  src='https://www.youtube.com/embed/WSFeje8-4Vc?si=GQLIGTjLQvBM9vdZ'
  allowFullScreen={true}
  style={{
    width: '100%',
    height: 'auto',
    aspectRatio: '16 / 9',
  }}
  data-ratio='1.755485893416928'
></iframe>
