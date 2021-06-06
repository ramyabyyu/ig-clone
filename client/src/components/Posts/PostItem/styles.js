import { blue, red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  avatar: {
    backgroundColor: red[500],
  },
  media: {
    width: "100%",
    paddingTop: "56.25%", // 16:9
  },
  shareIcon: {
    transform: "rotate(-45deg)",
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  video: {
    width: "100%",
  },
  mediaVideo: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  playVideoIcon: {
    position: "absolute",
    color: "#fff",
    cursor: "pointer",
    fontSize: "10rem",
  },
  tags: {
    color: blue[500],
    marginTop: theme.spacing(2),
  },
}));
