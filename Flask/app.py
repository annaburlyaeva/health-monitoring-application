# import necessary libraries
from flask import Flask, jsonify, request
# from user_data import *
import data_prep
from flask import request
from flask_mysqldb import MySQL
from config import password
from flask_sqlalchemy import SQLAlchemy


# create instance of Flask app
app = Flask(__name__)

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = f'mysql://root:{password}@127.0.0.1:3306/health_monitor_db'

db = SQLAlchemy(app)

# from models import Users_indicators_values
# from models import Indicators
class Users_indicators_values(db.Model):

    __tablename__ = 'users_indicators_values'

    record_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer)
    indicator_id = db.Column(db.Integer,db.ForeignKey('indicators.indicator_id'))
    record_date = db.Column(db.DateTime)
    indicator_value = db.Column(db.Float)
    notes = db.Column(db.String(64))

#     def __init__(self, user_id , indicator_id, record_date, indicator_value,  note):
#         self.user_id = user_id
#         self.indicator_id = indicator_id
#         self.record_date = record_date
#         self.indicator_value = indicator_value
#         self.note = note

    def __repr__(self):
        return '<Users_indicators_values %r>' % (self.indicator_value)

class Indicators(db.Model):

    __tablename__ = 'indicators'

    indicator_id = db.Column(db.Integer, primary_key=True)
    indicator_name = db.Column(db.String(200))
    indicator_type = db.Column(db.String(20))

    def __repr__(self):
        return '<Indicators %r>' % (self.indicator_name)


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

@app.route('/add_data', methods=['POST'])
def add_data():

       request_data = request.get_json()
       user_id = 1
       indicator_id = db.session.query(Indicators.indicator_id).filter(Indicators.indicator_name == request_data['indicator_name'])[0]
       record_date = request_data['record_date']
       indicator_value = request_data['indicator_value']
       notes = request_data['notes']

       users_indicators_values = Users_indicators_values(user_id=user_id, indicator_id=indicator_id, record_date=record_date, indicator_value=indicator_value, notes=notes)
       db.session.add(users_indicators_values)
       db.session.commit()

       return "Done", 201




if __name__ == "__main__":
    app.run(debug=True)

