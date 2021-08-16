import { createContext, useState } from "react";
import { JS, REACT, PDF, JSON, HTML } from "../components/detail/Icon";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const nav_links = [
    { icon: <JS />, label: "Home", ext: ".js", path: "/home" },
    { icon: <REACT />, label: "AboutMe", ext: ".jsx", path: "/aboutme" },
    { icon: <JSON />, label: "Skill", ext: ".json", path: "/skill" },
    { icon: <PDF />, label: "Works", ext: ".pdf", path: "/works" },
    { icon: <HTML />, label: "Contacts", ext: ".html", path: "/contacts" },
  ];

  const social_links = [
    { label: "GitHub", path: "https://github.com/renatosalzano" },
    {
      label: "LinkedIn",
      path: "https://www.linkedin.com/in/renato-salzano-7b7741b0/",
    },
    { label: "Facebook", path: "https://www.facebook.com/Ren1592/" },
    { label: "Instagram", path: "https://www.instagram.com/ren.xvii/" },
  ];

  return (
    <AppContext.Provider
      value={{ language, setLanguage, nav_links, social_links }}
    >
      {children}
    </AppContext.Provider>
  );
};
