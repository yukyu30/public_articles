#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

const args = process.argv.slice(2);
const title = args[0];

if (!title) {
  console.error('Error: 記事のタイトルを指定してください');
  console.log('Usage: npm run new "記事のタイトル"');
  process.exit(1);
}

const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0');
const day = String(now.getDate()).padStart(2, '0');
const folderName = `${year}-${month}-${day}`;
const folderPath = path.join(rootDir, folderName);

if (fs.existsSync(folderPath)) {
  console.error(`Error: フォルダ ${folderName} は既に存在します`);
  console.log('同じ日付で複数の記事を作成する場合は、フォルダ名にサフィックスを追加してください');
  console.log(`例: ${folderName}-part2`);
  process.exit(1);
}

fs.mkdirSync(folderPath, { recursive: true });

const frontmatter = `---
title: "${title}"
date: ${year}-${month}-${day}
created_at: ${now.toISOString()}
updated_at: ${now.toISOString()}
---

`;

const indexPath = path.join(folderPath, 'index.md');
fs.writeFileSync(indexPath, frontmatter);

console.log(`✅ 新しい記事を作成しました: ${folderName}/index.md`);
console.log(`📝 タイトル: ${title}`);
console.log(`📁 パス: ${folderPath}`);
console.log('\n次のステップ:');
console.log(`1. ${indexPath} を編集して記事を書く`);
console.log('2. 必要に応じて画像を同じフォルダに追加');
console.log('3. git add, commit, push で公開');
