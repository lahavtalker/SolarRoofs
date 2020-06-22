from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/getArea', methods=['GET'])
def home():
    if request.method == 'GET':
        return {'response': 'get'}
    else:
        return {'response': 'error'}
