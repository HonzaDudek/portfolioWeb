import { List, ListItem, ListItemText, makeStyles } from '@material-ui/core';
import React from 'react';
import { handExitComplete } from '../utils/handleTransition';

interface MenuProps {
  isDark?: boolean;
}

const useStyles = makeStyles(() => ({
  header: {
    display: 'flex',
    position: 'absolute',
    right: 20,
    top: 0,
    zIndex: 10,
  },
  menu: {
    display: 'flex',
    width: 600,
    justifyContent: 'space-evenly',
    marginLeft: 'auto',
  },
  menuItem: ({ isDark }: MenuProps) => ({
    color: isDark ? '#F2F2F2' : '#152840',
  }),
}));

export const Menu = (props: MenuProps) => {
  const { isDark } = props;
  const classes = useStyles({ isDark });

  return (
    <header className={classes.header}>
      <List className={classes.menu}>
        <ListItem button onClick={() => handExitComplete('#home')}>
          <ListItemText className={classes.menuItem}>Domů</ListItemText>
        </ListItem>
        <ListItem button onClick={() => handExitComplete('#about')}>
          <ListItemText className={classes.menuItem}>O mě</ListItemText>
        </ListItem>
        <ListItem button onClick={() => handExitComplete('#services')}>
          <ListItemText className={classes.menuItem}>Služby</ListItemText>
        </ListItem>
        <ListItem button onClick={() => handExitComplete('#contact')}>
          <ListItemText className={classes.menuItem}>Kontakt</ListItemText>
        </ListItem>
      </List>
    </header>
  );
};
