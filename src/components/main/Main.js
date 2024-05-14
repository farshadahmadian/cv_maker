import Left from "../left/Left";
import Right from "../right/Right";
import { fontColor } from "../../data";
import "./Main.css";

const Main = () => {
  return (
    <main style={{ color: fontColor }} className="main">
      <Left />
      <Right />
    </main>
  );
};

export default Main;
