import { blue, green } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  card: {
    minWidth: 275,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(2),
  },
  textarea: {
    [theme.breakpoints.down("xs")]: {
      width: "250px",
    },
    [theme.breakpoints.up("md")]: {
      width: "600px",
    },
    height: "120px",
    width: "350px",
    border: "3px solid #ccc",
    padding: "5px",
    resize: "none",
    fontSize: "1rem",
    marginBottom: theme.spacing(2),
    "&:focus": {
      border: "3px solid #ccc",
      outline: "none",
    },
  },
  inputs: {
    display: "flex",
    flexDirection: "column",
    marginBottom: theme.spacing(3),
  },
  tagsInput: {
    height: "40px",
    padding: "5px",
    border: "3px solid #ccc",
    fontSize: "1rem",
    "&:focus": {
      border: "3px solid #ccc",
      outline: "none",
    },
  },
  buttons: {
    display: "flex",
    justifyContent: "space-around",
  },
  addPhotoIcon: {
    color: green[500],
    fontSize: "2rem",
  },
  videoCallIcon: {
    color: blue[500],
    fontSize: "2rem",
  },
  sendIcon: {
    marginLeft: "8px",
  },
}));
