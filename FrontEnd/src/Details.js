/* eslint-disable no-script-url */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';

import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';

// Generate Data
function createData(date, value, notes) {
  return { date, value, notes };
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Details(args) {

  var indicators = args.json.indicators;
  var indicatorNames = [];
  var observationsNumber = [];
  var observationPeriod = [];

  var i;
  var j;

  Object.keys(indicators).forEach(function(key) { 
    indicatorNames.push(args.json.indicators[key].indicator_name);
    observationsNumber.push(args.json.indicators[key].observations_number);
    observationPeriod.push(args.json.indicators[key].observation_period[0]);   

  });

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  const items = []

  for (i = 0; i < indicators.length; i++) { 

    const indicatorData = [];

    for (j = 0; j < indicators[i].observations.length; j++) { 
      indicatorData.push(createData(indicators[i].observations[j].observation_date, parseFloat(indicators[i].observations[j].observation_value), indicators[i].observations[j].observation_notes));
    };  

    items.push(
      <ExpansionPanel expanded={expanded === i} onChange={handleChange(i)}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Grid 
                container
                item xs={1.5} 
                direction="row"
                justify="space-between"
                alignItems="flex-start"
              > 
            
            <Typography className={classes.heading}>{indicatorNames[i]}</Typography>
            <Typography className={classes.secondaryHeading}>Total Observations: {observationsNumber[i]}</Typography>
            <Typography className={classes.secondaryHeading}>Observation Period: {observationPeriod[i]}</Typography>
            
            
            </Grid>
            
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Value</TableCell>
                    <TableCell>Notes</TableCell>                  
                  </TableRow>
                </TableHead>
                <TableBody>
                  
                  {indicatorData.map(row => (
                    <TableRow key={row.id}>
                      <TableCell>{row.date}</TableCell>
                      <TableCell>{row.value}</TableCell>
                      <TableCell>{row.notes}</TableCell>
                    </TableRow>
                  ))}


                </TableBody>
              </Table>
            </Typography>
          </ExpansionPanelDetails>
        
        </ExpansionPanel>
      )
  }

  return (
    <React.Fragment>

      <Title>Data</Title>          

      <div className={classes.root}>

      {items} 

      </div>

    </React.Fragment>
  );
}
