import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { routes } from '../../routes';
import { ListItemIcon } from '@material-ui/core';
import { useRouter } from 'next/router';

const drawerWidth = 240;
const maxDrawerWidth = 360;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      minWidth: drawerWidth,
      maxWidth: maxDrawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      minWidth: drawerWidth,
      maxWidth: maxDrawerWidth,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  })
);

export default function NavMenu() {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <List component="nav">
        {routes.map((category) => (
          <React.Fragment key={category.category}>
            <ListItem>
              <ListItemIcon>{category.icon}</ListItemIcon>
              <ListItemText primary={category.category} />
            </ListItem>
            <List component="div" disablePadding>
              {category.routes.map((route) => (
                <ListItem
                  key={route.path}
                  button
                  className={classes.nested}
                  onClick={() => {
                    router.push(route.path);
                  }}
                >
                  <ListItemIcon>{route.icon}</ListItemIcon>
                  <ListItemText primary={route.name} />
                </ListItem>
              ))}
            </List>
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
}
