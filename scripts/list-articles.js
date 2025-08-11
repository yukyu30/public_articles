#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

const args = process.argv.slice(2);
const searchTerm = args[0]?.toLowerCase();
const yearFilter = args.find(arg => /^\d{4}$/.test(arg));

const dirs = fs.readdirSync(rootDir)
  .filter(name => /^\d{4}-\d{2}-\d{2}/.test(name))
  .filter(name => fs.statSync(path.join(rootDir, name)).isDirectory())
  .sort()
  .reverse();

const articles = [];

for (const dir of dirs) {
  const indexPath = path.join(rootDir, dir, 'index.md');
  
  if (!fs.existsSync(indexPath)) continue;
  
  if (yearFilter && !dir.startsWith(yearFilter)) continue;
  
  try {
    const content = fs.readFileSync(indexPath, 'utf-8');
    const titleMatch = content.match(/^title:\s*["']?(.+?)["']?\s*$/m);
    const title = titleMatch ? titleMatch[1] : 'タイトルなし';
    const tagsMatch = content.match(/^tags:\s*\[(.*?)\]/m);
    const tags = tagsMatch ? tagsMatch[1].split(',').map(t => t.trim()).filter(Boolean) : [];
    
    if (searchTerm) {
      const searchInContent = 
        title.toLowerCase().includes(searchTerm) ||
        tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
        content.toLowerCase().includes(searchTerm);
      
      if (!searchInContent) continue;
    }
    
    const images = fs.readdirSync(path.join(rootDir, dir))
      .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file));
    
    articles.push({
      folder: dir,
      title,
      tags,
      hasImages: images.length > 0,
      imageCount: images.length
    });
  } catch (err) {
    console.error(`Error reading ${dir}:`, err.message);
  }
}

console.log(`\n📚 記事一覧 (${articles.length}件)\n`);
console.log('=' .repeat(80));

for (const article of articles) {
  console.log(`\n📅 ${article.folder}`);
  console.log(`   ${article.title}`);
  if (article.tags.length > 0) {
    console.log(`   🏷️  ${article.tags.join(', ')}`);
  }
  if (article.hasImages) {
    console.log(`   🖼️  ${article.imageCount} 画像`);
  }
}

console.log('\n' + '=' .repeat(80));

if (searchTerm) {
  console.log(`\n🔍 "${searchTerm}" を含む記事: ${articles.length}件`);
}

if (yearFilter) {
  console.log(`📅 ${yearFilter}年の記事: ${articles.length}件`);
}

const yearStats = {};
articles.forEach(article => {
  const year = article.folder.substring(0, 4);
  yearStats[year] = (yearStats[year] || 0) + 1;
});

console.log('\n📊 年別記事数:');
Object.entries(yearStats)
  .sort(([a], [b]) => b.localeCompare(a))
  .forEach(([year, count]) => {
    console.log(`   ${year}: ${count}件`);
  });