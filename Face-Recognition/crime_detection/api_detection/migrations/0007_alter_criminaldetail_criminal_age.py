# Generated by Django 4.0.4 on 2022-05-15 14:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_detection', '0006_alter_criminaldetail_criminal_age'),
    ]

    operations = [
        migrations.AlterField(
            model_name='criminaldetail',
            name='criminal_age',
            field=models.PositiveIntegerField(blank=True, null=True),
        ),
    ]
