import { Container } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as Path from "./routeNames";

// components and pages
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Navbar />
        <Switch>
          <Route exact path={Path.HOME} component={Home} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
