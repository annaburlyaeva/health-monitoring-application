# import necessary libraries
from flask import Flask, jsonify
from json import data
from json import list_indic


# create instance of Flask app
app = Flask(__name__)




# create route that renders index.html template
@app.route("/", methods = ['GET'])
def index(): 
       return jsonify(data)


@app.route("/indicators", method = ['GET'])
def get_indicators():
       return jsonify(list_indic)



if __name__ == "__main__":
    app.run(debug=True)
