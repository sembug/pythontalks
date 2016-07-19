from flask import Flask, render_template
from peewee import *
from datetime import datetime

app = Flask(__name__)
app.config.from_object('config.Configuration')

database = SqliteDatabase(DATABASE)

# simple utility function to create tables
def create_tables():
    database.connect()
    database.create_tables([Talk])

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run()
