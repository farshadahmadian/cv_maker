import "./Item.css";

const Item = ({ item }) => {
  return (
    <div className="item-container">
      <span className="bullet-point"></span>
      <li className="item">{item.detail}</li>
    </div>
  );
};

export default Item;
