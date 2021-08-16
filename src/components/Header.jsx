import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { string } from "../language/strings";
import { ExtLink } from "./detail/CustomLink";
import { GH } from "./detail/Icon";

const Header = () => {
  const { nav_links, social_links } = useContext(AppContext);
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
        <ExtLink
          className="github_link"
          to="https://github.com/renatosalzano"
          label={<GH />}
        />
        <div
          className={`header_button ${openMenu ? "active" : ""}`}
          onClick={menu_handler}
        >
          {"Menu"}
          {openMenu && (
            <Menu
              links={nav_links}
              socials={social_links}
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
            <ExtLink
              to={link.path}
              label={link.label}
              className="vsc__link social_link"
            />
          </li>
        ))}
      </ul>
      <div className="trigger" onClick={trigger_event}></div>
    </>
  );
};

const Settings = ({ trigger_event }) => {
  const { setLanguage, language } = useContext(AppContext);
  const set_en = () => {
    setLanguage("en");
  };
  const set_it = () => {
    setLanguage("it");
  };
  return (
    <>
      <ul className="menu_container">
        <span>{string.lang_string[language]}</span>
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
