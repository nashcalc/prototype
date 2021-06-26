from flask import Flask, jsonify
from flask import request
from flask_cors import CORS
from solvenasheq import solvefornasheq

app = Flask(__name__, static_folder="prototype/build", static_url_path="")
CORS(app)

@app.route('/test', methods=['POST'])
def postTest():
    data = request.get_json()
    solvedeqs = solvefornasheq(data)
    return str(solvedeqs)

if __name__ == "__main__":
    app.run(debug = True, host="0.0.0.0", port=5000)
