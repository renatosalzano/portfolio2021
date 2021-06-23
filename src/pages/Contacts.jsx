import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Tag } from "../components/code_style/code_style";
import { CallTo, ExtLink, MailTo } from "../components/detail/CustomLink";
import { string } from "../language/strings";

const Contacts = () => {
  const { language } = useContext(AppContext);
  return (
    <main className="_code_style">
      <Tag name="h1" text_content={<h1>CONTACTS</h1>} />
      <span className="_space"></span>
      <Tag
        name="a"
        attributes={[{ key: "href", value: "mailto:me" }]}
        text_content={
          <MailTo
            email="renato.salzano92@gmail.com"
            label={string.email[language]}
          />
        }
      />
      <span className="_space"></span>
      <Tag
        name="a"
        attributes={[{ key: "href", value: "callto:me" }]}
        text_content={<CallTo number="+393516122332" />}
      />
      <span className="_space"></span>
      <Tag
        name="a"
        attributes={[{ key: "href", value: "https://wa.me" }]}
        text_content={
          <ExtLink
            to={"https://wa.me/393516122332"}
            label={string.what_app[language]}
          />
        }
      />
      <span className="_space"></span>
      <span className="_comment">{"// THANK YOU"}</span>
    </main>
  );
};

export default Contacts;
