import { useEffect, useState } from "react";

import Slider from "../../components/Slider/Slider";
import Product from "./Product";

import { fetchAllProducts } from "../../services/ProductService";

const Shop = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    const res = await fetchAllProducts();
    if (res) {
      setProductList(res);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Slider />
      <div
        className=" mt-5 d-flex align-items-center justify-content-center flex-wrap"
        style={{ marginLeft: "20px" }}
      >
        {productList.map((product, index) => {
          return (
            <div key={product.id} className="col-3">
              <Product data={product} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Shop;
