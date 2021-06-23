import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import AboutMe from "./pages/AboutMe";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Skill from "./pages/Skill";
import Works from "./pages/Works";

const Router = () => {
  return (
    <HashRouter>
      <Header />

      <div className="page">
        <Nav />
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path={"/home"} component={Home} />
          <Route path={"/aboutme"} component={AboutMe} />
          <Route path={"/skill"} component={Skill} />
          <Route path={"/works"} component={Works} />
          <Route path={"/contacts"} component={Contacts} />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default Router;
