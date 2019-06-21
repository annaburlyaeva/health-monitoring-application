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
import NativeSelect from '@material-ui/core/NativeSelect';
import Icon from '@mdi/react'
import { mdiAccountBadgeHorizontalOutline } from '@mdi/js'
import ReactDOM from 'react'

var full_json = 
{  
  username:"juliette_leblanc",
  indicators:[  
     {  
        indicator_name:"Slow acting insulin (morning intake dose)",
        indicator_type:"Numeric",
        observations_number:182,
        observation_period:["2018-08-08 - 2018-01-31","189"],
        observations:[  
           {  
              observation_date:"2018-01-31",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 35g croissant et une larme de miel"
           },
           {  
              observation_date:"2018-02-01",
              observation_value:"6.0000000000",
              observation_notes:"Night event: 1.5u 1.42 a 2h du mat"
           },
           {  
              observation_date:"2018-02-02",
              observation_value:"5.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-03",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 3 dattes 1.22 23h/1.53 1h45"
           },
           {  
              observation_date:"2018-02-04",
              observation_value:"5.5000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-02-05",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 3 figues seches"
           },
           {  
              observation_date:"2018-02-06",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 1 datte"
           },
           {  
              observation_date:"2018-02-07",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 1 datte"
           },
           {  
              observation_date:"2018-02-08",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 1 u"
           },
           {  
              observation_date:"2018-02-09",
              observation_value:"5.5000000000",
              observation_notes:"Night event: 1 cuillere de miel 3h 0.54 1 cuillere confiture"
           },
           {  
              observation_date:"2018-02-10",
              observation_value:"7.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-11",
              observation_value:"5.5000000000",
              observation_notes:"Night event: 2 dattes"
           },
           {  
              observation_date:"2018-02-12",
              observation_value:"5.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-13",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-02-14",
              observation_value:"5.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-15",
              observation_value:"5.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-16",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 2 u"
           },
           {  
              observation_date:"2018-02-17",
              observation_value:"6.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-18",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-02-19",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 2 gerbles sesame 1 gerble sans sucre"
           },
           {  
              observation_date:"2018-02-20",
              observation_value:"5.0000000000",
              observation_notes:"Night event: prunes et biscuits 2u 3h40 0.5 1 datte 1 biscuit"
           },
           {  
              observation_date:"2018-02-21",
              observation_value:"5.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-22",
              observation_value:"4.5000000000",
              observation_notes:"Night event: 1 biscuit 1h 0.47 1 datte + 2 biscuits"
           },
           {  
              observation_date:"2018-02-23",
              observation_value:"4.5000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-02-24",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 1 datte + 1 biscuit"
           },
           {  
              observation_date:"2018-02-25",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-02-26",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-02-27",
              observation_value:"5.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-28",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-03-01",
              observation_value:"6.5000000000",
              observation_notes:"Night event: 1 gerble"
           },
           {  
              observation_date:"2018-03-02",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 1 biscuit chocolat"
           },
           {  
              observation_date:"2018-03-03",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 1/2 gerble"
           },
           {  
              observation_date:"2018-03-04",
              observation_value:"5.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-05",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 1 gerble"
           },
           {  
              observation_date:"2018-03-06",
              observation_value:"4.5000000000",
              observation_notes:"Night event: 1.5 gerbles+1 biscuit chocolat"
           },
           {  
              observation_date:"2018-03-07",
              observation_value:"5.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-08",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-03-09",
              observation_value:"5.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-10",
              observation_value:"5.0000000000",
              observation_notes:"Night event: gerble"
           },
           {  
              observation_date:"2018-03-11",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 3/5 de gerble"
           },
           {  
              observation_date:"2018-03-12",
              observation_value:"5.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-13",
              observation_value:"5.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-14",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 0.5u"
           },
           {  
              observation_date:"2018-03-15",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-03-16",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 2 gerbles + petit veres de siro de myrtille"
           },
           {  
              observation_date:"2018-03-17",
              observation_value:"5.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-18",
              observation_value:"5.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-19",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 1 datte 1 gerbles"
           },
           {  
              observation_date:"2018-03-20",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 1/2 gerbles"
           },
           {  
              observation_date:"2018-03-21",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 1/2 gerbles"
           },
           {  
              observation_date:"2018-03-22",
              observation_value:"4.5000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-23",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-03-24",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 1/2 gerbles"
           },
           {  
              observation_date:"2018-03-25",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-03-26",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-03-27",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 2 dattes"
           },
           {  
              observation_date:"2018-03-28",
              observation_value:"6.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-03-29",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-03-30",
              observation_value:"4.0000000000",
              observation_notes:"Night event: 2 dattes + 1 biscuits"
           },
           {  
              observation_date:"2018-03-31",
              observation_value:"4.0000000000",
              observation_notes:"Night event: 2 dattes + 1 biscuits"
           },
           {  
              observation_date:"2018-04-01",
              observation_value:"4.5000000000",
              observation_notes:"Night event: 1 gerbles"
           },
           {  
              observation_date:"2018-04-02",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 1/2 datte 1/2 gerbles"
           },
           {  
              observation_date:"2018-04-03",
              observation_value:"6.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-04-04",
              observation_value:"4.5000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-05",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-04-06",
              observation_value:"5.5000000000",
              observation_notes:"Night event: 1u a 3h du mat 1.58 et a 5h15 2.52 puis 1u"
           },
           {  
              observation_date:"2018-04-07",
              observation_value:"6.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-08",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 1.5u+ verre syrop myrtille + 1 petite figue + 2 dattes"
           },
           {  
              observation_date:"2018-04-09",
              observation_value:"5.5000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-04-10",
              observation_value:"4.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-04-11",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-04-12",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 1 u"
           },
           {  
              observation_date:"2018-04-13",
              observation_value:"7.0000000000",
              observation_notes:"Night event: 3 dattes a 3h 0.44 2 dattes + 1 biscuit"
           },
           {  
              observation_date:"2018-04-14",
              observation_value:"6.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-15",
              observation_value:"5.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-16",
              observation_value:"4.0000000000",
              observation_notes:"Night event: a 1h30 2.54 1.5 u"
           },
           {  
              observation_date:"2018-04-17",
              observation_value:"5.0000000000",
              observation_notes:"Night event: rien a 3h 1.73"
           },
           {  
              observation_date:"2018-04-18",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 2.5u"
           },
           {  
              observation_date:"2018-04-19",
              observation_value:"5.0000000000",
              observation_notes:"Night event: rien  a 4h 0.8"
           },
           {  
              observation_date:"2018-04-20",
              observation_value:"5.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-21",
              observation_value:"6.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-22",
              observation_value:"4.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-23",
              observation_value:"4.0000000000",
              observation_notes:"Night event: 2 speculos cassis 1 sucre"
           },
           {  
              observation_date:"2018-04-24",
              observation_value:"5.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-25",
              observation_value:"6.0000000000",
              observation_notes:"Night event: 1.5u"
           },
           {  
              observation_date:"2018-04-26",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 2"
           },
           {  
              observation_date:"2018-04-27",
              observation_value:"5.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-28",
              observation_value:"5.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-29",
              observation_value:"4.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-30",
              observation_value:"4.0000000000",
              observation_notes:"Night event: 2 biscuits 1 datte 1 peu de sirop de mirtylle"
           },
           {  
              observation_date:"2018-05-01",
              observation_value:"5.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-02",
              observation_value:"4.5000000000",
              observation_notes:"Night event: 1 biscuit"
           },
           {  
              observation_date:"2018-05-03",
              observation_value:"5.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-04",
              observation_value:"5.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-05",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 2.5 u a 0h30 3.09 1.5u et a 5h30 0.49"
           },
           {  
              observation_date:"2018-05-06",
              observation_value:"4.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-07",
              observation_value:"7.0000000000",
              observation_notes:"Night event: 1.95 ds la nuit"
           },
           {  
              observation_date:"2018-05-08",
              observation_value:"6.0000000000",
              observation_notes:"Night event: a 3h 0.79 1 biscuit"
           },
           {  
              observation_date:"2018-05-09",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 1 cuillere de miel"
           },
           {  
              observation_date:"2018-05-10",
              observation_value:"6.0000000000",
              observation_notes:"Night event: miel et 1/2 cake"
           },
           {  
              observation_date:"2018-05-11",
              observation_value:"4.5000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-12",
              observation_value:"1.5000000000",
              observation_notes:"Night event: 2.5u"
           },
           {  
              observation_date:"2018-05-13",
              observation_value:"3.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-05-14",
              observation_value:"4.5000000000",
              observation_notes:"Night event: 1/2 biscuit"
           },
           {  
              observation_date:"2018-05-23",
              observation_value:"5.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-24",
              observation_value:"5.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-25",
              observation_value:"6.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-26",
              observation_value:"4.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-27",
              observation_value:"4.5000000000",
              observation_notes:"Night event: 1 datte 1 biscuit"
           },
           {  
              observation_date:"2018-05-28",
              observation_value:"5.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-29",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-05-30",
              observation_value:"6.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-05-31",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 1/2u"
           },
           {  
              observation_date:"2018-06-01",
              observation_value:"5.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-02",
              observation_value:"4.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-06-03",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 2.5 u"
           },
           {  
              observation_date:"2018-06-04",
              observation_value:"5.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-05",
              observation_value:"6.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-06",
              observation_value:"6.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-07",
              observation_value:"5.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-08",
              observation_value:"4.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-09",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 20g pain"
           },
           {  
              observation_date:"2018-06-10",
              observation_value:"6.5000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-06-11",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-06-12",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-06-13",
              observation_value:"6.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-06-14",
              observation_value:"5.5000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-15",
              observation_value:"5.5000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-06-16",
              observation_value:"5.5000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-17",
              observation_value:"5.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-18",
              observation_value:"5.5000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-19",
              observation_value:"4.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-20",
              observation_value:"5.5000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-21",
              observation_value:"5.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-22",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 2"
           },
           {  
              observation_date:"2018-06-23",
              observation_value:"4.5000000000",
              observation_notes:"Night event: 2 dattes 1 biscuit"
           },
           {  
              observation_date:"2018-06-24",
              observation_value:"4.5000000000",
              observation_notes:"Night event: 2dattes + 2 gateaux"
           },
           {  
              observation_date:"2018-06-25",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-06-26",
              observation_value:"4.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-27",
              observation_value:"4.5000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-28",
              observation_value:"4.5000000000",
              observation_notes:"Night event: 2 dattes 1 biscuits jus myrtille"
           },
           {  
              observation_date:"2018-06-29",
              observation_value:"7.0000000000",
              observation_notes:"Night event: 1 biscuit"
           },
           {  
              observation_date:"2018-06-30",
              observation_value:"4.5000000000",
              observation_notes:"Night event: 1 biscuit"
           },
           {  
              observation_date:"2018-07-01",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-02",
              observation_value:"5.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-03",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-04",
              observation_value:"5.5000000000",
              observation_notes:"Night event: 1/2 biscuit"
           },
           {  
              observation_date:"2018-07-05",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 1 biscuit"
           },
           {  
              observation_date:"2018-07-06",
              observation_value:"6.0000000000",
              observation_notes:"Night event: 1/2 biscuit"
           },
           {  
              observation_date:"2018-07-07",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-08",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 1/2 biscuit"
           },
           {  
              observation_date:"2018-07-09",
              observation_value:"4.5000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-10",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-11",
              observation_value:"5.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-12",
              observation_value:"6.0000000000",
              observation_notes:"Night event: 1 u"
           },
           {  
              observation_date:"2018-07-13",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-14",
              observation_value:"4.5000000000",
              observation_notes:"Night event: petit gateaux"
           },
           {  
              observation_date:"2018-07-15",
              observation_value:"4.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-16",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-17",
              observation_value:"5.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-18",
              observation_value:"7.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-19",
              observation_value:"6.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-20",
              observation_value:"6.5000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-21",
              observation_value:"6.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-22",
              observation_value:"4.5000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-23",
              observation_value:"4.0000000000",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-07-24",
              observation_value:"5.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-25",
              observation_value:"6.5000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-26",
              observation_value:"5.5000000000",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-07-27",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-07-28",
              observation_value:"7.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-29",
              observation_value:"6.0000000000",
              observation_notes:"Night event: 2"
           },
           {  
              observation_date:"2018-07-30",
              observation_value:"7.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-31",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-08-01",
              observation_value:"5.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-02",
              observation_value:"6.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-03",
              observation_value:"4.5000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-04",
              observation_value:"6.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-05",
              observation_value:"5.5000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-06",
              observation_value:"4.5000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-07",
              observation_value:"5.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-08",
              observation_value:"6.0000000000",
              observation_notes:"Night event: 1/2 u"
           }
        ]
     },
     {  
        indicator_name:"Fast acting insulin (morning intake dose)",
        indicator_type:"Numeric",
        observations_number:182,
        observation_period:["2018-08-08 - 2018-01-31",
        "189"         ],
        observations:[  
           {  
              observation_date:"2018-01-31",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 35g croissant et une larme de miel"
           },
           {  
              observation_date:"2018-02-01",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1.5u 1.42 a 2h du mat"
           },
           {  
              observation_date:"2018-02-02",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-03",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 3 dattes 1.22 23h/1.53 1h45"
           },
           {  
              observation_date:"2018-02-04",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-02-05",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 3 figues seches"
           },
           {  
              observation_date:"2018-02-06",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1 datte"
           },
           {  
              observation_date:"2018-02-07",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1 datte"
           },
           {  
              observation_date:"2018-02-08",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1 u"
           },
           {  
              observation_date:"2018-02-09",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1 cuillere de miel 3h 0.54 1 cuillere confiture"
           },
           {  
              observation_date:"2018-02-10",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-11",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 2 dattes"
           },
           {  
              observation_date:"2018-02-12",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-13",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-02-14",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-15",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-16",
              observation_value:"10.0000000000",
              observation_notes:"Night event: 2 u"
           },
           {  
              observation_date:"2018-02-17",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-18",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-02-19",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 2 gerbles sesame 1 gerble sans sucre"
           },
           {  
              observation_date:"2018-02-20",
              observation_value:"12.0000000000",
              observation_notes:"Night event: prunes et biscuits 2u 3h40 0.5 1 datte 1 biscuit"
           },
           {  
              observation_date:"2018-02-21",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-22",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1 biscuit 1h 0.47 1 datte + 2 biscuits"
           },
           {  
              observation_date:"2018-02-23",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-02-24",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1 datte + 1 biscuit"
           },
           {  
              observation_date:"2018-02-25",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-02-26",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-02-27",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-28",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-03-01",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1 gerble"
           },
           {  
              observation_date:"2018-03-02",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1 biscuit chocolat"
           },
           {  
              observation_date:"2018-03-03",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1/2 gerble"
           },
           {  
              observation_date:"2018-03-04",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-05",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1 gerble"
           },
           {  
              observation_date:"2018-03-06",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1.5 gerbles+1 biscuit chocolat"
           },
           {  
              observation_date:"2018-03-07",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-08",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-03-09",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-10",
              observation_value:"12.0000000000",
              observation_notes:"Night event: gerble"
           },
           {  
              observation_date:"2018-03-11",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 3/5 de gerble"
           },
           {  
              observation_date:"2018-03-12",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-13",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-14",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 0.5u"
           },
           {  
              observation_date:"2018-03-15",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-03-16",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 2 gerbles + petit veres de siro de myrtille"
           },
           {  
              observation_date:"2018-03-17",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-18",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-19",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1 datte 1 gerbles"
           },
           {  
              observation_date:"2018-03-20",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1/2 gerbles"
           },
           {  
              observation_date:"2018-03-21",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1/2 gerbles"
           },
           {  
              observation_date:"2018-03-22",
              observation_value:"10.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-23",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-03-24",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1/2 gerbles"
           },
           {  
              observation_date:"2018-03-25",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-03-26",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-03-27",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 2 dattes"
           },
           {  
              observation_date:"2018-03-28",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-03-29",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-03-30",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 2 dattes + 1 biscuits"
           },
           {  
              observation_date:"2018-03-31",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 2 dattes + 1 biscuits"
           },
           {  
              observation_date:"2018-04-01",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1 gerbles"
           },
           {  
              observation_date:"2018-04-02",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1/2 datte 1/2 gerbles"
           },
           {  
              observation_date:"2018-04-03",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-04-04",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-05",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-04-06",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1u a 3h du mat 1.58 et a 5h15 2.52 puis 1u"
           },
           {  
              observation_date:"2018-04-07",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-08",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1.5u+ verre syrop myrtille + 1 petite figue + 2 dattes"
           },
           {  
              observation_date:"2018-04-09",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-04-10",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-04-11",
              observation_value:"11.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-04-12",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1 u"
           },
           {  
              observation_date:"2018-04-13",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 3 dattes a 3h 0.44 2 dattes + 1 biscuit"
           },
           {  
              observation_date:"2018-04-14",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-15",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-16",
              observation_value:"12.0000000000",
              observation_notes:"Night event: a 1h30 2.54 1.5 u"
           },
           {  
              observation_date:"2018-04-17",
              observation_value:"12.0000000000",
              observation_notes:"Night event: rien a 3h 1.73"
           },
           {  
              observation_date:"2018-04-18",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 2.5u"
           },
           {  
              observation_date:"2018-04-19",
              observation_value:"12.0000000000",
              observation_notes:"Night event: rien  a 4h 0.8"
           },
           {  
              observation_date:"2018-04-20",
              observation_value:"10.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-21",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-22",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-23",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 2 speculos cassis 1 sucre"
           },
           {  
              observation_date:"2018-04-24",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-25",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1.5u"
           },
           {  
              observation_date:"2018-04-26",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 2"
           },
           {  
              observation_date:"2018-04-27",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-28",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-29",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-30",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 2 biscuits 1 datte 1 peu de sirop de mirtylle"
           },
           {  
              observation_date:"2018-05-01",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-02",
              observation_value:"10.0000000000",
              observation_notes:"Night event: 1 biscuit"
           },
           {  
              observation_date:"2018-05-03",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-04",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-05",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 2.5 u a 0h30 3.09 1.5u et a 5h30 0.49"
           },
           {  
              observation_date:"2018-05-06",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-07",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1.95 ds la nuit"
           },
           {  
              observation_date:"2018-05-08",
              observation_value:"12.0000000000",
              observation_notes:"Night event: a 3h 0.79 1 biscuit"
           },
           {  
              observation_date:"2018-05-09",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1 cuillere de miel"
           },
           {  
              observation_date:"2018-05-10",
              observation_value:"12.0000000000",
              observation_notes:"Night event: miel et 1/2 cake"
           },
           {  
              observation_date:"2018-05-11",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-12",
              observation_value:"7.5000000000",
              observation_notes:"Night event: 2.5u"
           },
           {  
              observation_date:"2018-05-13",
              observation_value:"5.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-05-14",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1/2 biscuit"
           },
           {  
              observation_date:"2018-05-23",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-24",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-25",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-26",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-27",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1 datte 1 biscuit"
           },
           {  
              observation_date:"2018-05-28",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-29",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-05-30",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-05-31",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1/2u"
           },
           {  
              observation_date:"2018-06-01",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-02",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-06-03",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 2.5 u"
           },
           {  
              observation_date:"2018-06-04",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-05",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-06",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-07",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-08",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-09",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 20g pain"
           },
           {  
              observation_date:"2018-06-10",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-06-11",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-06-12",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-06-13",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-06-14",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-15",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-06-16",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-17",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-18",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-19",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-20",
              observation_value:"10.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-21",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-22",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 2"
           },
           {  
              observation_date:"2018-06-23",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 2 dattes 1 biscuit"
           },
           {  
              observation_date:"2018-06-24",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 2dattes + 2 gateaux"
           },
           {  
              observation_date:"2018-06-25",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-06-26",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-27",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-28",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 2 dattes 1 biscuits jus myrtille"
           },
           {  
              observation_date:"2018-06-29",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1 biscuit"
           },
           {  
              observation_date:"2018-06-30",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1 biscuit"
           },
           {  
              observation_date:"2018-07-01",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-02",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-03",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-04",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1/2 biscuit"
           },
           {  
              observation_date:"2018-07-05",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1 biscuit"
           },
           {  
              observation_date:"2018-07-06",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1/2 biscuit"
           },
           {  
              observation_date:"2018-07-07",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-08",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1/2 biscuit"
           },
           {  
              observation_date:"2018-07-09",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-10",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-11",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-12",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1 u"
           },
           {  
              observation_date:"2018-07-13",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-14",
              observation_value:"12.0000000000",
              observation_notes:"Night event: petit gateaux"
           },
           {  
              observation_date:"2018-07-15",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-16",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-17",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-18",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-19",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-20",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-21",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-22",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-23",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-07-24",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-25",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-26",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-07-27",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-07-28",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-29",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 2"
           },
           {  
              observation_date:"2018-07-30",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-31",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-08-01",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-02",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-03",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-04",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-05",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-06",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-07",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-08",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1/2 u"
           }
        ]
     },
     {  
        indicator_name:"Fast acting insulin (lunch intake dose)",
        indicator_type:"Numeric",
        observations_number:182,
        observation_period:["2018-08-08 - 2018-01-31",
        "189"         ],
        observations:[  
           {  
              observation_date:"2018-01-31",
              observation_value:"10.0000000000",
              observation_notes:"Night event: 35g croissant et une larme de miel"
           },
           {  
              observation_date:"2018-02-01",
              observation_value:"10.0000000000",
              observation_notes:"Night event: 1.5u 1.42 a 2h du mat"
           },
           {  
              observation_date:"2018-02-02",
              observation_value:"11.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-03",
              observation_value:"11.0000000000",
              observation_notes:"Night event: 3 dattes 1.22 23h/1.53 1h45"
           },
           {  
              observation_date:"2018-02-04",
              observation_value:"10.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-02-05",
              observation_value:"11.0000000000",
              observation_notes:"Night event: 3 figues seches"
           },
           {  
              observation_date:"2018-02-06",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1 datte"
           },
           {  
              observation_date:"2018-02-07",
              observation_value:"9.5000000000",
              observation_notes:"Night event: 1 datte"
           },
           {  
              observation_date:"2018-02-08",
              observation_value:"11.0000000000",
              observation_notes:"Night event: 1 u"
           },
           {  
              observation_date:"2018-02-09",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1 cuillere de miel 3h 0.54 1 cuillere confiture"
           },
           {  
              observation_date:"2018-02-10",
              observation_value:"10.5000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-11",
              observation_value:"11.0000000000",
              observation_notes:"Night event: 2 dattes"
           },
           {  
              observation_date:"2018-02-12",
              observation_value:"10.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-13",
              observation_value:"10.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-02-14",
              observation_value:"10.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-15",
              observation_value:"11.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-16",
              observation_value:"11.0000000000",
              observation_notes:"Night event: 2 u"
           },
           {  
              observation_date:"2018-02-17",
              observation_value:"9.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-18",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-02-19",
              observation_value:"11.0000000000",
              observation_notes:"Night event: 2 gerbles sesame 1 gerble sans sucre"
           },
           {  
              observation_date:"2018-02-20",
              observation_value:"9.0000000000",
              observation_notes:"Night event: prunes et biscuits 2u 3h40 0.5 1 datte 1 biscuit"
           },
           {  
              observation_date:"2018-02-21",
              observation_value:"9.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-22",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1 biscuit 1h 0.47 1 datte + 2 biscuits"
           },
           {  
              observation_date:"2018-02-23",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-02-24",
              observation_value:"10.0000000000",
              observation_notes:"Night event: 1 datte + 1 biscuit"
           },
           {  
              observation_date:"2018-02-25",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-02-26",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-02-27",
              observation_value:"10.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-28",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-03-01",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1 gerble"
           },
           {  
              observation_date:"2018-03-02",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1 biscuit chocolat"
           },
           {  
              observation_date:"2018-03-03",
              observation_value:"10.0000000000",
              observation_notes:"Night event: 1/2 gerble"
           },
           {  
              observation_date:"2018-03-04",
              observation_value:"10.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-05",
              observation_value:"10.0000000000",
              observation_notes:"Night event: 1 gerble"
           },
           {  
              observation_date:"2018-03-06",
              observation_value:"8.0000000000",
              observation_notes:"Night event: 1.5 gerbles+1 biscuit chocolat"
           },
           {  
              observation_date:"2018-03-07",
              observation_value:"9.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-08",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-03-09",
              observation_value:"9.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-10",
              observation_value:"9.0000000000",
              observation_notes:"Night event: gerble"
           },
           {  
              observation_date:"2018-03-11",
              observation_value:"10.0000000000",
              observation_notes:"Night event: 3/5 de gerble"
           },
           {  
              observation_date:"2018-03-12",
              observation_value:"9.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-13",
              observation_value:"9.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-14",
              observation_value:"9.5000000000",
              observation_notes:"Night event: 0.5u"
           },
           {  
              observation_date:"2018-03-15",
              observation_value:"10.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-03-16",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 2 gerbles + petit veres de siro de myrtille"
           },
           {  
              observation_date:"2018-03-17",
              observation_value:"10.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-18",
              observation_value:"10.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-19",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1 datte 1 gerbles"
           },
           {  
              observation_date:"2018-03-20",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1/2 gerbles"
           },
           {  
              observation_date:"2018-03-21",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1/2 gerbles"
           },
           {  
              observation_date:"2018-03-22",
              observation_value:"10.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-23",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-03-24",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1/2 gerbles"
           },
           {  
              observation_date:"2018-03-25",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-03-26",
              observation_value:"8.5000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-03-27",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 2 dattes"
           },
           {  
              observation_date:"2018-03-28",
              observation_value:"8.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-03-29",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-03-30",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 2 dattes + 1 biscuits"
           },
           {  
              observation_date:"2018-03-31",
              observation_value:"8.5000000000",
              observation_notes:"Night event: 2 dattes + 1 biscuits"
           },
           {  
              observation_date:"2018-04-01",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1 gerbles"
           },
           {  
              observation_date:"2018-04-02",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1/2 datte 1/2 gerbles"
           },
           {  
              observation_date:"2018-04-03",
              observation_value:"9.5000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-04-04",
              observation_value:"9.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-05",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-04-06",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1u a 3h du mat 1.58 et a 5h15 2.52 puis 1u"
           },
           {  
              observation_date:"2018-04-07",
              observation_value:"9.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-08",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1.5u+ verre syrop myrtille + 1 petite figue + 2 dattes"
           },
           {  
              observation_date:"2018-04-09",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-04-10",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-04-11",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-04-12",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1 u"
           },
           {  
              observation_date:"2018-04-13",
              observation_value:"10.0000000000",
              observation_notes:"Night event: 3 dattes a 3h 0.44 2 dattes + 1 biscuit"
           },
           {  
              observation_date:"2018-04-14",
              observation_value:"9.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-15",
              observation_value:"9.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-16",
              observation_value:"9.0000000000",
              observation_notes:"Night event: a 1h30 2.54 1.5 u"
           },
           {  
              observation_date:"2018-04-17",
              observation_value:"9.0000000000",
              observation_notes:"Night event: rien a 3h 1.73"
           },
           {  
              observation_date:"2018-04-18",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 2.5u"
           },
           {  
              observation_date:"2018-04-19",
              observation_value:"9.0000000000",
              observation_notes:"Night event: rien  a 4h 0.8"
           },
           {  
              observation_date:"2018-04-20",
              observation_value:"8.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-21",
              observation_value:"9.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-22",
              observation_value:"9.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-23",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 2 speculos cassis 1 sucre"
           },
           {  
              observation_date:"2018-04-24",
              observation_value:"9.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-25",
              observation_value:"10.0000000000",
              observation_notes:"Night event: 1.5u"
           },
           {  
              observation_date:"2018-04-26",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 2"
           },
           {  
              observation_date:"2018-04-27",
              observation_value:"9.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-28",
              observation_value:"10.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-29",
              observation_value:"9.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-30",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 2 biscuits 1 datte 1 peu de sirop de mirtylle"
           },
           {  
              observation_date:"2018-05-01",
              observation_value:"10.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-02",
              observation_value:"8.0000000000",
              observation_notes:"Night event: 1 biscuit"
           },
           {  
              observation_date:"2018-05-03",
              observation_value:"9.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-04",
              observation_value:"9.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-05",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 2.5 u a 0h30 3.09 1.5u et a 5h30 0.49"
           },
           {  
              observation_date:"2018-05-06",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-07",
              observation_value:"8.0000000000",
              observation_notes:"Night event: 1.95 ds la nuit"
           },
           {  
              observation_date:"2018-05-08",
              observation_value:"9.0000000000",
              observation_notes:"Night event: a 3h 0.79 1 biscuit"
           },
           {  
              observation_date:"2018-05-09",
              observation_value:"8.0000000000",
              observation_notes:"Night event: 1 cuillere de miel"
           },
           {  
              observation_date:"2018-05-10",
              observation_value:"7.0000000000",
              observation_notes:"Night event: miel et 1/2 cake"
           },
           {  
              observation_date:"2018-05-11",
              observation_value:"9.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-12",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 2.5u"
           },
           {  
              observation_date:"2018-05-13",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-05-14",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1/2 biscuit"
           },
           {  
              observation_date:"2018-05-23",
              observation_value:"7.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-24",
              observation_value:"9.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-25",
              observation_value:"10.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-26",
              observation_value:"9.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-27",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1 datte 1 biscuit"
           },
           {  
              observation_date:"2018-05-28",
              observation_value:"9.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-29",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-05-30",
              observation_value:"10.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-05-31",
              observation_value:"11.0000000000",
              observation_notes:"Night event: 1/2u"
           },
           {  
              observation_date:"2018-06-01",
              observation_value:"9.5000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-02",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-06-03",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 2.5 u"
           },
           {  
              observation_date:"2018-06-04",
              observation_value:"10.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-05",
              observation_value:"10.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-06",
              observation_value:"11.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-07",
              observation_value:"11.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-08",
              observation_value:"9.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-09",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 20g pain"
           },
           {  
              observation_date:"2018-06-10",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-06-11",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-06-12",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-06-13",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-06-14",
              observation_value:"9.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-15",
              observation_value:"8.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-06-16",
              observation_value:"9.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-17",
              observation_value:"9.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-18",
              observation_value:"10.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-19",
              observation_value:"9.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-20",
              observation_value:"7.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-21",
              observation_value:"10.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-22",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 2"
           },
           {  
              observation_date:"2018-06-23",
              observation_value:"10.0000000000",
              observation_notes:"Night event: 2 dattes 1 biscuit"
           },
           {  
              observation_date:"2018-06-24",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 2dattes + 2 gateaux"
           },
           {  
              observation_date:"2018-06-25",
              observation_value:"8.5000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-06-26",
              observation_value:"9.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-27",
              observation_value:"11.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-28",
              observation_value:"11.0000000000",
              observation_notes:"Night event: 2 dattes 1 biscuits jus myrtille"
           },
           {  
              observation_date:"2018-06-29",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1 biscuit"
           },
           {  
              observation_date:"2018-06-30",
              observation_value:"11.0000000000",
              observation_notes:"Night event: 1 biscuit"
           },
           {  
              observation_date:"2018-07-01",
              observation_value:"10.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-02",
              observation_value:"10.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-03",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-04",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1/2 biscuit"
           },
           {  
              observation_date:"2018-07-05",
              observation_value:"10.0000000000",
              observation_notes:"Night event: 1 biscuit"
           },
           {  
              observation_date:"2018-07-06",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1/2 biscuit"
           },
           {  
              observation_date:"2018-07-07",
              observation_value:"10.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-08",
              observation_value:"9.5000000000",
              observation_notes:"Night event: 1/2 biscuit"
           },
           {  
              observation_date:"2018-07-09",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-10",
              observation_value:"8.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-11",
              observation_value:"8.5000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-12",
              observation_value:"8.5000000000",
              observation_notes:"Night event: 1 u"
           },
           {  
              observation_date:"2018-07-13",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-14",
              observation_value:"9.0000000000",
              observation_notes:"Night event: petit gateaux"
           },
           {  
              observation_date:"2018-07-15",
              observation_value:"8.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-16",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-17",
              observation_value:"9.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-18",
              observation_value:"10.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-19",
              observation_value:"10.5000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-20",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-21",
              observation_value:"10.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-22",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-23",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-07-24",
              observation_value:"11.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-25",
              observation_value:"11.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-26",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-07-27",
              observation_value:"10.0000000000",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-07-28",
              observation_value:"11.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-29",
              observation_value:"11.0000000000",
              observation_notes:"Night event: 2"
           },
           {  
              observation_date:"2018-07-30",
              observation_value:"9.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-31",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-08-01",
              observation_value:"9.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-02",
              observation_value:"9.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-03",
              observation_value:"9.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-04",
              observation_value:"10.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-05",
              observation_value:"9.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-06",
              observation_value:"9.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-07",
              observation_value:"9.5000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-08",
              observation_value:"11.0000000000",
              observation_notes:"Night event: 1/2 u"
           }
        ]
     },
     {  
        indicator_name:"Fast acting insulin (dinner intake dose)",
        indicator_type:"Numeric",
        observations_number:182,
        observation_period:["2018-08-08 - 2018-01-31",
        "189"         ],
        observations:[  
           {  
              observation_date:"2018-01-31",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 35g croissant et une larme de miel"
           },
           {  
              observation_date:"2018-02-01",
              observation_value:"10.0000000000",
              observation_notes:"Night event: 1.5u 1.42 a 2h du mat"
           },
           {  
              observation_date:"2018-02-02",
              observation_value:"8.5000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-03",
              observation_value:"8.5000000000",
              observation_notes:"Night event: 3 dattes 1.22 23h/1.53 1h45"
           },
           {  
              observation_date:"2018-02-04",
              observation_value:"8.5000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-02-05",
              observation_value:"10.0000000000",
              observation_notes:"Night event: 3 figues seches"
           },
           {  
              observation_date:"2018-02-06",
              observation_value:"7.0000000000",
              observation_notes:"Night event: 1 datte"
           },
           {  
              observation_date:"2018-02-07",
              observation_value:"8.0000000000",
              observation_notes:"Night event: 1 datte"
           },
           {  
              observation_date:"2018-02-08",
              observation_value:"10.0000000000",
              observation_notes:"Night event: 1 u"
           },
           {  
              observation_date:"2018-02-09",
              observation_value:"10.0000000000",
              observation_notes:"Night event: 1 cuillere de miel 3h 0.54 1 cuillere confiture"
           },
           {  
              observation_date:"2018-02-10",
              observation_value:"8.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-11",
              observation_value:"11.0000000000",
              observation_notes:"Night event: 2 dattes"
           },
           {  
              observation_date:"2018-02-12",
              observation_value:"7.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-13",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-02-14",
              observation_value:"9.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-15",
              observation_value:"10.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-16",
              observation_value:"8.0000000000",
              observation_notes:"Night event: 2 u"
           },
           {  
              observation_date:"2018-02-17",
              observation_value:"8.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-18",
              observation_value:"8.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-02-19",
              observation_value:"8.0000000000",
              observation_notes:"Night event: 2 gerbles sesame 1 gerble sans sucre"
           },
           {  
              observation_date:"2018-02-20",
              observation_value:"8.0000000000",
              observation_notes:"Night event: prunes et biscuits 2u 3h40 0.5 1 datte 1 biscuit"
           },
           {  
              observation_date:"2018-02-21",
              observation_value:"11.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-22",
              observation_value:"10.0000000000",
              observation_notes:"Night event: 1 biscuit 1h 0.47 1 datte + 2 biscuits"
           },
           {  
              observation_date:"2018-02-23",
              observation_value:"8.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-02-24",
              observation_value:"8.0000000000",
              observation_notes:"Night event: 1 datte + 1 biscuit"
           },
           {  
              observation_date:"2018-02-25",
              observation_value:"7.0000000000",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-02-26",
              observation_value:"8.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-02-27",
              observation_value:"8.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-28",
              observation_value:"8.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-03-01",
              observation_value:"8.0000000000",
              observation_notes:"Night event: 1 gerble"
           },
           {  
              observation_date:"2018-03-02",
              observation_value:"10.0000000000",
              observation_notes:"Night event: 1 biscuit chocolat"
           },
           {  
              observation_date:"2018-03-03",
              observation_value:"10.0000000000",
              observation_notes:"Night event: 1/2 gerble"
           },
           {  
              observation_date:"2018-03-04",
              observation_value:"7.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-05",
              observation_value:"10.5000000000",
              observation_notes:"Night event: 1 gerble"
           },
           {  
              observation_date:"2018-03-06",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1.5 gerbles+1 biscuit chocolat"
           },
           {  
              observation_date:"2018-03-07",
              observation_value:"10.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-08",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-03-09",
              observation_value:"11.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-10",
              observation_value:"7.0000000000",
              observation_notes:"Night event: gerble"
           },
           {  
              observation_date:"2018-03-11",
              observation_value:"8.0000000000",
              observation_notes:"Night event: 3/5 de gerble"
           },
           {  
              observation_date:"2018-03-12",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-13",
              observation_value:"10.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-14",
              observation_value:"10.0000000000",
              observation_notes:"Night event: 0.5u"
           },
           {  
              observation_date:"2018-03-15",
              observation_value:"8.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-03-16",
              observation_value:"8.0000000000",
              observation_notes:"Night event: 2 gerbles + petit veres de siro de myrtille"
           },
           {  
              observation_date:"2018-03-17",
              observation_value:"8.5000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-18",
              observation_value:"9.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-19",
              observation_value:"7.0000000000",
              observation_notes:"Night event: 1 datte 1 gerbles"
           },
           {  
              observation_date:"2018-03-20",
              observation_value:"6.0000000000",
              observation_notes:"Night event: 1/2 gerbles"
           },
           {  
              observation_date:"2018-03-21",
              observation_value:"8.0000000000",
              observation_notes:"Night event: 1/2 gerbles"
           },
           {  
              observation_date:"2018-03-22",
              observation_value:"8.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-23",
              observation_value:"7.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-03-24",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1/2 gerbles"
           },
           {  
              observation_date:"2018-03-25",
              observation_value:"7.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-03-26",
              observation_value:"8.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-03-27",
              observation_value:"6.0000000000",
              observation_notes:"Night event: 2 dattes"
           },
           {  
              observation_date:"2018-03-28",
              observation_value:"6.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-03-29",
              observation_value:"9.5000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-03-30",
              observation_value:"7.0000000000",
              observation_notes:"Night event: 2 dattes + 1 biscuits"
           },
           {  
              observation_date:"2018-03-31",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 2 dattes + 1 biscuits"
           },
           {  
              observation_date:"2018-04-01",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1 gerbles"
           },
           {  
              observation_date:"2018-04-02",
              observation_value:"8.0000000000",
              observation_notes:"Night event: 1/2 datte 1/2 gerbles"
           },
           {  
              observation_date:"2018-04-03",
              observation_value:"7.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-04-04",
              observation_value:"8.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-05",
              observation_value:"10.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-04-06",
              observation_value:"7.0000000000",
              observation_notes:"Night event: 1u a 3h du mat 1.58 et a 5h15 2.52 puis 1u"
           },
           {  
              observation_date:"2018-04-07",
              observation_value:"7.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-08",
              observation_value:"10.0000000000",
              observation_notes:"Night event: 1.5u+ verre syrop myrtille + 1 petite figue + 2 dattes"
           },
           {  
              observation_date:"2018-04-09",
              observation_value:"7.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-04-10",
              observation_value:"10.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-04-11",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-04-12",
              observation_value:"11.0000000000",
              observation_notes:"Night event: 1 u"
           },
           {  
              observation_date:"2018-04-13",
              observation_value:"11.0000000000",
              observation_notes:"Night event: 3 dattes a 3h 0.44 2 dattes + 1 biscuit"
           },
           {  
              observation_date:"2018-04-14",
              observation_value:"9.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-15",
              observation_value:"8.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-16",
              observation_value:"9.0000000000",
              observation_notes:"Night event: a 1h30 2.54 1.5 u"
           },
           {  
              observation_date:"2018-04-17",
              observation_value:"7.0000000000",
              observation_notes:"Night event: rien a 3h 1.73"
           },
           {  
              observation_date:"2018-04-18",
              observation_value:"7.0000000000",
              observation_notes:"Night event: 2.5u"
           },
           {  
              observation_date:"2018-04-19",
              observation_value:"9.0000000000",
              observation_notes:"Night event: rien  a 4h 0.8"
           },
           {  
              observation_date:"2018-04-20",
              observation_value:"1.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-21",
              observation_value:"7.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-22",
              observation_value:"7.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-23",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 2 speculos cassis 1 sucre"
           },
           {  
              observation_date:"2018-04-24",
              observation_value:"7.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-25",
              observation_value:"7.0000000000",
              observation_notes:"Night event: 1.5u"
           },
           {  
              observation_date:"2018-04-26",
              observation_value:"3.4000000000",
              observation_notes:"Night event: 2"
           },
           {  
              observation_date:"2018-04-27",
              observation_value:"11.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-28",
              observation_value:"3.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-29",
              observation_value:"8.5000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-30",
              observation_value:"10.0000000000",
              observation_notes:"Night event: 2 biscuits 1 datte 1 peu de sirop de mirtylle"
           },
           {  
              observation_date:"2018-05-01",
              observation_value:"10.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-02",
              observation_value:"10.0000000000",
              observation_notes:"Night event: 1 biscuit"
           },
           {  
              observation_date:"2018-05-03",
              observation_value:"8.5000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-04",
              observation_value:"7.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-05",
              observation_value:"11.0000000000",
              observation_notes:"Night event: 2.5 u a 0h30 3.09 1.5u et a 5h30 0.49"
           },
           {  
              observation_date:"2018-05-06",
              observation_value:"7.5000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-07",
              observation_value:"7.0000000000",
              observation_notes:"Night event: 1.95 ds la nuit"
           },
           {  
              observation_date:"2018-05-08",
              observation_value:"8.0000000000",
              observation_notes:"Night event: a 3h 0.79 1 biscuit"
           },
           {  
              observation_date:"2018-05-09",
              observation_value:"8.0000000000",
              observation_notes:"Night event: 1 cuillere de miel"
           },
           {  
              observation_date:"2018-05-10",
              observation_value:"7.0000000000",
              observation_notes:"Night event: miel et 1/2 cake"
           },
           {  
              observation_date:"2018-05-11",
              observation_value:"6.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-12",
              observation_value:"10.0000000000",
              observation_notes:"Night event: 2.5u"
           },
           {  
              observation_date:"2018-05-13",
              observation_value:"8.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-05-14",
              observation_value:"10.0000000000",
              observation_notes:"Night event: 1/2 biscuit"
           },
           {  
              observation_date:"2018-05-23",
              observation_value:"9.5000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-24",
              observation_value:"7.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-25",
              observation_value:"9.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-26",
              observation_value:"7.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-27",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1 datte 1 biscuit"
           },
           {  
              observation_date:"2018-05-28",
              observation_value:"8.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-29",
              observation_value:"8.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-05-30",
              observation_value:"10.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-05-31",
              observation_value:"10.0000000000",
              observation_notes:"Night event: 1/2u"
           },
           {  
              observation_date:"2018-06-01",
              observation_value:"8.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-02",
              observation_value:"8.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-06-03",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 2.5 u"
           },
           {  
              observation_date:"2018-06-04",
              observation_value:"9.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-05",
              observation_value:"2.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-06",
              observation_value:"12.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-07",
              observation_value:"9.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-08",
              observation_value:"7.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-09",
              observation_value:"7.5000000000",
              observation_notes:"Night event: 20g pain"
           },
           {  
              observation_date:"2018-06-10",
              observation_value:"7.5000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-06-11",
              observation_value:"7.0000000000",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-06-12",
              observation_value:"8.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-06-13",
              observation_value:"11.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-06-14",
              observation_value:"7.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-15",
              observation_value:"12.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-06-16",
              observation_value:"11.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-17",
              observation_value:"7.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-18",
              observation_value:"8.5000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-19",
              observation_value:"11.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-20",
              observation_value:"1.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-21",
              observation_value:"10.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-22",
              observation_value:"9.5000000000",
              observation_notes:"Night event: 2"
           },
           {  
              observation_date:"2018-06-23",
              observation_value:"11.0000000000",
              observation_notes:"Night event: 2 dattes 1 biscuit"
           },
           {  
              observation_date:"2018-06-24",
              observation_value:"10.0000000000",
              observation_notes:"Night event: 2dattes + 2 gateaux"
           },
           {  
              observation_date:"2018-06-25",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-06-26",
              observation_value:"9.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-27",
              observation_value:"10.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-28",
              observation_value:"11.0000000000",
              observation_notes:"Night event: 2 dattes 1 biscuits jus myrtille"
           },
           {  
              observation_date:"2018-06-29",
              observation_value:"7.5000000000",
              observation_notes:"Night event: 1 biscuit"
           },
           {  
              observation_date:"2018-06-30",
              observation_value:"7.0000000000",
              observation_notes:"Night event: 1 biscuit"
           },
           {  
              observation_date:"2018-07-01",
              observation_value:"10.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-02",
              observation_value:"10.5000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-03",
              observation_value:"8.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-04",
              observation_value:"8.0000000000",
              observation_notes:"Night event: 1/2 biscuit"
           },
           {  
              observation_date:"2018-07-05",
              observation_value:"8.0000000000",
              observation_notes:"Night event: 1 biscuit"
           },
           {  
              observation_date:"2018-07-06",
              observation_value:"7.5000000000",
              observation_notes:"Night event: 1/2 biscuit"
           },
           {  
              observation_date:"2018-07-07",
              observation_value:"10.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-08",
              observation_value:"8.0000000000",
              observation_notes:"Night event: 1/2 biscuit"
           },
           {  
              observation_date:"2018-07-09",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-10",
              observation_value:"8.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-11",
              observation_value:"11.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-12",
              observation_value:"8.0000000000",
              observation_notes:"Night event: 1 u"
           },
           {  
              observation_date:"2018-07-13",
              observation_value:"8.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-14",
              observation_value:"9.0000000000",
              observation_notes:"Night event: petit gateaux"
           },
           {  
              observation_date:"2018-07-15",
              observation_value:"8.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-16",
              observation_value:"8.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-17",
              observation_value:"9.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-18",
              observation_value:"8.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-19",
              observation_value:"8.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-20",
              observation_value:"8.5000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-21",
              observation_value:"8.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-22",
              observation_value:"7.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-23",
              observation_value:"8.0000000000",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-07-24",
              observation_value:"8.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-25",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-26",
              observation_value:"10.0000000000",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-07-27",
              observation_value:"8.0000000000",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-07-28",
              observation_value:"9.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-29",
              observation_value:"8.0000000000",
              observation_notes:"Night event: 2"
           },
           {  
              observation_date:"2018-07-30",
              observation_value:"8.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-31",
              observation_value:"9.5000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-08-01",
              observation_value:"9.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-02",
              observation_value:"8.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-03",
              observation_value:"9.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-04",
              observation_value:"9.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-05",
              observation_value:"9.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-06",
              observation_value:"9.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-07",
              observation_value:"8.5000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-08",
              observation_value:"9.0000000000",
              observation_notes:"Night event: 1/2 u"
           }
        ]
     },
     {  
        indicator_name:"Morning glucose level",
        indicator_type:"Numeric",
        observations_number:182,
        observation_period:["2018-08-08 - 2018-01-31",
        "189"         ],
        observations:[  
           {  
              observation_date:"2018-01-31",
              observation_value:"95.0000000000",
              observation_notes:"Night event: 35g croissant et une larme de miel"
           },
           {  
              observation_date:"2018-02-01",
              observation_value:"249.0000000000",
              observation_notes:"Night event: 1.5u 1.42 a 2h du mat"
           },
           {  
              observation_date:"2018-02-02",
              observation_value:"181.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-03",
              observation_value:"141.0000000000",
              observation_notes:"Night event: 3 dattes 1.22 23h/1.53 1h45"
           },
           {  
              observation_date:"2018-02-04",
              observation_value:"179.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-02-05",
              observation_value:"220.0000000000",
              observation_notes:"Night event: 3 figues seches"
           },
           {  
              observation_date:"2018-02-06",
              observation_value:"165.0000000000",
              observation_notes:"Night event: 1 datte"
           },
           {  
              observation_date:"2018-02-07",
              observation_value:"138.0000000000",
              observation_notes:"Night event: 1 datte"
           },
           {  
              observation_date:"2018-02-08",
              observation_value:"183.0000000000",
              observation_notes:"Night event: 1 u"
           },
           {  
              observation_date:"2018-02-09",
              observation_value:"258.0000000000",
              observation_notes:"Night event: 1 cuillere de miel 3h 0.54 1 cuillere confiture"
           },
           {  
              observation_date:"2018-02-10",
              observation_value:"289.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-11",
              observation_value:"181.0000000000",
              observation_notes:"Night event: 2 dattes"
           },
           {  
              observation_date:"2018-02-12",
              observation_value:"138.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-13",
              observation_value:"148.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-02-14",
              observation_value:"122.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-15",
              observation_value:"173.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-16",
              observation_value:"158.0000000000",
              observation_notes:"Night event: 2 u"
           },
           {  
              observation_date:"2018-02-17",
              observation_value:"278.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-18",
              observation_value:"153.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-02-19",
              observation_value:"134.0000000000",
              observation_notes:"Night event: 2 gerbles sesame 1 gerble sans sucre"
           },
           {  
              observation_date:"2018-02-20",
              observation_value:"182.0000000000",
              observation_notes:"Night event: prunes et biscuits 2u 3h40 0.5 1 datte 1 biscuit"
           },
           {  
              observation_date:"2018-02-21",
              observation_value:"124.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-22",
              observation_value:"121.0000000000",
              observation_notes:"Night event: 1 biscuit 1h 0.47 1 datte + 2 biscuits"
           },
           {  
              observation_date:"2018-02-23",
              observation_value:"141.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-02-24",
              observation_value:"119.0000000000",
              observation_notes:"Night event: 1 datte + 1 biscuit"
           },
           {  
              observation_date:"2018-02-25",
              observation_value:"62.0000000000",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-02-26",
              observation_value:"227.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-02-27",
              observation_value:"196.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-28",
              observation_value:"165.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-03-01",
              observation_value:"186.0000000000",
              observation_notes:"Night event: 1 gerble"
           },
           {  
              observation_date:"2018-03-02",
              observation_value:"119.0000000000",
              observation_notes:"Night event: 1 biscuit chocolat"
           },
           {  
              observation_date:"2018-03-03",
              observation_value:"165.0000000000",
              observation_notes:"Night event: 1/2 gerble"
           },
           {  
              observation_date:"2018-03-04",
              observation_value:"152.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-05",
              observation_value:"248.0000000000",
              observation_notes:"Night event: 1 gerble"
           },
           {  
              observation_date:"2018-03-06",
              observation_value:"120.0000000000",
              observation_notes:"Night event: 1.5 gerbles+1 biscuit chocolat"
           },
           {  
              observation_date:"2018-03-07",
              observation_value:"143.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-08",
              observation_value:"121.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-03-09",
              observation_value:"183.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-10",
              observation_value:"106.0000000000",
              observation_notes:"Night event: gerble"
           },
           {  
              observation_date:"2018-03-11",
              observation_value:"123.0000000000",
              observation_notes:"Night event: 3/5 de gerble"
           },
           {  
              observation_date:"2018-03-12",
              observation_value:"185.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-13",
              observation_value:"167.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-14",
              observation_value:"169.0000000000",
              observation_notes:"Night event: 0.5u"
           },
           {  
              observation_date:"2018-03-15",
              observation_value:"157.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-03-16",
              observation_value:"142.0000000000",
              observation_notes:"Night event: 2 gerbles + petit veres de siro de myrtille"
           },
           {  
              observation_date:"2018-03-17",
              observation_value:"113.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-18",
              observation_value:"129.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-19",
              observation_value:"119.0000000000",
              observation_notes:"Night event: 1 datte 1 gerbles"
           },
           {  
              observation_date:"2018-03-20",
              observation_value:"187.0000000000",
              observation_notes:"Night event: 1/2 gerbles"
           },
           {  
              observation_date:"2018-03-21",
              observation_value:"147.0000000000",
              observation_notes:"Night event: 1/2 gerbles"
           },
           {  
              observation_date:"2018-03-22",
              observation_value:"81.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-23",
              observation_value:"158.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-03-24",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 gerbles"
           },
           {  
              observation_date:"2018-03-25",
              observation_value:"130.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-03-26",
              observation_value:"199.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-03-27",
              observation_value:"125.0000000000",
              observation_notes:"Night event: 2 dattes"
           },
           {  
              observation_date:"2018-03-28",
              observation_value:"233.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-03-29",
              observation_value:"98.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-03-30",
              observation_value:"60.0000000000",
              observation_notes:"Night event: 2 dattes + 1 biscuits"
           },
           {  
              observation_date:"2018-03-31",
              observation_value:"79.0000000000",
              observation_notes:"Night event: 2 dattes + 1 biscuits"
           },
           {  
              observation_date:"2018-04-01",
              observation_value:"121.0000000000",
              observation_notes:"Night event: 1 gerbles"
           },
           {  
              observation_date:"2018-04-02",
              observation_value:"152.0000000000",
              observation_notes:"Night event: 1/2 datte 1/2 gerbles"
           },
           {  
              observation_date:"2018-04-03",
              observation_value:"270.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-04-04",
              observation_value:"109.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-05",
              observation_value:"184.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-04-06",
              observation_value:"200.0000000000",
              observation_notes:"Night event: 1u a 3h du mat 1.58 et a 5h15 2.52 puis 1u"
           },
           {  
              observation_date:"2018-04-07",
              observation_value:"212.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-08",
              observation_value:"144.0000000000",
              observation_notes:"Night event: 1.5u+ verre syrop myrtille + 1 petite figue + 2 dattes"
           },
           {  
              observation_date:"2018-04-09",
              observation_value:"227.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-04-10",
              observation_value:"80.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-04-11",
              observation_value:"177.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-04-12",
              observation_value:"167.0000000000",
              observation_notes:"Night event: 1 u"
           },
           {  
              observation_date:"2018-04-13",
              observation_value:"498.0000000000",
              observation_notes:"Night event: 3 dattes a 3h 0.44 2 dattes + 1 biscuit"
           },
           {  
              observation_date:"2018-04-14",
              observation_value:"252.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-15",
              observation_value:"195.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-16",
              observation_value:"96.0000000000",
              observation_notes:"Night event: a 1h30 2.54 1.5 u"
           },
           {  
              observation_date:"2018-04-17",
              observation_value:"238.0000000000",
              observation_notes:"Night event: rien a 3h 1.73"
           },
           {  
              observation_date:"2018-04-18",
              observation_value:"205.0000000000",
              observation_notes:"Night event: 2.5u"
           },
           {  
              observation_date:"2018-04-19",
              observation_value:"180.0000000000",
              observation_notes:"Night event: rien  a 4h 0.8"
           },
           {  
              observation_date:"2018-04-20",
              observation_value:"161.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-21",
              observation_value:"233.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-22",
              observation_value:"114.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-23",
              observation_value:"101.0000000000",
              observation_notes:"Night event: 2 speculos cassis 1 sucre"
           },
           {  
              observation_date:"2018-04-24",
              observation_value:"192.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-25",
              observation_value:"249.0000000000",
              observation_notes:"Night event: 1.5u"
           },
           {  
              observation_date:"2018-04-26",
              observation_value:"141.0000000000",
              observation_notes:"Night event: 2"
           },
           {  
              observation_date:"2018-04-27",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-28",
              observation_value:"131.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-29",
              observation_value:"65.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-30",
              observation_value:"73.0000000000",
              observation_notes:"Night event: 2 biscuits 1 datte 1 peu de sirop de mirtylle"
           },
           {  
              observation_date:"2018-05-01",
              observation_value:"185.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-02",
              observation_value:"124.0000000000",
              observation_notes:"Night event: 1 biscuit"
           },
           {  
              observation_date:"2018-05-03",
              observation_value:"136.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-04",
              observation_value:"130.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-05",
              observation_value:"148.0000000000",
              observation_notes:"Night event: 2.5 u a 0h30 3.09 1.5u et a 5h30 0.49"
           },
           {  
              observation_date:"2018-05-06",
              observation_value:"61.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-07",
              observation_value:"287.0000000000",
              observation_notes:"Night event: 1.95 ds la nuit"
           },
           {  
              observation_date:"2018-05-08",
              observation_value:"217.0000000000",
              observation_notes:"Night event: a 3h 0.79 1 biscuit"
           },
           {  
              observation_date:"2018-05-09",
              observation_value:"106.0000000000",
              observation_notes:"Night event: 1 cuillere de miel"
           },
           {  
              observation_date:"2018-05-10",
              observation_value:"191.0000000000",
              observation_notes:"Night event: miel et 1/2 cake"
           },
           {  
              observation_date:"2018-05-11",
              observation_value:"274.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-12",
              observation_value:"272.0000000000",
              observation_notes:"Night event: 2.5u"
           },
           {  
              observation_date:"2018-05-13",
              observation_value:"366.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-05-14",
              observation_value:"130.0000000000",
              observation_notes:"Night event: 1/2 biscuit"
           },
           {  
              observation_date:"2018-05-23",
              observation_value:"156.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-24",
              observation_value:"191.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-25",
              observation_value:"239.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-26",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-27",
              observation_value:"147.0000000000",
              observation_notes:"Night event: 1 datte 1 biscuit"
           },
           {  
              observation_date:"2018-05-28",
              observation_value:"210.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-29",
              observation_value:"183.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-05-30",
              observation_value:"304.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-05-31",
              observation_value:"148.0000000000",
              observation_notes:"Night event: 1/2u"
           },
           {  
              observation_date:"2018-06-01",
              observation_value:"208.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-02",
              observation_value:"109.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-06-03",
              observation_value:"218.0000000000",
              observation_notes:"Night event: 2.5 u"
           },
           {  
              observation_date:"2018-06-04",
              observation_value:"256.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-05",
              observation_value:"284.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-06",
              observation_value:"255.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-07",
              observation_value:"163.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-08",
              observation_value:"126.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-09",
              observation_value:"202.0000000000",
              observation_notes:"Night event: 20g pain"
           },
           {  
              observation_date:"2018-06-10",
              observation_value:"257.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-06-11",
              observation_value:"159.0000000000",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-06-12",
              observation_value:"166.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-06-13",
              observation_value:"254.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-06-14",
              observation_value:"182.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-15",
              observation_value:"176.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-06-16",
              observation_value:"192.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-17",
              observation_value:"163.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-18",
              observation_value:"222.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-19",
              observation_value:"110.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-20",
              observation_value:"245.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-21",
              observation_value:"202.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-22",
              observation_value:"188.0000000000",
              observation_notes:"Night event: 2"
           },
           {  
              observation_date:"2018-06-23",
              observation_value:"132.0000000000",
              observation_notes:"Night event: 2 dattes 1 biscuit"
           },
           {  
              observation_date:"2018-06-24",
              observation_value:"120.0000000000",
              observation_notes:"Night event: 2dattes + 2 gateaux"
           },
           {  
              observation_date:"2018-06-25",
              observation_value:"174.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-06-26",
              observation_value:"93.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-27",
              observation_value:"156.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-28",
              observation_value:"141.0000000000",
              observation_notes:"Night event: 2 dattes 1 biscuits jus myrtille"
           },
           {  
              observation_date:"2018-06-29",
              observation_value:"381.0000000000",
              observation_notes:"Night event: 1 biscuit"
           },
           {  
              observation_date:"2018-06-30",
              observation_value:"162.0000000000",
              observation_notes:"Night event: 1 biscuit"
           },
           {  
              observation_date:"2018-07-01",
              observation_value:"195.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-02",
              observation_value:"157.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-03",
              observation_value:"164.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-04",
              observation_value:"242.0000000000",
              observation_notes:"Night event: 1/2 biscuit"
           },
           {  
              observation_date:"2018-07-05",
              observation_value:"117.0000000000",
              observation_notes:"Night event: 1 biscuit"
           },
           {  
              observation_date:"2018-07-06",
              observation_value:"197.0000000000",
              observation_notes:"Night event: 1/2 biscuit"
           },
           {  
              observation_date:"2018-07-07",
              observation_value:"155.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-08",
              observation_value:"148.0000000000",
              observation_notes:"Night event: 1/2 biscuit"
           },
           {  
              observation_date:"2018-07-09",
              observation_value:"108.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-10",
              observation_value:"139.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-11",
              observation_value:"166.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-12",
              observation_value:"318.0000000000",
              observation_notes:"Night event: 1 u"
           },
           {  
              observation_date:"2018-07-13",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-14",
              observation_value:"119.0000000000",
              observation_notes:"Night event: petit gateaux"
           },
           {  
              observation_date:"2018-07-15",
              observation_value:"82.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-16",
              observation_value:"206.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-17",
              observation_value:"192.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-18",
              observation_value:"385.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-19",
              observation_value:"253.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-20",
              observation_value:"268.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-21",
              observation_value:"236.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-22",
              observation_value:"112.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-23",
              observation_value:"96.0000000000",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-07-24",
              observation_value:"203.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-25",
              observation_value:"259.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-26",
              observation_value:"189.0000000000",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-07-27",
              observation_value:"157.0000000000",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-07-28",
              observation_value:"300.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-29",
              observation_value:"182.0000000000",
              observation_notes:"Night event: 2"
           },
           {  
              observation_date:"2018-07-30",
              observation_value:"308.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-31",
              observation_value:"184.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-08-01",
              observation_value:"134.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-02",
              observation_value:"250.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-03",
              observation_value:"111.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-04",
              observation_value:"226.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-05",
              observation_value:"169.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-06",
              observation_value:"125.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-07",
              observation_value:"185.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-08",
              observation_value:"250.0000000000",
              observation_notes:"Night event: 1/2 u"
           }
        ]
     },
     {  
        indicator_name:"Lunch glucose level",
        indicator_type:"Numeric",
        observations_number:182,
        observation_period:["2018-08-08 - 2018-01-31",
        "189"         ],
        observations:[  
           {  
              observation_date:"2018-01-31",
              observation_value:"104.0000000000",
              observation_notes:"Night event: 35g croissant et une larme de miel"
           },
           {  
              observation_date:"2018-02-01",
              observation_value:"71.0000000000",
              observation_notes:"Night event: 1.5u 1.42 a 2h du mat"
           },
           {  
              observation_date:"2018-02-02",
              observation_value:"240.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-03",
              observation_value:"49.0000000000",
              observation_notes:"Night event: 3 dattes 1.22 23h/1.53 1h45"
           },
           {  
              observation_date:"2018-02-04",
              observation_value:"74.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-02-05",
              observation_value:"140.0000000000",
              observation_notes:"Night event: 3 figues seches"
           },
           {  
              observation_date:"2018-02-06",
              observation_value:"101.0000000000",
              observation_notes:"Night event: 1 datte"
           },
           {  
              observation_date:"2018-02-07",
              observation_value:"49.0000000000",
              observation_notes:"Night event: 1 datte"
           },
           {  
              observation_date:"2018-02-08",
              observation_value:"247.0000000000",
              observation_notes:"Night event: 1 u"
           },
           {  
              observation_date:"2018-02-09",
              observation_value:"249.0000000000",
              observation_notes:"Night event: 1 cuillere de miel 3h 0.54 1 cuillere confiture"
           },
           {  
              observation_date:"2018-02-10",
              observation_value:"199.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-11",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 2 dattes"
           },
           {  
              observation_date:"2018-02-12",
              observation_value:"110.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-13",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-02-14",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-15",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-16",
              observation_value:"194.0000000000",
              observation_notes:"Night event: 2 u"
           },
           {  
              observation_date:"2018-02-17",
              observation_value:"97.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-18",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-02-19",
              observation_value:"248.0000000000",
              observation_notes:"Night event: 2 gerbles sesame 1 gerble sans sucre"
           },
           {  
              observation_date:"2018-02-20",
              observation_value:"66.0000000000",
              observation_notes:"Night event: prunes et biscuits 2u 3h40 0.5 1 datte 1 biscuit"
           },
           {  
              observation_date:"2018-02-21",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-22",
              observation_value:"107.0000000000",
              observation_notes:"Night event: 1 biscuit 1h 0.47 1 datte + 2 biscuits"
           },
           {  
              observation_date:"2018-02-23",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-02-24",
              observation_value:"74.0000000000",
              observation_notes:"Night event: 1 datte + 1 biscuit"
           },
           {  
              observation_date:"2018-02-25",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-02-26",
              observation_value:"54.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-02-27",
              observation_value:"191.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-28",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-03-01",
              observation_value:"80.0000000000",
              observation_notes:"Night event: 1 gerble"
           },
           {  
              observation_date:"2018-03-02",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1 biscuit chocolat"
           },
           {  
              observation_date:"2018-03-03",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 gerble"
           },
           {  
              observation_date:"2018-03-04",
              observation_value:"225.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-05",
              observation_value:"151.0000000000",
              observation_notes:"Night event: 1 gerble"
           },
           {  
              observation_date:"2018-03-06",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1.5 gerbles+1 biscuit chocolat"
           },
           {  
              observation_date:"2018-03-07",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-08",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-03-09",
              observation_value:"83.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-10",
              observation_value:"51.0000000000",
              observation_notes:"Night event: gerble"
           },
           {  
              observation_date:"2018-03-11",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 3/5 de gerble"
           },
           {  
              observation_date:"2018-03-12",
              observation_value:"147.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-13",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-14",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 0.5u"
           },
           {  
              observation_date:"2018-03-15",
              observation_value:"193.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-03-16",
              observation_value:"78.0000000000",
              observation_notes:"Night event: 2 gerbles + petit veres de siro de myrtille"
           },
           {  
              observation_date:"2018-03-17",
              observation_value:"61.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-18",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-19",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1 datte 1 gerbles"
           },
           {  
              observation_date:"2018-03-20",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 gerbles"
           },
           {  
              observation_date:"2018-03-21",
              observation_value:"63.0000000000",
              observation_notes:"Night event: 1/2 gerbles"
           },
           {  
              observation_date:"2018-03-22",
              observation_value:"190.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-23",
              observation_value:"64.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-03-24",
              observation_value:"89.0000000000",
              observation_notes:"Night event: 1/2 gerbles"
           },
           {  
              observation_date:"2018-03-25",
              observation_value:"60.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-03-26",
              observation_value:"63.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-03-27",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 2 dattes"
           },
           {  
              observation_date:"2018-03-28",
              observation_value:"57.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-03-29",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-03-30",
              observation_value:"67.0000000000",
              observation_notes:"Night event: 2 dattes + 1 biscuits"
           },
           {  
              observation_date:"2018-03-31",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 2 dattes + 1 biscuits"
           },
           {  
              observation_date:"2018-04-01",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1 gerbles"
           },
           {  
              observation_date:"2018-04-02",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 datte 1/2 gerbles"
           },
           {  
              observation_date:"2018-04-03",
              observation_value:"204.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-04-04",
              observation_value:"102.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-05",
              observation_value:"149.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-04-06",
              observation_value:"117.0000000000",
              observation_notes:"Night event: 1u a 3h du mat 1.58 et a 5h15 2.52 puis 1u"
           },
           {  
              observation_date:"2018-04-07",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-08",
              observation_value:"65.0000000000",
              observation_notes:"Night event: 1.5u+ verre syrop myrtille + 1 petite figue + 2 dattes"
           },
           {  
              observation_date:"2018-04-09",
              observation_value:"134.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-04-10",
              observation_value:"54.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-04-11",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-04-12",
              observation_value:"104.0000000000",
              observation_notes:"Night event: 1 u"
           },
           {  
              observation_date:"2018-04-13",
              observation_value:"222.0000000000",
              observation_notes:"Night event: 3 dattes a 3h 0.44 2 dattes + 1 biscuit"
           },
           {  
              observation_date:"2018-04-14",
              observation_value:"61.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-15",
              observation_value:"109.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-16",
              observation_value:"86.0000000000",
              observation_notes:"Night event: a 1h30 2.54 1.5 u"
           },
           {  
              observation_date:"2018-04-17",
              observation_value:"171.0000000000",
              observation_notes:"Night event: rien a 3h 1.73"
           },
           {  
              observation_date:"2018-04-18",
              observation_value:"202.0000000000",
              observation_notes:"Night event: 2.5u"
           },
           {  
              observation_date:"2018-04-19",
              observation_value:"82.0000000000",
              observation_notes:"Night event: rien  a 4h 0.8"
           },
           {  
              observation_date:"2018-04-20",
              observation_value:"179.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-21",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-22",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-23",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 2 speculos cassis 1 sucre"
           },
           {  
              observation_date:"2018-04-24",
              observation_value:"169.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-25",
              observation_value:"224.0000000000",
              observation_notes:"Night event: 1.5u"
           },
           {  
              observation_date:"2018-04-26",
              observation_value:"163.0000000000",
              observation_notes:"Night event: 2"
           },
           {  
              observation_date:"2018-04-27",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-28",
              observation_value:"255.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-29",
              observation_value:"194.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-30",
              observation_value:"163.0000000000",
              observation_notes:"Night event: 2 biscuits 1 datte 1 peu de sirop de mirtylle"
           },
           {  
              observation_date:"2018-05-01",
              observation_value:"236.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-02",
              observation_value:"271.0000000000",
              observation_notes:"Night event: 1 biscuit"
           },
           {  
              observation_date:"2018-05-03",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-04",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-05",
              observation_value:"147.0000000000",
              observation_notes:"Night event: 2.5 u a 0h30 3.09 1.5u et a 5h30 0.49"
           },
           {  
              observation_date:"2018-05-06",
              observation_value:"87.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-07",
              observation_value:"116.0000000000",
              observation_notes:"Night event: 1.95 ds la nuit"
           },
           {  
              observation_date:"2018-05-08",
              observation_value:"170.0000000000",
              observation_notes:"Night event: a 3h 0.79 1 biscuit"
           },
           {  
              observation_date:"2018-05-09",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1 cuillere de miel"
           },
           {  
              observation_date:"2018-05-10",
              observation_value:"61.0000000000",
              observation_notes:"Night event: miel et 1/2 cake"
           },
           {  
              observation_date:"2018-05-11",
              observation_value:"123.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-12",
              observation_value:"247.0000000000",
              observation_notes:"Night event: 2.5u"
           },
           {  
              observation_date:"2018-05-13",
              observation_value:"177.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-05-14",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 biscuit"
           },
           {  
              observation_date:"2018-05-23",
              observation_value:"63.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-24",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-25",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-26",
              observation_value:"159.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-27",
              observation_value:"75.0000000000",
              observation_notes:"Night event: 1 datte 1 biscuit"
           },
           {  
              observation_date:"2018-05-28",
              observation_value:"111.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-29",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-05-30",
              observation_value:"185.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-05-31",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2u"
           },
           {  
              observation_date:"2018-06-01",
              observation_value:"139.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-02",
              observation_value:"108.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-06-03",
              observation_value:"239.0000000000",
              observation_notes:"Night event: 2.5 u"
           },
           {  
              observation_date:"2018-06-04",
              observation_value:"251.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-05",
              observation_value:"167.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-06",
              observation_value:"223.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-07",
              observation_value:"186.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-08",
              observation_value:"122.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-09",
              observation_value:"88.0000000000",
              observation_notes:"Night event: 20g pain"
           },
           {  
              observation_date:"2018-06-10",
              observation_value:"79.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-06-11",
              observation_value:"116.0000000000",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-06-12",
              observation_value:"89.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-06-13",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-06-14",
              observation_value:"91.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-15",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-06-16",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-17",
              observation_value:"112.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-18",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-19",
              observation_value:"133.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-20",
              observation_value:"140.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-21",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-22",
              observation_value:"70.0000000000",
              observation_notes:"Night event: 2"
           },
           {  
              observation_date:"2018-06-23",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 2 dattes 1 biscuit"
           },
           {  
              observation_date:"2018-06-24",
              observation_value:"350.0000000000",
              observation_notes:"Night event: 2dattes + 2 gateaux"
           },
           {  
              observation_date:"2018-06-25",
              observation_value:"69.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-06-26",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-27",
              observation_value:"181.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-28",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 2 dattes 1 biscuits jus myrtille"
           },
           {  
              observation_date:"2018-06-29",
              observation_value:"262.0000000000",
              observation_notes:"Night event: 1 biscuit"
           },
           {  
              observation_date:"2018-06-30",
              observation_value:"189.0000000000",
              observation_notes:"Night event: 1 biscuit"
           },
           {  
              observation_date:"2018-07-01",
              observation_value:"199.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-02",
              observation_value:"200.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-03",
              observation_value:"111.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-04",
              observation_value:"85.0000000000",
              observation_notes:"Night event: 1/2 biscuit"
           },
           {  
              observation_date:"2018-07-05",
              observation_value:"295.0000000000",
              observation_notes:"Night event: 1 biscuit"
           },
           {  
              observation_date:"2018-07-06",
              observation_value:"58.0000000000",
              observation_notes:"Night event: 1/2 biscuit"
           },
           {  
              observation_date:"2018-07-07",
              observation_value:"103.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-08",
              observation_value:"99.0000000000",
              observation_notes:"Night event: 1/2 biscuit"
           },
           {  
              observation_date:"2018-07-09",
              observation_value:"76.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-10",
              observation_value:"96.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-11",
              observation_value:"70.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-12",
              observation_value:"101.0000000000",
              observation_notes:"Night event: 1 u"
           },
           {  
              observation_date:"2018-07-13",
              observation_value:"151.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-14",
              observation_value:"81.0000000000",
              observation_notes:"Night event: petit gateaux"
           },
           {  
              observation_date:"2018-07-15",
              observation_value:"75.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-16",
              observation_value:"162.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-17",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-18",
              observation_value:"264.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-19",
              observation_value:"186.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-20",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-21",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-22",
              observation_value:"115.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-23",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-07-24",
              observation_value:"189.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-25",
              observation_value:"189.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-26",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-07-27",
              observation_value:"171.0000000000",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-07-28",
              observation_value:"191.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-29",
              observation_value:"171.0000000000",
              observation_notes:"Night event: 2"
           },
           {  
              observation_date:"2018-07-30",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-31",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-08-01",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-02",
              observation_value:"199.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-03",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-04",
              observation_value:"173.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-05",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-06",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-07",
              observation_value:"150.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-08",
              observation_value:"343.0000000000",
              observation_notes:"Night event: 1/2 u"
           }
        ]
     },
     {  
        indicator_name:"Afternoon glucose level",
        indicator_type:"Numeric",
        observations_number:182,
        observation_period:["2018-08-08 - 2018-01-31",
        "189"         ],
        observations:[  
           {  
              observation_date:"2018-01-31",
              observation_value:"247.0000000000",
              observation_notes:"Night event: 35g croissant et une larme de miel"
           },
           {  
              observation_date:"2018-02-01",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1.5u 1.42 a 2h du mat"
           },
           {  
              observation_date:"2018-02-02",
              observation_value:"254.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-03",
              observation_value:"195.0000000000",
              observation_notes:"Night event: 3 dattes 1.22 23h/1.53 1h45"
           },
           {  
              observation_date:"2018-02-04",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-02-05",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 3 figues seches"
           },
           {  
              observation_date:"2018-02-06",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1 datte"
           },
           {  
              observation_date:"2018-02-07",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1 datte"
           },
           {  
              observation_date:"2018-02-08",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1 u"
           },
           {  
              observation_date:"2018-02-09",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1 cuillere de miel 3h 0.54 1 cuillere confiture"
           },
           {  
              observation_date:"2018-02-10",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-11",
              observation_value:"53.0000000000",
              observation_notes:"Night event: 2 dattes"
           },
           {  
              observation_date:"2018-02-12",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-13",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-02-14",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-15",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-16",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 2 u"
           },
           {  
              observation_date:"2018-02-17",
              observation_value:"119.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-18",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-02-19",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 2 gerbles sesame 1 gerble sans sucre"
           },
           {  
              observation_date:"2018-02-20",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: prunes et biscuits 2u 3h40 0.5 1 datte 1 biscuit"
           },
           {  
              observation_date:"2018-02-21",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-22",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1 biscuit 1h 0.47 1 datte + 2 biscuits"
           },
           {  
              observation_date:"2018-02-23",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-02-24",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1 datte + 1 biscuit"
           },
           {  
              observation_date:"2018-02-25",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-02-26",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-02-27",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-28",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-03-01",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1 gerble"
           },
           {  
              observation_date:"2018-03-02",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1 biscuit chocolat"
           },
           {  
              observation_date:"2018-03-03",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 gerble"
           },
           {  
              observation_date:"2018-03-04",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-05",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1 gerble"
           },
           {  
              observation_date:"2018-03-06",
              observation_value:"515.0000000000",
              observation_notes:"Night event: 1.5 gerbles+1 biscuit chocolat"
           },
           {  
              observation_date:"2018-03-07",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-08",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-03-09",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-10",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: gerble"
           },
           {  
              observation_date:"2018-03-11",
              observation_value:"47.0000000000",
              observation_notes:"Night event: 3/5 de gerble"
           },
           {  
              observation_date:"2018-03-12",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-13",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-14",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 0.5u"
           },
           {  
              observation_date:"2018-03-15",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-03-16",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 2 gerbles + petit veres de siro de myrtille"
           },
           {  
              observation_date:"2018-03-17",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-18",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-19",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1 datte 1 gerbles"
           },
           {  
              observation_date:"2018-03-20",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 gerbles"
           },
           {  
              observation_date:"2018-03-21",
              observation_value:"108.0000000000",
              observation_notes:"Night event: 1/2 gerbles"
           },
           {  
              observation_date:"2018-03-22",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-23",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-03-24",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 gerbles"
           },
           {  
              observation_date:"2018-03-25",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-03-26",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-03-27",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 2 dattes"
           },
           {  
              observation_date:"2018-03-28",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-03-29",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-03-30",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 2 dattes + 1 biscuits"
           },
           {  
              observation_date:"2018-03-31",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 2 dattes + 1 biscuits"
           },
           {  
              observation_date:"2018-04-01",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1 gerbles"
           },
           {  
              observation_date:"2018-04-02",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 datte 1/2 gerbles"
           },
           {  
              observation_date:"2018-04-03",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-04-04",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-05",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-04-06",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1u a 3h du mat 1.58 et a 5h15 2.52 puis 1u"
           },
           {  
              observation_date:"2018-04-07",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-08",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1.5u+ verre syrop myrtille + 1 petite figue + 2 dattes"
           },
           {  
              observation_date:"2018-04-09",
              observation_value:"88.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-04-10",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-04-11",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-04-12",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1 u"
           },
           {  
              observation_date:"2018-04-13",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 3 dattes a 3h 0.44 2 dattes + 1 biscuit"
           },
           {  
              observation_date:"2018-04-14",
              observation_value:"108.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-15",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-16",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: a 1h30 2.54 1.5 u"
           },
           {  
              observation_date:"2018-04-17",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: rien a 3h 1.73"
           },
           {  
              observation_date:"2018-04-18",
              observation_value:"48.0000000000",
              observation_notes:"Night event: 2.5u"
           },
           {  
              observation_date:"2018-04-19",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: rien  a 4h 0.8"
           },
           {  
              observation_date:"2018-04-20",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-21",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-22",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-23",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 2 speculos cassis 1 sucre"
           },
           {  
              observation_date:"2018-04-24",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-25",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1.5u"
           },
           {  
              observation_date:"2018-04-26",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 2"
           },
           {  
              observation_date:"2018-04-27",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-28",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-29",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-30",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 2 biscuits 1 datte 1 peu de sirop de mirtylle"
           },
           {  
              observation_date:"2018-05-01",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-02",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1 biscuit"
           },
           {  
              observation_date:"2018-05-03",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-04",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-05",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 2.5 u a 0h30 3.09 1.5u et a 5h30 0.49"
           },
           {  
              observation_date:"2018-05-06",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-07",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1.95 ds la nuit"
           },
           {  
              observation_date:"2018-05-08",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: a 3h 0.79 1 biscuit"
           },
           {  
              observation_date:"2018-05-09",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1 cuillere de miel"
           },
           {  
              observation_date:"2018-05-10",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: miel et 1/2 cake"
           },
           {  
              observation_date:"2018-05-11",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-12",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 2.5u"
           },
           {  
              observation_date:"2018-05-13",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-05-14",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 biscuit"
           },
           {  
              observation_date:"2018-05-23",
              observation_value:"80.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-24",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-25",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-26",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-27",
              observation_value:"215.0000000000",
              observation_notes:"Night event: 1 datte 1 biscuit"
           },
           {  
              observation_date:"2018-05-28",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-29",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-05-30",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-05-31",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2u"
           },
           {  
              observation_date:"2018-06-01",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-02",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-06-03",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 2.5 u"
           },
           {  
              observation_date:"2018-06-04",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-05",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-06",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-07",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-08",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-09",
              observation_value:"153.0000000000",
              observation_notes:"Night event: 20g pain"
           },
           {  
              observation_date:"2018-06-10",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-06-11",
              observation_value:"52.0000000000",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-06-12",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-06-13",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-06-14",
              observation_value:"52.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-15",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-06-16",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-17",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-18",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-19",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-20",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-21",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-22",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 2"
           },
           {  
              observation_date:"2018-06-23",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 2 dattes 1 biscuit"
           },
           {  
              observation_date:"2018-06-24",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 2dattes + 2 gateaux"
           },
           {  
              observation_date:"2018-06-25",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-06-26",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-27",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-28",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 2 dattes 1 biscuits jus myrtille"
           },
           {  
              observation_date:"2018-06-29",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1 biscuit"
           },
           {  
              observation_date:"2018-06-30",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1 biscuit"
           },
           {  
              observation_date:"2018-07-01",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-02",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-03",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-04",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 biscuit"
           },
           {  
              observation_date:"2018-07-05",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1 biscuit"
           },
           {  
              observation_date:"2018-07-06",
              observation_value:"75.0000000000",
              observation_notes:"Night event: 1/2 biscuit"
           },
           {  
              observation_date:"2018-07-07",
              observation_value:"48.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-08",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 biscuit"
           },
           {  
              observation_date:"2018-07-09",
              observation_value:"44.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-10",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-11",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-12",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1 u"
           },
           {  
              observation_date:"2018-07-13",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-14",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: petit gateaux"
           },
           {  
              observation_date:"2018-07-15",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-16",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-17",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-18",
              observation_value:"119.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-19",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-20",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-21",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-22",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-23",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-07-24",
              observation_value:"231.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-25",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-26",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-07-27",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-07-28",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-29",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 2"
           },
           {  
              observation_date:"2018-07-30",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-31",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-08-01",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-02",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-03",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-04",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-05",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-06",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-07",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-08",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 u"
           }
        ]
     },
     {  
        indicator_name:"Dinner glucose level",
        indicator_type:"Numeric",
        observations_number:182,
        observation_period:["2018-08-08 - 2018-01-31",
        "189"         ],
        observations:[  
           {  
              observation_date:"2018-01-31",
              observation_value:"132.0000000000",
              observation_notes:"Night event: 35g croissant et une larme de miel"
           },
           {  
              observation_date:"2018-02-01",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1.5u 1.42 a 2h du mat"
           },
           {  
              observation_date:"2018-02-02",
              observation_value:"86.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-03",
              observation_value:"140.0000000000",
              observation_notes:"Night event: 3 dattes 1.22 23h/1.53 1h45"
           },
           {  
              observation_date:"2018-02-04",
              observation_value:"155.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-02-05",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 3 figues seches"
           },
           {  
              observation_date:"2018-02-06",
              observation_value:"59.0000000000",
              observation_notes:"Night event: 1 datte"
           },
           {  
              observation_date:"2018-02-07",
              observation_value:"156.0000000000",
              observation_notes:"Night event: 1 datte"
           },
           {  
              observation_date:"2018-02-08",
              observation_value:"238.0000000000",
              observation_notes:"Night event: 1 u"
           },
           {  
              observation_date:"2018-02-09",
              observation_value:"209.0000000000",
              observation_notes:"Night event: 1 cuillere de miel 3h 0.54 1 cuillere confiture"
           },
           {  
              observation_date:"2018-02-10",
              observation_value:"136.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-11",
              observation_value:"263.0000000000",
              observation_notes:"Night event: 2 dattes"
           },
           {  
              observation_date:"2018-02-12",
              observation_value:"63.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-13",
              observation_value:"188.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-02-14",
              observation_value:"98.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-15",
              observation_value:"183.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-16",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 2 u"
           },
           {  
              observation_date:"2018-02-17",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-18",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-02-19",
              observation_value:"55.0000000000",
              observation_notes:"Night event: 2 gerbles sesame 1 gerble sans sucre"
           },
           {  
              observation_date:"2018-02-20",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: prunes et biscuits 2u 3h40 0.5 1 datte 1 biscuit"
           },
           {  
              observation_date:"2018-02-21",
              observation_value:"325.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-22",
              observation_value:"260.0000000000",
              observation_notes:"Night event: 1 biscuit 1h 0.47 1 datte + 2 biscuits"
           },
           {  
              observation_date:"2018-02-23",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-02-24",
              observation_value:"141.0000000000",
              observation_notes:"Night event: 1 datte + 1 biscuit"
           },
           {  
              observation_date:"2018-02-25",
              observation_value:"84.0000000000",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-02-26",
              observation_value:"112.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-02-27",
              observation_value:"261.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-28",
              observation_value:"100.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-03-01",
              observation_value:"58.0000000000",
              observation_notes:"Night event: 1 gerble"
           },
           {  
              observation_date:"2018-03-02",
              observation_value:"192.0000000000",
              observation_notes:"Night event: 1 biscuit chocolat"
           },
           {  
              observation_date:"2018-03-03",
              observation_value:"183.0000000000",
              observation_notes:"Night event: 1/2 gerble"
           },
           {  
              observation_date:"2018-03-04",
              observation_value:"54.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-05",
              observation_value:"273.0000000000",
              observation_notes:"Night event: 1 gerble"
           },
           {  
              observation_date:"2018-03-06",
              observation_value:"127.0000000000",
              observation_notes:"Night event: 1.5 gerbles+1 biscuit chocolat"
           },
           {  
              observation_date:"2018-03-07",
              observation_value:"193.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-08",
              observation_value:"134.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-03-09",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-10",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: gerble"
           },
           {  
              observation_date:"2018-03-11",
              observation_value:"104.0000000000",
              observation_notes:"Night event: 3/5 de gerble"
           },
           {  
              observation_date:"2018-03-12",
              observation_value:"160.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-13",
              observation_value:"253.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-14",
              observation_value:"265.0000000000",
              observation_notes:"Night event: 0.5u"
           },
           {  
              observation_date:"2018-03-15",
              observation_value:"108.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-03-16",
              observation_value:"101.0000000000",
              observation_notes:"Night event: 2 gerbles + petit veres de siro de myrtille"
           },
           {  
              observation_date:"2018-03-17",
              observation_value:"171.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-18",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-19",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1 datte 1 gerbles"
           },
           {  
              observation_date:"2018-03-20",
              observation_value:"71.0000000000",
              observation_notes:"Night event: 1/2 gerbles"
           },
           {  
              observation_date:"2018-03-21",
              observation_value:"54.0000000000",
              observation_notes:"Night event: 1/2 gerbles"
           },
           {  
              observation_date:"2018-03-22",
              observation_value:"134.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-23",
              observation_value:"68.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-03-24",
              observation_value:"208.0000000000",
              observation_notes:"Night event: 1/2 gerbles"
           },
           {  
              observation_date:"2018-03-25",
              observation_value:"55.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-03-26",
              observation_value:"153.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-03-27",
              observation_value:"57.0000000000",
              observation_notes:"Night event: 2 dattes"
           },
           {  
              observation_date:"2018-03-28",
              observation_value:"72.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-03-29",
              observation_value:"264.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-03-30",
              observation_value:"105.0000000000",
              observation_notes:"Night event: 2 dattes + 1 biscuits"
           },
           {  
              observation_date:"2018-03-31",
              observation_value:"210.0000000000",
              observation_notes:"Night event: 2 dattes + 1 biscuits"
           },
           {  
              observation_date:"2018-04-01",
              observation_value:"193.0000000000",
              observation_notes:"Night event: 1 gerbles"
           },
           {  
              observation_date:"2018-04-02",
              observation_value:"150.0000000000",
              observation_notes:"Night event: 1/2 datte 1/2 gerbles"
           },
           {  
              observation_date:"2018-04-03",
              observation_value:"157.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-04-04",
              observation_value:"190.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-05",
              observation_value:"315.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-04-06",
              observation_value:"137.0000000000",
              observation_notes:"Night event: 1u a 3h du mat 1.58 et a 5h15 2.52 puis 1u"
           },
           {  
              observation_date:"2018-04-07",
              observation_value:"111.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-08",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1.5u+ verre syrop myrtille + 1 petite figue + 2 dattes"
           },
           {  
              observation_date:"2018-04-09",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-04-10",
              observation_value:"284.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-04-11",
              observation_value:"191.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-04-12",
              observation_value:"296.0000000000",
              observation_notes:"Night event: 1 u"
           },
           {  
              observation_date:"2018-04-13",
              observation_value:"254.0000000000",
              observation_notes:"Night event: 3 dattes a 3h 0.44 2 dattes + 1 biscuit"
           },
           {  
              observation_date:"2018-04-14",
              observation_value:"220.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-15",
              observation_value:"174.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-16",
              observation_value:"264.0000000000",
              observation_notes:"Night event: a 1h30 2.54 1.5 u"
           },
           {  
              observation_date:"2018-04-17",
              observation_value:"96.0000000000",
              observation_notes:"Night event: rien a 3h 1.73"
           },
           {  
              observation_date:"2018-04-18",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 2.5u"
           },
           {  
              observation_date:"2018-04-19",
              observation_value:"239.0000000000",
              observation_notes:"Night event: rien  a 4h 0.8"
           },
           {  
              observation_date:"2018-04-20",
              observation_value:"188.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-21",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-22",
              observation_value:"97.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-23",
              observation_value:"342.0000000000",
              observation_notes:"Night event: 2 speculos cassis 1 sucre"
           },
           {  
              observation_date:"2018-04-24",
              observation_value:"105.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-25",
              observation_value:"110.0000000000",
              observation_notes:"Night event: 1.5u"
           },
           {  
              observation_date:"2018-04-26",
              observation_value:"332.0000000000",
              observation_notes:"Night event: 2"
           },
           {  
              observation_date:"2018-04-27",
              observation_value:"400.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-28",
              observation_value:"123.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-29",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-30",
              observation_value:"350.0000000000",
              observation_notes:"Night event: 2 biscuits 1 datte 1 peu de sirop de mirtylle"
           },
           {  
              observation_date:"2018-05-01",
              observation_value:"268.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-02",
              observation_value:"220.0000000000",
              observation_notes:"Night event: 1 biscuit"
           },
           {  
              observation_date:"2018-05-03",
              observation_value:"293.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-04",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-05",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 2.5 u a 0h30 3.09 1.5u et a 5h30 0.49"
           },
           {  
              observation_date:"2018-05-06",
              observation_value:"116.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-07",
              observation_value:"121.0000000000",
              observation_notes:"Night event: 1.95 ds la nuit"
           },
           {  
              observation_date:"2018-05-08",
              observation_value:"241.0000000000",
              observation_notes:"Night event: a 3h 0.79 1 biscuit"
           },
           {  
              observation_date:"2018-05-09",
              observation_value:"161.0000000000",
              observation_notes:"Night event: 1 cuillere de miel"
           },
           {  
              observation_date:"2018-05-10",
              observation_value:"107.0000000000",
              observation_notes:"Night event: miel et 1/2 cake"
           },
           {  
              observation_date:"2018-05-11",
              observation_value:"232.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-12",
              observation_value:"291.0000000000",
              observation_notes:"Night event: 2.5u"
           },
           {  
              observation_date:"2018-05-13",
              observation_value:"171.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-05-14",
              observation_value:"192.0000000000",
              observation_notes:"Night event: 1/2 biscuit"
           },
           {  
              observation_date:"2018-05-23",
              observation_value:"227.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-24",
              observation_value:"105.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-25",
              observation_value:"178.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-26",
              observation_value:"119.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-27",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1 datte 1 biscuit"
           },
           {  
              observation_date:"2018-05-28",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-29",
              observation_value:"78.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-05-30",
              observation_value:"275.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-05-31",
              observation_value:"322.0000000000",
              observation_notes:"Night event: 1/2u"
           },
           {  
              observation_date:"2018-06-01",
              observation_value:"134.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-02",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-06-03",
              observation_value:"569.0000000000",
              observation_notes:"Night event: 2.5 u"
           },
           {  
              observation_date:"2018-06-04",
              observation_value:"220.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-05",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-06",
              observation_value:"272.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-07",
              observation_value:"208.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-08",
              observation_value:"90.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-09",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 20g pain"
           },
           {  
              observation_date:"2018-06-10",
              observation_value:"150.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-06-11",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-06-12",
              observation_value:"128.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-06-13",
              observation_value:"332.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-06-14",
              observation_value:"57.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-15",
              observation_value:"313.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-06-16",
              observation_value:"258.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-17",
              observation_value:"115.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-18",
              observation_value:"147.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-19",
              observation_value:"257.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-20",
              observation_value:"57.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-21",
              observation_value:"235.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-22",
              observation_value:"163.0000000000",
              observation_notes:"Night event: 2"
           },
           {  
              observation_date:"2018-06-23",
              observation_value:"283.0000000000",
              observation_notes:"Night event: 2 dattes 1 biscuit"
           },
           {  
              observation_date:"2018-06-24",
              observation_value:"273.0000000000",
              observation_notes:"Night event: 2dattes + 2 gateaux"
           },
           {  
              observation_date:"2018-06-25",
              observation_value:"170.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-06-26",
              observation_value:"193.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-27",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-28",
              observation_value:"287.0000000000",
              observation_notes:"Night event: 2 dattes 1 biscuits jus myrtille"
           },
           {  
              observation_date:"2018-06-29",
              observation_value:"130.0000000000",
              observation_notes:"Night event: 1 biscuit"
           },
           {  
              observation_date:"2018-06-30",
              observation_value:"110.0000000000",
              observation_notes:"Night event: 1 biscuit"
           },
           {  
              observation_date:"2018-07-01",
              observation_value:"233.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-02",
              observation_value:"212.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-03",
              observation_value:"153.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-04",
              observation_value:"163.0000000000",
              observation_notes:"Night event: 1/2 biscuit"
           },
           {  
              observation_date:"2018-07-05",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1 biscuit"
           },
           {  
              observation_date:"2018-07-06",
              observation_value:"108.0000000000",
              observation_notes:"Night event: 1/2 biscuit"
           },
           {  
              observation_date:"2018-07-07",
              observation_value:"202.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-08",
              observation_value:"94.0000000000",
              observation_notes:"Night event: 1/2 biscuit"
           },
           {  
              observation_date:"2018-07-09",
              observation_value:"259.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-10",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-11",
              observation_value:"354.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-12",
              observation_value:"56.0000000000",
              observation_notes:"Night event: 1 u"
           },
           {  
              observation_date:"2018-07-13",
              observation_value:"154.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-14",
              observation_value:"245.0000000000",
              observation_notes:"Night event: petit gateaux"
           },
           {  
              observation_date:"2018-07-15",
              observation_value:"211.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-16",
              observation_value:"191.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-17",
              observation_value:"171.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-18",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-19",
              observation_value:"114.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-20",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-21",
              observation_value:"425.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-22",
              observation_value:"60.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-23",
              observation_value:"190.0000000000",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-07-24",
              observation_value:"187.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-25",
              observation_value:"307.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-26",
              observation_value:"482.0000000000",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-07-27",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-07-28",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-29",
              observation_value:"174.0000000000",
              observation_notes:"Night event: 2"
           },
           {  
              observation_date:"2018-07-30",
              observation_value:"134.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-31",
              observation_value:"365.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-08-01",
              observation_value:"230.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-02",
              observation_value:"161.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-03",
              observation_value:"309.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-04",
              observation_value:"174.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-05",
              observation_value:"189.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-06",
              observation_value:"303.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-07",
              observation_value:"199.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-08",
              observation_value:"247.0000000000",
              observation_notes:"Night event: 1/2 u"
           }
        ]
     },
     {  
        indicator_name:"Evening glucose level",
        indicator_type:"Numeric",
        observations_number:182,
        observation_period:["2018-08-08 - 2018-01-31",
        "189"         ],
        observations:[  
           {  
              observation_date:"2018-01-31",
              observation_value:"78.0000000000",
              observation_notes:"Night event: 35g croissant et une larme de miel"
           },
           {  
              observation_date:"2018-02-01",
              observation_value:"58.0000000000",
              observation_notes:"Night event: 1.5u 1.42 a 2h du mat"
           },
           {  
              observation_date:"2018-02-02",
              observation_value:"120.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-03",
              observation_value:"51.0000000000",
              observation_notes:"Night event: 3 dattes 1.22 23h/1.53 1h45"
           },
           {  
              observation_date:"2018-02-04",
              observation_value:"116.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-02-05",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 3 figues seches"
           },
           {  
              observation_date:"2018-02-06",
              observation_value:"65.0000000000",
              observation_notes:"Night event: 1 datte"
           },
           {  
              observation_date:"2018-02-07",
              observation_value:"258.0000000000",
              observation_notes:"Night event: 1 datte"
           },
           {  
              observation_date:"2018-02-08",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1 u"
           },
           {  
              observation_date:"2018-02-09",
              observation_value:"63.0000000000",
              observation_notes:"Night event: 1 cuillere de miel 3h 0.54 1 cuillere confiture"
           },
           {  
              observation_date:"2018-02-10",
              observation_value:"179.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-11",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 2 dattes"
           },
           {  
              observation_date:"2018-02-12",
              observation_value:"161.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-13",
              observation_value:"190.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-02-14",
              observation_value:"126.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-15",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-16",
              observation_value:"298.0000000000",
              observation_notes:"Night event: 2 u"
           },
           {  
              observation_date:"2018-02-17",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-18",
              observation_value:"220.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-02-19",
              observation_value:"59.0000000000",
              observation_notes:"Night event: 2 gerbles sesame 1 gerble sans sucre"
           },
           {  
              observation_date:"2018-02-20",
              observation_value:"50.0000000000",
              observation_notes:"Night event: prunes et biscuits 2u 3h40 0.5 1 datte 1 biscuit"
           },
           {  
              observation_date:"2018-02-21",
              observation_value:"141.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-22",
              observation_value:"47.0000000000",
              observation_notes:"Night event: 1 biscuit 1h 0.47 1 datte + 2 biscuits"
           },
           {  
              observation_date:"2018-02-23",
              observation_value:"67.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-02-24",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1 datte + 1 biscuit"
           },
           {  
              observation_date:"2018-02-25",
              observation_value:"312.0000000000",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-02-26",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-02-27",
              observation_value:"156.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-28",
              observation_value:"267.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-03-01",
              observation_value:"84.0000000000",
              observation_notes:"Night event: 1 gerble"
           },
           {  
              observation_date:"2018-03-02",
              observation_value:"97.0000000000",
              observation_notes:"Night event: 1 biscuit chocolat"
           },
           {  
              observation_date:"2018-03-03",
              observation_value:"104.0000000000",
              observation_notes:"Night event: 1/2 gerble"
           },
           {  
              observation_date:"2018-03-04",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-05",
              observation_value:"67.0000000000",
              observation_notes:"Night event: 1 gerble"
           },
           {  
              observation_date:"2018-03-06",
              observation_value:"98.0000000000",
              observation_notes:"Night event: 1.5 gerbles+1 biscuit chocolat"
           },
           {  
              observation_date:"2018-03-07",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-08",
              observation_value:"125.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-03-09",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-10",
              observation_value:"82.0000000000",
              observation_notes:"Night event: gerble"
           },
           {  
              observation_date:"2018-03-11",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 3/5 de gerble"
           },
           {  
              observation_date:"2018-03-12",
              observation_value:"74.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-13",
              observation_value:"173.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-14",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 0.5u"
           },
           {  
              observation_date:"2018-03-15",
              observation_value:"189.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-03-16",
              observation_value:"53.0000000000",
              observation_notes:"Night event: 2 gerbles + petit veres de siro de myrtille"
           },
           {  
              observation_date:"2018-03-17",
              observation_value:"110.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-18",
              observation_value:"81.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-19",
              observation_value:"107.0000000000",
              observation_notes:"Night event: 1 datte 1 gerbles"
           },
           {  
              observation_date:"2018-03-20",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 gerbles"
           },
           {  
              observation_date:"2018-03-21",
              observation_value:"95.0000000000",
              observation_notes:"Night event: 1/2 gerbles"
           },
           {  
              observation_date:"2018-03-22",
              observation_value:"177.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-23",
              observation_value:"90.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-03-24",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 gerbles"
           },
           {  
              observation_date:"2018-03-25",
              observation_value:"96.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-03-26",
              observation_value:"218.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-03-27",
              observation_value:"83.0000000000",
              observation_notes:"Night event: 2 dattes"
           },
           {  
              observation_date:"2018-03-28",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-03-29",
              observation_value:"172.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-03-30",
              observation_value:"63.0000000000",
              observation_notes:"Night event: 2 dattes + 1 biscuits"
           },
           {  
              observation_date:"2018-03-31",
              observation_value:"59.0000000000",
              observation_notes:"Night event: 2 dattes + 1 biscuits"
           },
           {  
              observation_date:"2018-04-01",
              observation_value:"78.0000000000",
              observation_notes:"Night event: 1 gerbles"
           },
           {  
              observation_date:"2018-04-02",
              observation_value:"71.0000000000",
              observation_notes:"Night event: 1/2 datte 1/2 gerbles"
           },
           {  
              observation_date:"2018-04-03",
              observation_value:"229.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-04-04",
              observation_value:"137.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-05",
              observation_value:"161.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-04-06",
              observation_value:"229.0000000000",
              observation_notes:"Night event: 1u a 3h du mat 1.58 et a 5h15 2.52 puis 1u"
           },
           {  
              observation_date:"2018-04-07",
              observation_value:"147.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-08",
              observation_value:"340.0000000000",
              observation_notes:"Night event: 1.5u+ verre syrop myrtille + 1 petite figue + 2 dattes"
           },
           {  
              observation_date:"2018-04-09",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-04-10",
              observation_value:"199.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-04-11",
              observation_value:"166.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-04-12",
              observation_value:"211.0000000000",
              observation_notes:"Night event: 1 u"
           },
           {  
              observation_date:"2018-04-13",
              observation_value:"49.0000000000",
              observation_notes:"Night event: 3 dattes a 3h 0.44 2 dattes + 1 biscuit"
           },
           {  
              observation_date:"2018-04-14",
              observation_value:"175.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-15",
              observation_value:"112.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-16",
              observation_value:"129.0000000000",
              observation_notes:"Night event: a 1h30 2.54 1.5 u"
           },
           {  
              observation_date:"2018-04-17",
              observation_value:"203.0000000000",
              observation_notes:"Night event: rien a 3h 1.73"
           },
           {  
              observation_date:"2018-04-18",
              observation_value:"303.0000000000",
              observation_notes:"Night event: 2.5u"
           },
           {  
              observation_date:"2018-04-19",
              observation_value:"156.0000000000",
              observation_notes:"Night event: rien  a 4h 0.8"
           },
           {  
              observation_date:"2018-04-20",
              observation_value:"223.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-21",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-22",
              observation_value:"159.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-23",
              observation_value:"51.0000000000",
              observation_notes:"Night event: 2 speculos cassis 1 sucre"
           },
           {  
              observation_date:"2018-04-24",
              observation_value:"145.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-25",
              observation_value:"286.0000000000",
              observation_notes:"Night event: 1.5u"
           },
           {  
              observation_date:"2018-04-26",
              observation_value:"323.0000000000",
              observation_notes:"Night event: 2"
           },
           {  
              observation_date:"2018-04-27",
              observation_value:"158.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-28",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-29",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-30",
              observation_value:"61.0000000000",
              observation_notes:"Night event: 2 biscuits 1 datte 1 peu de sirop de mirtylle"
           },
           {  
              observation_date:"2018-05-01",
              observation_value:"158.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-02",
              observation_value:"102.0000000000",
              observation_notes:"Night event: 1 biscuit"
           },
           {  
              observation_date:"2018-05-03",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-04",
              observation_value:"120.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-05",
              observation_value:"433.0000000000",
              observation_notes:"Night event: 2.5 u a 0h30 3.09 1.5u et a 5h30 0.49"
           },
           {  
              observation_date:"2018-05-06",
              observation_value:"53.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-07",
              observation_value:"125.0000000000",
              observation_notes:"Night event: 1.95 ds la nuit"
           },
           {  
              observation_date:"2018-05-08",
              observation_value:"77.0000000000",
              observation_notes:"Night event: a 3h 0.79 1 biscuit"
           },
           {  
              observation_date:"2018-05-09",
              observation_value:"48.0000000000",
              observation_notes:"Night event: 1 cuillere de miel"
           },
           {  
              observation_date:"2018-05-10",
              observation_value:"44.0000000000",
              observation_notes:"Night event: miel et 1/2 cake"
           },
           {  
              observation_date:"2018-05-11",
              observation_value:"223.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-12",
              observation_value:"384.0000000000",
              observation_notes:"Night event: 2.5u"
           },
           {  
              observation_date:"2018-05-13",
              observation_value:"244.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-05-14",
              observation_value:"118.0000000000",
              observation_notes:"Night event: 1/2 biscuit"
           },
           {  
              observation_date:"2018-05-23",
              observation_value:"110.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-24",
              observation_value:"127.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-25",
              observation_value:"206.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-26",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-27",
              observation_value:"162.0000000000",
              observation_notes:"Night event: 1 datte 1 biscuit"
           },
           {  
              observation_date:"2018-05-28",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-29",
              observation_value:"197.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-05-30",
              observation_value:"216.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-05-31",
              observation_value:"195.0000000000",
              observation_notes:"Night event: 1/2u"
           },
           {  
              observation_date:"2018-06-01",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-02",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-06-03",
              observation_value:"378.0000000000",
              observation_notes:"Night event: 2.5 u"
           },
           {  
              observation_date:"2018-06-04",
              observation_value:"166.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-05",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-06",
              observation_value:"118.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-07",
              observation_value:"61.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-08",
              observation_value:"162.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-09",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 20g pain"
           },
           {  
              observation_date:"2018-06-10",
              observation_value:"203.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-06-11",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-06-12",
              observation_value:"196.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-06-13",
              observation_value:"216.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-06-14",
              observation_value:"114.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-15",
              observation_value:"157.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-06-16",
              observation_value:"144.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-17",
              observation_value:"143.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-18",
              observation_value:"98.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-19",
              observation_value:"135.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-20",
              observation_value:"222.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-21",
              observation_value:"192.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-22",
              observation_value:"283.0000000000",
              observation_notes:"Night event: 2"
           },
           {  
              observation_date:"2018-06-23",
              observation_value:"56.0000000000",
              observation_notes:"Night event: 2 dattes 1 biscuit"
           },
           {  
              observation_date:"2018-06-24",
              observation_value:"46.0000000000",
              observation_notes:"Night event: 2dattes + 2 gateaux"
           },
           {  
              observation_date:"2018-06-25",
              observation_value:"193.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-06-26",
              observation_value:"128.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-27",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-28",
              observation_value:"51.0000000000",
              observation_notes:"Night event: 2 dattes 1 biscuits jus myrtille"
           },
           {  
              observation_date:"2018-06-29",
              observation_value:"108.0000000000",
              observation_notes:"Night event: 1 biscuit"
           },
           {  
              observation_date:"2018-06-30",
              observation_value:"114.0000000000",
              observation_notes:"Night event: 1 biscuit"
           },
           {  
              observation_date:"2018-07-01",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-02",
              observation_value:"96.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-03",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-04",
              observation_value:"101.0000000000",
              observation_notes:"Night event: 1/2 biscuit"
           },
           {  
              observation_date:"2018-07-05",
              observation_value:"85.0000000000",
              observation_notes:"Night event: 1 biscuit"
           },
           {  
              observation_date:"2018-07-06",
              observation_value:"105.0000000000",
              observation_notes:"Night event: 1/2 biscuit"
           },
           {  
              observation_date:"2018-07-07",
              observation_value:"277.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-08",
              observation_value:"112.0000000000",
              observation_notes:"Night event: 1/2 biscuit"
           },
           {  
              observation_date:"2018-07-09",
              observation_value:"173.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-10",
              observation_value:"32.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-11",
              observation_value:"119.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-12",
              observation_value:"267.0000000000",
              observation_notes:"Night event: 1 u"
           },
           {  
              observation_date:"2018-07-13",
              observation_value:"180.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-14",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: petit gateaux"
           },
           {  
              observation_date:"2018-07-15",
              observation_value:"149.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-16",
              observation_value:"234.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-17",
              observation_value:"62.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-18",
              observation_value:"174.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-19",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-20",
              observation_value:"268.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-21",
              observation_value:"252.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-22",
              observation_value:"193.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-23",
              observation_value:"269.0000000000",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-07-24",
              observation_value:"154.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-25",
              observation_value:"208.0000000000",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-26",
              observation_value:"260.0000000000",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-07-27",
              observation_value:"-99999.0000000000",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-07-28",
              observation_value:"-99999.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-29",
              observation_value:"330.0000000000",
              observation_notes:"Night event: 2"
           },
           {  
              observation_date:"2018-07-30",
              observation_value:"173.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-31",
              observation_value:"197.0000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-08-01",
              observation_value:"161.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-02",
              observation_value:"105.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-03",
              observation_value:"154.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-04",
              observation_value:"116.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-05",
              observation_value:"85.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-06",
              observation_value:"116.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-07",
              observation_value:"150.0000000000",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-08",
              observation_value:"207.0000000000",
              observation_notes:"Night event: 1/2 u"
           }
        ]
     },
     {  
        indicator_name:"Fast insulin (late evening intake dose)",
        indicator_type:"Numeric",
        observations_number:182,
        observation_period:["2018-08-08 - 2018-01-31",
        "189"         ],
        observations:[  
           {  
              observation_date:"2018-01-31",
              observation_value:"0E-10",
              observation_notes:"Night event: 35g croissant et une larme de miel"
           },
           {  
              observation_date:"2018-02-01",
              observation_value:"1.5000000000",
              observation_notes:"Night event: 1.5u 1.42 a 2h du mat"
           },
           {  
              observation_date:"2018-02-02",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-03",
              observation_value:"0E-10",
              observation_notes:"Night event: 3 dattes 1.22 23h/1.53 1h45"
           },
           {  
              observation_date:"2018-02-04",
              observation_value:"0E-10",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-02-05",
              observation_value:"0E-10",
              observation_notes:"Night event: 3 figues seches"
           },
           {  
              observation_date:"2018-02-06",
              observation_value:"0E-10",
              observation_notes:"Night event: 1 datte"
           },
           {  
              observation_date:"2018-02-07",
              observation_value:"0E-10",
              observation_notes:"Night event: 1 datte"
           },
           {  
              observation_date:"2018-02-08",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 1 u"
           },
           {  
              observation_date:"2018-02-09",
              observation_value:"0E-10",
              observation_notes:"Night event: 1 cuillere de miel 3h 0.54 1 cuillere confiture"
           },
           {  
              observation_date:"2018-02-10",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-11",
              observation_value:"0E-10",
              observation_notes:"Night event: 2 dattes"
           },
           {  
              observation_date:"2018-02-12",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-13",
              observation_value:"0.5000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-02-14",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-15",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-16",
              observation_value:"2.0000000000",
              observation_notes:"Night event: 2 u"
           },
           {  
              observation_date:"2018-02-17",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-18",
              observation_value:"0.5000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-02-19",
              observation_value:"0E-10",
              observation_notes:"Night event: 2 gerbles sesame 1 gerble sans sucre"
           },
           {  
              observation_date:"2018-02-20",
              observation_value:"0E-10",
              observation_notes:"Night event: prunes et biscuits 2u 3h40 0.5 1 datte 1 biscuit"
           },
           {  
              observation_date:"2018-02-21",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-22",
              observation_value:"0E-10",
              observation_notes:"Night event: 1 biscuit 1h 0.47 1 datte + 2 biscuits"
           },
           {  
              observation_date:"2018-02-23",
              observation_value:"0.5000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-02-24",
              observation_value:"0E-10",
              observation_notes:"Night event: 1 datte + 1 biscuit"
           },
           {  
              observation_date:"2018-02-25",
              observation_value:"1.5000000000",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-02-26",
              observation_value:"0.5000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-02-27",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-28",
              observation_value:"0E-10",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-03-01",
              observation_value:"0E-10",
              observation_notes:"Night event: 1 gerble"
           },
           {  
              observation_date:"2018-03-02",
              observation_value:"0E-10",
              observation_notes:"Night event: 1 biscuit chocolat"
           },
           {  
              observation_date:"2018-03-03",
              observation_value:"0E-10",
              observation_notes:"Night event: 1/2 gerble"
           },
           {  
              observation_date:"2018-03-04",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-05",
              observation_value:"0E-10",
              observation_notes:"Night event: 1 gerble"
           },
           {  
              observation_date:"2018-03-06",
              observation_value:"0E-10",
              observation_notes:"Night event: 1.5 gerbles+1 biscuit chocolat"
           },
           {  
              observation_date:"2018-03-07",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-08",
              observation_value:"0E-10",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-03-09",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-10",
              observation_value:"0E-10",
              observation_notes:"Night event: gerble"
           },
           {  
              observation_date:"2018-03-11",
              observation_value:"0E-10",
              observation_notes:"Night event: 3/5 de gerble"
           },
           {  
              observation_date:"2018-03-12",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-13",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-14",
              observation_value:"0.5000000000",
              observation_notes:"Night event: 0.5u"
           },
           {  
              observation_date:"2018-03-15",
              observation_value:"0E-10",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-03-16",
              observation_value:"0E-10",
              observation_notes:"Night event: 2 gerbles + petit veres de siro de myrtille"
           },
           {  
              observation_date:"2018-03-17",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-18",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-19",
              observation_value:"0E-10",
              observation_notes:"Night event: 1 datte 1 gerbles"
           },
           {  
              observation_date:"2018-03-20",
              observation_value:"0E-10",
              observation_notes:"Night event: 1/2 gerbles"
           },
           {  
              observation_date:"2018-03-21",
              observation_value:"0E-10",
              observation_notes:"Night event: 1/2 gerbles"
           },
           {  
              observation_date:"2018-03-22",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-23",
              observation_value:"0.5000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-03-24",
              observation_value:"0E-10",
              observation_notes:"Night event: 1/2 gerbles"
           },
           {  
              observation_date:"2018-03-25",
              observation_value:"0.5000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-03-26",
              observation_value:"0E-10",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-03-27",
              observation_value:"0E-10",
              observation_notes:"Night event: 2 dattes"
           },
           {  
              observation_date:"2018-03-28",
              observation_value:"0.5000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-03-29",
              observation_value:"0.5000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-03-30",
              observation_value:"0E-10",
              observation_notes:"Night event: 2 dattes + 1 biscuits"
           },
           {  
              observation_date:"2018-03-31",
              observation_value:"0E-10",
              observation_notes:"Night event: 2 dattes + 1 biscuits"
           },
           {  
              observation_date:"2018-04-01",
              observation_value:"0E-10",
              observation_notes:"Night event: 1 gerbles"
           },
           {  
              observation_date:"2018-04-02",
              observation_value:"0E-10",
              observation_notes:"Night event: 1/2 datte 1/2 gerbles"
           },
           {  
              observation_date:"2018-04-03",
              observation_value:"0E-10",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-04-04",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-05",
              observation_value:"0.5000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-04-06",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 1u a 3h du mat 1.58 et a 5h15 2.52 puis 1u"
           },
           {  
              observation_date:"2018-04-07",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-08",
              observation_value:"1.5000000000",
              observation_notes:"Night event: 1.5u+ verre syrop myrtille + 1 petite figue + 2 dattes"
           },
           {  
              observation_date:"2018-04-09",
              observation_value:"0E-10",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-04-10",
              observation_value:"0.5000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-04-11",
              observation_value:"0.5000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-04-12",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 1 u"
           },
           {  
              observation_date:"2018-04-13",
              observation_value:"0E-10",
              observation_notes:"Night event: 3 dattes a 3h 0.44 2 dattes + 1 biscuit"
           },
           {  
              observation_date:"2018-04-14",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-15",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-16",
              observation_value:"0E-10",
              observation_notes:"Night event: a 1h30 2.54 1.5 u"
           },
           {  
              observation_date:"2018-04-17",
              observation_value:"0E-10",
              observation_notes:"Night event: rien a 3h 1.73"
           },
           {  
              observation_date:"2018-04-18",
              observation_value:"2.5000000000",
              observation_notes:"Night event: 2.5u"
           },
           {  
              observation_date:"2018-04-19",
              observation_value:"0E-10",
              observation_notes:"Night event: rien  a 4h 0.8"
           },
           {  
              observation_date:"2018-04-20",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-21",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-22",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-23",
              observation_value:"0E-10",
              observation_notes:"Night event: 2 speculos cassis 1 sucre"
           },
           {  
              observation_date:"2018-04-24",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-25",
              observation_value:"1.5000000000",
              observation_notes:"Night event: 1.5u"
           },
           {  
              observation_date:"2018-04-26",
              observation_value:"0E-10",
              observation_notes:"Night event: 2"
           },
           {  
              observation_date:"2018-04-27",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-28",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-29",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-30",
              observation_value:"0E-10",
              observation_notes:"Night event: 2 biscuits 1 datte 1 peu de sirop de mirtylle"
           },
           {  
              observation_date:"2018-05-01",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-02",
              observation_value:"0E-10",
              observation_notes:"Night event: 1 biscuit"
           },
           {  
              observation_date:"2018-05-03",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-04",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-05",
              observation_value:"2.5000000000",
              observation_notes:"Night event: 2.5 u a 0h30 3.09 1.5u et a 5h30 0.49"
           },
           {  
              observation_date:"2018-05-06",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-07",
              observation_value:"0E-10",
              observation_notes:"Night event: 1.95 ds la nuit"
           },
           {  
              observation_date:"2018-05-08",
              observation_value:"0E-10",
              observation_notes:"Night event: a 3h 0.79 1 biscuit"
           },
           {  
              observation_date:"2018-05-09",
              observation_value:"0E-10",
              observation_notes:"Night event: 1 cuillere de miel"
           },
           {  
              observation_date:"2018-05-10",
              observation_value:"0E-10",
              observation_notes:"Night event: miel et 1/2 cake"
           },
           {  
              observation_date:"2018-05-11",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-12",
              observation_value:"2.5000000000",
              observation_notes:"Night event: 2.5u"
           },
           {  
              observation_date:"2018-05-13",
              observation_value:"0E-10",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-05-14",
              observation_value:"0E-10",
              observation_notes:"Night event: 1/2 biscuit"
           },
           {  
              observation_date:"2018-05-23",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-24",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-25",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-26",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-27",
              observation_value:"0E-10",
              observation_notes:"Night event: 1 datte 1 biscuit"
           },
           {  
              observation_date:"2018-05-28",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-29",
              observation_value:"0E-10",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-05-30",
              observation_value:"0E-10",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-05-31",
              observation_value:"0.5000000000",
              observation_notes:"Night event: 1/2u"
           },
           {  
              observation_date:"2018-06-01",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-02",
              observation_value:"0.5000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-06-03",
              observation_value:"2.5000000000",
              observation_notes:"Night event: 2.5 u"
           },
           {  
              observation_date:"2018-06-04",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-05",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-06",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-07",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-08",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-09",
              observation_value:"0E-10",
              observation_notes:"Night event: 20g pain"
           },
           {  
              observation_date:"2018-06-10",
              observation_value:"0E-10",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-06-11",
              observation_value:"1.5000000000",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-06-12",
              observation_value:"0E-10",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-06-13",
              observation_value:"0E-10",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-06-14",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-15",
              observation_value:"0.5000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-06-16",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-17",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-18",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-19",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-20",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-21",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-22",
              observation_value:"0E-10",
              observation_notes:"Night event: 2"
           },
           {  
              observation_date:"2018-06-23",
              observation_value:"0E-10",
              observation_notes:"Night event: 2 dattes 1 biscuit"
           },
           {  
              observation_date:"2018-06-24",
              observation_value:"0E-10",
              observation_notes:"Night event: 2dattes + 2 gateaux"
           },
           {  
              observation_date:"2018-06-25",
              observation_value:"0.5000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-06-26",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-27",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-28",
              observation_value:"0E-10",
              observation_notes:"Night event: 2 dattes 1 biscuits jus myrtille"
           },
           {  
              observation_date:"2018-06-29",
              observation_value:"0E-10",
              observation_notes:"Night event: 1 biscuit"
           },
           {  
              observation_date:"2018-06-30",
              observation_value:"0E-10",
              observation_notes:"Night event: 1 biscuit"
           },
           {  
              observation_date:"2018-07-01",
              observation_value:"0.5000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-02",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-03",
              observation_value:"0.5000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-04",
              observation_value:"0E-10",
              observation_notes:"Night event: 1/2 biscuit"
           },
           {  
              observation_date:"2018-07-05",
              observation_value:"0E-10",
              observation_notes:"Night event: 1 biscuit"
           },
           {  
              observation_date:"2018-07-06",
              observation_value:"0E-10",
              observation_notes:"Night event: 1/2 biscuit"
           },
           {  
              observation_date:"2018-07-07",
              observation_value:"0E-10",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-08",
              observation_value:"0E-10",
              observation_notes:"Night event: 1/2 biscuit"
           },
           {  
              observation_date:"2018-07-09",
              observation_value:"0.5000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-10",
              observation_value:"0E-10",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-11",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-12",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 1 u"
           },
           {  
              observation_date:"2018-07-13",
              observation_value:"0.5000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-14",
              observation_value:"0E-10",
              observation_notes:"Night event: petit gateaux"
           },
           {  
              observation_date:"2018-07-15",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-16",
              observation_value:"0E-10",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-17",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-18",
              observation_value:"0.5000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-19",
              observation_value:"0.5000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-20",
              observation_value:"0E-10",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-21",
              observation_value:"0E-10",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-22",
              observation_value:"0.5000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-23",
              observation_value:"1.5000000000",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-07-24",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-25",
              observation_value:"0E-10",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-26",
              observation_value:"1.5000000000",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-07-27",
              observation_value:"1.5000000000",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-07-28",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-29",
              observation_value:"0E-10",
              observation_notes:"Night event: 2"
           },
           {  
              observation_date:"2018-07-30",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-31",
              observation_value:"0.5000000000",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-08-01",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-02",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-03",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-04",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-05",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-06",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-07",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-08",
              observation_value:"0.5000000000",
              observation_notes:"Night event: 1/2 u"
           }
        ]
     },
     {  
        indicator_name:"Late evening snack",
        indicator_type:"Boolean",
        observations_number:182,
        observation_period:["2018-08-08 - 2018-01-31",
        "189"         ],
        observations:[  
           {  
              observation_date:"2018-01-31",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 35g croissant et une larme de miel"
           },
           {  
              observation_date:"2018-02-01",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 1.5u 1.42 a 2h du mat"
           },
           {  
              observation_date:"2018-02-02",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-03",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 3 dattes 1.22 23h/1.53 1h45"
           },
           {  
              observation_date:"2018-02-04",
              observation_value:"0E-10",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-02-05",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 3 figues seches"
           },
           {  
              observation_date:"2018-02-06",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 1 datte"
           },
           {  
              observation_date:"2018-02-07",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 1 datte"
           },
           {  
              observation_date:"2018-02-08",
              observation_value:"0E-10",
              observation_notes:"Night event: 1 u"
           },
           {  
              observation_date:"2018-02-09",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 1 cuillere de miel 3h 0.54 1 cuillere confiture"
           },
           {  
              observation_date:"2018-02-10",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-11",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 2 dattes"
           },
           {  
              observation_date:"2018-02-12",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-13",
              observation_value:"0E-10",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-02-14",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-15",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-16",
              observation_value:"0E-10",
              observation_notes:"Night event: 2 u"
           },
           {  
              observation_date:"2018-02-17",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-18",
              observation_value:"0E-10",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-02-19",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 2 gerbles sesame 1 gerble sans sucre"
           },
           {  
              observation_date:"2018-02-20",
              observation_value:"1.0000000000",
              observation_notes:"Night event: prunes et biscuits 2u 3h40 0.5 1 datte 1 biscuit"
           },
           {  
              observation_date:"2018-02-21",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-22",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 1 biscuit 1h 0.47 1 datte + 2 biscuits"
           },
           {  
              observation_date:"2018-02-23",
              observation_value:"0E-10",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-02-24",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 1 datte + 1 biscuit"
           },
           {  
              observation_date:"2018-02-25",
              observation_value:"0E-10",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-02-26",
              observation_value:"0E-10",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-02-27",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-02-28",
              observation_value:"0E-10",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-03-01",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 1 gerble"
           },
           {  
              observation_date:"2018-03-02",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 1 biscuit chocolat"
           },
           {  
              observation_date:"2018-03-03",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 1/2 gerble"
           },
           {  
              observation_date:"2018-03-04",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-05",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 1 gerble"
           },
           {  
              observation_date:"2018-03-06",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 1.5 gerbles+1 biscuit chocolat"
           },
           {  
              observation_date:"2018-03-07",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-08",
              observation_value:"0E-10",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-03-09",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-10",
              observation_value:"1.0000000000",
              observation_notes:"Night event: gerble"
           },
           {  
              observation_date:"2018-03-11",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 3/5 de gerble"
           },
           {  
              observation_date:"2018-03-12",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-13",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-14",
              observation_value:"0E-10",
              observation_notes:"Night event: 0.5u"
           },
           {  
              observation_date:"2018-03-15",
              observation_value:"0E-10",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-03-16",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 2 gerbles + petit veres de siro de myrtille"
           },
           {  
              observation_date:"2018-03-17",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-18",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-19",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 1 datte 1 gerbles"
           },
           {  
              observation_date:"2018-03-20",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 1/2 gerbles"
           },
           {  
              observation_date:"2018-03-21",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 1/2 gerbles"
           },
           {  
              observation_date:"2018-03-22",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-03-23",
              observation_value:"0E-10",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-03-24",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 1/2 gerbles"
           },
           {  
              observation_date:"2018-03-25",
              observation_value:"0E-10",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-03-26",
              observation_value:"0E-10",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-03-27",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 2 dattes"
           },
           {  
              observation_date:"2018-03-28",
              observation_value:"0E-10",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-03-29",
              observation_value:"0E-10",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-03-30",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 2 dattes + 1 biscuits"
           },
           {  
              observation_date:"2018-03-31",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 2 dattes + 1 biscuits"
           },
           {  
              observation_date:"2018-04-01",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 1 gerbles"
           },
           {  
              observation_date:"2018-04-02",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 1/2 datte 1/2 gerbles"
           },
           {  
              observation_date:"2018-04-03",
              observation_value:"0E-10",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-04-04",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-05",
              observation_value:"0E-10",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-04-06",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 1u a 3h du mat 1.58 et a 5h15 2.52 puis 1u"
           },
           {  
              observation_date:"2018-04-07",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-08",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 1.5u+ verre syrop myrtille + 1 petite figue + 2 dattes"
           },
           {  
              observation_date:"2018-04-09",
              observation_value:"0E-10",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-04-10",
              observation_value:"0E-10",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-04-11",
              observation_value:"0E-10",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-04-12",
              observation_value:"0E-10",
              observation_notes:"Night event: 1 u"
           },
           {  
              observation_date:"2018-04-13",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 3 dattes a 3h 0.44 2 dattes + 1 biscuit"
           },
           {  
              observation_date:"2018-04-14",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-15",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-16",
              observation_value:"0E-10",
              observation_notes:"Night event: a 1h30 2.54 1.5 u"
           },
           {  
              observation_date:"2018-04-17",
              observation_value:"0E-10",
              observation_notes:"Night event: rien a 3h 1.73"
           },
           {  
              observation_date:"2018-04-18",
              observation_value:"0E-10",
              observation_notes:"Night event: 2.5u"
           },
           {  
              observation_date:"2018-04-19",
              observation_value:"1.0000000000",
              observation_notes:"Night event: rien  a 4h 0.8"
           },
           {  
              observation_date:"2018-04-20",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-21",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-22",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-23",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 2 speculos cassis 1 sucre"
           },
           {  
              observation_date:"2018-04-24",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-25",
              observation_value:"0E-10",
              observation_notes:"Night event: 1.5u"
           },
           {  
              observation_date:"2018-04-26",
              observation_value:"0E-10",
              observation_notes:"Night event: 2"
           },
           {  
              observation_date:"2018-04-27",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-28",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-29",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-04-30",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 2 biscuits 1 datte 1 peu de sirop de mirtylle"
           },
           {  
              observation_date:"2018-05-01",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-02",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 1 biscuit"
           },
           {  
              observation_date:"2018-05-03",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-04",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-05",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 2.5 u a 0h30 3.09 1.5u et a 5h30 0.49"
           },
           {  
              observation_date:"2018-05-06",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-07",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 1.95 ds la nuit"
           },
           {  
              observation_date:"2018-05-08",
              observation_value:"1.0000000000",
              observation_notes:"Night event: a 3h 0.79 1 biscuit"
           },
           {  
              observation_date:"2018-05-09",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 1 cuillere de miel"
           },
           {  
              observation_date:"2018-05-10",
              observation_value:"1.0000000000",
              observation_notes:"Night event: miel et 1/2 cake"
           },
           {  
              observation_date:"2018-05-11",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-12",
              observation_value:"0E-10",
              observation_notes:"Night event: 2.5u"
           },
           {  
              observation_date:"2018-05-13",
              observation_value:"0E-10",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-05-14",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 1/2 biscuit"
           },
           {  
              observation_date:"2018-05-23",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-24",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-25",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-26",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-27",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 1 datte 1 biscuit"
           },
           {  
              observation_date:"2018-05-28",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-05-29",
              observation_value:"0E-10",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-05-30",
              observation_value:"0E-10",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-05-31",
              observation_value:"0E-10",
              observation_notes:"Night event: 1/2u"
           },
           {  
              observation_date:"2018-06-01",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-02",
              observation_value:"0E-10",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-06-03",
              observation_value:"0E-10",
              observation_notes:"Night event: 2.5 u"
           },
           {  
              observation_date:"2018-06-04",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-05",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-06",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-07",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-08",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-09",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 20g pain"
           },
           {  
              observation_date:"2018-06-10",
              observation_value:"0E-10",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-06-11",
              observation_value:"0E-10",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-06-12",
              observation_value:"0E-10",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-06-13",
              observation_value:"0E-10",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-06-14",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-15",
              observation_value:"0E-10",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-06-16",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-17",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-18",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-19",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-20",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-21",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-22",
              observation_value:"0E-10",
              observation_notes:"Night event: 2"
           },
           {  
              observation_date:"2018-06-23",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 2 dattes 1 biscuit"
           },
           {  
              observation_date:"2018-06-24",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 2dattes + 2 gateaux"
           },
           {  
              observation_date:"2018-06-25",
              observation_value:"0E-10",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-06-26",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-27",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-06-28",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 2 dattes 1 biscuits jus myrtille"
           },
           {  
              observation_date:"2018-06-29",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 1 biscuit"
           },
           {  
              observation_date:"2018-06-30",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 1 biscuit"
           },
           {  
              observation_date:"2018-07-01",
              observation_value:"0E-10",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-02",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-03",
              observation_value:"0E-10",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-04",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 1/2 biscuit"
           },
           {  
              observation_date:"2018-07-05",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 1 biscuit"
           },
           {  
              observation_date:"2018-07-06",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 1/2 biscuit"
           },
           {  
              observation_date:"2018-07-07",
              observation_value:"0E-10",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-08",
              observation_value:"1.0000000000",
              observation_notes:"Night event: 1/2 biscuit"
           },
           {  
              observation_date:"2018-07-09",
              observation_value:"0E-10",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-10",
              observation_value:"0E-10",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-11",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-12",
              observation_value:"0E-10",
              observation_notes:"Night event: 1 u"
           },
           {  
              observation_date:"2018-07-13",
              observation_value:"0E-10",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-14",
              observation_value:"1.0000000000",
              observation_notes:"Night event: petit gateaux"
           },
           {  
              observation_date:"2018-07-15",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-16",
              observation_value:"0E-10",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-17",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-18",
              observation_value:"0E-10",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-19",
              observation_value:"0E-10",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-20",
              observation_value:"0E-10",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-21",
              observation_value:"0E-10",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-22",
              observation_value:"0E-10",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-07-23",
              observation_value:"0E-10",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-07-24",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-25",
              observation_value:"0E-10",
              observation_notes:"Night event: 1"
           },
           {  
              observation_date:"2018-07-26",
              observation_value:"0E-10",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-07-27",
              observation_value:"0E-10",
              observation_notes:"Night event: 1.5 u"
           },
           {  
              observation_date:"2018-07-28",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-29",
              observation_value:"0E-10",
              observation_notes:"Night event: 2"
           },
           {  
              observation_date:"2018-07-30",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-07-31",
              observation_value:"0E-10",
              observation_notes:"Night event: 1/2 u"
           },
           {  
              observation_date:"2018-08-01",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-02",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-03",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-04",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-05",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-06",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-07",
              observation_value:"0E-10",
              observation_notes:"None"
           },
           {  
              observation_date:"2018-08-08",
              observation_value:"0E-10",
              observation_notes:"Night event: 1/2 u"
           }
        ]
     }
  ]
};

var json = {  
  indicators:[  
     {  
        indicator_name:"Slow acting insulin (morning intake dose)"
     },
     {  
        indicator_name:"Fast acting insulin (morning intake dose)"
     },
     {  
        indicator_name:"Fast acting insulin (lunch intake dose)"
     },
     {  
        indicator_name:"Fast acting insulin (dinner intake dose)"
     },
     {  
        indicator_name:"Morning glucose level"
     },
     {  
        indicator_name:"Lunch glucose level"
     },
     {  
        indicator_name:"Afternoon glucose level"
     },
     {  
        indicator_name:"Dinner glucose level"
     },
     {  
        indicator_name:"Evening glucose level"
     },
     {  
        indicator_name:"Fast insulin (late evening intake dose)"
     },
     {  
        indicator_name:"Late evening snack"
     }
  ]
};
   //  var arr = [];
   //  var text = [];
   //  let items = [];
   //  var i;    


   //  const useEffect1 = () => {
   //    fetch('http://127.0.0.1:5000/user_json').then(response => 
   //      response.json().then(data => {
   //           console.log(data);
   //       })
   //    );
  
   //  }; 

   //  {useEffect1()};

   //  const useEffect2 = () => {
   //    fetch('http://127.0.0.1:5000/indicators').then(response => 
   //      response.json().then(data => {
   //       //   return data;
   //          console.log(data);
   //       })
   //    );
  
   //  };

   //   {useEffect2()};

   

   // async function apiGetAll () {
   //    const resp = await fetch('http://127.0.0.1:5000/user_json').then(response => 
   //      response.json().then(data => {
   //          return data
   //       })
   //    );
  
   //  }; 
 
   // console.log(resp);

   // async function apiGetAll () {
   //    try {
   //      const resp = await fetch('http://127.0.0.1:5000/user_json')
   //      console.log(resp)
   //      return resp
   //    } catch (err) {
   //         console.log(err)
   //      }
   // };


   // componentDidMount () {
   //    fetch(URL)
   //      .then(response => response.json())
   //     .then (json => 
   //           this.setState({
   //           resources: json
   //      }))
   //   };
   
    
    
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


function App() {

   const [sourceData, setSourceData] = useState([]);

   useEffect(() => {
      fetch("http://127.0.0.1:5000/user_json").then(response =>
         response.json().then(data => {
            setSourceData(data);
         })
      );
   }, []);

   // console.log(sourceData);

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

//   var arr2 = [];
//   Object.keys(indicatorsData).forEach(function(key) {
//     arr2.push(indicatorsData[key]);
//   }); 

//   console.log(arr2)

//   {arr2[0].map(item => {
//    return(          
//      <option value={item.indicator_name}>{item.indicator_name}</option>
//    );
//    })} 

     
  const createSelectItems = (json) => {
   // console.log("test");
   // console.log(indicatorsData);
   var arr=[];

   if (json){
      Object.keys(json).forEach(function(key) {
      arr.push(json[key]);
      }); 
   }
      
   //console.log(arr)
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
  

  return (
    <div className={classes.root}>
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
            Health Monitor
          </Typography>
          <IconButton color="inherit">
            <Badge> 
              <Icon path={mdiAccountBadgeHorizontalOutline}
                size={1.5}
                horizontal                
                color="rgb(255, 255, 255)"
              />
            </Badge>
          </IconButton>
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
            
            <Button variant="outlined" size="large" color="primary" className={classes.buttonHeight}>ADD NEW DATA</Button> 
            
            </Grid>

            {/* Chart */}
            <Grid item xs={12}>
              <Paper className={fixedHeightPaper}>
                <Chart  json={sourceData} indicator={state.indicator}/>
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