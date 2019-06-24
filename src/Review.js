import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const indicators = [
  { name: 'Slow acting insulin', desc: 'Morning intake dose', type: 'Numeric' },
  { name: 'Fast acting insulin', desc: 'Morning intake dose', type: 'Numeric' },
  { name: 'Morning glucose level', type: 'Numeric' },
  { name: 'Late evening snack', desc: 'Something to eat after dinner', type: 'Yes/No' },
  { name: 'Nausea', desc:'Number of times I have felt nauseated', type:'Scale (1-10)'}
];

const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: '700',
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Diabetes' indicators summary
      </Typography>
      <List disablePadding>
        {indicators.map(indicator => (
          <ListItem className={classes.listItem} key={indicator.name}>
            <ListItemText primary={indicator.name} secondary={indicator.desc} />
            <Typography variant="body2">{indicator.type}</Typography>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}