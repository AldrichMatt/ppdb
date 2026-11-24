from django.db import models

# Create your models here.
class Prices(models.Model):
    registration = models.ForeignKey('registrations.Registration', on_delete=models.CASCADE, related_name='prices')
    component = models.CharField(max_length=100)
    amount = models.DecimalField(max_digits=12, decimal_places=0, null=True, blank=True)
    description = models.TextField(blank=True, null=True)
    order = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'Price - {self.component} ({self.registration.academic_year})'

    class Meta:
        ordering = ['order', '-created_at']