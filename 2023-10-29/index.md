---
id: 677561e0c30fdb8001b90e01
title: Kaigi on Rails 2023に行ってきた
created_at: 2023-10-29T00:00:00.000Z
updated_at: 2025-01-01T15:40:38.133Z
---

<p>2023年10月27日から28日にかけて開催された<a href="https://kaigionrails.org/2023/">Kaigi on Rails 2023</a>に行ってきました。</p>
<h2>セッション</h2>
<h3><a href="https://kaigionrails.org/2023/talks/gogutan/">seeds.rbを書かずに開発環境データを整備する</a></h3>
<p>開発環境のデータをCSVで出力して、それをインポートして開発環境データの整える方法についての話でした。<br>
CSVのインポート順番に依存して発生する外部キーの参照のエラーの解決策が面白かったです。<br>
Authorモデル、Bookモデルが有るとします。このとき、Bookモデルは<code>author_id</code>を外部キーとして持っています。<br>
先にBookモデルのCSVインポートを行うと、Authorモデルがないため、外部キーの参照エラーが発生します。<br>
そこで、エラーが発生した場合はインポートをスキップして、最後の実行するというようにすることで正しくインポートが終わるようにしていました。<br>
自分だったらインポートをする順番で配列を定義するとおもうので、賢い方法だなと思いました。</p>
<p>資料 : https://speakerdeck.com/gogutan/seeds-dot-rbwoshu-kazunikai-fa-huan-jing-detawozheng-bei-suru</p>
<h3><a href="https://kaigionrails.org/2023/talks/kokuyouwind/">APMをちゃんと使おうとしたら、いつのまにか独自gemを作っていた話</a></h3>
<p>DataDogを使用してAPM(Application Performance Management)を活用する方法についてのセッションでした。<br>
普段DataDogを使用していますが、APMはどのようにみて、どのようにしてパフォーマンスを改善していくのかという基本的なことも改めて学ぶことができました。<br>
APMで任意の区間のトレースを取得するためのgem「<a href="https://github.com/kokuyouwind/apm_traceable/">apm_traceable</a>」を使い、<br>
さらにAPMでのパフォーマンスチューニングを行う方法が話されていました。</p>
<p>資料 : https://slides.com/kokuyouwind/kaigi_on_rails_2023</p>
<h3><a href="https://kaigionrails.org/2023/talks/hirotea/">返金処理を通して学ぶ、カード決済電文の沼バトル</a></h3>
<p>カード決済について知識がないですが、興味があったので聞きました。<br>
カード決済の返金処理の大変さや難しさがを知ることができました。<br>
返金処理には<br>
全額返金や一部返金、さらには海外でも利用できるため海外事務手数料や為替、<br>
加盟店から送られてくる売上オーソリ、売上クリアリング、返金オーソリ、返金クリアリングの順番などを考慮する必要があることを知りました。<br>
複雑で難しそうとおもったのですが、そのおかげで僕らが24時間365日カード決済を利用できるのはこのような処理が実装されているからなんだなとありがたい気持ちになりました。</p>
<p>資料 : https://slides.com/kokuyouwind/kaigi_on_rails_2023</p>
<h2>少し違う観点でみたセッション</h2>
<h3><a href="https://kaigionrails.org/2023/talks/imadoki/">Multiple Databasesを用いて2つのRailsプロジェクトを統合する</a></h3>
<p>pixivノベルとpixivコミックのプロジェクト統合のお話でした。<br>
本来はMultiple Databases機能を用いて統合しているがテーマですが、<br>
自分が働いているSUZURIではグッズだけではなくデジタルコンテンツも扱うようになったため、<br>
商品だが性質の違うものをどのように扱うかという観点で聞いていました。<br>
特にコミックでは本の表紙を大きくした表示で、ノベルは本に関する説明に関心があるので本の表紙は小さくして、説明を表示するようにしているというのが参考になりました。<br>
自分達も商品の性質によって表示を変えることが必要なのではと思いました。</p>
<h2>イベント</h2>
<h3><a href="https://youtrust.connpass.com/event/295807/">Startup Drinkup at Kaigi on Rails 2023</a></h3>
<p>Kaigi on Rails 2023の2日目の終了後に開催されたmybestさん、ROUTE06さん、YOUTRUSTさんの共催によるDrinkupに参加してきました。<br>
RubyKaigiでお話しした方と再会できて、あれからどうですかや最近取り組んでいることなどについてお話しできました。たくさんの方とお話しできて楽しかったです。</p>
<h3>アフターパーティー</h3>
<p>2日目には公式のアフターパーティーがありました。<br>
型やエディタに関する話や、生成AIを使っていますかなどの話をしました。Copilotは使ってますかと聞いたところ、その場にいた全員が使っていてすでに結構<br>
普及しているんだなとおもました。</p>
<h2>スポンサーブース</h2>
<h3>mybestさん</h3>
<p>異なるコーヒーメーカーで入れたコーヒーを飲み比べることができました。<br>
同じ豆でもこんなにも味が違うんだなとわかりました。<br>
飲み比べしてどのコーヒーメーカーがmybestで一位か当てるクイズに答えて正解したのでくじを引いて当たったのでコーヒー豆をいただきました！</p>
<h3>B/43さん</h3>
<p>カード決済をしてその電文の番号でくじをするというものでした。電文の含まれている他のデータも見れて面白かったです。クジには外れてしまいましたがドリップコーヒーのパックをいただきました！</p>
<h2>おわりに</h2>
<p>業務に活かせそうな知見が多く、とても勉強になりました。<br>
また、たくさんの同年代の方ともお話しできて楽しかったです。<br>
自分もカンファレンスで発表できるように頑張りたいと思いました！</p>
