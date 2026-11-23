from django.db import models

# Create your models here.
class Content(models.Model):
    type = models.CharField(max_length=20, 
        choices=[
            ('berita', 'Berita'), 
            ('galeri', 'Galeri'), 
            ('agenda', 'Agenda'),
            ('prestasi', 'Prestasi'),
            ('faq', 'FAQ'),
            ('banner', 'Banner')
        ], default='berita')
    category = models.ForeignKey('categories.Category', on_delete=models.PROTECT, related_name='contents', null=True, blank=True)
    title = models.CharField(max_length=200, blank=False, null=False)
    slug = models.SlugField(max_length=220, unique=True, blank=False, null=False)
    description = models.CharField(max_length=300, blank=True, null=True)
    content = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='contents/images/', blank=True, null=True)
    date_of_event = models.DateTimeField(blank=True, null=True)
    location = models.CharField(max_length=150, blank=True, null=True)
    status = models.CharField(max_length=20, 
        choices=[
            ('draft', 'Draft'), 
            ('terbit', 'Terbit'), 
            ('diarsipkan', 'Diarsipkan')
        ], default='draft')
    order = models.PositiveIntegerField(default=0, null=False, blank=False)
    made_by = models.ForeignKey('users.User', on_delete=models.PROTECT, related_name='contents', null=False, blank=False)
    updated_by = models.ForeignKey('users.User', on_delete=models.PROTECT, related_name='updated_contents', null=False, blank=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title