---
id: 67755d98c30fdb8001b6c554
title: BuriKaigi2024に参加した
created_at: 2024-01-24T00:00:00.000Z
updated_at: 2025-01-01T15:22:26.933Z
---

<p>2024/01/20 に開催された <a href="https://burikaigi.dev/">BuriKaigi2024</a> に参加しました。</p>
<p>その中で印象に残ったセッションを書いて行きます。</p>
<h2>何も知らない課金システムを移行した話</h2>
<iframe '0px',="" '100%',="" '12px',="" '560="" '6px',="" 'auto',="" 'padding-box="" 'rgba(0,="" 0,="" 0.1)',="" 0.2)="" 0px="" 315',="" 40px',="" 5px="" allowfullscreen="true" aspectratio:="" background:="" border:="" borderradius:="" boxshadow:="" class="speakerdeck-iframe" data-ratio="1.7777777777777777" frameborder="0" height:="" margin:="" padding-box="" padding:="" rgba(0,="" src="https://speakerdeck.com/player/45038a5aab274d98a894e53309bb8561" style="{{" title="何も知らない課金システムを移行した話" width:="" }}=""></iframe>
<p>決済基盤を移行する際の苦労やそれをどのように解決していったのかが話されていました。<br/>
想定していないデータの重複、不足などによるデータ migration での苦労が印象に残りました。<br/>
問題が発生したら切り戻しを行うこできるように並行運用をしておく、フラグでの段階的リリースなど決済基盤をとめないための工夫も参考になりました。</p>
<h2>OG 画像の動的生成を突き詰める</h2>
<iframe '0px',="" '100%',="" '12px',="" '560="" '6px',="" 'auto',="" 'padding-box="" 'rgba(0,="" 0,="" 0.1)',="" 0.2)="" 0px="" 315',="" 40px',="" 5px="" allowfullscreen="true" aspectratio:="" background:="" border:="" borderradius:="" boxshadow:="" class="speakerdeck-iframe" data-ratio="1.7777777777777777" frameborder="0" height:="" margin:="" padding-box="" padding:="" rgba(0,="" src="https://speakerdeck.com/player/b075ddecde234f50b1feee22887ae455" style="{{" title="もう一歩進めたい OG画像の動的生成" width:="" }}=""></iframe>
<blockquote>
<p>Web 技術で作れることと、Web のように作ることを混同しない方がよい</p>
</blockquote>
<p>という言葉が心に残りました。<br/>
OG は Web サイトと異なり、サイズの決まっている画像なので、視覚錯覚や細かなマージンの調整をして画像としてデザインをやるべきという趣旨の内容でした。<br/>
確かにいまの SUZURI の OG は Web としてデザインされているので、画像としてデザインしていきたいなと思いました。</p>
<p>せっかくプログラミングを使うのであれば、動的な画像生成を行おうという話もありました。</p>
<ul>
<li>画像から平均色を取ってグラデーションに利用する</li>
<li>いくつかの背景画像を準備して、ランダムに利用する</li>
</ul>
<p>などの手法が紹介されていました。そのなかでも特に面白かったのは svg を利用し、背景パターンを生成するという手法です。<br/>
vercel/og が中間状態として svg を利用しています。そこで svg を出し分ける jsx を使って、背景パターンを自動生成する手法でした。<br/>
とても作るのが面白そうだったので、このブログでも og の背景パターン自動生成をおこなってみようと思います。</p>
<p>自分が働いている SUZURI では<br/>
背景色の動的決定がすでに実装されているので、よく考えてたら、よくできているなと思いました。<br/>
<img alt="" src="/images/posts/2024-01-20/og.png"/></p>
<h2>2023 年のフロントエンド振り返りと 2024 年</h2>
<iframe '0px',="" '100%',="" '12px',="" '560="" '6px',="" 'auto',="" 'padding-box="" 'rgba(0,="" 0,="" 0.1)',="" 0.2)="" 0px="" 319',="" 40px',="" 5px="" allowfullscreen="{true}" aspectratio:="" background:="" border:="" borderradius:="" boxshadow:="" classname="speakerdeck-iframe" data-ratio="1.755485893416928" frameborder="0" height:="" margin:="" padding-box="" padding:="" rgba(0,="" src="https://speakerdeck.com/player/3763ef6bf4dd4d0fa49e97c07e31d3b3" style="{{" title="2023年のフロントエンド振り返りと2024年" width:="" }}=""></iframe>
<p>2023 年のフロントエンド振り返りとして、2024 年はどうなっていくという予想が話されていました。追加された CSS と全ブラウザでサポートされた CSS<br/>
から HeadlessUI や shadcn/ui などの話がありました。</p>
<p>フロントエンドの技術的な流れが早いので、一年の主要なトピックをキャッチアップすることできました。<br/>
ブラウザ間での html,css,WebAPI などの互換性が尺度を示す Baseline が登場したことを知りました。<br/>
MDN などですでに表示されているみたいなので今後業務で使う技術がある場合は Baseline を確認してみようと思いました。</p>
<h2>1,000 年後の未来人に届く Web サイトを作りたい！</h2>
<iframe '0px',="" '100%',="" '12px',="" '560="" '6px',="" 'auto',="" 'padding-box="" 'rgba(0,="" 0,="" 0.1)',="" 0.2)="" 0px="" 315',="" 40px',="" 5px="" allowfullscreen="true" aspectratio:="" background:="" border:="" borderradius:="" boxshadow:="" class="speakerdeck-iframe" data-ratio="1.7777777777777777" frameborder="0" height:="" margin:="" padding-box="" padding:="" rgba(0,="" src="https://speakerdeck.com/player/dcb0e1675aba4ae194715c7a78e9205f" style="{{" title="1,000年後の未来人に届くWebサイトを作りたい！" width:="" }}=""></iframe>
<p>1,000 年後も残る Web サイトを作るにはというテーマで<br/>
記憶メディアの耐久性、Web3、国会図書館、Web Archive などさまざまな Web サイトを残す方法が提案されていました。<br/>
とくに Web Archive を支える WARC 形式というフォーマットやクローラー、Wayback と呼ばれる WARC ファイルの<br/>
ビューワーなど関連する技術が紹介されていました。</p>
<p>Web Archive はサイトを保存しているだけというくらいの認識でしたが、関連する技術について学ぶことができました。<br/>
自分はこのサイトを本にして自費出版して、国会図書館に納本したいです。</p>
<h2>Studio の裏側</h2>
<p>生成 AI をデザインフローに組み込むためにはどうすべきかというテーマの話がありました。<br/>
自分が印象に残った内容は以下の通りです。</p>
<ul>
<li>生成 AI を使えるように組み込むだけでは、一過性の驚きで終わってしまう
<ul>
<li>実際にデザインフローでのインサイトを発見し、その支援をするようなものを作るのが大事</li>
</ul>
</li>
<li>生成 AI ではユーザーが主導権を持っておくことが大事
<ul>
<li>copilot のようなあくまでもユーザーが主体で寄り添っていくようなものが良い</li>
</ul>
</li>
</ul>
<h2>新卒研修で取り組んだスクラム開発で苦戦したところと学んだこと</h2>
<iframe '0px',="" '100%',="" '12px',="" '560="" '6px',="" 'auto',="" 'padding-box="" 'rgba(0,="" 0,="" 0.1)',="" 0.2)="" 0px="" 315',="" 40px',="" 5px="" allowfullscreen="{true}" aspectratio:="" background:="" border:="" borderradius:="" boxshadow:="" classname="speakerdeck-iframe" data-ratio="1.7777777777777777" frameborder="0" height:="" margin:="" padding-box="" padding:="" rgba(0,="" src="https://speakerdeck.com/player/29aa4b8e818e4bbeb92f7f8320ea96c9" style="{{" title="新卒研修で取り組んだスクラム開発で苦戦したところと学んだこと" width:="" }}=""></iframe>
<p>自分のチームでもスクラムを取り入れていこうとしているので、どんなところに苦戦して、どのように解決していったのかが実例をもとに<br/>
話されていて今後スクラム開発をしていく上で気をつけていくべきところがわかりました。<br/>
参考になりました。</p>
<h2>エンジニアとして「事業」作りに関わるということ</h2>
<iframe '0px',="" '100%',="" '12px',="" '560="" '6px',="" 'auto',="" 'padding-box="" 'rgba(0,="" 0,="" 0.1)',="" 0.2)="" 0px="" 315',="" 40px',="" 5px="" allowfullscreen="{true}" aspectratio:="" background:="" border:="" borderradius:="" boxshadow:="" classname="speakerdeck-iframe" data-ratio="1.7777777777777777" frameborder="0" height:="" margin:="" padding-box="" padding:="" rgba(0,="" src="https://speakerdeck.com/player/458467ec60f6415aa8568c9905e046c3" style="{{" title="エンジニアとして「事業」作りに関わるということ" width:="" }}=""></iframe>
<p>少人数のチームで動いています。そのため、チームでできることは限られています。その中で<br/>
どのようにプロダクトの価値を検証して、改善していくかが話されていました。<br/>
品質のグラデーションという自分が初めて触れる概念で、自分が苦手な部分だなと思いました。<br/>
あれもこれもやったら親切にかなと思ってしまうので、やらないことやることを明確にして、これはしないなどの判断をして<br/>
リリースと仮説検証のサイクルを回していくことが大事だなと思いました。</p>
<h2>おわりに</h2>
<p>初めて BuriKaigi に参加しました。<br/>
RubyKaigi と異なり幅の広い技術が話されているので、自分が普段キャッツアップできていない領域の話が聞けて楽しかったです。<br/>
来年も参加したいです！</p>
