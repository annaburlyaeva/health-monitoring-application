# import necessary libraries
from flask import Flask, render_template,jsonify
from json_data import json_data


# create instance of Flask app
app = Flask(__name__)

# List of dictionaries



# create route that renders index.html template
@app.route("/")
def index(): 
    return render_template("index.html")


@app.route("/charts")
def get_data():
       return jsonify(json_data)



if __name__ == "__main__":
    app.run(debug=True)
