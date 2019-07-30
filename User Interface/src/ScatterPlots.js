import React, {useState}  from 'react';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Label, ResponsiveContainer
} from 'recharts';
import Title from './Title';
import Typography from '@material-ui/core/Typography';





export default function ScatterPlots(args) {

  var data;
  var corr;
  var label_corr;

  if (args.chart_json && args.chart_json.datachart && args.chart_json.datachart.length && args.chart_json.corr) {
    var data = args.chart_json.datachart
    var corr = args.chart_json.corr
    var label_corr = "Correlation is: " + String(corr);
    
  };


  console.log(label_corr)

    return (
      <React.Fragment>
      <Title>Correlation</Title>
      <ResponsiveContainer>      
      <ScatterChart
        width={800}
        height={300}
        margin={{
          top: 5, right: 60, left: 10, bottom: 20,
        }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="Indicator_1" name={args.indicator1}>
          <Label value={label_corr} position="bottom" offset={-1} /> 
        </XAxis>
        <YAxis type="number" dataKey="Indicator_2" name={args.indicator2} />
        <Tooltip />
        <Scatter name="Correlation Analysis" data={data} fill="#8884d8"/>        
      </ScatterChart>
      </ResponsiveContainer>
      </React.Fragment>
    );
  }


