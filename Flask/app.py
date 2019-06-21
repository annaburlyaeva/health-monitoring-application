# import necessary libraries
from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
# from user_data import *
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


@app.route('/user_json')
def user_json(): 
       # data = data_prep(health_monitor_bd, username)
       data = data_prep.data_prep('health_monitor_db', 'juliette_leblanc')
       return jsonify(data)

@app.route("/indicators")
def indicators():
       data = data_prep.data_prep('health_monitor_db', 'juliette_leblanc')
       indicators = data["indicators"]
       list_indic = [i['indicator_name'] for i in indicators]
       
       indicators_data = data["indicators"]
       indicators_list = [list_item["indicator_name"] for list_item in indicators_data]
       indicators_dict = {}
       nested_dict = {}
       nested_indicators_list = []
       for i in range(len(indicators_list)):
              nested_dict["indicator_name"] = indicators_list[i]
              nested_indicators_list.append(nested_dict)
              nested_dict = {}       
       indicators_dict["indicators"] = nested_indicators_list

       return jsonify(indicators_dict)



if __name__ == "__main__":
    app.run(debug=True)
