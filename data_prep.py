def data_prep(db):
    import datetime as dt
    import sqlalchemy
    from sqlalchemy.ext.automap import automap_base
    from sqlalchemy.orm import Session
    from sqlalchemy import create_engine, func
    from config import password
    import json

    engine = create_engine(f'mysql://root:{password}@127.0.0.1:3306/{db}',pool_pre_ping=True)
    Base = automap_base()
    Base.prepare(engine, reflect=True)
    Users = Base.classes.users
    Indicators = Base.classes.indicators
    Users_Indicators_Values = Base.classes.users_indicators_values
    session = Session(engine)
    session.query(Users.user_id).count()

    indicators_ids = session.query(Users_Indicators_Values.indicator_id).group_by(Users_Indicators_Values.indicator_id)
    indicators_list = []
    for i in indicators_ids:
        indicators_list.append(i[0])

    indicators_names = []
    for i in indicators_list:
        indicators_names.append(session.query(Indicators.indicator_name).filter(Indicators.indicator_id == i).all()[0][0])

    indicators_types = []
    for i in indicators_list:
        indicators_types.append(session.query(Indicators.indicator_type).filter(Indicators.indicator_id ==  i).all()[0][0])

    obs_dict = {}
    for i in indicators_list:
        obs_dict[i] = session.query(Users_Indicators_Values.record_date, Users_Indicators_Values.indicator_value, Users_Indicators_Values.notes).                    filter(Users_Indicators_Values.indicator_id == i).all()


    obs_dict_1 = []

    for i in obs_dict[1]:
        mini_dict = {}
        mini_dict['observation_date'] = str(i[0])
        mini_dict['observation_value'] = str(i[1])
        mini_dict['observation_notes'] = str(i[2])
        obs_dict_1.append(mini_dict)

    obs_dict_2 = []

    for i in obs_dict[2]:
        mini_dict = {}
        mini_dict['observation_date'] = str(i[0])
        mini_dict['observation_value'] = str(i[1])
        mini_dict['observation_notes'] = str(i[2])
        obs_dict_2.append(mini_dict)

    obs_dict_3 = []

    for i in obs_dict[3]:
        mini_dict = {}
        mini_dict['observation_date'] = str(i[0])
        mini_dict['observation_value'] = str(i[1])
        mini_dict['observation_notes'] = str(i[2])
        obs_dict_3.append(mini_dict)
        
    obs_dict_4 = []

    for i in obs_dict[4]:
        mini_dict = {}
        mini_dict['observation_date'] = str(i[0])
        mini_dict['observation_value'] = str(i[1])
        mini_dict['observation_notes'] = str(i[2])
        obs_dict_4.append(mini_dict)

    obs_dict_5 = []

    for i in obs_dict[5]:
        mini_dict = {}
        mini_dict['observation_date'] = str(i[0])
        mini_dict['observation_value'] = str(i[1])
        mini_dict['observation_notes'] = str(i[2])
        obs_dict_5.append(mini_dict)
        
    obs_dict_6 = []

    for i in obs_dict[6]:
        mini_dict = {}
        mini_dict['observation_date'] = str(i[0])
        mini_dict['observation_value'] = str(i[1])
        mini_dict['observation_notes'] = str(i[2])
        obs_dict_6.append(mini_dict)
        
    obs_dict_7 = []

    for i in obs_dict[7]:
        mini_dict = {}
        mini_dict['observation_date'] = str(i[0])
        mini_dict['observation_value'] = str(i[1])
        mini_dict['observation_notes'] = str(i[2])
        obs_dict_7.append(mini_dict)
        
    obs_dict_8 = []

    for i in obs_dict[8]:
        mini_dict = {}
        mini_dict['observation_date'] = str(i[0])
        mini_dict['observation_value'] = str(i[1])
        mini_dict['observation_notes'] = str(i[2])
        obs_dict_8.append(mini_dict)
        
    obs_dict_9 = []

    for i in obs_dict[9]:
        mini_dict = {}
        mini_dict['observation_date'] = str(i[0])
        mini_dict['observation_value'] = str(i[1])
        mini_dict['observation_notes'] = str(i[2])
        obs_dict_9.append(mini_dict)
        
    obs_dict_10 = []

    for i in obs_dict[10]:
        mini_dict = {}
        mini_dict['observation_date'] = str(i[0])
        mini_dict['observation_value'] = str(i[1])
        mini_dict['observation_notes'] = str(i[2])
        obs_dict_10.append(mini_dict)
        
    obs_dict_11 = []

    for i in obs_dict[11]:
        mini_dict = {}
        mini_dict['observation_date'] = str(i[0])
        mini_dict['observation_value'] = str(i[1])
        mini_dict['observation_notes'] = str(i[2])
        obs_dict_11.append(mini_dict)

    obs_dict_list = []
    obs_dict_list.append(obs_dict_1)
    obs_dict_list.append(obs_dict_2)
    obs_dict_list.append(obs_dict_3)
    obs_dict_list.append(obs_dict_4)
    obs_dict_list.append(obs_dict_5)
    obs_dict_list.append(obs_dict_6)
    obs_dict_list.append(obs_dict_7)
    obs_dict_list.append(obs_dict_8)
    obs_dict_list.append(obs_dict_9)
    obs_dict_list.append(obs_dict_10)
    obs_dict_list.append(obs_dict_11)


    obs_number_dict = []
    for i in obs_dict:
        obs_number_dict.append(len(obs_dict[i]))


    obs_period_list = []
    for i in obs_dict:
        end_date = session.query(Users_Indicators_Values.record_date).order_by(Users_Indicators_Values.record_date.desc()).first()[0]
        start_date = session.query(Users_Indicators_Values.record_date).order_by(Users_Indicators_Values.record_date.asc()).first()[0]
        period = f'{str(end_date)} - {str(start_date)}'
        delta = str((end_date - start_date).days)
        to_add = (period, delta)
        obs_period_list.append(to_add) 


    user_name = session.query(Users.user_nickname).all()[0]
    user_name_list = []
    for user in user_name:
        user_name_list.append(user_name[0])


    final_dict = {}
    for user in user_name_list:
        final_dict['username'] = user

    temp_list =[]
    for i in range(len(indicators_names)):
        temp_list.append({'indicator_name':indicators_names[i], 'indicator_type':indicators_types[i],
                        'observations_number':obs_number_dict[i], 'observation_period':obs_period_list[i],
                        'observations':obs_dict_list[i]})
        final_dict['indicators'] = temp_list


    out_file = open('json_out','w+')
    json.dump(final_dict,out_file)



