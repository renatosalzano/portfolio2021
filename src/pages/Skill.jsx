const Skill = () => {
  return (
    <main className="_code_style">
      <span>
        <h1 className="_comment title">{"// SKILL"}</h1>
      </span>
      <br />
      <div className="skill_container">
        <SkillBar name={"html"} percentage={90} />
        <SkillBar name={"css/sass"} percentage={85} />
        <SkillBar name={"javascript"} percentage={80} />
        <SkillBar name={"react"} percentage={85} />
        <SkillBar name={"node-js"} percentage={55} />
        <SkillBar name={"word-press"} percentage={65} />
      </div>
    </main>
  );
};

export default Skill;

const SkillBar = ({ name, percentage }) => {
  const bar = {
    width: percentage + "%",
  };

  return (
    <span className="skill_bar">
      <span className="_name">{`${name}:`}</span>
      <span className="_symbol">{"["}</span>

      <div className="bar_container">
        <div className="bar" style={bar}></div>
        <Dashed />
      </div>
      <span className="_symbol">{`]`}</span>
    </span>
  );
};

const Dashed = () => {
  return (
    <div className="_dashed">
      <span className="_dash"></span>
      <span className="_dash"></span>
      <span className="_dash"></span>
      <span className="_dash"></span>
      <span className="_dash"></span>
      <span className="_dash"></span>
      <span className="_dash"></span>
      <span className="_dash"></span>
      <span className="_dash"></span>
      <span className="_dash"></span>
      <span className="_dash"></span>
      <span className="_dash"></span>
      <span className="_dash"></span>
      <span className="_dash"></span>
      <span className="_dash"></span>
      <span className="_dash"></span>
      <span className="_dash"></span>
      <span className="_dash"></span>
      <span className="_dash"></span>
      <span className="_dash"></span>
    </div>
  );
};
