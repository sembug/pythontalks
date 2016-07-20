from flask import render_template
from flaskapp import app
from models import Talk


@app.route('/')
def homepage():
    return render_template('index.html')
