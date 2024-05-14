import { secondaryColor } from "../../data";
import "./SectionHeader.css";

const SectionHeader = ({ sectionHeader }) => {
  sectionHeader = sectionHeader.toUpperCase();
  return (
    <h2
      style={{
        borderBottom: `1px solid ${secondaryColor}`,
        color: secondaryColor,
      }}
      className="section-header"
    >
      {sectionHeader}
    </h2>
  );
};

export default SectionHeader;
