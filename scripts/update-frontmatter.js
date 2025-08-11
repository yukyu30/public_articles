#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

function updateFrontmatter(filePath) {
  if (!filePath.endsWith('.md')) return false;
  
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  
  let inFrontmatter = false;
  let frontmatterStart = -1;
  let frontmatterEnd = -1;
  let hasUpdatedAt = false;
  let updatedAtLine = -1;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line === '---') {
      if (frontmatterStart === -1) {
        frontmatterStart = i;
        inFrontmatter = true;
      } else if (inFrontmatter) {
        frontmatterEnd = i;
        break;
      }
    } else if (inFrontmatter && line.startsWith('updated_at:')) {
      hasUpdatedAt = true;
      updatedAtLine = i;
    }
  }
  
  if (frontmatterStart === -1 || frontmatterEnd === -1) {
    return false;
  }
  
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const timestamp = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  
  if (hasUpdatedAt) {
    lines[updatedAtLine] = `updated_at: ${timestamp}`;
  } else {
    lines.splice(frontmatterEnd, 0, `updated_at: ${timestamp}`);
  }
  
  const newContent = lines.join('\n');
  fs.writeFileSync(filePath, newContent);
  
  return true;
}

try {
  const stagedFiles = execSync('git diff --cached --name-only', { encoding: 'utf-8' })
    .split('\n')
    .filter(Boolean);
  
  let updatedCount = 0;
  
  for (const file of stagedFiles) {
    const filePath = path.join(rootDir, file);
    
    if (file.includes('/index.md') && fs.existsSync(filePath)) {
      const updated = updateFrontmatter(filePath);
      if (updated) {
        execSync(`git add ${file}`);
        updatedCount++;
        console.log(`✅ Updated frontmatter: ${file}`);
      }
    }
  }
  
  if (updatedCount > 0) {
    console.log(`\n📝 ${updatedCount}個のファイルのfrontmatterを更新しました`);
  }
  
} catch (error) {
  console.error('Error updating frontmatter:', error.message);
  process.exit(1);
}