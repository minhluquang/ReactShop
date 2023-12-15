import { useContext } from "react";

import { ProductContext } from "../../context/ProductContext";

import { Button, ButtonGroup } from "react-bootstrap";

const Category = (props) => {
  const { handleCategory } = useContext(ProductContext);

  return (
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
  );
};

export default Category;
