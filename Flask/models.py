from  app import db

class Users_indicators_values(db.Model):

    __tablename__ = 'users_indicators_values'

    record_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer)
    indicator_id = db.Column(db.Integer,db.ForeignKey('indicators.indicator_id'))
    record_date = db.Column(db.DateTime)
    indicator_value = db.Column(db.Float)
    note = db.Column(db.String(64))

    def __init__(self, user_id , indicator_id, record_date, indicator_value,  note):
        self.user_id = user_id
        self.indicator_id = indicator_id
        self.record_date = record_date
        self.indicator_value = indicator_value
        self.note = note

    def __repr__(self):
        return '<Users_indicators_values %r>' % (self.indicator_value)

class Indicators(db.Model):

    __tablename__ = 'indicators'

    indicator_id = db.Column(db.Integer, primary_key=True)
    indicator_name = db.Column(db.String(200))
    indicator_type = db.Column(db.String(20))

    def __repr__(self):
        return '<Indicators %r>' % (self.indicator_name)

# class Users(db.Model)


