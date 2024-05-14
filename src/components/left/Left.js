import { useState } from "react";
import Section from "../section/Section";
import { experienceData, educationData } from "../../data";

import "./Left.css";

const Left = () => {
  const [isLogo, setIsLogo] = useState(false);
  return (
    <article className="left">
      <Section
        isLogo={isLogo}
        setIsLogo={setIsLogo}
        sectionHeader="experience"
        data={experienceData}
      />
      <Section
        isLogo={isLogo}
        setIsLogo={setIsLogo}
        sectionHeader="education"
        data={educationData}
      />
    </article>
  );
};

export default Left;
