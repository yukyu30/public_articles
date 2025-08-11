#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');
const gitHooksDir = path.join(rootDir, '.git', 'hooks');

const preCommitHook = `#!/bin/sh
# Git pre-commit hook to update frontmatter updated_at field

echo "🔄 Updating frontmatter timestamps..."
node scripts/update-frontmatter.js

# Check if there are any changes to commit
if git diff --cached --quiet; then
  echo "✅ No changes to commit after updating frontmatter"
else
  echo "✅ Frontmatter updated successfully"
fi
`;

if (!fs.existsSync(gitHooksDir)) {
  console.error('Error: .git/hooks ディレクトリが見つかりません');
  console.error('このスクリプトはGitリポジトリのルートで実行してください');
  process.exit(1);
}

const hookPath = path.join(gitHooksDir, 'pre-commit');

try {
  fs.writeFileSync(hookPath, preCommitHook);
  fs.chmodSync(hookPath, '755');
  
  console.log('✅ Git pre-commit hookをインストールしました');
  console.log('📝 これで、コミット時に自動的にfrontmatterのupdated_atが更新されます');
  console.log('\n使い方:');
  console.log('  1. 記事を編集');
  console.log('  2. git add <file>');
  console.log('  3. git commit -m "message" (この時点でupdated_atが自動更新)');
  console.log('\nアンインストール:');
  console.log('  npm run uninstall-hooks');
  
} catch (error) {
  console.error('Error installing hook:', error.message);
  process.exit(1);
}