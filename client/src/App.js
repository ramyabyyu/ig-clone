import { Container } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as Path from "./routeNames";
import useStyles from "./styles";

// components and pages
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import AddPost from "./pages/AddPost/AddPost";
import Auth from "./pages/Auth/Auth";
import UploadProfilePicture from "./pages/UploadProfilePicture/UploadProfilePicture";

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <Navbar />
      <Container className={classes.pagesContainer}>
        <Switch>
          <Route exact path={Path.HOME} component={Home} />
          <Route exact path={Path.POST} component={AddPost} />
          <Route exact path={Path.AUTH} component={Auth} />
          <Route
            exact
            path={Path.UPLOAD_PROFILE}
            component={UploadProfilePicture}
          />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
