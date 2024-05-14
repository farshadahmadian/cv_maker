import "./Date.css";

const Date = ({ className, begin, end }) => {
  return (
    <div className="date-container">
      <span className={className}>
        {begin} - {end}
      </span>
    </div>
  );
};

export default Date;
