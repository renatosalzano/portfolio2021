import picture from "../../assets/me.jpg";

const WelcomeContent = () => {
  return (
    <div className="welcome_section">
      <img className="picture" src={picture} alt="me" />
      <div>
        <h2>{"Renato Salzano"}</h2>
        <h3>{"Front End Developer"}</h3>
      </div>
    </div>
  );
};

export default WelcomeContent;
