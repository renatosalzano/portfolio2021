export const Tag = ({ name, attributes, text_content }) => {
  return text_content ? (
    <>
      <div>
        <span className="_clousure">{"<"}</span>
        <span className="_const">{name}</span>
        {attributes && <Attributes key="bla" items={attributes} />}

        <span className="_clousure">{">"}</span>
      </div>
      <div>
        <Tab />
        <span className="_text">{text_content}</span>
      </div>
      <div>
        <span className="_clousure">{"</"}</span>
        <span className="_const">{name}</span>
        <span className="_clousure">{">"}</span>
      </div>
    </>
  ) : (
    <div>
      <span className="_clousure">{"<"}</span>
      <span className="_const">{name}</span>
      {attributes && <Attributes key="bla" items={attributes} />}
      <span className="_clousure">{" />"}</span>
    </div>
  );
};

export const Tab = () => {
  return <span className="_tab" />;
};

export const Attributes = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <span key={item.key}>
          <span className="_var">{` ${item.key}`}</span>
          <span className="_symbol">{"="}</span>
          <span className="_string">{`"${item.value}"`}</span>
        </span>
      ))}
    </div>
  );
};

export const Space = () => {
  return <span className="._space"> </span>;
};
