import time
from flask import Flask
from flask import request

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/nasheq', methods=['GET', 'POST'])
def solve_nash_eq():
    return request.get_json()

if __name__ == "__main__":
    app.run(debug = True)
