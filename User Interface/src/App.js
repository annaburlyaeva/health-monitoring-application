import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import { mainListItems, secondaryListItems } from './listItems';
import { makeStyles } from '@material-ui/core/styles';
import Chart from './Chart';
import Details from './Details';
import './App.css';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import WelcomePage from './WelcomePage';
import AddData from './AddData';
import UserAccount from './UserAccount';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Icon from '@mdi/react'
import { mdiFileDocumentBoxMultipleOutline } from '@mdi/js'
import { mdiPill } from '@mdi/js'
import { mdiFormatListBulletedType } from '@mdi/js'
import { mdiFlattr } from '@mdi/js'
import Interactions from './Interactions';
import Button from '@material-ui/core/Button';
import ScatterPlots from './ScatterPlots';
import RegressionResults from './RegressionResults';


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

const pages = {
  DASHBOARD: 'Dashboard',
  INTERACTIONS: 'Interactions'
};

var page = pages.DASHBOARD;



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

  // const [analysisData, setAnalysisData] = useState([]);

  const [analysisData, setAnalysisData] = React.useState();



  const handleInteractionsPost = () => {
    console.log("handleInteractionsPost");
    console.log(dat);

    fetch("http://127.0.0.1:5000/interactions_data",{
      method: "POST",
      body: JSON.stringify(dat)
    }).then(response =>
        response.json().then(data => {
          console.log(JSON.parse(data));
          setAnalysisData(JSON.parse(data))
        })
      );

  };


  console.log(analysisData);


  const handleDrawerClose = () => {
    setOpen(false);
  };

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const [state, setState] = React.useState({
    indicator: '',
    indicator2: ''
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
                onChange={handleChange('indicator')}//
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
  const createSelectItems2 = (json) => {
    var arr=[];
    if (json){
       Object.keys(json).forEach(function(key) {
       arr.push(json[key]);
       }); 
    }
    console.log('ind2')
    console.log(state.indicator2)
     return (
       <Select native value={state.indicator2}          
                 onChange={handleChange('indicator2')}//
                 input={
                   <OutlinedInput name="indicator2" labelWidth={labelWidth} id="outlined-age-native-simple" />
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
  console.log("Main page");
  


  const [pageChange, setPageChange] = React.useState(false);

  function handleInteractionsClick() {
    console.log("Interactions clicked")
    page = pages.INTERACTIONS;
    console.log(page)
    setPageChange(!pageChange);
  }

  function handleDashboardClick() {
    console.log("Dashboard clicked")
    page = pages.DASHBOARD;
    console.log(page);
    setPageChange(!pageChange);
  }

  const [stateOffset, setOffsetState] = React.useState({
    offsetVal: 0
  });

  const handleOffsetChange = name => event => {
    setOffsetState({
      ...stateOffset,
      [name]: event.target.value,
    });
  };

    
  const [ind1, setInd1] = React.useState(state.indicator);
  const [ind2, setInd2] = React.useState(state.indicator2);
  const [offset, setOffset] = React.useState(stateOffset.offsetVal);

  console.log(ind1);
  console.log(ind2);
  console.log(offset);


  const dat = {ind1, ind2, offset};

  return (
    <div className={classes.root}>
      {show>0?<WelcomePage />:""}
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
        <List> 
          <div>
          <ListItem button onClick={handleDashboardClick}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
          <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Icon path={mdiFileDocumentBoxMultipleOutline}
                size={1}
                horizontal
                vertical
                color="rgba(0, 0, 0, 0.54)"
                />
            </ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Icon path={mdiPill}
                  size={1}
                  horizontal
                  vertical
                  color="rgba(0, 0, 0, 0.54)"
              />      
            </ListItemIcon>
            <ListItemText primary="Medications" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Icon path={mdiFormatListBulletedType}
                  size={1}
                  horizontal
                  vertical
                  color="rgba(0, 0, 0, 0.54)"
              />      
            </ListItemIcon>
            <ListItemText primary="Indicators" />
          </ListItem>
          <ListItem button onClick={handleInteractionsClick}>
            <ListItemIcon>
              <Icon path={mdiFlattr}
                  size={1}
                  horizontal
                  vertical
                  color="rgba(0, 0, 0, 0.54)"
              />      
            </ListItemIcon>
            <ListItemText primary="Interactions" />
          </ListItem>
        </div>
        </List>
        <Divider />
        <List>
          <div>
          <ListSubheader inset>Saved reports</ListSubheader>
          <ListItem button>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Current week" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Current month" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Year to Date" />
          </ListItem>
        </div>
        </List>
      </Drawer>
 
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />

        {page==pages.DASHBOARD?<Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid 
              container
              item xs={1.5}
              direction="row"
              justify="space-between"
              alignItems="stretch"
            >               
            
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
                Indicator
              </InputLabel>
              {createSelectItems({indicatorsData})}
            </FormControl>            

            <AddData />
            </Grid>  

            {/* Chart */}
            <Grid item xs={12}>
              <Paper className={fixedHeightPaper}>
                {!state.indicator?<Typography style={{color: '#9c9c9c'}}>Please, choose an indicator from the list above</Typography>:""}
                {state.indicator ?<Chart  json={sourceData} indicator={state.indicator}/>:""}
              </Paper>
            </Grid>
            
            {/* Data */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Details json={sourceData} />
              </Paper>
            </Grid>

          </Grid>

        </Container>:""}


        {page==pages.INTERACTIONS?<Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={4}>
            <Grid 
              container
              item xs={1.5}
              direction="row"
              justify="space-between"
              alignItems="stretch"
            >               
            
            <FormControl variant="outlined" className={classes.formControl}
            onChange={e => setInd1(e.target.value)}>
              <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
                Indicator
              </InputLabel>
              {createSelectItems({indicatorsData})}
            </FormControl> 

            <Button variant='contained' size="medium" color="secondary"
              onClick= {handleInteractionsPost}>
                PERFORM ANALYSIS
            </Button>

                        

            <FormControl variant="outlined" className={classes.formControl}
              onChange={e => setInd2(e.target.value)}>
              <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
                Indicator
              </InputLabel>
              {createSelectItems2({indicatorsData})}
            </FormControl>           

            </Grid>

            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >

            <FormControl className={classes.formControl} style={{minWidth: 150}}>
              <InputLabel> Offset </InputLabel>
              <Select
                value={offset}          
                onChange={e => setOffset(e.target.value)}
                inputProps={{
                  name: 'offset'
                }}
              >
                <MenuItem value={0}>0</MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10</MenuItem>
              </Select>
            </FormControl>  

            </Grid>         


            <Grid item xs={12}>
              <Paper className={fixedHeightPaper}>
                {!state.indicator && !state.indicator2 ?<Typography style={{color: '#9c9c9c'}}>Please, choose indicators and offset value from the lists above </Typography>:""}
                {state.indicator && state.indicator2 && analysisData?<Interactions  json={sourceData} indicator1={state.indicator} indicator2={state.indicator2} chart_json={analysisData}/>:""}
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper className={fixedHeightPaper}>
              {state.indicator && state.indicator2 && analysisData?<ScatterPlots  json={sourceData} indicator1={state.indicator} indicator2={state.indicator2} chart_json={analysisData}/>:""}                
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper className={fixedHeightPaper}>
              {state.indicator && state.indicator2 && analysisData?<RegressionResults  json={sourceData} indicator1={state.indicator} indicator2={state.indicator2} chart_json={analysisData}/>:""}                
              </Paper>
            </Grid>
            

          </Grid>

        </Container>:""}

      </main>
     
    </div>
  );
}

export default App;