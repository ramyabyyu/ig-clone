import { Container } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as Path from "./routeNames";
import useStyles from "./styles";

// components and pages
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import AddPost from "./pages/AddPost/AddPost";

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <Navbar />
      <Container className={classes.pagesContainer}>
        <Switch>
          <Route exact path={Path.HOME} component={Home} />
          <Route exact path={Path.POST} component={AddPost} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
