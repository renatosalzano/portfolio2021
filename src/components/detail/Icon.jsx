import {
  VscClose,
  VscJson,
  VscGithub,
  VscLinkExternal,
  VscFilePdf,
} from "react-icons/vsc";
import { SiJavascript, SiReact, SiHtml5 } from "react-icons/si";

export const GH = ({ className }) => {
  return <VscGithub className={className} />;
};

export const X = ({ className }) => {
  return <VscClose className={className} />;
};

export const JS = () => {
  return <SiJavascript className="js_icon nav_icon" />;
};

export const HTML = () => {
  return <SiHtml5 className="html_icon nav_icon" />;
};
export const JSON = () => {
  return <VscJson className="json_icon nav_icon" />;
};
export const REACT = () => {
  return <SiReact className="react_icon nav_icon" />;
};

export const PDF = () => {
  return <VscFilePdf className="pdf_icon nav_icon" />;
};

export const EXLINK = () => {
  return <VscLinkExternal />;
};
