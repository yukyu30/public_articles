---
id: 678158d49df15a3e6d2c8c3c
title: いままでSUZURIでやってきたこと
created_at: 2025-01-11T08:50:25.174Z
updated_at: 2025-01-11T09:17:25.477Z
---

<p>2022/08/17から2024/12/31までGMOペパボ株式会社SUZURI事業部で働いていました。<br/>
2025年からはSUZURI事業部を離れ、メタバース推進室へ異動しています。<br/>
同時にエンジニアリングリードにもなりました。</p>
<p>そんな一つの節目であるこのタイミングで、今までの総括をしようと思います。<br/>
<a href="https://yukyu.net/posts/2023-12-22">新卒Webエンジニアとしての2年を振り返る</a>をベースに、3年目に追加する形となります。</p>
<h2>新卒入社当時</h2>
<ul>
<li>Rails でアプリケーションは作ったことはある</li>
<li>React などフロントエンドは知っているが、馴染みはない</li>
</ul>
<h2>研修</h2>
<p>フロントエンドから k8s まで幅広く行いました。<br/>
特に印象に残っているのがフロントエンド研修です。<br/>
自分たちのグループは忍者スリスリくんワクワクおえかきランドという Web アプリケーションを作りました。<br/>
その後、SUZURI で正式に<a href="https://suzuri.jp/surisuri_land">忍者スリスリくんワクワクおえかきランド</a>としてリリースされました。<br/>
リリースのためブラッシュアップをしたエンジニア、デザイナーさんありがとうございました！</p>
<ul>
<li><a href="https://tech.pepabo.com/2022/07/21/12th-datacenter-tour/">新卒研修でデータセンターを見学しました</a></li>
<li><a href="https://tech.pepabo.com/2022/07/14/12th-training-frontend/">新卒研修で最高の Web サービスを作りました</a></li>
</ul>
<h2>SUZURI事業部 プロダクトチーム 2022/08/17 - 2023/07/31</h2>
<p>SUZURI 事業部 プロダクトチーム配属後は、以下のようなことをしてきました。</p>
<ol>
<li>文言修正や、いくつかのページでの多言語対応といったGood First Issue</li>
<li>社内向けの機能開発、サブアプリケーションの開発</li>
<li>アイテムのサイズ追加</li>
<li>クーポンやショップのカスタマイズ機能</li>
<li>生成AIを活用した機能開発</li>
<li>「じゃがりこ」パッケージコンテスト</li>
</ol>
<p>ステップアップする形で、影響範囲が広く、より密な連携が必要な施策を担当するようになりました。その後は、生成AIを活用した機能開発、やSUZURIを活用したコンテストといった、前例がなく0から考える施策も行いました。</p>
<ul>
<li><a href="https://yukyu.net/posts/2022-09-08">OJTが始まってから3週間</a></li>
<li><a href="https://yukyu.net/posts/2022-10-29">エンジニアとして配属されてから二ヶ月が経った</a></li>
<li><a href="https://yukyu.net/posts/2023-09-03">SUZURIへの配属から1年経った</a></li>
</ul>
<h3>発注機能での改良</h3>
<p>最初に担当した大きな施策が発注機能の改良でした。</p>
<p>発注機能における人的ミスを最小化できるようにするような改良を行いました。<br/>
発注に関する機能であるためほとんど表には出ませんが、毎日利用される機能なのでいまでも動いています。</p>
<p>SUZURI で買った商品がどのようなフローで発注され、生産されているか全体像を知ることができました。</p>
<h3>デザイン OG 追加</h3>
<p>デザインページ(例: https://suzuri.jp/surisurikun/designs/13021630 )の OG<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>を追加しました。</p>
<p><img alt="デザインOGの例" src="Designsfromyukyunextblog.png"/></p>
<p>デザインの色に合わせて、背景のグレーを淡色、濃色に変える処理も実装しました。</p>
<h3>スマホケースの iPhone14 のサイズ追加</h3>
<p>自分が配属されて少し経ってから iPhone14 が発売されました。<br/>
そこで既存のスマホケース各種に iPhone14 サイズを追加を担当しました。</p>
<blockquote align="center" class="twitter-tweet" data-dnt="true"><p dir="ltr" lang="ja">みなみなサマ大変お待たせ申しマシた！！<br/><br/>すべてのスマホケースがiPhone 14シリーズに対応しマシた📲✨ <br/><br/>🆕追加機種<br/>・iPhone 14<br/>・iPhone 14 Plus<br/>・iPhone 14 Pro<br/>・iPhone 14 Pro MAX<br/><br/>▼人気のスマホケースを見に行く🚀<a href="https://t.co/tbcQkff6ef">https://t.co/tbcQkff6ef</a> <a href="https://t.co/QH6BIt8md3">pic.twitter.com/QH6BIt8md3</a></p>— SUZURI公式忍者 忍者スリスリくん (@suzurijp) <a href="https://twitter.com/suzurijp/status/1594568491092172800?ref_src=twsrc%5Etfw">November 21, 2022</a></blockquote>
<script async="" charset="utf-8" src="https://platform.twitter.com/widgets.js"></script>
<p>SUZURI には全く新しいアイテムを追加する「アイテム追加」と既存のアイテムにサイズを追加する「サイズ追加」があります。<br/>
アイテム追加はアップロードされた画像をアイテムに合成する実装が必要となります。</p>
<p>今回はサイズ追加だったので、画像合成の処理を書くことはせず、合成領域の位置調整などを行いました。<br/>
実際のグッズとの合成画像の差異が少なくなるよう調整をシビアにやっていくため、根気が必要な施策でした。</p>
<p>普段の開発とは違う言葉や概念が出てくるのでその都度理解していくのが難しかったです。</p>
<h3>アイテム別クーポン機能</h3>
<p>利用できるアイテムを限定したクーポン機能を開発しました。</p>
<p>アイテムを限定することで、利用時に対象アイテムがあるかどうかを判断する処理を入れ、<br/>
返金時においては対象アイテムだけでの値引き額の按分を行うなどの実装も行いました。<br/>
返金の要件を理解することが大変でした。</p>
<p>最終的に按分の処理は綺麗に実装できたので成長を感じた施策でした。</p>
<h3>イチオシ機能</h3>
<p>自分のショップにてイチオシのグッズを先頭に持ってきて固定できるイチオシ機能の開発を行いました。</p>
<p><img alt="イチオシ機能の例" src="Ichioshi(1).png"/></p>
<p>今までの開発はサーバーサイドの開発で Rails がメインで、既存のコードがあり、変更を加えることが多かったです。<br/>
イチオシ機能では GraphQL と React、Rails を使った開発を行いました。</p>
<p>GraphQL はこの時初めてしっかりと触りましたが、mutation? query?と頭の中が整理ができていませんでした。当時は REST API を利用する機会が多く、GraphQL 自体を概念として理解することが難しかったのだと思います。<br/>
この時は苦手意識がありましたが、現在は書籍を読んだり、GraphQL に関わる実装したことで苦手意識は無くなりました。</p>
<ul>
<li><a href="https://suzuri.jp/media/journal_ichioshi/">マイショップでアイテムを「イチオシ」できるようになりました</a></li>
</ul>
<h3>生成 AI を使った商品文生成機能</h3>
<p>OpenAI API を利用して、商品文を生成する機能を開発しました。</p>
<p>SUZURI で OpenAI API を使うのが初めてであったため、プロンプトの追加や生成などを行うような API Client を作成しました。<br/>
趣味で<a href="https://zenn.dev/yu_9/articles/737aca68c7fcd8">ChatGPT を利用した Discord Bot を開発</a>していたこともあり、API の仕様を理解して中で施策を始めることができました。</p>
<p>SNS でも面白い商品文がシェアされていて、ユーザーの反応が直に見れる CtoC サービスの良さを実感することができる施策でした。</p>
<p>同期ディレクターのhermanとは、この施策から、「じゃがりこ」パッケージデザインコンテスト、デジタルコンテンツ、メタバース推進室と同じ仕事をするようになりました。</p>
<ul>
<li><a href="https://zenn.dev/yu_9/articles/737aca68c7fcd8">Rust で ChatGPT を利用した Discord Bot 作った</a></li>
</ul>
<h3>スリスリ AI チャット</h3>
<p>2 日間の<a href="https://hr.pepabo.com/report/2023/04/06/8730">開発合宿</a>で作成したアプリケーションをブラッシュアップして<a href="https://chat.suzuri.jp/">スリスリ AI チャット</a>としてリリースしました。<br/>
SUZURI 公式忍者のスリスリくんとチャットができ、さらに商品検索が行える機能です。</p>
<p>どのように実装されているかなどはテックブログの<a href="https://tech.pepabo.com/2023/09/15/introducing-surisuri-ai-chat/">AI チャットで商品検索 | GPT-3 と LangChain 活用</a>に書かれています。</p>
<p>LangChain とよばれるライブラリと Python を使い実装しました。LangChain に関する日本語の記事は少なく、アップデートも頻繁にあるためドキュメントを読んで実装を進めていきました。<br/>
普段の業務では使わない言語とライブラリを使うので、ドキュメントや Issue を読んだりと普段より多くの情報を漁りながら開発を進めました。</p>
<p>OJT をしてくれたエンジニアの先輩と、hermanで進めた施策でした。思い出深い施策です。</p>
<ul>
<li><a href="https://hr.pepabo.com/report/2023/04/06/8730">テーマは"AI で「人類のアウトプットを増やす」" 過去最多！？の 84 名が参加！「お産合宿 2023」</a></li>
<li><a href="https://suzuri.jp/media/journal-surisuri-ai-chat-beta/">AI（ChatGPT）を搭載したスリスリくんと会話が楽しめる「スリスリ AI チャット（β）」を公開しました！</a></li>
<li><a href="https://tech.pepabo.com/2023/09/15/introducing-surisuri-ai-chat/">AI チャットで商品検索 | GPT-3 と LangChain 活用</a></li>
</ul>
<h3>「じゃがりこ」パッケージコンテスト</h3>
<p>じゃがりこパッケージコンテストのアプリケーションの開発を行いました。<br/>
<img alt="Jagarico(1).png" src="Jagarico(1).png"/></p>
<p>「じゃがりこ」のパッケージの画像合成機能を中心に、画像をアップロードからコンテスト応募までの全機能の開発を行いました。</p>
<p>画像合成の処理を実装するのは初めてでしたが、画像合成に関するドキュメントが整っていたので、ドキュメントとコードを読み解きながら実装を進めることができました。</p>
<p>画像合成サーバーへのじゃがりこ追加や、コンテストとしての要件を満たす機能をもつアプリケーションの開発は、小さなSUZURIを構築する規模の開発であるため、SUZURI のエンジニアメンバーに相談や質問をしながら、開発を行いました。</p>
<p>また、社内外で多くの方とやり取りを行うため、仕事の進め方やコミュニケーションなど技術以外の部分でも多くのことを学ぶことができました。</p>
<p>コンテストは、予想を上回る応募数となりました。受賞作品の一部はパッケージになり、オフィスの下のコンビニでも購入できました。</p>
<ul>
<li><a href="https://suzuri.jp/lp/jagarico-dream">あたいも有名になりたーい!"じゃがりこ"ドリーム 〜あなたのアイデアが"じゃがりこ"に!? "じゃがりこ"パッケージデザインコンテスト〜</a></li>
<li><a href="https://creatorzine.jp/article/detail/4749">"じゃがりこ"と SUZURI のパッケージデザインコンテストが好調 背景から見えたクリエイターコラボのヒント</a></li>
</ul>
<h2>SUZURI事業部 デジタルコンテンツチーム 2023/08/01 - 2024/02/29</h2>
<p>じゃがりこパッケージデザインコンテストが無事始まり、一区切りついたタイミングで、デジタルコンテンツチームに配属になりました。</p>
<p>主にやってきたことは、以下のような内容です。</p>
<ul>
<li>デジタルコンテンツ検索機能</li>
<li>デジコンOG</li>
<li>デジタルコンテンツへのタグ付け機能</li>
<li>サブカテゴリ追加・バーチャルファッション関連のページ追加</li>
<li>3Dグッズ作成機能</li>
<li>バリエーション販売機能</li>
</ul>
<p>検索やタグなどグッズにはあるがデジコンにはない機能開発をすすめ、その後、バーチャルファッション特化したサブカテゴリ、ページ追加、3Dグッズ作成機能などの開発をしました。自分自身、デジタルコンテンツを販売しているので、こういう場合も考慮しておかないとかも、こういう機能があると良いかもと提案することが増えました。</p>
<p>3Dグッズ作成機能をリリースしたのち、一時的にSUZURIを離れ、配信支援サービス Alive Studioの立ち上げに参加しました。自分自身、自身のアバターでYouTubeの配信をたまにやっていたため、配信の準備、ハードルというものは理解しており、すっと開発に参加できました。</p>
<p>その後は、SUZURIのバリエーション販売機能を開発しました。デジタルコンテンツチームのエンジニアが一人増えたため、バックエンド、フロントエンドと行った感じで役割分担をして進めていきました。</p>
<h3>デジタルコンテンツ検索機能</h3>
<p>デジタルコンテンツを検索する機能を開発しました。<br/>
<img alt="実際の検索画面" src="DigitalSearch.png"/></p>
<p>デジタルコンテンツでは<a href="https://github.com/ankane/searchkick">Searchkick</a>を導入して、検索を行えるようにしました。<br/>
そのため、Index 作成・更新処理の実装、Index するデータの定義、検索 API の実装、検索ページの追加など 0 から実装を行いました。</p>
<p>自分が欲しいものへアクセスできる体験はとても良いので、検索に関する知識をつけていきたいと思いました。</p>
<h3>デジコン OG</h3>
<p>デジタルコンテンツのの OG<sup class="footnote-ref"><a href="#fn1" id="fnref1:1">[1:1]</a></sup>を追加しました。</p>
<blockquote align="center" class="twitter-tweet" data-dnt="true"><p dir="ltr" lang="ja">SUZURIでデジタルコンテンツを<br/>販売中のクリエイターさんにお知らせ📣<br/><br/>アイテムURLをペタっとSNSに貼り付けて投稿すると、「いい感じ」のアイテム画像が表示されるようになりマシた🎉<br/><br/>ご自身のSNSでアイテムを、ﾋﾞｬｽﾋﾞｬｽ紹介してクレよな👀<br/><br/>「いい感じ」の画像👇<a href="https://t.co/DV3C0khaBh">https://t.co/DV3C0khaBh</a></p>— SUZURI公式忍者 忍者スリスリくん (@suzurijp) <a href="https://twitter.com/suzurijp/status/1730829151421034673?ref_src=twsrc%5Etfw">December 2, 2023</a></blockquote>
<script async="" charset="utf-8" src="https://platform.twitter.com/widgets.js"></script>
<p>施策としてはやる予定がなかったのですが、OG を追加したかったので試しに実装したものを見せたところ、ブラッシュアップして、リリースされることになりました。<br/>
当時のX での変更を鑑みて、サムネイルと商品の説明を入れるといったスタイルになりました。</p>
<h3>デジタルコンテンツへのタグづけ機能</h3>
<p>デジタルコンテンツへのタグをつける機能を実装しました。<br/>
文字を入力したら既存のタグから、サジェストする機能や、タグでのデジタルコンテンツ検索などをも実装しました。<br/>
タグに紐づいたデジコンの個数カウントを行わなくて済むように、実装しました。</p>
<p><img alt="SCR-20250111-oomu.png" src="SCR-20250111-oomu.png"/></p>
<h3>バーチャルファッション関連のページ追加</h3>
<p>バーチャルファッションへの取り組みを進めてくなかで、バーチャルファッションに特化したページの作成を行いました。これに伴い、サブカテゴリの追加も行いました。</p>
<p><img alt="SCR-20250111-oqsm.jpeg" src="SCR-20250111-oqsm.jpeg"/></p>
<p>この施策を行う前から、サブカテゴリの追加したいねという話があったため、「もし、サブカテゴリを追加するなら」という話を事前にエンジニアでしていたため、方針がある程度決まっており、短期間でリリースすることができました。</p>
<p>自分は別の施策で動いていたため、他のエンジニアに依頼し、自分は進行管理やレビューで関わっていました。</p>
<h3>3Dグッズ作成機能</h3>
<p>画像をアップロードでTシャツが販売できるというSUZURIの良さを、バーチャルファッションでも実現するための機能です。正式公開版のリリースにあわせて、<a href="https://suzuri.jp/surisurikun/digital_products/53046">墨澄というアバターもSUZURIで配布</a>しました。<br/>
画像から3DモデルのTシャツを販売できます。<br/>
2回に分けてリリースを行いました。</p>
<ul>
<li>先行公開版は、缶バッジのみで、販売は出来上がった3Dデータを手動でSUZURIアップロード</li>
<li>正式公開版は、缶バッジ、Tシャツの2種類で、3Dモデルは自動的にデジタルコンテンツで販売開始<br/>
<img alt="SCR-20250111-pzli.png" src="SCR-20250111-pzli.png"/><br/>
<img alt="墨澄3Dグッズ作成ツール.gif" src="%E5%A2%A8%E6%BE%843D%E3%82%AF%E3%82%99%E3%83%83%E3%82%B9%E3%82%99%E4%BD%9C%E6%88%90%E3%83%84%E3%83%BC%E3%83%AB.gif"/></li>
</ul>
<p>3Dモデルを扱うWebページについて考えたり、3Dモデル合成サーバーの実装などを行いました。詳しい話は、BuriKaigi2025で話します。</p>
<ul>
<li><a href="https://suzuri.jp/lp/3d-badge">オリジナル3Dグッズをつくろう</a></li>
<li><a href="https://lp.suzuri.jp/3d-t-shirt">3Dグッズ作成ツール &amp; オリジナルアバター『墨澄』をリリース </a></li>
<li><a href="https://yukyu.net/posts/2024-05-12">入社前から考えていた機能を実装した</a></li>
<li><a href="https://yukyu.net/posts/2024-07-17">3Dグッズをリリースしました</a></li>
</ul>
<h3>バリエーション販売</h3>
<p>データマイグレーションを伴う、大きな開発でしたが、無停止で完了できました。<br/>
データマイグレーションのおおよそは、自分以外のエンジニアが進めていました。自分が苦手なことであるためとても助かりました。<br/>
自分はフロントエンドやGraphQLの開発が多かったです。決済する値段も変えるといった処理もあり、会計に関わってくるため慎重な実装とリリースで進めていきました。</p>
<p>無料版と支援版の使い分けができるようになって嬉しいです！</p>
<p><img alt="SCR-20250111-pacd-2.jpeg" src="SCR-20250111-pacd-2.jpeg"/><br/>
画像のショップは自分は関係ありません。</p>
<h2>事業部を超えてやったきたこと</h2>
<h3>新卒エンジニア研修の企画</h3>
<p>新卒のエンジニアの企画をしました。<br/>
カリキュラムの構築、講師のアサイン、スケジュール調整などを行いました。<br/>
振り返ると構築や調整が遅くなり、アサインから実施までタイトなスケジュールになったので、反省点ばかりです。社内イベントのお産合宿(開発合宿)も研修のカリキュラムとして組み込み、1年先輩のエンジニアと参加してもらったことで、1年後にどんなエンジニアになっているかをイメージしてもらうことができたのが良かったです。</p>
<h3>Alive Studioの立ち上げ</h3>
<p>一時的にSUZURIを離れ、AliveStudioへの立ち上げに参加しました。</p>
<p>技術スタックやメンバーがガラッと変わりました。ロゴのデザインについてデザイナーとも話し合ってたりと、新規サービスならではの楽しいことが多かったです。</p>
<p>これを機に、さまざまな人との関わりが増えたことが一番大きな変化でした。</p>
<p><a href="https://yukyu.net/posts/2024-10-07">誕生日を迎えた &amp; Alive Studioのリリース</a></p>
<h3>P-1グランプリ</h3>
<p>社内プレゼン大会 P-1グランプリにhermanとメタバース戦略室というチーム名を名乗って出ました。この時、特に異動は決まっていませんでした。</p>
<p>どんなプレゼンをしたはお伝えできませんが、審査員特別賞をいただきました。</p>
<h2>おわりに</h2>
<p>おわりにを長く書くと、お別れみたいになるのでそんなに書きません！</p>
<p>SUZURIは3DグッズやバーチャルファッションなどVR SNSとの相性が良いため、今後も何らかの形で関わるのだろうなと思っています。その時にはこれからもよろしくお願いします！！</p>
<h2>他の記事</h2>
<ul>
<li><a href="https://tech.pepabo.com/2022/07/21/12th-datacenter-tour/">新卒研修でデータセンターを見学しました</a></li>
<li><a href="https://tech.pepabo.com/2022/07/14/12th-training-frontend/">新卒研修で最高の Web サービスを作りました</a></li>
<li><a href="https://yukyu.net/posts/2022-09-08">OJTが始まってから3週間</a></li>
<li><a href="https://yukyu.net/posts/2022-10-29">エンジニアとして配属されてから二ヶ月が経った</a></li>
<li><a href="https://yukyu.net/posts/2023-09-03">SUZURIへの配属から1年経った</a></li>
<li><a href="https://yukyu.net/posts/2023-12-22">新卒Webエンジニアとしての2年を振り返る</a></li>
<li><a href="https://hr.pepabo.com/interview/2023/12/15/9386">“ゼロから任される” SUZURIの新卒2年目コンビに話を聞いてみました</a></li>
<li><a href="https://yukyu.net/posts/2024-10-07">誕生日を迎えた &amp; Alive Studioのリリース</a></li>
<li><a href="https://yukyu.net/posts/2024-05-12">入社前から考えていた機能を実装した</a></li>
<li><a href="https://yukyu.net/posts/2024-07-17">3Dグッズをリリースしました</a></li>
<li><a href="https://tech.pepabo.com/2024/09/03/2024-engineer-training/">2024年度新卒エンジニア研修を実施しました! - Pepabo Tech Portal</a></li>
</ul>
<hr class="footnotes-sep"/>
<section class="footnotes">
<ol class="footnotes-list">
<li class="footnote-item" id="fn1"><p>URL を Twitter や LINE などでシェアしたときに表示される画像のこと <a class="footnote-backref" href="#fnref1">↩︎</a> <a class="footnote-backref" href="#fnref1:1">↩︎</a></p>
</li>
</ol>
</section>
