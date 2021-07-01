from flask import Flask, jsonify
from flask import request
from flask_cors import CORS
from solvenasheq import solvefornasheq

app = Flask(__name__, static_folder="../build", static_url_path="/")
CORS(app)

@app.route('nashcalc.com/')
def index():
    return app.send_static_file('index.html')

@app.route('nashcalc.com/test', methods=['POST'])
def postTest():
    data = request.get_json()
    print(data)
    solvedeqs = solvefornasheq(data)
    return str(solvedeqs)

if __name__ == "__main__":
    app.run(debug = True, host="0.0.0.0", port=5000)
