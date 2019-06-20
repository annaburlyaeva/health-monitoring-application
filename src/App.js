import React from 'react';
//import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
//import TextField from '@material-ui/core/TextField';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
//import Paper from '@material-ui/core/Paper';
//import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Carousal from './Carousal';



function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'myHealthApp -  '}
      <Link color="inherit" href="https://material-ui.com/">
        
      </Link>
      {' Because We Care.'}
    </Typography>
  );
}
const imgMyimageexample = require('./pic.jpg');
const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  
  image: {
    width: '45%',
    height: '645px',
    backgroundImage: `url(${imgMyimageexample})`,
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
}));
function getSteps() {
  return ['Sign In/Sign Up', 'Create User Profile', 'Add Indicators'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `Sign Up as a new user. Already a User? Sign In using username and password `;
    case 1:
      return 'Tell Us about yourself!';
    case 2:
      return `Add your health indicators to monitor.`;
    default:
      return 'Unknown step';
  }
}
export default function SignInSide() {
  const classes = useStyles();
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
  return (
    <React.Fragment>
        <CssBaseline />
        <AppBar position="static" color="primary" elevation={0} className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h5" color="inherit" noWrap className={classes.toolbarTitle} style={{ flex: 1 }}>
              MyHealthApp
            </Typography>
            <Button variant="h5" href="#" color="inherit" variant="outlined" className={classes.link}>
            Login/SignUp
          </Button>
          </Toolbar> 
        </AppBar>
        <Grid container style={{marginTop:20}}>
        <Typography variant="h6" align="left" color="primary" component="p" display = "inline" gutterBottom style={{marginLeft:10}} >
          Getting Started in 3 simple steps..
        </Typography></Grid>
      <div className={classes.root}>
      <Grid container spacing={10} justify="space-evenly" >
          <Grid item xs={3} style={{marginRight:50}}>
        <Stepper activeStep={activeStep} orientation="vertical" style={{marginTop:10}}>
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
            <Typography>All steps completed - you&apos;re all set!!</Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
            )}
            
        </Grid>
          <Grid item style={{marginLeft:2}} > 
        <div className={classes.root}>
          <Carousal />
        </div>
        </Grid>
      </Grid>  
      </div>
    
  );
}
</React.Fragment>
    
  );
}

//export default App;
