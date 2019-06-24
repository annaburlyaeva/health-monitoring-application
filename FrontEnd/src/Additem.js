import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import TextField from '@material-ui/core/TextField';
import MenuItem from "@material-ui/core/MenuItem";


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
  
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15)
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20
  },
  details: {
    alignItems: "center"
  },
  column: {
    flexBasis: "33.33%"
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2)
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));


export default function DetailedExpansionPanel() {
  const classes = useStyles();
  const [values, setValues] = React.useState({ });
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  return (
    <div className={classes.root}>
      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <Typography className={classes.primaryHeading}>
              Enter daily data
            </Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
            <form className={classes.container} noValidate>
                <TextField
                    id="date"
                    label="Date"
                    type="date"
                    defaultValue="2019-06-29"
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                <TextField
                    id="time"
                    label="Time"
                    type="time"
                    defaultValue="07:30"
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    inputProps={{
                    step: 300, // 5 min
                    }}
                />
            </form>
        <form className={classes.container} noValidate autoComplete="off">
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
        </form>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button variant='contained' size="medium" color="secondary">
            Confirm
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>
  );
}