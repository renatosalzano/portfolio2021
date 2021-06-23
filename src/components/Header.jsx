import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { string } from "../language/strings";
import { GH } from "./detail/Icon";

const Header = () => {
  const { nav_links } = useContext(AppContext);
  const [openMenu, setOpenMenu] = useState(false);
  const [openSet, setOpenSet] = useState(false);

  const menu_handler = () => {
    if (openMenu) return setOpenMenu("");
    if (openSet) setOpenSet("");
    return setOpenMenu("open");
  };
  const setting_handler = () => {
    if (openSet) return setOpenSet("");
    if (openMenu) setOpenMenu("");
    return setOpenSet("open");
  };
  return (
    <div className="fixed_container">
      <header>
        <a
          className="github_link"
          href="https://github.com/renatosalzano"
          target="_blank"
          rel="noreferrer"
        >
          <GH />
        </a>
        <div
          className={`header_button ${openMenu ? "active" : ""}`}
          onClick={menu_handler}
        >
          {"Menu"}
          {openMenu && (
            <Menu
              links={nav_links}
              socials={[
                { label: "GitHub", path: "https://github.com/renatosalzano" },
                { label: "LinkedIn", path: "/" },
                { label: "Facebook", path: "/" },
              ]}
              trigger_event={menu_handler}
            />
          )}
        </div>
        <div
          className={`header_button ${openSet ? "active" : ""}`}
          onClick={setting_handler}
        >
          {"Settings"}
          {openSet && <Settings trigger_event={setting_handler} />}
        </div>
      </header>
    </div>
  );
};

export default Header;

const Menu = ({ links, socials, trigger_event }) => {
  return (
    <>
      <ul className="menu_container">
        {links.map((link) => (
          <li key={link.label}>
            <Link to={`${link.label.toLowerCase()}`} onClick={trigger_event}>
              {link.label}
            </Link>
          </li>
        ))}
        <hr />
        <span>Social</span>
        <hr />
        {socials.map((link) => (
          <li key={link.label}>
            <a
              className="social_link"
              href={link.path}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="trigger" onClick={trigger_event}></div>
    </>
  );
};

const Settings = ({ trigger_event }) => {
  const { setLanguage } = useContext(AppContext);
  const set_en = () => {
    setLanguage("en");
  };
  const set_it = () => {
    setLanguage("it");
  };
  return (
    <>
      <ul className="menu_container">
        <span>Language</span>
        <hr />
        <li onClick={set_en}>
          <span>English</span>
        </li>
        <li onClick={set_it}>
          <span>Italiano</span>
        </li>
      </ul>
      <div className="trigger" onClick={trigger_event}></div>
    </>
  );
};
