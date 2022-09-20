# Generated by Django 4.1.1 on 2022-09-14 19:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='news',
            name='description',
            field=models.TextField(blank=True, help_text='Это поле будет использоваться в Email рассылки', null=True, verbose_name='Описание'),
        ),
        migrations.AlterField(
            model_name='news',
            name='prescription',
            field=models.CharField(blank=True, help_text='Отображается на главной странице под заголовком', max_length=250, null=True, verbose_name='Краткое описание'),
        ),
    ]
