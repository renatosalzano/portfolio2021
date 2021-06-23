import { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { X } from "./detail/Icon";

const Nav = () => {
  const { nav_links } = useContext(AppContext);
  return (
    <nav className="_vsc_nav">
      <ul className="_card_container">
        {nav_links.map((link) => (
          <Card
            key={link.label}
            icon={link.icon}
            label={link.label}
            ext={link.ext}
            path={link.path}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;

const Card = ({ icon, label, ext, path }) => {
  const location = useLocation();
  return (
    <li>
      <NavLink to={path} className="_card " activeClassName="_active">
        {icon}
        <span>
          {label}
          <span className="_ext">{ext}</span>
        </span>
        <X className={`_close ${location.pathname === path ? "show" : ""}`} />
      </NavLink>
    </li>
  );
};
