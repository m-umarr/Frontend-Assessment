import { useState } from "react";

import Button from "../button/Button";
import ProductCard from "../productCard/ProductCard";

import "./products.css";

const Products = ({ setOpen, data }) => {
  const [favItems, setFavItems] = useState([]);

  return (
    <div>
      <div className="main2">
        <div className="buttonWrapper">
          <Button onClick={() => setOpen(true)}>Send product proposal</Button>
          <div className="messageContainer"></div>
        </div>

        <div className="statsContainer">
          <span>Total products: {data.length}</span>
          {" - "}
          <span>Number of favorites: {favItems.length}</span>
        </div>
        {data.map((item) => (
          <ProductCard
            key={item.title}
            item={item}
            favItems={favItems}
            setFavItems={setFavItems}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
