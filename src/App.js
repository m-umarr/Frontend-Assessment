import { useEffect, useState } from "react";

import axios from "axios";

import ProductModal from "./components/Modal/Modal";
import Navbar from "./components/navbar/Navbar";
import Products from "./components/products/Products";

function App() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [productDetails, setProductDetails] = useState({
    title: "",
    price: "",
    description: "",
  });

  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setData([productDetails, ...data]);
    setOpen(false);
  };
  return (
    <div className="App">
      <Navbar />
      <Products setOpen={setOpen} data={data} />
      <ProductModal
        open={open}
        setOpen={setOpen}
        setProductDetails={setProductDetails}
        productDetails={productDetails}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
