from flask import Flask


app = Flask(__name__)
app.config.from_object('config.Configuration')

# Here I would set up the cache, a task queue, etc.
