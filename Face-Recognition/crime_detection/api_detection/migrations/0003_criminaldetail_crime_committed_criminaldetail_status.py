# Generated by Django 4.0.4 on 2022-05-13 07:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_detection', '0002_alter_criminaldetail_criminal_age_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='criminaldetail',
            name='crime_committed',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='criminaldetail',
            name='status',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]