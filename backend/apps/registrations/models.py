from django.db import models

# Create your models here.
class Registration(models.Model):
    academic_year = models.CharField(max_length=9, null=False, blank=False)
    active = models.BooleanField(default=True)
    open_registration = models.BooleanField(default=False)
    open_registration_date = models.DateField(null=True, blank=True)
    close_registration_date = models.DateField(null=True, blank=True)
    quota = models.PositiveIntegerField(default=0)
    base_age_date = models.DateField(null=True, blank=True)
    minimum_year_of_birth = models.PositiveIntegerField(null=True, blank=True)
    minimum_month_of_birth = models.PositiveIntegerField(null=True, blank=True)
    form_embed = models.URLField(blank=True, null=True)
    spreadsheet_embed = models.URLField(blank=True, null=True)
    apps_script_link = models.URLField(blank=True, null=True)
    group_chat_link = models.URLField(blank=True, null=True)
    socialization = models.TextField(blank=True, null=True)
    updated_by = models.ForeignKey('users.User', on_delete=models.SET_NULL, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return 'Registration - ' + self.academic_year
