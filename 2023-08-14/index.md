---
id: 677565e0c30fdb8001bb8ce3
title: QuizBiteをリリースしました
created_at: 2023-08-14T00:00:00.000Z
updated_at: 2025-01-01T16:04:02.700Z
---

<h2>QuizBiteをリリースしました</h2>
<p>QuizBiteはURLを入力するとクイズが生成されるサービスです。<br/>
このブログにあるクイズ機能をサービス化したものです。</p>
<p>🔻 QuizBite 🔻 <br><br/>
https://quizbite.yukyu.net/</br></p>
<p><img alt="1.png" src="1.png"/></p>
<h2>使い方</h2>
<p>https://quizbite.yukyu.net/ にアクセスして、URLを入力してクイズを作るを押して、待つだけです。</p>
<p>https://quizbite.yukyu.net/?url=https://quizbite.yukyu.net/about<br/>
という形式でアクセスすると、URLが入力された状態になるので、そのままシェアしたらクイズを楽しめます</p>
<h2>最終的な構成</h2>
<h3>クイズ生成APIサーバー</h3>
<ul>
<li>Python</li>
<li>FastAPI</li>
<li>LangChain</li>
<li>Supabase</li>
</ul>
<p>PythonでFastAPIを使用しています。<br/>
肝心のクイズ生成部分ではGPT-4とLangChainを使っていますが、今の段階ではLangChainでなくても実装はできそうです。</p>
<p>将来的にはURLとプロンプトをPOSTして、クイズの数や難易度を調整できるようにしたいので、LangChainを使っています。</p>
<p>生成されたクイズを保存するためにSupabaseを使用しています。サクッと導入できて便利でした。<br/>
無料で使える分を超えた時はその時に考えます。</p>
<h3>Webサイト</h3>
<ul>
<li>Next.js</li>
<li>Vercel</li>
</ul>
<p>APIにリクエストを送るだけなので無難にNext.jsを使っています。</p>
<h2>直したいところ</h2>
<h3>クイズの生成に失敗しがち</h3>
<p>LLMをつかっているので、出力がコードで期待されていない形式だと例外でエラーになります。結構多くて困ってます</p>
<h3>クイズの生成に時間がかかる</h3>
<p>クイズの生成に時間がかかる。どうにかしたい</p>
<h3>長い文章だとクイズが生成されない</h3>
<p>GPT-4は8k tokenまでなので、それ以上の文章だとクイズが生成されないです。<br/>
GPT-4-32kに期待したいです。公開はやくー</p>
<h2>楽しい</h2>
<p>自分が欲しいものを作れてよかったです。<br/>
三連休でずっと作っていましたが、楽しかったです。</p>
