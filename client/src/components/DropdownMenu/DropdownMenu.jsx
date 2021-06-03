import React from "react";
import { IconButton, Menu } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./styles";

const DropdownMenu = ({ children, handleOpen, handleClose, anchorEl }) => {
  const classes = useStyles();
  return (
    <div className={classes.buttonCollapse}>
      <IconButton
        aria-controls="dropdown-menu"
        aria-haspopup="true"
        onClick={handleOpen}
      >
        <MenuIcon color="inherit" />
      </IconButton>
      <Menu
        id="dropdown-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {children}
      </Menu>
    </div>
  );
};

export default DropdownMenu;
