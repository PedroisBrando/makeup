import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SearchIcon from '@material-ui/icons/Search';
import LocalMallIcon from '@material-ui/icons/LocalMall';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: 'white',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: 'black',
  },
}));



const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
          <AppBar color="inherit" position='fixed'>
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="default" aria-label="menu">
                <FavoriteBorderIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Magic Make
              </Typography>
              <IconButton edge="start" className={classes.menuButton} color="default" aria-label="menu">
                <SearchIcon />
              </IconButton>
              <IconButton edge="start" className={classes.menuButton} color="default" aria-label="menu">
                <LocalMallIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </div>
      );
}


export default Header;