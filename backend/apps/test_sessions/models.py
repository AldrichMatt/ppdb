from django.db import models

# Create your models here.
class TestSession(models.Model):
    registration = models.ForeignKey('registrations.Registration', on_delete=models.CASCADE, related_name='test_sessions')
    code = models.CharField(max_length=20, unique=True)
    session_name = models.CharField(max_length=100)
    test_date = models.DateField()
    start_time = models.TimeField()
    end_time = models.TimeField()
    capacity = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'Test Session - {self.session_name} ({self.registration.academic_year})'

    class Meta: 
        ordering = ['test_date', 'start_time', 'session_name']