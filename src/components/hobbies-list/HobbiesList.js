import SectionHeader from "../section-header/SectionHeader";
import Hobby from "../hobby/Hobby";
import { hobbies } from "../../data";
import "./HobbiesList.css";
import "../sectionSpace.css";

const HobbiesList = () => {
  if (!hobbies.length) return null;
  return (
    <div className="section-seperator">
      <SectionHeader sectionHeader="Hobbies" />

      <ul className="hobby-list section-seperator section-inside">
        {hobbies.map((hobby, i) => (
          <Hobby key={hobby.id} hobby={hobby} index={i} />
        ))}
      </ul>
    </div>
  );
};

export default HobbiesList;
