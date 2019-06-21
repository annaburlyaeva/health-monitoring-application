import React from 'react';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import { mdiCloseOutline } from '@mdi/js';

// Generate Data
function createData(date, value) {
  return { date, value };
}



const indicatorData = [];
var i;

export default function Chart(args) {


  var array = [];
  const indicatorData = [];
  // console.log("MyJson")
  // console.log(args.json)
  // console.log(args.indicator)
if (args.json && args.json.indicators && args.json.indicators.length){
  Object.keys(args.json.indicators).forEach(function(key) {
    if (args.json.indicators[key].indicator_name == args.indicator) {
      array.push(args.json.indicators[key].observations);
      for (i = 0; i < array[0].length; i++) { 
        indicatorData.push(createData(array[0][i].observation_date, parseFloat(array[0][i].observation_value)));
      };     
    };
  });
}

// console.log(indicatorData)

  
  return (
    <React.Fragment>
      <Title>Visualization</Title>
      <ResponsiveContainer>
        <LineChart
          // data={data}
          data={indicatorData}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="date">            
            {/* <Label angle={0} position="center" style={{ textAnchor: 'middle' }}>
              Date
            </Label> */}
          </XAxis> 
            
          <YAxis>
            <Label angle={270} position="left" style={{ textAnchor: 'middle' }}>
              Value
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="value" stroke="#556CD6" dot={true} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
