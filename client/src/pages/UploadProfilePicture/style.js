import { grey } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  card: {
    minWidth: 275,
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
  profilePreview: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    width: "200px",
    height: "200px",
    objectFit: "contain",
  },
}));
