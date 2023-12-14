import { useContext } from "react";

import Slider from "../../components/Slider/Slider";
import Product from "./Product";

import { ProductContext } from "../../context/ProductContext";

const Shop = () => {
  const { productList } = useContext(ProductContext);

  return (
    <>
      <Slider />
      <div
        className="row mt-5 d-flex align-items-center justify-content-center flex-wrap"
        style={{ marginLeft: "10px" }}
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
