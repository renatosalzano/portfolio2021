const Section = ({ title, content }) => {
  return (
    <article>
      {title && <h2 id={title}>{title}</h2>}
      {content}
    </article>
  );
};

export default Section;
