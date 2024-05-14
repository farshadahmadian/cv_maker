import SectionHeader from "../section-header/SectionHeader";
import SubSection from "../sub-section/SubSection";
import "../sectionSpace.css";

const Section = ({ sectionHeader, data, isLogo, setIsLogo }) => {
  return (
    <div className="section-seperator">
      <SectionHeader sectionHeader={sectionHeader} />
      {data.length > 0 &&
        data.map((currentData, i) => {
          return (
            <SubSection
              key={currentData.id}
              currentData={currentData}
              index={i}
              data={data}
              isLogo={isLogo}
              setIsLogo={setIsLogo}
            />
          );
        })}
    </div>
  );
};

export default Section;
