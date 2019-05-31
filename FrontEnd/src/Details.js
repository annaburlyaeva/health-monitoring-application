/* eslint-disable no-script-url */

import React from 'react';
import Link from '@material-ui/core/Link';
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

// Generate Order Data
function createData(date, value, notes) {
  return { date, value, notes };
}

const rows = [
  createData("2018-01-31", "5", "Night event: 35g croissant et une larme de miel"), 
  createData("2018-02-01", "6", "Night event: 1.5u 1.42 a 2h du mat"), 
  createData("2018-02-02", "5", "None"), 
  createData("2018-02-03", "5", "Night event: 3 dattes 1.22 23h/1.53 1h45"), 
  createData("2018-02-04", "5.5", "Night event: 1"), 
  createData("2018-02-05", "5", "Night event: 3 figues seches"), 
  createData("2018-02-06", "5", "Night event: 1 datte"), 
  createData("2018-02-07", "5", "Night event: 1 datte"), 
  createData("2018-02-08", "5", "Night event: 1 u"), 
  createData("2018-02-09", "5.5", "Night event: 1 cuillere de miel 3h 0.54 1 cuillere confiture"), 
  createData("2018-02-10", "7", "None"), 
  createData("2018-02-11", "5.5", "Night event: 2 dattes"), 
  createData("2018-02-12", "5", "None"), 
  createData("2018-02-13", "5", "Night event: 1/2 u"), 
  createData("2018-02-14", "5", "None"), 
  createData("2018-02-15", "5", "None"), 
  createData("2018-02-16", "5", "Night event: 2 u"), 
  createData("2018-02-17", "6", "None"), 
  createData("2018-02-18", "5", "Night event: 1/2 u"), 
  createData("2018-02-19", "5", "Night event: 2 gerbles sesame 1 gerble sans sucre"), 
  createData("2018-02-20", "5", "Night event: prunes et biscuits 2u 3h40 0.5 1 datte 1 biscuit"), 
  createData("2018-02-21", "5", "None"), 
  createData("2018-02-22", "4.5", "Night event: 1 biscuit 1h 0.47 1 datte + 2 biscuits"), 
  createData("2018-02-23", "4.5", "Night event: 1/2 u"), 
  createData("2018-02-24", "5", "Night event: 1 datte + 1 biscuit"), 
  createData("2018-02-25", "5", "Night event: 1.5 u"), 
  createData("2018-02-26", "5", "Night event: 1/2 u"), 
  createData("2018-02-27", "5", "None"), 
  createData("2018-02-28", "5", "Night event: 1"),
];


const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <React.Fragment>
      <Title>Data</Title>          

      <div className={classes.root}>
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
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
            <Typography className={classes.heading}>Slow acting insulin (morning intake dose)</Typography>
            <Typography className={classes.secondaryHeading}>Total observations: 29</Typography>
            <Typography className={classes.secondaryHeading}>Period of observing: 2018-01-31 - 2018-02-28</Typography>
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
                  {rows.map(row => (
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

        <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Grid 
                container
                item xs={1.5} 
                direction="row"
                justify="space-between"
                alignItems="flex-start"
              > 
            <Typography className={classes.heading}>Fast acting insulin (morning intake dose)</Typography>
            <Typography className={classes.secondaryHeading}>Total observations: 29</Typography>
            <Typography className={classes.secondaryHeading}>Period of observing: 2018-01-31 - 2018-02-28</Typography>
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
                  {rows.map(row => (
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
        
        <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
              <Grid 
                container
                item xs={1.5} 
                direction="row"
                justify="space-between"
                alignItems="flex-start"
              > 
            <Typography className={classes.heading}>Fast acting insulin (lunch intake dose)</Typography>
            <Typography className={classes.secondaryHeading}>Total observations: 29</Typography>
            <Typography className={classes.secondaryHeading}>Period of observing: 2018-01-31 - 2018-02-28</Typography>
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
                  {rows.map(row => (
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

        <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
 <Grid 
                container
                item xs={1.5} 
                direction="row"
                justify="space-between"
                alignItems="flex-start"
              > 
            <Typography className={classes.heading}>Fast acting insulin (dinner intake dose)</Typography>
            <Typography className={classes.secondaryHeading}>Total observations: 29</Typography>
            <Typography className={classes.secondaryHeading}>Period of observing: 2018-01-31 - 2018-02-28</Typography>
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
                  {rows.map(row => (
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
      </div>

    </React.Fragment>
  );
}
