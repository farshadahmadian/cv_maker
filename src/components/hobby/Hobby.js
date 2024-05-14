import { hobbies } from "../../data";
import "./Hobby.css";

const Hobby = ({ hobby, index }) => {
  return (
    <li className="hobby">
      {hobby.hobby}
      {hobbies.length !== index + 1 ? "," : ""}
    </li>
  );
};

export default Hobby;
