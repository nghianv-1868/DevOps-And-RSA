from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})


@app.route('/')
def hello(a=None, b=None):
    a = request.args.get('a', None)
    b = request.args.get('b', None)
    print(a, b)
    return {'a': a, 'b': b}
