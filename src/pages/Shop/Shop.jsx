import { useContext } from "react";

import Slider from "../../components/Slider/Slider";
import Product from "../../components/Product/Product/Product";
import PaginatedItems from "../../components/PaginatedItems/PaginatedItems";

import { ProductContext } from "../../context/ProductContext";
import { Button, ButtonGroup } from "react-bootstrap";

const Shop = () => {
  const { productList, handleCategory, isLoading } = useContext(ProductContext);
  // console.log(productList);
  return (
    <>
      <Slider />
      <div className="d-flex align-items-center justify-content-center mt-4">
        <ButtonGroup aria-label="Basic example">
          <Button variant="outline-dark" onClick={() => handleCategory("all")}>
            All
          </Button>
          <Button
            variant="outline-dark"
            onClick={() => handleCategory("men's clothing")}
          >
            Men's clothing
          </Button>
          <Button
            variant="outline-dark"
            onClick={() => handleCategory("women's clothing")}
          >
            Women's clothing
          </Button>
          <Button
            variant="outline-dark"
            onClick={() => handleCategory("jewelery")}
          >
            Jewelery
          </Button>
          <Button
            variant="outline-dark"
            onClick={() => handleCategory("electronics")}
          >
            Electronics
          </Button>
        </ButtonGroup>
      </div>
      {isLoading ? (
        <div className="d-flex justify-content-center fs-1 mt-5">
          <i className="fa-solid fa-spinner fa-spin-pulse"></i>
        </div>
      ) : (
        <PaginatedItems itemsPerPage={8} items={productList} />
      )}
    </>
  );
};

export default Shop;
