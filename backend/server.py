from flask import Flask

app = Flask(__name__)


@app.route('/')
def home():
    print("+++++++++++++PORT 5000++++++++++++")
    return 'Hello World'
