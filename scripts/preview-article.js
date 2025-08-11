#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

const args = process.argv.slice(2);
const folderName = args[0];

if (!folderName) {
  console.error('Error: フォルダ名を指定してください');
  console.log('Usage: npm run preview 2024-01-01');
  process.exit(1);
}

const folderPath = path.join(rootDir, folderName);
const indexPath = path.join(folderPath, 'index.md');

if (!fs.existsSync(indexPath)) {
  console.error(`Error: ${folderName}/index.md が見つかりません`);
  process.exit(1);
}

const content = fs.readFileSync(indexPath, 'utf-8');
const lines = content.split('\n');

let inFrontmatter = false;
let frontmatterEnd = 0;
const metadata = {};

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  if (line === '---') {
    if (!inFrontmatter && i === 0) {
      inFrontmatter = true;
    } else if (inFrontmatter) {
      frontmatterEnd = i + 1;
      break;
    }
  } else if (inFrontmatter) {
    const match = line.match(/^(\w+):\s*(.*)$/);
    if (match) {
      const key = match[1];
      let value = match[2];
      value = value.replace(/^["']|["']$/g, '');
      metadata[key] = value;
    }
  }
}

const bodyContent = lines.slice(frontmatterEnd).join('\n').trim();

console.log('\n' + '=' .repeat(80));
console.log(`📄 ${folderName}/index.md`);
console.log('=' .repeat(80) + '\n');

console.log('📋 メタデータ:');
console.log('-' .repeat(40));
for (const [key, value] of Object.entries(metadata)) {
  console.log(`  ${key}: ${value}`);
}

const images = fs.readdirSync(folderPath)
  .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file));

if (images.length > 0) {
  console.log('\n🖼️  画像ファイル:');
  console.log('-' .repeat(40));
  images.forEach(img => {
    const stats = fs.statSync(path.join(folderPath, img));
    const sizeMB = (stats.size / 1024 / 1024).toFixed(2);
    console.log(`  - ${img} (${sizeMB} MB)`);
  });
}

console.log('\n📝 本文:');
console.log('-' .repeat(40));
const preview = bodyContent.substring(0, 500);
console.log(preview);
if (bodyContent.length > 500) {
  console.log('\n... (残り ' + (bodyContent.length - 500) + ' 文字)');
}

console.log('\n' + '=' .repeat(80));
console.log(`\n📊 統計:`);
console.log(`  - 文字数: ${bodyContent.length}`);
console.log(`  - 行数: ${bodyContent.split('\n').filter(l => l.trim()).length}`);
console.log(`  - 画像数: ${images.length}`);