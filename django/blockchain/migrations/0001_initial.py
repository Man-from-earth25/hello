# Generated by Django 3.2.9 on 2022-07-18 01:10

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Blockchains',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('stars', models.IntegerField()),
                ('age', models.IntegerField()),
                ('email', models.CharField(max_length=100)),
                ('Comment', models.CharField(max_length=100)),
                ('bff', models.CharField(max_length=100)),
            ],
        ),
    ]
