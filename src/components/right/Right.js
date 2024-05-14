import AboutMe from "../about-me/AboutMe";
import HobbiesList from "../hobbies-list/HobbiesList";
import LanguagesList from "../languages-list/LanguagesList";
import SkillsList from "../skills-list/SkillsList";
import { aboutMe, rightBackgroundColor } from "../../data";
import "./Right.css";

const Right = () => {
  return (
    <article
      style={{ backgroundColor: rightBackgroundColor }}
      className="right"
    >
      <AboutMe content={aboutMe} />
      <SkillsList />
      <LanguagesList />
      <HobbiesList />
    </article>
  );
};

export default Right;
