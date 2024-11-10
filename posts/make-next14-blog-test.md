---
title: "Next.js 14でブログを作成する方法"
date: "2024-10-26"
---

## はじめに
Next.js 14は、Reactベースの最新のフレームワークであり、柔軟で高速なWebアプリケーションの開発が可能です。本記事では、Next.js 14を使って、シンプルなブログを構築する方法について解説します。

## 必要条件
このチュートリアルを始める前に、以下の環境を整えてください。

- **Node.js**: バージョン18以上
- **npm**: または **yarn** パッケージマネージャー

## プロジェクトのセットアップ
まず、Next.jsの新しいプロジェクトを作成しましょう。

```bash
npx create-next-app@latest my-blog
cd my-blog
```

このコマンドでmy-blogという新しいディレクトリが作成され、必要な依存関係がインストールされます。

### App Routerを使用したページ作成
Next.js 14では、App Routerが導入され、ページごとにルーティングを簡単に設定できます。以下の手順でpostsディレクトリにブログ記事のページを作成してみましょう。

app/posts/ディレクトリを作成します。
次に、新しいブログ記事ページをapp/posts/[slug]/page.jsに作成します。
```javascript
// app/posts/[slug]/page.js
import { useRouter } from 'next/router';

export default function PostPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>{slug} の記事</h1>
      <p>この記事の内容は...</p>
    </div>
  );
}
```
このコードでは、useRouterフックを使用して、URLパラメータからslugを取得し、それをタイトルに表示しています。

### ブログ一覧ページの作成
トップページから各ブログ記事にアクセスできるように、ブログ記事一覧を表示するページをapp/posts/page.jsに追加しましょう。

``` javascript
// app/posts/page.js
import Link from 'next/link';

const posts = [
  { slug: 'next-js-intro', title: 'Next.jsの紹介' },
  { slug: 'react-hooks', title: 'React Hooks入門' },
];

export default function PostsPage() {
  return (
    <div>
      <h1>ブログ記事一覧</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

このコードでは、ブログ記事のタイトルをクリックすると、各記事のページに遷移します。

デザインの調整
次に、ミニマルなスタイルを適用してブログの見た目を整えましょう。以下は、ベースカラーにマットホワイトを使った簡単なCSS例です。

```css
/* styles/globals.css */
body {
  font-family: 'Arial', sans-serif;
  background-color: #f0f0f0;
  color: #333;
}

h1 {
  font-size: 2em;
  color: #111;
}

a {
  color: #0070f3;
  text-decoration: none;
}
```
このCSSを適用することで、ブログ全体がミニマルでスタイリッシュなデザインに仕上がります。

まとめ
以上で、Next.js 14を使用したシンプルなブログの基本構築が完了です。App Routerを活用してページを分割し、デザインも自分好みにアレンジすることで、さらに拡張することができます。

Happy Coding!

このMarkdownファイルでは、見出し、リスト、コードブロック、リンクなどを適切に使用して、視認性と情報整理を高めています。
