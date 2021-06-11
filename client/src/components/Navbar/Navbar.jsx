import React, { useEffect, useState } from "react";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import {
  AppBar,
  Avatar,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";

// icons
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExploreIcon from "@material-ui/icons/Explore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HomeIcon from "@material-ui/icons/Home";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { Link } from "react-router-dom";
import * as Path from "../../routeNames";
import * as authTypes from "../../redux/constants/auth";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import decode from "jwt-decode";

import useStyles from "./styles";

const Navbar = () => {
  // token
  const authToken = localStorage.getItem("token");

  const [user, setUser] = useState(authToken);
  const [anchorEl, setAnchorEl] = useState(null);
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();

  // menu
  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  // profile
  const handleProfileOpen = (e) => setProfileAnchorEl(e.currentTarget);
  const handleProfileClose = () => setProfileAnchorEl(null);

  const logout = () => {
    dispatch({ type: authTypes.LOGOUT });
    history.push(Path.AUTH);
    setUser(null);
    handleClose();
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(authToken);
  }, [location]);
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
            {user?.data ? (
              <>
                <MenuItem onClick={handleClose}>
                  <Avatar
                    className={classes.avatar}
                    alt={user?.data.name}
                    src={user?.data.avatar}
                  >
                    <AccountCircleIcon />
                  </Avatar>
                  {user?.data.name}
                </MenuItem>
                <MenuItem onClick={logout}>
                  <ExitToAppIcon /> Logout
                </MenuItem>
              </>
            ) : (
              <MenuItem onClick={handleClose} component={Link} to={Path.AUTH}>
                <AccountCircleIcon /> Login
              </MenuItem>
            )}
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
          {user?.data ? (
            <>
              <Button
                color="inherit"
                aria-controls="profile-dropdown-menu"
                aria-haspopup="true"
                onClick={handleProfileOpen}
              >
                <Avatar
                  className={classes.avatar}
                  alt={user?.data.name}
                  src={user?.data.avatar}
                >
                  <AccountCircleIcon />
                </Avatar>
              </Button>
              <Menu
                id="profile-dropdown-menu"
                anchorEl={profileAnchorEl}
                keepMounted
                open={Boolean(profileAnchorEl)}
                onClose={handleProfileClose}
              >
                <MenuItem onClick={handleProfileClose}>
                  <Avatar
                    className={classes.avatar}
                    alt={user?.data.name}
                    src={user?.data.avatar}
                  >
                    <AccountCircleIcon />
                  </Avatar>
                  {user?.data.name}
                </MenuItem>
                <MenuItem onClick={handleProfileClose}>
                  <ExitToAppIcon /> Logout
                </MenuItem>
              </Menu>
            </>
          ) : (
            <Button color="inherit" component={Link} to={Path.AUTH}>
              <AccountCircleIcon />
            </Button>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
