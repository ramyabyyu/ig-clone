import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExploreIcon from "@material-ui/icons/Explore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HomeIcon from "@material-ui/icons/Home";

import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" color="inherit" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.brand}>
          Instagram
        </Typography>
        <div>
          <Button color="inherit">
            <HomeIcon />
          </Button>
          <Button color="inherit">
            <ExploreIcon />
          </Button>
          <Button color="inherit">
            <FavoriteIcon />
          </Button>
          <Button color="inherit">
            <AccountCircleIcon />
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
