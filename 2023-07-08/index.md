---
id: 67756838c30fdb8001bcebfd
title: CTOA若手エンジニアコミュニティ勉強会#3に参加した #ctoawakate
created_at: 2023-07-08T00:00:00.000Z
updated_at: 2025-01-01T16:07:46.948Z
---

<p>CTO協会の若手エンジニアコミュニティで、勉強会に参加しました。内容としては、エンジニアリングに関することをテーマにしたLT会です。</p>
<h2>LTを聞いて</h2>
<p>8人と者の方が発表していました。LT会の運営を行なっていたため、LTは所々しか聞けませんでしたが、その中で印象的だった内容を書いておきます。</p>
<h3>Core Wev Vitals</h3>
<p>「Core Web Vitals を改善しよう」というLTを聞きました。<br/>
その中で<a href="https://web.dev/vitals/#core-web-vitals">Core Web Vitals</a> をCIで計測するための<a href="https://github.com/GoogleChrome/lighthouse-ci">lighthouse-ci</a> というツールが紹介されていました。</p>
<p>CIではローカル環境で計測が行われるため、リリース前にラボデータの測定を行い、パフォーマンスの変化を確認できて便利そうでした。<br/>
このブログのトップページを計測してみました。今後はCIを組み込んで、測定をしてみようと思います。</p>
<p><img alt="yukyu.netのCoreWebVitalsの計測値。Performanceが81, Accessibiilityが82, BestPracticesが83, SEOが92" src="/images/posts/2023-07-08/lighthouse.png"/></p>
<h3>WebRTC</h3>
<p>「SkyWayを使って、爆速で監視カメラアプリを作ってみた」というLTでは、<br/>
WebRTCの概要、そしてWebRTCを簡単に導入するための手段として、<a href="https://skyway.ntt.com/ja/">SkyWay</a>というサービスを紹介されていました。</p>
<p>使わなくなったスマホを活用するために、監視カメラアプリを作るのは面白いなと思いました。<br/>
実際にデモを見ましたがWebRTCを使うことで低遅延の映像表示が行えていました 👏</p>
<h2>懇親会</h2>
<p>懇親会では軽食を食べつつ、LTの感想を話したり、テストを書く文化をどうやったら作れるのかという話をしました。<br/>
他にも、Raycast、Arcなど便利ツールの話をしていました。</p>
<h2>感想</h2>
<p>Twitterをフォロワーさんが、自分のツイートからイベントを知って参加していて、とても嬉しかったです。<br/>
ノリと勢いで登壇した言っていた方がいました。この会では登壇、発表経験を積んでもらい、他の登壇の足がかりとなるような場を目標にしていたので、とても嬉しかったです。</p>
