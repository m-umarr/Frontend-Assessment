import { FaStar } from "react-icons/fa";
import "./productcard.css";

const ProductCard = ({ item, favItems, setFavItems }) => {
  const handleAddtoFav = (title) => {
    if (favItems.includes(title))
      setFavItems(favItems.filter((item) => item !== title));
    else setFavItems((prev) => [...prev, title]);
  };
  return (
    <div>
      <span className="product">
        <span className="product-title" style={{ overflowX: "hidden" }}>
          {item.title}
        </span>
        <p>
          <strong>Rating: {item.rating?.rate}/5</strong>
        </p>
        <p>
          <b>Price: ${item.price}</b>
        </p>
        <b>Description:</b>
        <p className="productBody">
          {item.description}
          <br />
        </p>
        <span
          className="action_bar"
          style={{ display: "table", width: "100%" }}>
          <span
            className={
              favItems.includes(item.title) ? "actionBarItem" : "actionBarItem2"
            }
            role="button">
            <FaStar />
            <span
              className="actionBarItemLabel"
              onClick={() => handleAddtoFav(item.title)}>
              {favItems.includes(item.title)
                ? "Remove from favourites"
                : "  Add to favourites"}
            </span>
          </span>
        </span>
      </span>
    </div>
  );
};

export default ProductCard;
