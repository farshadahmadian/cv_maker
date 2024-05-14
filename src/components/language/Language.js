import { useEffect } from "react";
import Rate from "../rate/Rate";
import { languages } from "../../data";
import "../hobby/Hobby.css";

const Language = ({ language, index, isLanguageRated, setIsLanguageRated }) => {
  useEffect(() => {
    if (language.rate > 0 && !isLanguageRated) setIsLanguageRated(true);
  }, [language, isLanguageRated, setIsLanguageRated]);
  if (isLanguageRated)
    return (
      <div className="language-with-rate">
        <li className="language">{language.name}</li>
        <Rate skill={language} />
      </div>
    );
  else
    return (
      <li className="language">
        {language.name}
        {languages.length !== index + 1 ? "," : ""}
      </li>
    );
};

export default Language;
