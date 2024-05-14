import { useState } from "react";
import SectionHeader from "../section-header/SectionHeader";
import Skill from "../skill/Skill";
import { skills, learningSkills, otherSkills } from "../../data";
import "../hobbies-list/HobbiesList.css";
import "../sectionSpace.css";
import "../languages-list/LanguagesList.css";

const SkillsList = () => {
  const [isSkillRated, setIsSkillRated] = useState(false);
  if (!skills.length) return null;

  return (
    <div className="section-seperator">
      <SectionHeader sectionHeader="Skills" />
      <ul
        className="skill-list section-inside"
        style={isSkillRated ? { display: "grid", rowGap: "1rem" } : {}}
      >
        {skills.map((skill, i) => (
          <Skill
            key={skill.id}
            skill={skill}
            index={i}
            isSkillRated={isSkillRated}
            setIsSkillRated={setIsSkillRated}
          />
        ))}
      </ul>
      {otherSkills.trim().length > 0 && (
        <p className="others">({otherSkills})</p>
      )}
      {learningSkills.trim().length > 0 && (
        <p className="learning"> {learningSkills}</p>
      )}
    </div>
  );
};

export default SkillsList;
