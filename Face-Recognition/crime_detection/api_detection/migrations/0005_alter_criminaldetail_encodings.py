# Generated by Django 4.0.4 on 2022-05-14 15:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_detection', '0004_criminaldetail_encodings'),
    ]

    operations = [
        migrations.AlterField(
            model_name='criminaldetail',
            name='encodings',
            field=models.CharField(blank=True, max_length=2000, null=True),
        ),
    ]