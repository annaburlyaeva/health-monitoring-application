import React, { PureComponent, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, CartesianGrid, Tooltip, Legend } from 'recharts';
import Title from './Title';

//Generate Data
// function createData(Date, Indicator_1, Indicator_2) {
//   return { Date, Indicator_1, Indicator_2 };
// }


export default function Interactions(args) {


if (args.chart_json && args.chart_json.datachart && args.chart_json.datachart.length) {
  var data = args.chart_json.datachart
};


  return (
    <React.Fragment>
      <Title>Interactions</Title>
      <ResponsiveContainer>
      <LineChart
        width={800}
        height={400}
        data={data}
        margin={{
          top: 5, right: 10, left: 10, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Date" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip />
        <Legend />
        <Line name={args.indicator1} yAxisId="left" type="monotone" dataKey="Indicator_1" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line name={args.indicator2} yAxisId="right" type="monotone" dataKey="Indicator_2" stroke="#82ca9d" />
      </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
