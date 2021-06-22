import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { VscChevronRight } from "react-icons/vsc";
import { AiOutlinePicture } from "react-icons/ai";
import { string } from "../language/strings";
import picture from "../assets/me.jpg";

const AboutMe = () => {
  const { language } = useContext(AppContext);
  return (
    <main className="about_page">
      <div className="_vsc_style">
        <PathFile />
        <div className="_window">
          <div className="_picture">
            <img className="picture" src={picture} alt="me" />
          </div>

          <p>{string.about[language]}</p>
        </div>
      </div>
    </main>
  );
};

export default AboutMe;

const Cards = ({ cards }) => {
  return cards.map((card) => (
    <div className="_card" key={card}>
      {card}
    </div>
  ));
};

const PathFile = () => {
  return (
    <div className="_path_file">
      {"src"}
      <AR />
      {"assets"}
      <AR />
      <PI />
      {"me.jpg"}
    </div>
  );
};
//ICON

const AR = () => {
  return <VscChevronRight />;
};

const PI = () => {
  return <AiOutlinePicture className="pic_ico" />;
};
