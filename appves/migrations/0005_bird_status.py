# Generated by Django 4.2.1 on 2023-06-19 23:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('appves', '0004_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='bird',
            name='status',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='appves.status'),
        ),
    ]
