# タスクボード プロジェクト

## プロジェクト概要
SAMURAIスプリントで制作するタスクボードのWebアプリです。

## 技術スタック
- **React 18** — UIコンポーネント
- **Vite 5** — ビルドツール・開発サーバー
- **JavaScript (JSX)** — 実装言語
- **CSS Modules（plain CSS）** — スタイリング
- **localStorage** — タスクデータの永続化
- **GitHub Actions** — CI/CDパイプライン
- **GitHub Pages** — ホスティング

## コーディング規約
- コメントは日本語で書く
- 変数名・関数名は英語のキャメルケースを使う（例：`taskList`、`addTask`）
- インデントはスペース2文字を使う

## コンポーネントの命名規約
- コンポーネントファイル名はパスカルケース（例：`App.jsx`、`TaskItem.jsx`）
- コンポーネント関数名はパスカルケース（例：`function App()`、`function TaskItem()`）
- CSSクラス名はキャメルケース（例：`taskList`、`addButton`）
- コンポーネントごとに同名のCSSファイルを対にする（例：`App.jsx` ↔ `App.css`）

## ファイル構成
```
task-board/
├── index.html
├── vite.config.js
├── package.json
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Pagesへの自動デプロイ
└── src/
    ├── main.jsx             # Reactエントリーポイント
    ├── index.css            # グローバルスタイル
    ├── App.jsx              # メインコンポーネント
    └── App.css              # メインコンポーネントのスタイル
```

## デプロイ先
https://ti446.github.io/task-board/

## Git運用ルール

### 基本方針
- コードを変更するたびに、変更内容をコミットしてGitHubにプッシュすること
- コミットは細かい単位で行い、1つの変更につき1コミットを原則とする

### コミットメッセージ
- 日本語で書く
- 変更内容が一目でわかる簡潔な文にする
- 例：`タスク追加機能を実装`、`削除ボタンのスタイルを修正`

### 手順
1. ファイルを変更する
2. `git add` で変更をステージングする
3. `git commit -m "変更内容"` でコミットする
4. `git push origin main` でGitHubにプッシュする

## 返答ルール
- 返答は必ず日本語で行う
