# import necessary libraries
from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
from user_data import *
import data_prep

# create instance of Flask app
app = Flask(__name__)

CORS(app)



# create route that renders index.html template
@app.route("/")
def index(): 
       return (f"Welcome to the Health app API!<br/>"
        f"Available Routes:<br/>"
        f"/user_json"
        f"<br/>"
        f"/indicators")
# @app.route("/data", methods = ['GET'])

@app.route('/user_json')
def user_json(): 
       # data = data_prep(health_monitor_bd, username)
       return jsonify(data)

@app.route("/indicators")
def indicators():
    indicators = data["indicators"]
    list_indic = [i['indicator_name'] for i in indicators]
    return jsonify({'list_indicators' : list_indic })



if __name__ == "__main__":
    app.run(debug=True)
