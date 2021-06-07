import React, { useState } from "react";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import {
  AppBar,
  Button,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExploreIcon from "@material-ui/icons/Explore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import * as Path from "../../routeNames";

import useStyles from "./styles";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();

  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);
  return (
    <AppBar position="fixed" color="inherit" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h5"
          className={classes.brand}
          component={Link}
          to={Path.HOME}
        >
          Instagram
        </Typography>
        <div>
          <DropdownMenu anchorEl={anchorEl} handleOpen={handleOpen}>
            <MenuItem onClick={handleClose} component={Link} to={Path.HOME}>
              <HomeIcon /> Home
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ExploreIcon /> Explore
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <FavoriteIcon /> Followers
            </MenuItem>
          </DropdownMenu>
        </div>
        <div className={classes.buttonBar}>
          <Button color="inherit" component={Link} to={Path.HOME}>
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
