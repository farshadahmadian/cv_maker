import { useState } from "react";
import SectionHeader from "../section-header/SectionHeader";
import Language from "../language/Language";
import { languages, learningLanguages } from "../../data";
import "./LanguagesList.css";
import "../hobbies-list/HobbiesList.css";

const LanguagesList = () => {
  const [isLanguageRated, setIsLanguageRated] = useState(false);
  if (!languages.length) return null;
  return (
    <div className="section-seperator">
      <SectionHeader sectionHeader="Languages" />
      <ul
        className="language-list section-inside"
        style={isLanguageRated ? { display: "grid", rowGap: "1rem" } : {}}
      >
        {languages.map((language, i) => (
          <Language
            key={language.id}
            language={language}
            index={i}
            isLanguageRated={isLanguageRated}
            setIsLanguageRated={setIsLanguageRated}
          />
        ))}
      </ul>
      {learningLanguages.trim().length > 0 && (
        <p className="learning">{learningLanguages}</p>
      )}
    </div>
  );
};

export default LanguagesList;
