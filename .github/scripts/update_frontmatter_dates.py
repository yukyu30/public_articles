#!/usr/bin/env python3
import os
import sys
import re
from datetime import datetime
import subprocess
from pathlib import Path

def get_git_diff_files():
    """Get list of modified markdown files from git diff"""
    try:
        result = subprocess.run(
            ['git', 'diff', '--name-only', 'HEAD~1', 'HEAD'],
            capture_output=True,
            text=True,
            check=True
        )
        files = result.stdout.strip().split('\n')
        return [f for f in files if f.endswith('.md') and 'source/' in f]
    except subprocess.CalledProcessError:
        return []

def get_file_status(file_path):
    """Check if file is new or modified"""
    try:
        result = subprocess.run(
            ['git', 'log', '--oneline', '--', file_path],
            capture_output=True,
            text=True,
            check=True
        )
        commit_count = len(result.stdout.strip().split('\n')) if result.stdout.strip() else 0
        return 'new' if commit_count <= 1 else 'modified'
    except subprocess.CalledProcessError:
        return 'new'

def parse_frontmatter(content):
    """Parse frontmatter from markdown content"""
    pattern = r'^---\s*\n(.*?)\n---'
    match = re.match(pattern, content, re.DOTALL)
    if not match:
        return None, content
    
    frontmatter_text = match.group(1)
    body = content[match.end():]
    return frontmatter_text, body

def update_frontmatter(file_path):
    """Update frontmatter dates based on file status"""
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        return False
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    frontmatter_text, body = parse_frontmatter(content)
    if frontmatter_text is None:
        print(f"No frontmatter found in {file_path}")
        return False
    
    status = get_file_status(file_path)
    current_time = datetime.utcnow().strftime('%Y-%m-%dT%H:%M:%S.%f')[:-3] + 'Z'
    
    # Parse existing frontmatter to check for created_at/updated_at
    has_created_at = 'created_at:' in frontmatter_text or 'created_at :' in frontmatter_text
    has_updated_at = 'updated_at:' in frontmatter_text or 'updated_at :' in frontmatter_text
    
    lines = frontmatter_text.strip().split('\n')
    new_lines = []
    updated_at_updated = False
    
    for line in lines:
        if 'updated_at' in line and ':' in line:
            new_lines.append(f'updated_at: {current_time}')
            updated_at_updated = True
            print(f"Updated updated_at in {file_path}")
        else:
            new_lines.append(line)
    
    # Add missing fields
    # Always add created_at if it doesn't exist
    if not has_created_at:
        new_lines.append(f'created_at: {current_time}')
        print(f"Added created_at to {file_path}")
    
    # Add or ensure updated_at exists
    if not updated_at_updated and not has_updated_at:
        new_lines.append(f'updated_at: {current_time}')
        print(f"Added updated_at to {file_path}")
    
    new_frontmatter = '---\n' + '\n'.join(new_lines) + '\n---'
    new_content = new_frontmatter + body
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    return True

def main():
    """Main function to update all modified markdown files"""
    files = get_git_diff_files()
    
    if not files:
        print("No markdown files modified in the last commit")
        return 0
    
    print(f"Found {len(files)} modified markdown file(s)")
    
    updated_count = 0
    for file_path in files:
        if update_frontmatter(file_path):
            updated_count += 1
    
    print(f"Updated {updated_count} file(s)")
    
    if updated_count > 0:
        subprocess.run(['git', 'add'] + files, check=True)
        subprocess.run(['git', 'commit', '-m', 'Auto-update frontmatter dates'], check=True)
        print("Changes committed")
    
    return 0

if __name__ == '__main__':
    sys.exit(main())