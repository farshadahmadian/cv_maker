import { useEffect } from "react";
import ItemsList from "../items-list/ItemsList";
import Date from "../date/Date";
import { locationColor, primaryColor } from "../../data";
import "./SubSection.css";
import "../sectionSpace.css";

const SubSection = ({ data, currentData, index, isLogo, setIsLogo }) => {
  const isNotLast = data.length - 1 !== index;
  const { description, title, details, begin, end, location, logo } =
    currentData;

  useEffect(() => {
    if (logo?.trim().length > 0 && !isLogo) setIsLogo(true);
  }, [isLogo, logo, setIsLogo]);

  return (
    <div
      style={isNotLast ? { borderBottom: `1px dashed ${primaryColor}` } : {}}
      className={` section-inside ${isLogo ? "sub-section-with-logo" : ""}`}
    >
      <div className="sub-section-logo-container">
        {isLogo && <img className="sub-section-logo" src={logo} alt={logo} />}
      </div>
      <div className="sub-section-text-container">
        <div className="sub-section-header">
          <div>
            <h3 className="description">{description}</h3>
            <div className="title-container">
              <h3 style={{ color: primaryColor }} className="title">
                {title}
              </h3>
            </div>
          </div>
          <div
            className="date-location-container"
            style={{ color: locationColor }}
          >
            {begin?.trim().length > 0 && end?.trim().length > 0 && (
              <Date
                className="date"
                begin={begin}
                end={end}
                location={location}
              />
            )}
            {location?.trim().length > 0 && (
              <div className="location">{location}</div>
            )}
          </div>
        </div>
        <ItemsList details={details} />
      </div>
    </div>
  );
};

export default SubSection;
