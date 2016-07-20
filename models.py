import datetime
from peewee import *
from flaskapp import app

database = SqliteDatabase('pytalks.db')


class BaseModel(Model):
    class Meta:
        database = database


class Talk(BaseModel):
    title = CharField(max_length=255)
    description = CharField(max_length=512)
    url = CharField(max_length=512)
    event = CharField(max_length=255)
    speaker = CharField(max_length=255)
    date = DateField(default=datetime.datetime.now)

    def __unicode__(self):
        return self.title
