import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Icon from '@mdi/react'
import { mdiAccountBadgeHorizontalOutline } from '@mdi/js'
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function UserAccount() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <React.Fragment>
      {/* <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Toggle Popper
      </Button> */}
    <IconButton color="inherit" onClick={handleClick}>
            <Badge> 
              <Icon path={mdiAccountBadgeHorizontalOutline}
                size={1.5}
                horizontal                
                color="rgb(255, 255, 255)"
              />
            </Badge>
    </IconButton>
      <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
            <List className={classes.root}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Juliette Leblanc" src={require("./french_lady.jpg")}/>
                    </ListItemAvatar>
                    <ListItemText
                    primary="Juliette Leblanc"
                    secondary={
                        <React.Fragment>
                        <Grid 
                        container
                        item xs={1.5}
                        direction="row"
                        justify="space-between"
                        alignItems="flex-start"
                        > 
                            <Grid item style={{marginRight:15}}>
                            <Typography style={{fontSize:14}}>
                                Sex: Female 
                            </Typography>
                            </Grid> 
                            <Grid item style={{marginRight:15}}>                           
                            <Typography style={{fontSize:14}}>
                                Age: 60 
                            </Typography>
                            </Grid> 
                            <Grid item style={{marginRight:15}}>                           
                            <Typography style={{fontSize:14}}>
                                Country: France 
                            </Typography>
                            </Grid>
                            <Grid item>                           
                            <Typography style={{fontSize:14}}>
                                City: Paris  
                            </Typography>
                            </Grid>                            
                        </Grid>
                        
                        </React.Fragment>
                    }
                    />
                </ListItem>                
                </List>
            </Paper>
          </Fade>
        )}
      </Popper>
    </React.Fragment>
  );
}
