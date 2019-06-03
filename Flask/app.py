# import necessary libraries
from flask import Flask, render_template,jsonify
from json import data


# create instance of Flask app
app = Flask(__name__)

# List of dictionaries



# create route that renders index.html template
@app.route("/")
def index(): 

    return render_template("index.html")


@app.route("/data")
def get_data():

       trace = {
              x : data.indicators
       }


       return jsonify(trace)



if __name__ == "__main__":
    app.run(debug=True)
