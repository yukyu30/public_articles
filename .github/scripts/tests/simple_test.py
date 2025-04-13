
import os
import sys
import unittest
from unittest.mock import patch, MagicMock
import tempfile
import shutil

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

    def tearDown(self):
        shutil.rmtree(self.test_dir)
        
        self.env_patcher.stop()

    def test_get_content_slug(self):
        content = {'slug': 'test-slug', '_id': 'test-id'}
        self.assertEqual(backup_newt_content.get_content_slug(content), 'test-slug')
        
        content = {'_id': 'test-id'}
        self.assertEqual(backup_newt_content.get_content_slug(content), 'test-id')

    def test_generate_filename(self):
        url = 'https://example.com/images/test-image.jpg'
        self.assertEqual(backup_newt_content.generate_filename(url), 'test-image.jpg')

    def test_relative_url_handling(self):
        with patch('requests.get') as mock_get:
            mock_response = MagicMock()
            mock_response.status_code = 200
            mock_get.return_value = mock_response
            
            mock_response.raw = MagicMock()
            mock_response.raw.read = MagicMock(return_value=b'test image data')
            
            relative_url = '/images/test-image.jpg'
            output_path = os.path.join(self.test_dir, 'test-image.jpg')
            
            backup_newt_content.download_image(relative_url, output_path)
            
            expected_url = f"https://{backup_newt_content.SPACE_UID}.cdn.newt.so{relative_url}"
            mock_get.assert_called_with(expected_url, stream=True)

if __name__ == '__main__':
    unittest.main()
