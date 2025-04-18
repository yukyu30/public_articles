---
id: 677577edc30fdb8001c50927
title: OJTが始まってから3週間
created_at: 2022-09-08T00:00:00.000Z
updated_at: 2025-01-01T17:14:27.085Z
---

<p>今年の4月からGMOペパボでエンジニアとして働いています。</p>
<h2>研修が終わりプロダクトに直接携わる</h2>
<p>エンジニア研修が終わり、すべての研修を終えました。<br>
8月18日からはそれぞれ事業部に配属され、実際に業務を始めました。</p>
<p><strong>研修に関する記事</strong><br>
https://.pepabo.com/2022/07/26/web3-conference-tokyo-2/<br>
https://.pepabo.com/2022/07/22/tdd-shop-2022/<br>
https://.pepabo.com/2022/07/21/12th-datacenter-tour/<br>
https://.pepabo.com/2022/07/14/12th-training-frontend/<br>
<a href="./2022-04-08">社会人になって1週間</a><br>
<a href="./2022-06-01">GTB振り返り</a></p>
<h2>OJT</h2>
<p>配属後のOJTでは、最初に開発環境の構築や、必要なツールのアカウント作成等を行いながらツールが何のために使われてるのか把握し、プロダクト開発に必要な基礎知識を学びました。</p>
<p>その後は、以下のようなgood first issueに取り組みました。（どこまで言ってもいいのかわからないので結構ぼかして書きます）</p>
<ul>
<li>日本語のみのページを翻訳して英語にも対応する(i18n <sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>)</li>
<li>管理画面における新機能の実装</li>
</ul>
<h3>研修と違ったところ</h3>
<h4>既存のコードを理解して、開発する</h4>
<p>プロダクトのコードに触れ、どこにどんなコードが書かれているかの学びつつ、既存のコードを参考に機能の実装をしていきました。研修では、一から作ることが多かったので、今あるコードを理解し、実装するのは戸惑いました。<br>
先輩の助言や大学の研究で既存のコードをもとに開発を進めて行くという経験を活かし、実装の流れを掴むことができました。</p>
<h4>リリース作業</h4>
<p>研修ではローカルで動かすだけだったり、mainブランチにプッシュしたら自動的にデプロイされるので、しっかりとしたリリース作業は行ったことがないです。<br>
検証環境で実際に動作を確認して、本番環境にリリースするといったリリース作業を行いました。<br>
英語対応のリリース作業中、検証環境で翻訳漏れを見つけました。それを修正するためのブランチを切って、検証環境に取り込むという事も行いました。本来であれば、問題ない状態でリリース作業を行うべきですが、早い段階で問題があった時の対応も学べたのでそれはそれで良しということで...</p>
<h4>ユーザーさんがいる</h4>
<p>当たり前ですが、サービスを利用してくださるユーザーさんがいます。自分で作った個人サービスの場合、ユーザーは自分か友人なのでバグや障害でデータが復旧できなくても問題にはなりません（もちろんデータを復旧できるほうが良い）。<br>
会社で運営している以上、そのようなことはあってはならないので、自分の書いたコードの確認やリリース作業はとても慎重になりました。コードを書いてからもこれで本当に正しいのかという納得するまでに時間が掛かりました。<br>
管理画面における新機能実装では、新しくテーブルを作り、バックエンドのプログラムを書いていました。バックエンドはフロントエンドよりもサービスの稼働に影響が大きいと思っているので、リリースをしてからその日は障害が起きないか不安になっていました。</p>
<h3>ここまでで学んだこと</h3>
<h4>コード以外も見てもらう</h4>
<p>「どの様に要件定義をして、なぜこの実装に至ったのかを考えるのもエンジニアリング」というレビューを頂きました。<br>
それからはコードを書く前に、どんな要件で、なぜその実装に至ったのかをまとめて、分報に書き込こみました。後から自分がなぜこの実装にしたのか知る事もできる上に、他の人に実装の意図を伝える際にも利用出来ます。</p>
<h4>テストは書くと良い</h4>
<p>機能を実装する際に、テストも書いていました。</p>
<blockquote>
<p>テストの実行結果から仕様を読み取れることができれば、書いた本人がどういう意図でテストケースを書いたかがわかり、コードのメンテナンス性が向上します。<br>
<a href="https://tech.pepabo.com/2022/07/22/tdd-workshop-2022/">t_wadaさんによるTDDワークショップを開催しました</a></p>
</blockquote>
<p>テストを書くことで、テストが仕様を示すドキュメントとして機能します。レビュー時に「テストがあったのでわかりやすかったです」というコメントを頂き、嬉しかったです。<br>
既存のコードを読んでいるときも、テストがあると仕様が分かり、コードリーディングがしやすかったです。テストを書くことで既存のコードを理解しやすくなり、メンテナンス性は本当に向上すると改めて実感しました。</p>
<h3>感想</h3>
<p>コードレビューは恥ずかしさ、怖さがありましたが、コードレビューを何回かして頂く事で、慣れました。<br>
コードレビューで自分では思いつかなかった実装を知ることができ、大変ためになることもわかりました。<br>
これからもたくさんのgood first issueが待っているので楽しみです！</p>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="fn1" class="footnote-item"><p>internationalization. 国際化対応。 <a href="#fnref1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
