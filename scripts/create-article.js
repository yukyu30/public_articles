#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '../source');

const args = process.argv.slice(2);
const title = args[0];

if (!title) {
  console.error('Error: 記事のタイトルを指定してください');
  console.log('Usage: npm run new "記事のタイトル"');
  process.exit(1);
}

// 利用可能なタグのリスト
const availableTags = [
  '目標',
  'お知らせ',
  '登壇',
  'イベント',
  '振り返り',
  '買ったもの',
  'Advent Calendar',
  '読書',
  '展示会',
  'おでかけ',
  '誕生日',
  '日記',
  'つくったもの'
];

// readline インターフェースの作成
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// タグ選択のプロンプト関数
function selectTags() {
  return new Promise((resolve) => {
    console.log('\nタグを選択してください（複数選択可）:');
    availableTags.forEach((tag, index) => {
      console.log(`  ${index + 1}. ${tag}`);
    });
    console.log('\n番号をカンマ区切りで入力してください（例: 1,3,5）');
    console.log('タグを選択しない場合は空のままEnterを押してください');
    
    const askForTags = () => {
      rl.question('> ', (answer) => {
        if (answer.trim() === '') {
          resolve([]);
          return;
        }
        
        const selectedIndices = answer.split(',').map(s => parseInt(s.trim()) - 1);
        const invalidIndices = selectedIndices.filter(i => isNaN(i) || i < 0 || i >= availableTags.length);
        
        if (invalidIndices.length > 0) {
          console.log('無効な番号が含まれています。もう一度入力してください。');
          askForTags();
        } else {
          const selectedTags = selectedIndices.map(i => availableTags[i]);
          resolve(selectedTags);
        }
      });
    };
    
    askForTags();
  });
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

// タグを選択してから記事を作成
selectTags().then((selectedTags) => {
  fs.mkdirSync(folderPath, { recursive: true });

  const frontmatter = `---
title: "${title}"
date: ${year}-${month}-${day}
created_at: ${now.toISOString()}
updated_at: ${now.toISOString()}
tags: ${JSON.stringify(selectedTags)}
---

`;

  const indexPath = path.join(folderPath, 'index.md');
  fs.writeFileSync(indexPath, frontmatter);

  console.log(`\n✅ 新しい記事を作成しました: ${folderName}/index.md`);
  console.log(`📝 タイトル: ${title}`);
  if (selectedTags.length > 0) {
    console.log(`🏷️  タグ: ${selectedTags.join(', ')}`);
  }
  console.log(`📁 パス: ${folderPath}`);
  console.log('\n次のステップ:');
  console.log(`1. ${indexPath} を編集して記事を書く`);
  console.log('2. 必要に応じて画像を同じフォルダに追加');
  console.log('3. git add, commit, push で公開');
  
  rl.close();
  process.exit(0);
}).catch((error) => {
  console.error('Error:', error);
  rl.close();
  process.exit(1);
});
