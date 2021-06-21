import { useContext } from "react";
import Typewriter from "typewriter-effect";

import { AppContext } from "../context/AppContext";
import { string } from "../language/strings";

const Home = () => {
  const { language } = useContext(AppContext);
  return (
    <main className="home">
      <div className="_code_style">
        <span>
          <span className="_comment">{`// ${string.greet[language]}`}</span>
        </span>
        <br />
        <span>
          <span className="_const">{"const dev "}</span>
          <span className="_symbol">{"= {"}</span>
        </span>
        <span>
          <span className="_tab" />
          <span className="_var">{"name"}</span>
          <span className="_symbol">{":"}</span>
          <span className="_string">{' "Renato"'}</span>
          <span className="_symbol">{","}</span>
        </span>
        <span>
          <span className="_tab" />
          <span className="_var">{"age"}</span>
          <span className="_symbol">{":"}</span>
          <span className="_number">{" 28"}</span>
          <span className="_symbol">{","}</span>
        </span>
        <span>
          <span className="_tab" />
          <span className="_var">{"type"}</span>
          <span className="_symbol">{":"}</span>
          <span className="_string">{' "Front End"'}</span>
          <span className="_symbol">{","}</span>
        </span>
        <span className="_symbol">{"};"}</span>
        <br />
        <span>
          <span className="_const">{"async function "}</span>
          <span className="_fun">{"do_something"}</span>
          <span className="_symbol">{"() {"}</span>
        </span>

        <span>
          <span className="_tab" />
          <span className="_statement">{"if "}</span>
          <span className="_symbol">{"("}</span>
          <span className="_var">{"awake"}</span>
          <span className="_symbol">{") {"}</span>
        </span>
        <span>
          <span className="_tab" />
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
