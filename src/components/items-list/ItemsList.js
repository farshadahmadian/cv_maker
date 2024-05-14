import Item from "../item/Item";

const ItemsList = ({ details }) => {
  if (!details.length) return null;
  return (
    <>
      <ul className="details-list">
        {details.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
};

export default ItemsList;
