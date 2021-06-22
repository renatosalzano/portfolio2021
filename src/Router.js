import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import Skill from "./pages/Skill";

const Router = () => {
  return (
    <HashRouter>
      <Header />

      <div className="page">
        <Nav />
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path={"/home"} component={Home} />
          <Route path={"/about me"} component={AboutMe} />
          <Route path={"/skill"} component={Skill} />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default Router;
