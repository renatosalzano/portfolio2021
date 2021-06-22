import { VscClose, VscJson } from "react-icons/vsc";
import { SiJavascript, SiReact, SiSass } from "react-icons/si";

export const X = ({ className }) => {
  return <VscClose className={className} />;
};

export const JS = () => {
  return <SiJavascript className="js_icon nav_icon" />;
};

export const SASS = () => {
  return <SiSass className="sass_icon nav_icon" />;
};
export const JSON = () => {
  return <VscJson className="json_icon nav_icon" />;
};
export const REACT = () => {
  return <SiReact className="react_icon nav_icon" />;
};
