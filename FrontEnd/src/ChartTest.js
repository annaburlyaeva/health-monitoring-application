import React from 'react';
import { XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import { LineChart, Line } from 'recharts';
import { Button } from '@material-ui/core';


const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, {name: 'Page B', uv: 800, pv: 2400, amt: 2300}];
const data2 = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, {name: 'Page B', uv: 800, pv: 2400, amt: 2300}];

const updateButton = (props) => (
    <button id="update-chart" onClick={props.handleOnClick}>Update</button>
  );
  

  function  constructor(props) {
      
    //super(props);
  
      this.handleUpdate = this.handleUpdate.bind(this);
  
      this.updated = false;
  
      this.state = {
        chartData: data
      }
  
      console.log(this.state.chartData);
      console.log(this.updated);
    }

    handleUpdate() {

        const chartData = this.updated ? data : data2;
        this.setState({chartData}, () => {
          this.updated = this.updated ? false : true;
          console.log(this.state.chartData);
        });
      }
    
    <Button handleOnClick={this.handleUpdate} />

export default function ChartTest() {
    return (
      <React.Fragment>
        <Title>Visualization</Title>
        <ResponsiveContainer>

        

        <LineChart width={400} height={400} data={this.state.chartData}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            
        </LineChart>

        </ResponsiveContainer>
            </React.Fragment>
        );
        }
