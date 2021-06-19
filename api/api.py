import time
from flask import Flask, jsonify
from flask import request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/test', methods=['POST'])
def postTest():
    data = request.get_json()
    return data.title

if __name__ == "__main__":
    app.run(debug = True)
