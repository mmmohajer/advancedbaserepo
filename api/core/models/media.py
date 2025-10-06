from django.db import models

from core.models.base_model import TimeStampedModel, MediaFileS3Storage
from core.utils.helpers import get_media_upload_path

FILE_TYPES = [
    ('IMAGE', 'IMAGE'),
    ('VIDEO', 'VIDEO'),
    ('PDF', 'PDF'),
    ('CSV', 'CSV'),
    ('OTHER', 'OTHER')
]

POST_TYPES = [
    ('MEDIA', 'MEDIA')
]

class Media(TimeStampedModel):
    title = models.CharField(max_length=248, unique=True)
    file = models.FileField(storage=MediaFileS3Storage(is_public=True), upload_to=get_media_upload_path)
    file_type = models.CharField(
        max_length=256, choices=FILE_TYPES)
    post_type = models.CharField(
        max_length=256, choices=POST_TYPES)