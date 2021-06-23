import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { description, string } from "../language/strings";
import blog_pic from "../assets/blogmern.png";
import counter_pic from "../assets/counter.png";
import findbook_pic from "../assets/findbook.png";
import wptheme_pic from "../assets/wptheme.png";
import { ExtLink } from "../components/detail/CustomLink";

const Works = () => {
  const { language } = useContext(AppContext);

  const works = [
    {
      label: "Blog Mern",
      pic: blog_pic,
      desc: description.blog_mern[language],
      link: "https://blog-mernstack-app.herokuapp.com",
      gh_link: "https://github.com/renatosalzano/blog-mern-app",
    },
    {
      label: "Findbook App",
      pic: findbook_pic,
      desc: description.findbook[language],
      link: "https://renatosalzano.github.io/findbook-app/",
      gh_link: "https://github.com/renatosalzano/findbook-app",
    },
    {
      label: "Counter App",
      pic: counter_pic,
      desc: description.counter[language],
      link: "https://renatosalzano.github.io/counter_app/",
      gh_link: "https://github.com/renatosalzano/counter_app",
    },
    {
      label: "WP Theme",
      pic: wptheme_pic,
      desc: description.wptheme[language],
      gh_link: "https://github.com/renatosalzano/themexvii",
      link: "https://ristorantelacantina.altervista.org/",
    },
  ];
  return (
    <main className="works_page">
      {works.map((work) => (
        <Work
          key={work.label}
          pic={work.pic}
          description={work.desc}
          label={work.label}
          link={work.link}
          gh_link={work.gh_link}
          language={language}
        />
      ))}
    </main>
  );
};

export default Works;

const Work = ({ label, pic, description, link, gh_link, language }) => {
  return (
    <div className="_work_container">
      <img src={pic} alt="my_work" className="_thumb" />
      <div className="_info">
        <h2 className="_label">{label}</h2>
        <p className="_description">{description}</p>
        <ExtLink
          className="work_link"
          to={gh_link}
          label={string.repo_link[language]}
        />
        <ExtLink
          className="work_link"
          to={link}
          label={string.ext_link[language]}
        />
      </div>
    </div>
  );
};
