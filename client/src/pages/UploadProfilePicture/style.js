import { grey } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  card: {
    minWidth: 275,
  },
  paper: {
    marginTop: theme.spacing(3),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    color: theme.palette.getContrastText(grey[500]),
    backgroundColor: grey[500],
    marginRight: theme.spacing(2),
  },
  cardContent: {
    display: "flex",
    alignItems: "center",
  },
  cardActions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
