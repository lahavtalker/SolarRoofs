from flask import Flask, request
from flask_cors import CORS

from image_analysis import analyze

app = Flask(__name__)
CORS(app)


<<<<<<< HEAD
@app.route('/getArea/<index>', methods=['GET'])
def home(index=None):
    print(index)
    if request.method == 'GET':
        res = analyze(index)
        return {'response': res}
    else:
        return {'response': 'error'}

