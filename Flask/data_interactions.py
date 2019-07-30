def timeseries_analysis(db, username, indicator_name_one, indicator_name_two, offset_value):

        from config import password
        from datetime import datetime
        import numpy as np
        import pandas as pd
        import statsmodels.api as sm
        import matplotlib.pyplot as plt
        import datetime as dt
        import json
        import sqlalchemy
        from sqlalchemy.ext.automap import automap_base
        from sqlalchemy.orm import Session
        from sqlalchemy import create_engine, func, inspect, and_, or_

        engine = create_engine(f'mysql://root:{password}@127.0.0.1:3306/{db}',pool_pre_ping=True)
        inspector = inspect(engine)
        Base = automap_base()
        # Reflect the tables
        Base.prepare(engine, reflect=True)
        Base.classes.keys()
        # Save references to each table
        Users = Base.classes.users
        Indicators = Base.classes.indicators
        Users_Indicators_Values = Base.classes.users_indicators_values
        session = Session(engine)
        get_user_id = session.query(Users.user_id).filter(Users.user_nickname == username).first()[0]
        observ_df = pd.read_sql(session.query(Users_Indicators_Values.indicator_id, Users_Indicators_Values.record_date, Users_Indicators_Values.indicator_value).filter(Users_Indicators_Values.indicator_value!= "-99999").filter(Users_Indicators_Values.user_id == get_user_id).statement, session.bind)
        selected_indicators=pd.read_sql(session.query(Indicators.indicator_id, Indicators.indicator_name).filter(Indicators.indicator_name.in_([indicator_name_one, indicator_name_two])).statement,session.bind)
        indic_observ_df = pd.merge(observ_df, selected_indicators, how="inner")
        indic_observ_df=indic_observ_df.drop(['indicator_id'], axis=1)
        indic_observ_df['indicator_value'] = indic_observ_df['indicator_value'].astype(float)
        first_indic = indic_observ_df.loc[indic_observ_df['indicator_name'] == indicator_name_one]
        first_indic = first_indic.drop(['indicator_name'], axis=1)
        first_indic=first_indic.rename(columns={"indicator_value": "Indicator_1"})
        second_indic = indic_observ_df.loc[indic_observ_df['indicator_name'] == indicator_name_two]
        second_indic = second_indic.drop(['indicator_name'], axis=1)
        second_indic = second_indic.rename(columns={"indicator_value": "Indicator_2"})
        second_indic["Indicator_2"] = second_indic["Indicator_2"].shift(offset_value)
        observations_merged = pd.merge(first_indic, second_indic)
        observations_merged = observations_merged.dropna()
        observations_merged_outer = pd.merge(first_indic, second_indic, how="outer")
        renamed_df = observations_merged_outer.rename(columns = {"record_date": "Date"})
        renamed_df = renamed_df.dropna()
        observation_dicts = renamed_df.to_dict('records')
        for i in range(len(observation_dicts)):
                observation_dicts[i]['Date'] = observation_dicts[i]['Date'].strftime('%Y-%m-%d')
        corr = observations_merged.iloc[:,1].corr(observations_merged.iloc[:,2])
        if np.isnan(corr):
                corr = 0
        pct_corr = observations_merged.iloc[:,1].pct_change().corr(observations_merged.iloc[:,2].pct_change())
        if np.isnan(pct_corr):
                pct_corr = 0
        reg_def = sm.add_constant(observations_merged)
        reg_def=reg_def.rename(columns={"Indicator_1": indicator_name_one, "Indicator_2": indicator_name_two})
        result = sm.OLS(reg_def.iloc[:,2], reg_def[[reg_def.columns[0], reg_def.columns[3]]]).fit()
        summ = result.summary()
        table1 = summ.tables[0].as_html()
        table2 = summ.tables[1].as_html()
        table3 = summ.tables[2].as_html()
        tab1 = pd.read_html(table1)[0].to_dict("records")
        tab2 = pd.read_html(table2)[0].to_dict("records")
        tab3 = pd.read_html(table3)[0].to_dict("records")
        df1 = pd.DataFrame(tab1)
        OLSdata1 = df1.iloc[0:7,0:4]
        OLSdata1 = OLSdata1.values.tolist()
        OLSdata2 = df1.iloc[7:9, 0:2]
        OLSdata2 = OLSdata2.values.tolist()
        df2 = pd.DataFrame(tab2)
        df2 = df2.fillna("variable")
        OLSdata3 = df2.values.tolist()
        df3 = pd.DataFrame(tab3)
        OLSdata4 = df3.values.tolist()
        regression_summary = {}
        regression_summary = {"tab1": OLSdata1, "tab2": OLSdata2, "tab3": OLSdata3, "tab4": OLSdata4}
        final_dict = {"corr": corr, "pct_corr": pct_corr, "datachart": observation_dicts, "regression_summary": regression_summary}
        final = json.dumps(final_dict)

        return final
