import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    menu: {
      width: 200,
    },
  }));
  


export default function PaymentForm() {
    const classes = useStyles();
    
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Health conditions to monitor
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="name" 
            label="Name of condition" 
            fullWidth
             />
        </Grid>
        <form className={classes.container} noValidate autoComplete="off">
            <TextField
                id="outlined-required"
                label="Medication name *"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true
                  }}
                margin="normal"
                variant="outlined"
                placeholder= 'e.g. Ibuprofen'
            />
            <TextField
                required
                id="outlined-required"
                label="Dosage"
                placeholder='e.g. 400mg'
                className={classes.textField}
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                    shrink: true
                  }}
            />
            <TextField
                id="outlined"
                fullWidth
                label="Schedule"
                placeholder='e.g. every 4 hours'
                className={classes.textField}
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                    shrink: true
                  }}
            />
      </form>
      </Grid>
    </React.Fragment>
  );
}