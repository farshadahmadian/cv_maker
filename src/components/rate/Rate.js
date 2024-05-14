import "./Rate.css";
import { secondaryColor } from "../../data";

const Rate = ({ skill }) => {
  return (
    <div className="rates">
      <div
        style={skill.rate >= 1 ? { backgroundColor: secondaryColor } : {}}
        className="rate"
      ></div>
      <div
        style={skill.rate >= 2 ? { backgroundColor: secondaryColor } : {}}
        className="rate"
      ></div>
      <div
        style={skill.rate >= 3 ? { backgroundColor: secondaryColor } : {}}
        className="rate"
      ></div>
      <div
        style={skill.rate >= 4 ? { backgroundColor: secondaryColor } : {}}
        className="rate"
      ></div>
      <div
        style={skill.rate >= 5 ? { backgroundColor: secondaryColor } : {}}
        className="rate"
      ></div>
    </div>
  );
};

export default Rate;
