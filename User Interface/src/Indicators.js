import React from "react";
import { List, Header } from "semantic-ui-react";

export const Indicators = ({ indicators }) => {
  return (
    <List>
      {indicators.map(indicator => {
        return (
          <List.Item key={indicator.title}>
            <Header>{indicator.title}</Header>
          </List.Item>
        );
      })}
    </List>
  );
};
var json = {  
  indicators:[  
     {  
        indicator_name:"Slow acting insulin (morning intake dose)"
     },
     {  
        indicator_name:"Fast acting insulin (morning intake dose)"
     },
     {  
        indicator_name:"Fast acting insulin (lunch intake dose)"
     },
     {  
        indicator_name:"Fast acting insulin (dinner intake dose)"
     },
     {  
        indicator_name:"Morning glucose level"
     },
     {  
        indicator_name:"Lunch glucose level"
     },
     {  
        indicator_name:"Afternoon glucose level"
     },
     {  
        indicator_name:"Dinner glucose level"
     },
     {  
        indicator_name:"Evening glucose level"
     },
     {  
        indicator_name:"Fast insulin (late evening intake dose)"
     },
     {  
        indicator_name:"Late evening snack"
     }
  ]
};