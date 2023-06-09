# Generated by Django 4.1.9 on 2023-06-20 07:17

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('app', '0003_remove_profile_email_remove_profile_firstname_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('recipe_name', models.CharField(max_length=100)),
                ('ingredients', models.TextField()),
                ('steps_to_make', models.TextField()),
                ('average_cooking_time', models.PositiveIntegerField()),
                ('servings', models.PositiveIntegerField()),
                ('category', models.CharField(max_length=50)),
                ('image', models.ImageField(upload_to='post_images/')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
