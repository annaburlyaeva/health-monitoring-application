# import necessary libraries
from flask import Flask, render_template

# create instance of Flask app
app = Flask(__name__)

# List of dictionaries

import prep

# create route that renders index.html template
@app.route("/")
def index():
    data= prep.loadData()
    return render_template("index.html", dogs=data)


@app.route("/new_data")
def newObservation(new_data):
        prep.saveToDb(new_data)



if __name__ == "__main__":
    app.run(debug=True)
