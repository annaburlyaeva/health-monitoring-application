import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Divider from "@material-ui/core/Divider";
import TextField from '@material-ui/core/TextField';

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";

//const imgMyimageexample = require('./pic.jpg');
const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    // display: 'flex',
  },
  
  image: {
    width: '45%',
    height: '645px',
    
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
}));


const indicators_list = [
  {
    value: "Slow acting insulin",
    label: "Slow acting insulin"
  },
  {
    value: "Morning glucose level",
    label: "Morning glucose level"
  },
  {
    value: "Late evening snack",
    label: "Late evening snack"
  }
];


export default function AddData() {
  //console.log("This is welcome page"+ args.openDialog)
   // console.log(args.openDialog)
    

    const classes = useStyles();
    // const [openMe, setOpenMe] = React.useState(true);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');
    const [values, setValues] = React.useState({ });
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };



    
    const [openAddData, setOpenAddData] = React.useState(false);
    
    function handleAddDataClick() {
    console.log("AddData clicked")
    setOpenAddData(true);
    }

    function handleClose() {
      console.log("close")
      setOpenAddData(false);
    }


    console.log("AddData")
    return (
      
      // <div className={classes.root}>
      <React.Fragment>
     <Button onClick={handleAddDataClick} variant="outlined" size="large" color="primary" >ADD NEW DATA</Button>
      <Dialog
        fullWidth={fullWidth}
        fullScreen={false}
        maxWidth={maxWidth}
        open={openAddData}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title" style={{backgroundColor: '#3f51b5', height: '5vh'}}>
          <Grid container justify="space-between" alignItems="flex-start">          
            <Typography variant="h9" align="left" style={{ color: '#ffffff'}}>
              Enter Data
            </Typography>
            <Button onClick={handleClose} variant="outlined" style={{ borderColor: '#ffffff', color: '#ffffff'}}>
              CLOSE
            </Button>
            </Grid>
        </DialogTitle>

        <DialogContent>
        <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <Typography className={classes.primaryHeading}>
              Please, choose a date, an indicator and enter a value and notes.
            </Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
        <Grid container justify="space-between" alignItems="flex-start"> 
                   <TextField
                    id="date"
                    label="Date"
                    type="date"
                    fullWidth
                    defaultValue="2019-06-29"
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
               
             
                  <TextField
                      id="outlined-select-type"
                      select
                      label="Indicator"
                      className={classes.textField}
                      value={values.indicator}
                      fullWidth
                      onChange={handleChange("indicator")}
                      SelectProps={{
                      MenuProps: {
                          className: classes.menu
                      }
                      }}
                      
                      margin="normal"
                      variant="outlined"
                    >
                      {indicators_list.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                          {option.label}
                      </MenuItem>
                      ))}
                  
                  </TextField>
                 
                  <TextField
                      id="outlined-name"
                      label="Value"
                      fullWidth
                      className={classes.textField}
                      InputLabelProps={{
                          shrink: true
                        }}
                      margin="normal"
                      variant="outlined"
                      // placeholder= ''
                  /> 
                  
                      <TextField
                          id="outlined"
                          fullWidth
                          label="Notes"
                          placeholder='e.g. every 4 hours'
                          className={classes.textField}
                          margin="normal"
                          variant="outlined"
                          InputLabelProps={{
                              shrink: true
                            }}
                      />
               </Grid>
        
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button variant='contained' size="medium" color="secondary">
            Confirm
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel> 
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions> */}
      </Dialog>
      {/* </div> */}
      </React.Fragment>
  );
}
