import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from "@material-ui/core/MenuItem";

const genders = [
    {
      value: "female",
      label: "Female"
    },
    {
      value: "Male",
      label: "Male"
    },
    {
      value: "Other",
      label: "Other"
    }
  ];

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

export default function AddressForm() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        gender: "female"
      });
      const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
      };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Personal info
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="userName"
            name="userName "
            label="Username"
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="name"
            name="name"
            label="Name"
            fullWidth
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="age"
            name="age"
            label="Age"
            fullWidth
            autoComplete="Age"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <form className={classes.container} noValidate autoComplete="off">
            <TextField
                id="outlined-select-currency"
                select
                label="Gender"
                className={classes.textField}
                value={values.gender}
                onChange={handleChange("gender")}
                fullWidth
                SelectProps={{
                MenuProps: {
                    className: classes.menu
                }
                }}
                margin="normal"
                variant="outlined"
            >
                {genders.map(option => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
                ))}
            </TextField>
            </form>
        </Grid>
          
          
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="height"
            name="height"
            label="Height (in)"
            fullWidth
            autoComplete="Height"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
            required 
            id="weight" 
            name="weight" 
            label="Weight (lb)" 
            fullWidth 
            autoComplete="Weight" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="City"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="country"
            name="country"
            label="Country"
            fullWidth
            
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}