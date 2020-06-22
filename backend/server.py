from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/getArea', methods=['GET'])
async def home():
    return await ({'response': 'get'} if request.method == 'GET' else {'response': 'error'})