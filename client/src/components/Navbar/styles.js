import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    marginBottom: "30px",
    marginTop: theme.spacing(2),
    borderRadius: "10px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  brand: {
    fontFamily: "'Pacifico', cursive",
  },
  buttonBar: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    margin: "10px",
    paddingLeft: "16px",
    right: 0,
    position: "relative",
    width: "100%",
    background: "transparent",
  },
}));
