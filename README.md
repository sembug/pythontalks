# Python Talks
> Emberwatch like app

[![Build Status](https://travis-ci.org/sembug/pythontalks.svg?branch=master)](https://travis-ci.org/sembug/pythontalks)

## Tasks:
* Script to get videos from YouTube channels and add to database.
* List the talks in one page.
* Admin area to CRUD talks.

## Requirements
* Flask
* Sqlite
* peewee

## Must have:
* Tests
* Published in Open-Shift
* Travis-CI

## Model
* title = CharField(max_length=255)
* description = CharField(max_length=512)
* url = CharField(max_length=512)
* event = CharField(max_length=255)
* speaker = CharField(max_length=255)
* date = DateField(default=now)

## Notes
* http://docs.peewee-orm.com/en/latest/
* travis.yml: https://github.com/rafaelhenrique/graphic_editor
* https://github.com/quokkaproject/quokka




