import { grey } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: "10px",
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  brand: {
    fontFamily: "'Pacifico', cursive",
    textDecoration: "none",
    color: "#222",
  },
  buttonBar: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    // margin: "10px",
    // paddingLeft: "16px",
    // right: 0,
    // position: "relative",
    // width: "100%",
    // background: "transparent",
  },
  avatar: {
    backgroundColor: grey[500],
    color: theme.palette.getContrastText(grey[500]),
  },
}));
