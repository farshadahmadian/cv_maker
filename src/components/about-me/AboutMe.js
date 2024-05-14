import SectionHeader from "../section-header/SectionHeader";
import "../sectionSpace.css";

const AboutMe = ({ content }) => {
  if (!content.trim().length) return null;
  return (
    <div className="section-seperator">
      <SectionHeader sectionHeader="About me" />
      <p className="section-inside">{content}</p>
    </div>
  );
};

export default AboutMe;
