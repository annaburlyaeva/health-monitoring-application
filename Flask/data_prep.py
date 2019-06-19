
def data_prep(db, username):
        from config import password
        from datetime import datetime
        import numpy as np
        import pandas as pd
        import datetime as dt
        import json
        import sqlalchemy
        from sqlalchemy.ext.automap import automap_base
        from sqlalchemy.orm import Session
        from sqlalchemy import create_engine, func, inspect, and_, or_

        # password = ''
        engine = create_engine(f'mysql://root:{password}@127.0.0.1:3306/{db}',pool_pre_ping=True)
        inspector = inspect(engine)

        Base = automap_base()
        # reflect the tables
        Base.prepare(engine, reflect=True)
        Base.classes.keys()
        # Save references to each table
        Users = Base.classes.users
        Indicators = Base.classes.indicators
        Users_Indicators_Values = Base.classes.users_indicators_values
        session = Session(engine)

        username = username
        get_user_id = session.query(Users.user_id).filter(Users.user_nickname == username).first()[0]
        get_user_id

        # Design a query to retrieve the end date of the observations
        end_date = session.query(Users_Indicators_Values.record_date).filter(Users_Indicators_Values.user_id == get_user_id).order_by(Users_Indicators_Values.record_date.desc()).first()

        # Design a query to retrieve the end date of the observations
        start_date = session.query(Users_Indicators_Values.record_date).filter(Users_Indicators_Values.user_id == get_user_id).order_by(Users_Indicators_Values.record_date.asc()).first()
 
        #Design a query to retrieve the patient/user first and last name
        user_details = []
        user = session.query(Users.user_nickname).all()
        for i in user:
                user_details.append(user[0][0])
 
        #Design a query to retrieve all the indicator ids for the patient
        indicators_ids = session.query(Users_Indicators_Values.indicator_id).group_by(Users_Indicators_Values.indicator_id).filter(Users_Indicators_Values.user_id == get_user_id).all() 
        indicators_list = []
        for i in indicators_ids:
                indicators_list.append(i[0])

        obs_num = []

        for i in indicators_list:
                no_of_obs = session.query(func.count(Users_Indicators_Values.indicator_value)).filter(Users_Indicators_Values.record_date <= end_date).filter(Users_Indicators_Values.record_date >= start_date).filter(Users_Indicators_Values.indicator_id == i).filter(Users_Indicators_Values.user_id == get_user_id).all()
        

                num_of_obs = [result[0] for result in no_of_obs[:]]
                obs_num.append(num_of_obs[0])

        #Design a query to retrieve all the indicator names for the patient's Indicator ids
        indicator_names = []

        for i in indicators_list:
                q = session.query(Indicators.indicator_name).filter(Indicators.indicator_id == i).all()
        
                ind_names = [result[0] for result in q[:]]
                indicator_names.append(ind_names[0])   

        indicator_types = []
        for i in indicators_list:
                ind_type_result = session.query(Indicators.indicator_type).filter(Indicators.indicator_id == i).all()
        
        
                ind_type = [result[0]   for result in ind_type_result[:]]
                indicator_types.append(ind_type[0])   
 
        ind_dict = {}
        observations = []

        for i in indicators_list:
                obs_results = session.query( Users_Indicators_Values.indicator_id, Users_Indicators_Values.record_date, Users_Indicators_Values.indicator_value, Users_Indicators_Values.notes).filter(Users_Indicators_Values.indicator_value!= "-99999").filter(Users_Indicators_Values.record_date >= start_date).filter(Users_Indicators_Values.record_date <= end_date).filter(Users_Indicators_Values.indicator_id==i).filter(Users_Indicators_Values.user_id == get_user_id).all()

                for i in obs_results: 
                #print(i[0],"\t",i[1], "\t", i[2], "\t", i[3])

                        ind_dict["ind_id"] = i[0]
                        ind_dict["observation_date"] = str(i[1])
                        ind_dict["observation_value"] = str(i[2])
                        ind_dict["observation_notes"] = i[3]
                        observations.append(ind_dict.copy())
                        
 
        sorted_dict = {}
        for indicator_index in indicators_list:
                curr_indicator_list = []
                for mydict in observations:
                        if mydict['ind_id'] == indicator_index:
                                curr_indicator_list.append(mydict)
                sorted_dict[indicator_index] = curr_indicator_list
        


        temp_list = []
        for indicator_index in range(1,len(indicators_list)+1):
                temp_list.append(sorted_dict[indicator_index])


        ind_obs_period = []

        for i in indicators_list:
                ind_end_date = session.query(Users_Indicators_Values.record_date).order_by(Users_Indicators_Values.record_date.desc()).filter(Users_Indicators_Values.indicator_id==i).filter(Users_Indicators_Values.user_id == get_user_id).first()[0]
        #print(ind_end_date)
        
                ind_start_date = session.query(Users_Indicators_Values.record_date).order_by(Users_Indicators_Values.record_date.asc()).filter(Users_Indicators_Values.indicator_id==i).filter(Users_Indicators_Values.user_id == get_user_id).first()[0]
        #print(ind_start_date)
        
        
                obs_period = ind_end_date - ind_start_date
                period = obs_period.days
        #print(period)
        
                to_add = (ind_start_date.strftime('%Y-%m-%d'), ind_end_date.strftime('%Y-%m-%d'), period)
                ind_obs_period.append(to_add)

        final_dict = {}
        final_dict['username'] = username 

        ind_list = []
        for i in range(len(indicator_names)):
                ind_list.append({'indicator_name':(indicator_names[i]), 'indicator_type': (indicator_types[i]), 
                        'observation_number': (obs_num[i]), 'observation_period': (ind_obs_period[i]), 
                        'observations': (temp_list[i])})

        final_dict['indicators'] = ind_list

      

        return final_dict      

data_prep('health_monitor_db', 'juliette_leblanc')