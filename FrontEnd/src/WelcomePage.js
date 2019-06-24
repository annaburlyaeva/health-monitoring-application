// 

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
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Carousel from './Carousel';
import Container from '@material-ui/core/Container';
import SignIn from './SignIn';

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
function getSteps() {
  return ['Sign In/Sign Up', 'Create User Profile', 'Add Indicators'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Sign Up as a New User. Already a User? Sign In Using Username and Password ';
    case 1:
      return 'Tell Us about Yourself!';
    case 2:
      return 'Add your Health Indicators to Monitor.';
    default:
      return 'Unknown step';
  }
}

// const useStyles = makeStyles(theme => ({
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     margin: 'auto',
//     width: 'fit-content',
//   },
//   formControl: {
//     marginTop: theme.spacing(2),
//     minWidth: 120,
//   },
//   formControlLabel: {
//     marginTop: theme.spacing(1),
//   },
// }));

export default function WelcomePage() {
  //console.log("This is welcome page"+ args.openDialog)
   // console.log(args.openDialog)
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
  
    function handleNext() {
      setActiveStep(prevActiveStep => prevActiveStep + 1);
    }
  
    function handleBack() {
      setActiveStep(prevActiveStep => prevActiveStep - 1);
    }
  
    function handleReset() {
      setActiveStep(0);
    }


    const classes = useStyles();
    const [openMe, setOpenMe] = React.useState(true);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('xl');

    const [openSignIn, setOpenSignIn] = React.useState(false);

    // function handleClickOpen() {
    //   setOpen(true);
    // }

    function handleClose() {
      console.log("close")
      setOpenMe(false);
    }

    function handleSignInClick() {
      console.log("SignIn clicked")
      setOpenSignIn(true);
    }

    // function handleMaxWidthChange(event) {
    //   setMaxWidth(event.target.value);
    // }

    // function handleFullWidthChange(event) {
    //   setFullWidth(event.target.checked);
    // }
    console.log("Welcome")
  return (
      <div className={classes.root}>
      {openSignIn?<SignIn />:""}
     
      
      <Dialog
        fullWidth={fullWidth}
        fullScreen={true}
        maxWidth={maxWidth}
        open={openMe}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title" style={{backgroundColor: '#3f51b5', height: '5vh'}}>
          <Grid container justify="space-between" alignItems="flex-start">          
            <Typography variant="h9" align="left" style={{ color: '#ffffff'}}>
              MyHealthApp
            </Typography>
            <Button onClick={handleSignInClick} variant="outlined" style={{ borderColor: '#ffffff', color: '#ffffff'}}>
              SIGN IN
            </Button>
            </Grid>
        </DialogTitle>

        <DialogContent>
            {/* <Typography variant="h5" align="center" color="primary">
            Welcome to your Health Monitoring App
            </Typography> */}
            <Grid container spacing={6} justify="space-evenly" alignItems="flex-start" > 
                <Grid item xs={5} style={{ marginLeft: 100}}>
                <Typography variant="h6" align="left" color="primary" display = "inline">Only 3 Simple Steps to Get Started...</Typography>
                <Stepper activeStep={activeStep} orientation="vertical">
                  {steps.map((label, index) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                    <StepContent>
                    <Typography>{getStepContent(index)}</Typography>
                    <div className={classes.actionsContainer}>
                      <div>
                        <Button
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          className={classes.button}
                        >
                          Back
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleNext}
                          className={classes.button}
                        >
                          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                      </div>
                    </div>
                    </StepContent>
                  </Step>
                ))}
                </Stepper>
                {activeStep === steps.length && (
                <Paper square elevation={0} className={classes.resetContainer}>
                  <Typography>All Steps Completed - You&apos;re All Set!!</Typography>
                  <Button onClick={handleReset} className={classes.button}>
                  Reset
                  </Button>
                </Paper>
                )}            
                </Grid>
                <Grid item xs={5}> 
                  <Carousel />
                </Grid>
            </Grid> 
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      </div>
  );
}
