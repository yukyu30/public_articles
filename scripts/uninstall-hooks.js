#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');
const gitHooksDir = path.join(rootDir, '.git', 'hooks');

const hookPath = path.join(gitHooksDir, 'pre-commit');

if (!fs.existsSync(hookPath)) {
  console.log('ℹ️  pre-commit hookは既にアンインストールされています');
  process.exit(0);
}

try {
  const content = fs.readFileSync(hookPath, 'utf-8');
  
  if (content.includes('update-frontmatter.js')) {
    fs.unlinkSync(hookPath);
    console.log('✅ Git pre-commit hookをアンインストールしました');
    console.log('📝 今後はupdated_atの自動更新は行われません');
  } else {
    console.log('⚠️  他のpre-commit hookが設定されています');
    console.log('手動で削除または編集してください:', hookPath);
  }
} catch (error) {
  console.error('Error uninstalling hook:', error.message);
  process.exit(1);
}