import { useContext } from "react";
import Typewriter from "typewriter-effect";

import { AppContext } from "../context/AppContext";
import { string } from "../language/strings";

const Home = () => {
  const { language } = useContext(AppContext);
  return (
    <main className="home">
      <div className="_code_style">
        <h1 className="_comment title">{`// ${string.greet[language]}`}</h1>

        <br />
        <span>
          <span className="_const">{"const dev "}</span>
          <span className="_symbol">{"= {"}</span>
        </span>
        <span>
          <span className="_tab" />
          <span className="_var">{string.key[language][0]}</span>
          <span className="_symbol">{":"}</span>
          <span className="_string">{' "Renato"'}</span>
          <span className="_symbol">{","}</span>
        </span>
        <span>
          <span className="_tab" />
          <span className="_var">{string.key[language][1]}</span>
          <span className="_symbol">{":"}</span>
          <span className="_number">{" 28"}</span>
          <span className="_symbol">{","}</span>
        </span>
        <span>
          <span className="_tab" />
          <span className="_var">{string.key[language][2]}</span>
          <span className="_symbol">{":"}</span>
          <span className="_string">{' "Front End"'}</span>
          <span className="_symbol">{","}</span>
        </span>
        <span className="_symbol">{"};"}</span>
        <br />
        <span>
          <span className="_const">{"function "}</span>
          <span className="_fun">{string.func[language]}</span>
          <span className="_symbol">{"() {"}</span>
        </span>
        <span>
          <span className="_tab" />
          <span className="_const">
            {"let "}
            <span className="_var">{"drink"}</span>
          </span>
          <span className="_symbol">{" = "}</span>
          <span className="_statement">{"await "}</span>
          <span className="_fun">{"get"}</span>
          <span className="_symbol">{"("}</span>
          <span className="_string">{'"coffee"'}</span>
          <span className="_symbol">{");"}</span>
        </span>

        <span>
          <span className="_tab" />
          <span className="_statement">{"if "}</span>
          <span className="_symbol">{"("}</span>
          <span className="_var">{"awake"}</span>
          <span className="_symbol">{") {"}</span>
        </span>

        <span className="_return">
          <span className="_tab" />
          <span className="_tab" />
          <span className="_statement">{"return"}</span>
          <Typewriter
            options={{
              strings: string.typing[language],
              delay: 50,
              autoStart: true,
              loop: true,
            }}
          />
        </span>
        <span className="_symbol">
          <span className="_tab" />
          {"};"}
        </span>
        <span className="_symbol">{"};"}</span>
      </div>
    </main>
  );
};

export default Home;
