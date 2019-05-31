def data_prep():
    from datetime import datetime
    import numpy as np
    import pandas as pd
    import datetime as dt
    import json

    # Python SQL toolkit and Object Relational Mapper
    import sqlalchemy
    from sqlalchemy.ext.automap import automap_base
    from sqlalchemy.orm import Session
    from sqlalchemy import create_engine, func, inspect, and_, or_

    engine = create_engine("mysql://root:password@127.0.0.1:3306/health_monitor_db",pool_pre_ping=True)

    # Create the inspector and connect it to the engine
    inspector = inspect(engine)

    # Collect the names of tables within the database
    inspector.get_table_names()

    # Using the inspector to print the column names within the 'indicators' table and its types
    columns = inspector.get_columns('indicators')
    for column in columns:
        print(column["name"], column["type"])

    # Using the inspector to print the column names within the 'users' table and its types
    columns = inspector.get_columns('users')
    for column in columns:
        print(column["name"], column["type"])

    # Using the inspector to print the column names within the 'users_indicators_values' table and its types
    columns = inspector.get_columns('users_indicators_values')
    for column in columns:
        print(column["name"], column["type"])

    # Use `engine.execute` to select and display the first 10 rows from the 'users' table
    engine.execute('SELECT * FROM users LIMIT 10').fetchall()

    # Use `engine.execute` to select and display the first 10 rows from the 'indicators' table
    engine.execute('SELECT * FROM indicators LIMIT 10').fetchall()

    # Use `engine.execute` to select and display the first 10 rows from the 'users_indicators_values' table
    engine.execute('SELECT * FROM users_indicators_values LIMIT 10').fetchall()

    # reflect an existing database into a new model
    Base = automap_base()
    # reflect the tables
    Base.prepare(engine, reflect=True)

    # We can view all of the classes that automap found
    Base.classes.keys()

    # Save references to each table
    Users = Base.classes.users
    Indicators = Base.classes.indicators
    Users_Indicators_Values = Base.classes.users_indicators_values

    # Create our session (link) from Python to the DB
    session = Session(engine)

    session.query(Users.user_id).count()

    # Design a query to retrieve the end date of the observations
    end_date = session.query(Users_Indicators_Values.record_date).order_by(Users_Indicators_Values.record_date.desc()).first()
    print(end_date[0])

    # Design a query to retrieve the end date of the observations
    start_date = session.query(Users_Indicators_Values.record_date).order_by(Users_Indicators_Values.record_date.asc()).first()
    print(start_date[0])

    #Design a query to retrieve the patient/user first and last name
    user_details = []
    user = session.query(Users.user_nickname).all()
    for i in user:
        user_details.append(user[0][0])
    print(user_details)

    #Design a query to retrieve all the indicator ids for the patient
    result_ind_ids = session.query(Users_Indicators_Values.indicator_id).\
    group_by(Users_Indicators_Values.indicator_id, Users_Indicators_Values.user_id).all()

    indicator_ids = [result[0] for result in result_ind_ids[:]]

    print(indicator_ids)

    ## Design a query to retrieve the number of observations for a given patient for each of his indicators

    obs_num = []

    for i in indicator_ids:
        no_of_obs = session.query(func.count(Users_Indicators_Values.indicator_value)).\
        filter(Users_Indicators_Values.record_date <= end_date).\
        filter(Users_Indicators_Values.record_date >= start_date).\
        filter(Users_Indicators_Values.indicator_id == i).\
        all()
        

        num_of_obs = [result[0] for result in no_of_obs[:]]
        obs_num.append(num_of_obs[0])
    print(obs_num)

    #Design a query to retrieve all the indicator names for the patient's Indicator ids
    indicator_names = []

    for i in indicator_ids:
        q = session.query(Indicators.indicator_name).\
        filter(Indicators.indicator_id == i).\
        all()
        
        ind_names = [result[0] for result in q[:]]
        indicator_names.append(ind_names[0])   
    print(indicator_names)

    #Design a query to retrieve all the indicator type for the patient's Indicator ids

    indicator_types = []
    for i in indicator_ids:
        ind_type_result = session.query(Indicators.indicator_type).\
        filter(Indicators.indicator_id == i).\
        all()
        
        
        ind_type = [result[0] for result in ind_type_result[:]]
        indicator_types.append(ind_type[0])   
    print(indicator_types)

    ## Design a query to retrieve the observation details for patient's indicator for a period of time

    ind_dict = {}
    observations = []

    for i in indicator_ids:
        obs_results = session.query( Users_Indicators_Values.indicator_id, Users_Indicators_Values.record_date,\
                                    Users_Indicators_Values.indicator_value, Users_Indicators_Values.notes).\
        filter(Users_Indicators_Values.record_date >= start_date).\
        filter(Users_Indicators_Values.record_date <= end_date).\
        filter(Users_Indicators_Values.indicator_id==i).all()

        for i in obs_results: 
            #print(i[0],"\t",i[1], "\t", i[2], "\t", i[3])

            ind_dict["ind_id"] = i[0]
            ind_dict["observation_date"] = str(i[1])
            ind_dict["observation_value"] = str(i[2])
            ind_dict["observation_notes"] = i[3]
            #print(ind_dict)
            observations.append(ind_dict.copy())

    sorted_dict = {}
    for indicator_index in indicator_ids:
        curr_indicator_list = []
        for mydict in observations:
            if mydict['ind_id'] == indicator_index:
                curr_indicator_list.append(mydict)
        sorted_dict[indicator_index] = curr_indicator_list

    temp_list = []
    for indicator_index in range(1,12):
        temp_list.append(sorted_dict[indicator_index])

        print(temp_list)

    #Design a query to determine the observation period for patient's indicators

    ind_obs_period = []

    for i in indicator_ids:
        ind_end_date = session.query(Users_Indicators_Values.record_date).order_by(Users_Indicators_Values.record_date.\
                    desc()).filter(Users_Indicators_Values.indicator_id==i).first()[0]
        #print(ind_end_date)
        
        ind_start_date = session.query(Users_Indicators_Values.record_date).order_by(Users_Indicators_Values.record_date.\
                    asc()).filter(Users_Indicators_Values.indicator_id==i).first()[0]
        #print(ind_start_date)
        
        
        obs_period = ind_end_date - ind_start_date
        period = obs_period.days
        #print(period)
        
        to_add = (ind_start_date.strftime('%Y-%m-%d'), ind_end_date.strftime('%Y-%m-%d'), period)
        ind_obs_period.append(to_add)
    print(ind_obs_period)

    final_dict = {}
    for user in user_details:
        final_dict['username'] = user

    ind_list = []
    for i in range(len(indicator_names)):
        ind_list.append({'indicator_name':(indicator_names[i]), 'indicator_type': (indicator_types[i]), 
                        'observation_number': (obs_num[i]), 'observation_period': (ind_obs_period[i]), 
                        'observations': (temp_list[i])})

    final_dict['indicators'] = ind_list
    
    out_file = open('json_out','w+')
    json.dump(final_dict,out_file)
    
    return final_dict

