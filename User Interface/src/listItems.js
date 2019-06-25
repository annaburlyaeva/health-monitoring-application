import React from 'react';
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


export const mainListItems = (
  <div>
    <ListItem button>
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
    <ListItem button>
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
);

export const secondaryListItems = (
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
);
