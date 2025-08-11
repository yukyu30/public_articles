#!/usr/bin/env node

import assert from 'assert';
import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');
const scriptPath = path.join(__dirname, 'create-article.js');

function runScript(args) {
  return new Promise((resolve, reject) => {
    const child = spawn('node', [scriptPath, ...args], {
      cwd: rootDir,
      env: process.env
    });
    
    let stdout = '';
    let stderr = '';
    
    child.stdout.on('data', (data) => {
      stdout += data.toString();
    });
    
    child.stderr.on('data', (data) => {
      stderr += data.toString();
    });
    
    child.on('close', (code) => {
      resolve({ code, stdout, stderr });
    });
    
    child.on('error', reject);
  });
}

function runScriptWithInput(args, inputs) {
  return new Promise((resolve, reject) => {
    const child = spawn('node', [scriptPath, ...args], {
      cwd: rootDir,
      env: process.env
    });
    
    let stdout = '';
    let stderr = '';
    let inputIndex = 0;
    
    child.stdout.on('data', (data) => {
      stdout += data.toString();
      
      // タグ選択プロンプトが表示されたら入力を送信
      if (stdout.includes('タグを選択してください') && inputIndex < inputs.length) {
        child.stdin.write(inputs[inputIndex] + '\n');
        inputIndex++;
      }
    });
    
    child.stderr.on('data', (data) => {
      stderr += data.toString();
    });
    
    child.on('close', (code) => {
      resolve({ code, stdout, stderr });
    });
    
    child.on('error', reject);
  });
}

async function cleanup(folderName) {
  const folderPath = path.join(rootDir, folderName);
  if (fs.existsSync(folderPath)) {
    fs.rmSync(folderPath, { recursive: true, force: true });
  }
}

// テスト1: タグ選択機能が表示されること
async function testTagSelectionPrompt() {
  const testDate = new Date();
  const folderName = `${testDate.getFullYear()}-${String(testDate.getMonth() + 1).padStart(2, '0')}-${String(testDate.getDate()).padStart(2, '0')}`;
  
  try {
    await cleanup(folderName);
    
    const result = await runScriptWithInput(['テスト記事'], ['1,3,5']);
    
    assert(result.stdout.includes('タグを選択してください'), 'タグ選択プロンプトが表示されるべき');
    assert(result.stdout.includes('目標'), 'タグリストに「目標」が含まれるべき');
    assert(result.stdout.includes('お知らせ'), 'タグリストに「お知らせ」が含まれるべき');
    assert(result.stdout.includes('登壇'), 'タグリストに「登壇」が含まれるべき');
    
    const indexPath = path.join(rootDir, folderName, 'index.md');
    const content = fs.readFileSync(indexPath, 'utf-8');
    assert(content.includes('tags: ["目標", "登壇", "振り返り"]'), 'タグが正しく設定されるべき');
    
    console.log('✅ テスト1: タグ選択機能が表示される - PASSED');
  } finally {
    await cleanup(folderName);
  }
}

// テスト2: 複数タグの選択が正しく動作すること
async function testMultipleTagSelection() {
  const testDate = new Date();
  const folderName = `${testDate.getFullYear()}-${String(testDate.getMonth() + 1).padStart(2, '0')}-${String(testDate.getDate()).padStart(2, '0')}`;
  
  try {
    await cleanup(folderName);
    
    const result = await runScriptWithInput(['テスト記事2'], ['2,4']);
    
    const indexPath = path.join(rootDir, folderName, 'index.md');
    const content = fs.readFileSync(indexPath, 'utf-8');
    assert(content.includes('tags: ["お知らせ", "イベント"]'), '複数タグが正しく設定されるべき');
    
    console.log('✅ テスト2: 複数タグの選択が正しく動作する - PASSED');
  } finally {
    await cleanup(folderName);
  }
}

// テスト3: タグを選択しない場合（空のまま）
async function testNoTagSelection() {
  const testDate = new Date();
  const folderName = `${testDate.getFullYear()}-${String(testDate.getMonth() + 1).padStart(2, '0')}-${String(testDate.getDate()).padStart(2, '0')}`;
  
  try {
    await cleanup(folderName);
    
    const result = await runScriptWithInput(['テスト記事3'], ['']);
    
    const indexPath = path.join(rootDir, folderName, 'index.md');
    const content = fs.readFileSync(indexPath, 'utf-8');
    assert(content.includes('tags: []'), 'タグが空の配列になるべき');
    
    console.log('✅ テスト3: タグを選択しない場合 - PASSED');
  } finally {
    await cleanup(folderName);
  }
}

// テスト4: 無効な入力の場合のエラー処理
async function testInvalidTagSelection() {
  const testDate = new Date();
  const folderName = `${testDate.getFullYear()}-${String(testDate.getMonth() + 1).padStart(2, '0')}-${String(testDate.getDate()).padStart(2, '0')}`;
  
  try {
    await cleanup(folderName);
    
    const result = await runScriptWithInput(['テスト記事4'], ['99', '1']);
    
    assert(result.stdout.includes('無効な番号が含まれています'), '無効な番号の警告が表示されるべき');
    
    const indexPath = path.join(rootDir, folderName, 'index.md');
    const content = fs.readFileSync(indexPath, 'utf-8');
    assert(content.includes('tags: ["目標"]'), '再入力後に正しくタグが設定されるべき');
    
    console.log('✅ テスト4: 無効な入力の場合のエラー処理 - PASSED');
  } finally {
    await cleanup(folderName);
  }
}

// 既存のテストも確認
async function testExistingFunctionality() {
  const testDate = new Date();
  const folderName = `${testDate.getFullYear()}-${String(testDate.getMonth() + 1).padStart(2, '0')}-${String(testDate.getDate()).padStart(2, '0')}`;
  
  try {
    await cleanup(folderName);
    
    // タイトルなしのエラー
    const noTitleResult = await runScript([]);
    assert(noTitleResult.code === 1, 'タイトルなしの場合はエラーコード1を返すべき');
    assert(noTitleResult.stderr.includes('記事のタイトルを指定してください'), 'エラーメッセージが表示されるべき');
    
    console.log('✅ 既存テスト: タイトルなしエラー - PASSED');
    
    // 正常な記事作成（タグ選択あり）
    const result = await runScriptWithInput(['既存機能テスト'], ['']);
    assert(result.code === 0, '正常終了するべき');
    assert(fs.existsSync(path.join(rootDir, folderName, 'index.md')), 'index.mdが作成されるべき');
    
    console.log('✅ 既存テスト: 正常な記事作成 - PASSED');
  } finally {
    await cleanup(folderName);
  }
}

// すべてのテストを実行
async function runAllTests() {
  console.log('🧪 create-article.js のテストを実行中...\n');
  
  try {
    await testTagSelectionPrompt();
    await testMultipleTagSelection();
    await testNoTagSelection();
    await testInvalidTagSelection();
    await testExistingFunctionality();
    
    console.log('\n✅ すべてのテストが成功しました！');
  } catch (error) {
    console.error('\n❌ テストが失敗しました:', error);
    process.exit(1);
  }
}

runAllTests();