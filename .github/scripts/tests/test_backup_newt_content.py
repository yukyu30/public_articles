
import os
import sys
import unittest
from unittest.mock import patch, MagicMock
import tempfile
import shutil
import json
from pathlib import Path

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import backup_newt_content

class TestBackupNewtContent(unittest.TestCase):
    def setUp(self):
        self.test_dir = tempfile.mkdtemp()
        
        self.env_patcher = patch.dict('os.environ', {
            'NEWT_SPACE_UID': 'test_space',
            'NEWT_APP_UID': 'test_app',
            'NEWT_API_TOKEN': 'test_token',
            'NEWT_ARTICLE_MODEL_UID': 'test_article_model',
            'NEWT_TAG_MODEL_UID': 'test_tag_model',
            'NEWT_WORK_MODEL_UID': 'test_work_model'
        })
        self.env_patcher.start()
        
        backup_newt_content.SPACE_UID = os.environ.get('NEWT_SPACE_UID')
        backup_newt_content.APP_UID = os.environ.get('NEWT_APP_UID')
        backup_newt_content.API_TOKEN = os.environ.get('NEWT_API_TOKEN')
        backup_newt_content.ARTICLE_MODEL_UID = os.environ.get('NEWT_ARTICLE_MODEL_UID')
        backup_newt_content.TAG_MODEL_UID = os.environ.get('NEWT_TAG_MODEL_UID')
        backup_newt_content.WORK_MODEL_UID = os.environ.get('NEWT_WORK_MODEL_UID')
        backup_newt_content.BASE_URL = f"https://{backup_newt_content.SPACE_UID}.cdn.newt.so/v1"
        backup_newt_content.HEADERS = {
            'Authorization': f'Bearer {backup_newt_content.API_TOKEN}',
            'Content-Type': 'application/json'
        }

    def tearDown(self):
        shutil.rmtree(self.test_dir)
        
        self.env_patcher.stop()

    def test_get_content_slug(self):
        content = {'slug': 'test-slug', '_id': 'test-id'}
        self.assertEqual(backup_newt_content.get_content_slug(content), 'test-slug')
        
        content = {'Slug': 'test-slug-2', '_id': 'test-id'}
        self.assertEqual(backup_newt_content.get_content_slug(content), 'test-slug-2')
        
        content = {'_slug': 'test-slug-3', '_id': 'test-id'}
        self.assertEqual(backup_newt_content.get_content_slug(content), 'test-slug-3')
        
        content = {'path': 'test-path', '_id': 'test-id'}
        self.assertEqual(backup_newt_content.get_content_slug(content), 'test-path')
        
        content = {'url': 'test-url', '_id': 'test-id'}
        self.assertEqual(backup_newt_content.get_content_slug(content), 'test-url')
        
        content = {'permalink': 'test-permalink', '_id': 'test-id'}
        self.assertEqual(backup_newt_content.get_content_slug(content), 'test-permalink')
        
        content = {'_id': 'test-id'}
        self.assertEqual(backup_newt_content.get_content_slug(content), 'test-id')

    def test_generate_filename(self):
        url = 'https://example.com/images/test-image.jpg'
        self.assertEqual(backup_newt_content.generate_filename(url), 'test-image.jpg')
        
        url = 'https://example.com/images/12345'
        filename = backup_newt_content.generate_filename(url)
        self.assertTrue(len(filename) >= 11)  # 10 chars for hash + at least 1 for extension
        self.assertTrue('.' in filename)  # Should have an extension
        
        url = 'https://example.com/images/test-image.png?width=100&height=100'
        self.assertEqual(backup_newt_content.generate_filename(url), 'test-image.png')

    @patch('requests.get')
    def test_download_image(self, mock_get):
        mock_response = MagicMock()
        mock_response.status_code = 200
        mock_get.return_value = mock_response
        
        with patch('builtins.open', unittest.mock.mock_open()) as mock_open:
            with patch('shutil.copyfileobj') as mock_copyfileobj:
                image_path = os.path.join(self.test_dir, 'test-image.jpg')
                result = backup_newt_content.download_image('https://example.com/test-image.jpg', image_path)
                self.assertTrue(result)
                mock_get.assert_called_with('https://example.com/test-image.jpg', stream=True)
                
                mock_response.status_code = 404
                result = backup_newt_content.download_image('https://example.com/not-found.jpg', image_path)
                self.assertFalse(result)
                
                mock_response.status_code = 200
                result = backup_newt_content.download_image('/images/test-image.jpg', image_path)
                self.assertTrue(result)
                expected_url = f"https://{backup_newt_content.SPACE_UID}.cdn.newt.so/images/test-image.jpg"
                mock_get.assert_called_with(expected_url, stream=True)

    def test_process_html_content(self):
        slug_dir = os.path.join(self.test_dir, 'test-slug')
        os.makedirs(slug_dir, exist_ok=True)
        
        html_content = '<p>Test content with image</p><img src="https://example.com/test-image.jpg" alt="Test Image">'
        
        with patch('backup_newt_content.download_image', return_value=True):
            processed_html = backup_newt_content.process_html_content(html_content, slug_dir)
            
            self.assertIn('src="test-image.jpg"', processed_html)
            self.assertNotIn('src="https://example.com/test-image.jpg"', processed_html)

    def test_process_markdown_content(self):
        slug_dir = os.path.join(self.test_dir, 'test-slug')
        os.makedirs(slug_dir, exist_ok=True)
        
        md_content = 'Test content with image\n\n![Test Image](https://example.com/test-image.jpg)'
        
        with patch('backup_newt_content.download_image', return_value=True):
            processed_md = backup_newt_content.process_markdown_content(md_content, slug_dir)
            
            self.assertIn('![Test Image](test-image.jpg)', processed_md)
            self.assertNotIn('![Test Image](https://example.com/test-image.jpg)', processed_md)

    def test_process_content_body(self):
        slug_dir = os.path.join(self.test_dir, 'test-slug')
        os.makedirs(slug_dir, exist_ok=True)
        
        html_content = '<p>Test content</p><img src="https://example.com/test-image.jpg" alt="Test">'
        
        md_content = 'Test content\n\n![Test](https://example.com/test-image.jpg)'
        
        plain_content = 'Test content without images'
        
        json_content = {'text': 'Test content', 'image': 'https://example.com/test-image.jpg'}
        
        with patch('backup_newt_content.process_html_content', return_value='Processed HTML'):
            with patch('backup_newt_content.process_markdown_content', return_value='Processed Markdown'):
                result = backup_newt_content.process_content_body(html_content, slug_dir)
                self.assertEqual(result, 'Processed HTML')
                
                result = backup_newt_content.process_content_body(md_content, slug_dir)
                self.assertEqual(result, 'Processed Markdown')
                
                result = backup_newt_content.process_content_body(plain_content, slug_dir)
                self.assertEqual(result, plain_content)
                
                result = backup_newt_content.process_content_body(json_content, slug_dir)
                self.assertTrue(isinstance(result, str))
                self.assertIn('Test content', result)

    @patch('requests.get')
    def test_fetch_contents(self, mock_get):
        mock_response = MagicMock()
        mock_response.status_code = 200
        mock_response.json.return_value = {
            'items': [
                {'_id': 'test-id-1', 'title': 'Test Article 1', 'slug': 'test-article-1'},
                {'_id': 'test-id-2', 'title': 'Test Article 2', 'slug': 'test-article-2'}
            ]
        }
        mock_get.return_value = mock_response
        
        contents = backup_newt_content.fetch_contents('test_model')
        self.assertEqual(len(contents), 2)
        self.assertEqual(contents[0]['_id'], 'test-id-1')
        self.assertEqual(contents[1]['slug'], 'test-article-2')
        
        expected_url = f"{backup_newt_content.BASE_URL}/{backup_newt_content.APP_UID}/test_model"
        mock_get.assert_called_once_with(expected_url, headers=backup_newt_content.HEADERS)
        
        mock_response.status_code = 401
        mock_response.text = 'Unauthorized'
        with self.assertRaises(Exception):
            backup_newt_content.fetch_contents('test_model')

    def test_save_content_as_markdown(self):
        content = {
            '_id': 'test-id',
            'title': 'Test Article',
            'slug': 'test-article',
            'body': 'Test content body',
            '_sys': {
                'createdAt': '2023-01-01T00:00:00.000Z',
                'updatedAt': '2023-01-02T00:00:00.000Z'
            }
        }
        
        with patch('backup_newt_content.process_content_body', return_value='Processed content body'):
            result = backup_newt_content.save_content_as_markdown(content, self.test_dir)
            self.assertTrue(result)
            
            md_file_path = os.path.join(self.test_dir, 'test-article', 'index.md')
            self.assertTrue(os.path.exists(md_file_path))
            
            with open(md_file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                self.assertIn('id: test-id', content)
                self.assertIn('title: Test Article', content)
                self.assertIn('Processed content body', content)
            
            result = backup_newt_content.save_content_as_markdown(content, self.test_dir)
            self.assertFalse(result)  # Should return False for existing files

if __name__ == '__main__':
    unittest.main()
