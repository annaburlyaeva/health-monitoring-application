import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems, secondaryListItems } from './listItems';
import { makeStyles } from '@material-ui/core/styles';
import Chart from './Chart';
import Details from './Details';
import './App.css';
import { Button } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Icon from '@mdi/react'
import { mdiAccountBadgeHorizontalOutline } from '@mdi/js'
import WelcomePage from './WelcomePage';
import AddData from './AddData';
import UserAccount from './UserAccount';


const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
    
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  buttonHeight: {
    height: 55,
  },

}));

console.log("hello")

var show=5;

function App() {

   const [sourceData, setSourceData] = useState([]);

   useEffect(() => {
      fetch("http://127.0.0.1:5000/user_json").then(response =>
         response.json().then(data => {
            setSourceData(data);
         })
      );
   }, []);


   const [indicatorsData, setIndicatorsData] = useState([]);

   useEffect(() => {
      fetch("http://127.0.0.1:5000/indicators").then(response =>
         response.json().then(data => {
            setIndicatorsData(data);
         })
      );
   }, []);
 
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const [state, setState] = React.useState({
    indicator: ''
  });


  const inputLabel = React.useRef(null);

  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);


  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };


  const createSelectItems = (json) => {

   var arr=[];

   if (json){
      Object.keys(json).forEach(function(key) {
      arr.push(json[key]);
      }); 
   }

    return (
      <Select native value={state.indicator}          
                onChange={handleChange('indicator')}
                input={
                  <OutlinedInput name="indicator" labelWidth={labelWidth} id="outlined-age-native-simple" />
                }
              >
      
      <option value="" />
       {(arr.length==0 || arr[0].length == 0)?'':arr[0].indicators.map(item => {
        return(          
          <option value={item.indicator_name}>{item.indicator_name}</option>
        );
      })} 
      </Select>
    )
  };
  show-=1;
  console.log("Show: "+show);
  console.log("Main page")

  // const [openAddData, setOpenAddData] = React.useState(false);

  // function handleAddDataClick() {
  //   console.log("AddData clicked")
  //   setOpenAddData(true);
  // }

  return (
    <div className={classes.root}>
      {show>0?<WelcomePage />:""}
      {/* {openAddData?<AddData />:""} */}
      <AppBar position="absolute"  className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            MyHealthApp
          </Typography>
          {/* <IconButton color="inherit">
            <Badge> 
              <Icon path={mdiAccountBadgeHorizontalOutline}
                size={1.5}
                horizontal                
                color="rgb(255, 255, 255)"
              />
            </Badge>
          </IconButton> */}
          <UserAccount />
        </Toolbar>
      </AppBar>
      
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
 
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid 
              container
              item xs={1.5}
              direction="row"
              justify="space-between"
              alignItems="flex-start"
            >               
            
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
                Indicator
              </InputLabel>

              {createSelectItems({indicatorsData})}

            </FormControl>             
            
            {/* <Button onClick={handleAddDataClick} variant="outlined" size="large" color="primary" className={classes.buttonHeight}>ADD NEW DATA</Button>  */}
            <AddData />
            </Grid>
            

            {/* Chart */}
            <Grid item xs={12}>
              <Paper className={fixedHeightPaper}>
                {!state.indicator?<Typography style={{color: '#9c9c9c'}}>Please, choose an indicator from the list above</Typography>:""}
                {state.indicator?<Chart  json={sourceData} indicator={state.indicator}/>:""}
              </Paper>
            </Grid>
            
            {/* Data */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Details json={sourceData} />
              </Paper>
            </Grid>
          </Grid>

        </Container>
      </main>
     
    </div>
  );
}

export default App;