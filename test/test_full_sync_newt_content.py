import unittest
from unittest.mock import patch, MagicMock, Mock
import sys
import os
import json
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '.github', 'scripts')))

class TestFullSyncNewtContent(unittest.TestCase):
    
    @patch.dict(os.environ, {
        'NEWT_SPACE_UID': 'test_space',
        'NEWT_APP_UID': 'test_app',
        'NEWT_API_TOKEN': 'test_token',
        'NEWT_ARTICLE_MODEL_UID': 'test_article',
        'NEWT_TAG_MODEL_UID': 'test_tag'
    })
    @patch('full_sync_newt_content.requests.get')
    def test_save_content_with_source_path(self, mock_get):
        """コンテンツが/source/<slug>に保存されることを確認"""
        import tempfile
        import shutil
        from full_sync_newt_content import save_content_as_markdown
        
        # テスト用の一時ディレクトリを作成
        test_dir = tempfile.mkdtemp()
        
        try:
            # モックコンテンツ
            content = {
                "_id": "article1",
                "title": "テスト記事",
                "slug": "test-article",
                "body": "記事の本文",
                "tags": [],
                "_sys": {
                    "createdAt": "2023-01-15T10:30:00.000Z",
                    "updatedAt": "2023-01-16T10:30:00.000Z"
                }
            }
            
            # save_content_as_markdownを呼び出し
            save_content_as_markdown(content, test_dir, [])
            
            # ファイルが正しいパスに作成されたことを確認
            file_path = os.path.join(test_dir, "source", "test-article", "index.md")
            self.assertTrue(os.path.exists(file_path))
            
            # ファイルの内容を確認
            with open(file_path, 'r', encoding='utf-8') as f:
                content_text = f.read()
                self.assertIn("title: テスト記事", content_text)
                
        finally:
            # テンポラリディレクトリを削除
            shutil.rmtree(test_dir)
    
    @patch.dict(os.environ, {
        'NEWT_SPACE_UID': 'test_space',
        'NEWT_APP_UID': 'test_app',
        'NEWT_API_TOKEN': 'test_token',
        'NEWT_ARTICLE_MODEL_UID': 'test_article',
        'NEWT_TAG_MODEL_UID': 'test_tag'
    })
    def test_resolve_tag_references(self):
        """タグIDから名前を解決する関数のテスト"""
        from full_sync_newt_content import resolve_tag_references
        
        # モックデータ
        tags_data = [
            {"_id": "tag1", "name": "旅行", "slug": "travel"},
            {"_id": "tag2", "name": "技術", "slug": "tech"}
        ]
        tag_ids = ["tag1", "tag2"]
        
        # タグ名のリストが返ることを確認
        result = resolve_tag_references(tag_ids, tags_data)
        self.assertEqual(result, ["旅行", "技術"])
    
    @patch('full_sync_newt_content.requests.get')
    @patch.dict(os.environ, {
        'NEWT_SPACE_UID': 'test_space',
        'NEWT_APP_UID': 'test_app',
        'NEWT_API_TOKEN': 'test_token',
        'NEWT_ARTICLE_MODEL_UID': 'test_article',
        'NEWT_TAG_MODEL_UID': 'test_tag'
    })
    def test_save_content_with_tags(self, mock_get):
        """タグ付きコンテンツがfrontmatterに保存されることを確認"""
        import tempfile
        import shutil
        from full_sync_newt_content import save_content_as_markdown
        
        # テスト用の一時ディレクトリを作成
        test_dir = tempfile.mkdtemp()
        
        try:
            # モックコンテンツ
            content = {
                "_id": "article1",
                "title": "テスト記事",
                "slug": "test-article",
                "body": "記事の本文",
                "tags": ["tag1", "tag2"],
                "_sys": {
                    "createdAt": "2023-01-01T00:00:00.000Z",
                    "updatedAt": "2023-01-02T00:00:00.000Z"
                }
            }
            
            tags_data = [
                {"_id": "tag1", "name": "旅行"},
                {"_id": "tag2", "name": "技術"}
            ]
            
            # save_content_as_markdownを呼び出し
            save_content_as_markdown(content, test_dir, tags_data)
            
            # ファイルが作成されたことを確認
            file_path = os.path.join(test_dir, "source", "test-article", "index.md")
            self.assertTrue(os.path.exists(file_path))
            
            # ファイルの内容を確認
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                self.assertIn("tags: [\"旅行\", \"技術\"]", content)
                
        finally:
            # テンポラリディレクトリを削除
            shutil.rmtree(test_dir)
    
    @patch.dict(os.environ, {
        'NEWT_SPACE_UID': 'test_space',
        'NEWT_APP_UID': 'test_app',
        'NEWT_API_TOKEN': 'test_token',
        'NEWT_ARTICLE_MODEL_UID': 'test_article',
        'NEWT_TAG_MODEL_UID': 'test_tag'
    })
    @patch('full_sync_newt_content.fetch_contents')
    def test_main_with_tags(self, mock_fetch):
        """main関数がタグデータを取得して記事に適用することを確認"""
        import tempfile
        import shutil
        from full_sync_newt_content import main
        
        # モックの返り値を設定
        def fetch_side_effect(model_uid, query_params=None):
            if model_uid == 'test_tag':
                return [
                    {"_id": "tag1", "name": "旅行", "slug": "travel"},
                    {"_id": "tag2", "name": "技術", "slug": "tech"}
                ]
            elif model_uid == 'test_article':
                return [
                    {
                        "_id": "article1",
                        "title": "テスト記事",
                        "slug": "test-article-main",
                        "body": "記事の本文",
                        "tags": ["tag1", "tag2"],
                        "_sys": {
                            "createdAt": "2023-01-01T00:00:00.000Z",
                            "updatedAt": "2023-01-02T00:00:00.000Z"
                        }
                    }
                ]
            return []
        
        mock_fetch.side_effect = fetch_side_effect
        
        # main関数を実行
        main()
        
        # fetch_contentsが2回呼ばれたことを確認（タグとアーティクル）
        self.assertEqual(mock_fetch.call_count, 2)

if __name__ == '__main__':
    unittest.main()