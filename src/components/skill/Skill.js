import { useEffect } from "react";
import Rate from "../rate/Rate";
import { skills } from "../../data";
import "./Skill.css";
import "../hobby/Hobby.css";

const Skill = ({ skill, index, isSkillRated, setIsSkillRated }) => {
  useEffect(() => {
    if (skill.rate > 0 && !isSkillRated) setIsSkillRated(true);
  }, [isSkillRated, setIsSkillRated, skill]);

  if (isSkillRated)
    return (
      <div className="skill-with-rate">
        <li className="skill">{skill.skill}</li>
        <Rate skill={skill} />
      </div>
    );
  else
    return (
      <li className="skill">
        {skill.skill}
        {skills.length !== index + 1 ? "," : ""}
      </li>
    );
};

export default Skill;
