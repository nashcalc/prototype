import time
from flask import Flask

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    while True:
        return {'time': time.time()}
        time.sleep(1)

if __name__ == "__main__":
    app.run(debug = True)
