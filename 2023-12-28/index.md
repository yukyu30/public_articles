---
id: 67755fcec30fdb8001b7b2b2
title: 2023年に作ったプロダクト7つをまとめて振り返る
created_at: 2023-12-28T00:00:00.000Z
updated_at: 2025-01-01T15:32:27.106Z
---

<p>この記事は <a href="https://adventar.org/calendars/8634">🎅GMO ペパボエンジニア Advent Calendar 2023</a> の 24 日目の記事です。コロナになり執筆が遅れてしまいました...！！</p>
<div className='mt-8 w-full'>
  <iframe
    src='https://adventar.org/calendars/8634/embed'
    width='100%'
    height='500px'
    frameborder='0'
    loading='lazy'
  ></iframe>
</div>
<p>2023 年に作った個人プロダクトを紹介します。<br>
<a href="/activity">活動履歴ページ</a>にこれまでの活動をまとめています。</p>
<h2>今年つくったもの</h2>
<h3>hakuran</h3>
<ul>
<li>Zenn: <a href="https://zenn.dev/yu_9/articles/5c30a7401ca62c">ブログ内の文章を T シャツにする機能を作った</a></li>
<li>GitHub: <a href="https://github.com/yukyu30/hakuran-blog">yukyu30/hakuran-blog</a></li>
</ul>
<p>ブログ内の文章を T シャツにできる機能があるブログを作りました。<br>
Gatsby と SUZURI API を利用して作成しました。<br>
このころは ChatGPT で<a href="https://sensational-puffpuff-0189ed.netlify.app/proverb-that-does-not-exist/">サンプル記事</a>の生成をしているくらいで、開発にはそこまで活用していませんでした。</p>
<p>hakurun は、各々の素敵だと思う言葉が並ぶ様子が博覧会に似ていると感じたことから名付けました。<br>
ちなみに現在は稼働をし停止させてあります。</p>
<h3>Rust 製 ChatGPT Bot</h3>
<ul>
<li>Zenn: <a href="https://zenn.dev/yu_9/articles/737aca68c7fcd8">Rust で ChatGPT を利用した Discord Bot 作った</a></li>
<li>GitHub: <a href="https://github.com/yukyu30/chatgpt-bot-for-discord">yukyu30/chatgpt-bot-for-discord</a></li>
</ul>
<p>Rust で ChatGPT を利用した Discord Bot を作りました。<br>
Rust をつかった理由としては discord.py というライブラリが停止になり、他に使えるライブラリを探していたところ serenity を見つけました。Rust にも興味があったので Rust で作ることにました。<br>
現在は discord.py のメンテナンスが再開されているようです。</p>
<p>shuttle と呼ばれるプラットフォームにデプロイしていました。<br>
途中にアップデートで 30 分アクセスがないとスリープしてしまうようになったが、リリースノートをもとに常駐稼働をできるオプションを有効化する、環境変数の取り扱い方がいつもと異なるなど shuttle に振り回されていました。</p>
<h3>AITuber</h3>
<ul>
<li>Blog: <a href="https://archive.yukyu.net/posts/diary/2023/04/24/index">AITuber 備忘録</a><div className='my-8 w-full'>
  <iframe
    width='100%'
    src='https://www.youtube.com/embed/x2DxEJd9-28?si=-uLJb-8OrMyXI0Vx'
    title='YouTube video player'
    frameborder='0'
    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
    allowfullscreen
  ></iframe>
</div>
VC Clientと呼ばれるリアルタイムボイスチェンジャーが出てきた時に、これで自分の声をもったAITuberを誕生させられそうと思って、生み出しました。
</li>
</ul>
<p>全部のコメントに対して返信するのではなく、いくつかのコメントからピックアップして返信するような仕組みになっています。<br>
YouTube Live のコメントを取得、ChatGPT で返信を生成、VoiceVox で音声を生成、VC Client で音声変換という仕組みで動いています。</p>
<h3>チャットで SUZURI でグッズ作成</h3>
<div className='my-8 w-full'>
  <iframe
    width='100%'
    src='https://www.youtube.com/embed/mIQXjPEEStA?si=BG-3MR1r88l_GJpf'
    title='YouTube video player'
    frameborder='0'
    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
    allowfullscreen
  ></iframe>
</div>
ChatGPTのFunction Calling、SUZURI APIを使って対話的にSUZURIでグッズ作成できるようにしました。 上に移動してという指示に対してfunction
callingで座標を構造的に出力させ、そのパラメータを使いSUZURI APIへリクエストを送るということを行っています。
体験的にはそこまで良くはないですが、対話的にグッズを作れるのは面白かったです。
<h3>QuizBite(GPT-4 によるクイズ生成プラットフォーム)</h3>
<ul>
<li>Zenn: <a href="https://zenn.dev/yu_9/articles/cd31b6a904dcde">GPT-4 と LangChain で技術記事のクイズを生成するサイトを作った</a></li>
<li>SpeakerDeck: <a href="https://speakerdeck.com/yukyu30/arayurusaitowo-kuizunisurusaitowotukututa">あらゆるサイトを クイズにするサイトをつくった</a></li>
<li>サイト: https://quizbite.yukyu.net/about</li>
</ul>
<div className='my-8 w-full'>
  <iframe
    width='100%'
    src='https://www.youtube.com/embed/ZoWNuBn9iqA?si=x7PWrA00sR-hHQaZ'
    title='YouTube video player'
    frameborder='0'
    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
    allowfullscreen
  ></iframe>
</div>
GPT-4とLangChainでクイズ生成プラットフォームを作りました。 URLを入力することでそのサイトの記事をクイズにすることができます。
長い記事ではエラーになったり、そもそも稼働が安定してないなどの問題を抱えているので、今後改善していきたいです。
モバイルアプリもつくっていたのですが、申請が思いのほかめんどくさくて、開発者登録で終わっています。
<h3>shift uni converter</h3>
<div><div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 52.5%; padding-top: 120px;"><iframe title="【MacOS用】shift uni converter by 悠久 ( yukyu30 ) ∞ SUZURI" data-iframely-url="//cdn.iframe.ly/api/iframe?app=1&url=https%3A%2F%2Fsuzuri.jp%2Fyukyu30%2Fdigital_products%2F24192&key=878c5bef402f0b2911bf6d4ce6261abd" style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;" allowfullscreen></iframe></div></div><script async src="//cdn.iframe.ly/embed.js" charset="utf-8"></script>
<ul>
<li>
<p>note: <a href="https://note.com/yukyu30/n/n200d04187fda">「shift uni converter」を作りました : Synthesizer V への UST ファイルのインポートサポートツール</a></p>
<div className='my-8 w-full'>
  <iframe
    width='100%'
    src='https://www.youtube.com/embed/lX7x1O_gN5c?si=NvU8Dp6GAgmW3pdN'
    title='YouTube video player'
    frameborder='0'
    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
    allowfullscreen
  ></iframe>
</div>
ニッチなツールですが、USTファイルをshift-jisからutf-8に変換するツールを作りました。
</li>
</ul>
<p>UTAU という歌声合成ソフトで作成された UST ファイルは shift-jis でエンコードされているのですが、Synthesizer V という歌声合成ソフトでは utf-8 でエンコードされている必要があります。<br>
その間を取り持つためのツールです。</p>
<p>Tauri を使って開発のですが、なかなか体験が良かったです。<br>
PC のネイティブの機能を使うところは Rust でかいて、GUI などのフロントエンドは Next.js で書きました。<br>
ソフト自体は 3 日間でできました。</p>
<h3>「SUZURI Tools」</h3>
<ul>
<li>サイト: https://suzuri-tools.vercel.app/</li>
</ul>
<p>絶賛作成中なのですが、SUZURI API を活用したツールを作ることがあるのでそれらをまとめるサイトをつくりました。</p>
<p>現在は<a href="https://suzuri-tools.vercel.app/ads">SUZURI Ads</a>という配信などに表示する SUZURI の広告を作成するツールを公開しています。<br>
正式リリースはまだしていないので、URL の変更や破壊的変更が行われる可能性があります。</p>
<blockquote class="twitter-tweet" data-dnt="true" align="center"><p lang="ja" dir="ltr">配信画面にSUZURIのグッズをシュッと表示できるウィジェットを考えたが予想以上に場所をとるので、あまりよくなさそうだった<br>SUZURI APIで自分のショップのグッズ情報取得して、スライドショー的に表示するウェブページを作って、読み込ませてる <a href="https://t.co/Uuj72daR0G">pic.twitter.com/Uuj72daR0G</a></p>&mdash; yukyu (a.k.a ugo) (@yukyu30) <a href="https://twitter.com/yukyu30/status/1734264275894706513?ref_src=twsrc%5Etfw">December 11, 2023</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<p>Next.js、 SUZURI API を利用しています。<br>
続報は正式公開までお待ちください！</p>
<h2>まとめ</h2>
<p>完成度はまちまちですが 6 つのプロダクトと 1 人を生み出しました。2 ヶ月に 1 つくらいのペースで作っていたことになりますね。技術検証的な意味合いを含むものが多かったです。<br>
言語としては、Rust を書く機会が増えました。モバイル、Web、デスクトップなど異なるプラットフォームのアプリを作れたのも良かったです。</p>
<p>特に社内コンテストで入賞までは行かないものの、取り上げられたものもいくつかあるので、嬉しかったです。</p>
<p>今は便利な RSS リーダーを作りたいというアイデアがあります！来年はそれを作りたいです！</p>
