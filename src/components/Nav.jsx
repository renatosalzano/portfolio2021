import { NavLink, useLocation } from "react-router-dom";
import { JS, REACT, JSON, X } from "./detail/Icon";

const nav_links = [
  { icon: <JS />, label: "Home.js", path: "/home" },
  { icon: <REACT />, label: "AboutMe.jsx", path: "/about me" },
  { icon: <JSON />, label: "Skill.json", path: "/skill" },
];
const Nav = () => {
  return (
    <nav className="_vsc_nav">
      <ul className="_card_container">
        {nav_links.map((link) => (
          <Card
            key={link.label}
            icon={link.icon}
            label={link.label}
            path={link.path}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;

const Card = ({ icon, label, path }) => {
  const location = useLocation();
  return (
    <li>
      <NavLink to={path} className="_card " activeClassName="_active">
        {icon} {label}{" "}
        <X className={`_close ${location.pathname === path ? "show" : ""}`} />
      </NavLink>
    </li>
  );
};
