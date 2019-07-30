import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { mdiConsoleLine } from '@mdi/js';
import Title from './Title';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    marginTop: theme.spacing(3),
    width: '100%',
    overflowX: 'auto',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  },
}));

function createData1(col11, col12, col13, col14) {
  return { col11, col12, col13, col14 };
}

function createData2(col21, col22) {
  return { col21, col22 };
}

function createData3(col31, col32, col33, col34) {
  return { col31, col32, col33, col34 };
}

function createData4(col41, col42, col43, col44) {
  return { col41, col42, col43, col44 };
}


export default function RegressionResults(args) {

  var rows1 = [];
  var rows2 = [];
  var rows3 = [];
  var rows4 = [];
  var i;

  if (args.chart_json) {
    console.log("TEST")
    var datatab1 = args.chart_json.regression_summary.tab1
    var datatab2 = args.chart_json.regression_summary.tab2
    var datatab3 = args.chart_json.regression_summary.tab3
    var datatab4 = args.chart_json.regression_summary.tab4
    console.log(datatab1);
    console.log(datatab2);
    console.log(datatab3);
    console.log(datatab4);
    for (i = 0; i < datatab1.length; i++) { 
        rows1.push(createData1(datatab1[i][0], datatab1[i][1], datatab1[i][2], datatab1[i][3]))
    }
    for (i = 0; i < datatab2.length; i++) { 
      rows2.push(createData2(datatab2[i][0], datatab2[i][1]))
    }
    for (i = 0; i < datatab3.length; i++) { 
      rows3.push(createData3(datatab3[i][0], datatab3[i][1], datatab3[i][2], datatab3[i][3]))
    }
    for (i = 0; i < datatab4.length; i++) { 
      rows4.push(createData4(datatab4[i][0], datatab4[i][1], datatab4[i][2], datatab4[i][3]))
    }   
        
  
  }


  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Title>OLS Regression Results</Title>
        <Table className={classes.table} size="small">
          <TableBody>
            {rows1.map(row1 => (
              <TableRow>
                <TableCell align="right" style={{ fontWeight: "bold" }}>{row1.col11}</TableCell>
                <TableCell align="right" >{row1.col12}</TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>{row1.col13}</TableCell>
                <TableCell align="right" >{row1.col14}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableBody>
            {rows2.map(row2 => (
              <TableRow>
                <TableCell align="right" style={{ fontWeight: "bold" }}>{row2.col21}</TableCell>
                <TableCell align="right" >{row2.col22}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableBody>
            {rows3.map(row3 => (
              <TableRow>
                <TableCell align="right" style={{ fontStyle: "italic" }} >{row3.col31}</TableCell>
                <TableCell align="right" style={{ fontStyle: "italic" }}>{row3.col32}</TableCell>
                <TableCell align="right" style={{ fontStyle: "italic" }}>{row3.col33}</TableCell>
                <TableCell align="right" style={{ fontStyle: "italic" }}>{row3.col34}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableBody>
            {rows4.map(row4 => (
              <TableRow>
                <TableCell align="right"  style={{ fontWeight: "bold" }}>{row4.col41}</TableCell>
                <TableCell align="right" >{row4.col42}</TableCell>
                <TableCell align="right"  style={{ fontWeight: "bold" }}>{row4.col43}</TableCell>
                <TableCell align="right"  >{row4.col44}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
  );
}

