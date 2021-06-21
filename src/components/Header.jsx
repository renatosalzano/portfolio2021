import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { string } from "../language/strings";
import { VscGithub } from "react-icons/vsc";

const Header = () => {
  const { language, switch_language } = useContext(AppContext);
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
          <VscGithub />
        </a>
        <div
          className={`header_button ${openMenu ? "active" : ""}`}
          onClick={menu_handler}
        >
          {"Menu"}
          {openMenu && (
            <Menu
              links={["Home", "About Me", "Skill", "Works"]}
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

const Menu = ({ links, trigger_event }) => {
  return (
    <>
      <ul className="menu_container">
        {links.map((link) => (
          <li key={link}>
            <Link to={`${link.toLowerCase()}`} onClick={trigger_event}>
              {link}
            </Link>
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
