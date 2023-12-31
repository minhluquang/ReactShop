import { useContext, useState } from "react";

import { ProductContext } from "../../context/ProductContext";

import { Button, ButtonGroup } from "react-bootstrap";

import './Category.scss'

const Category = (props) => {
  const { handleCategory } = useContext(ProductContext);
  const [activeCategory, setActiveCategory] = useState("all");

  const handleClickCategory = (type) => {
    setActiveCategory(type);
    handleCategory(type);
  };

  return (
    <div className="d-flex align-items-center justify-content-center mt-4">
      <ButtonGroup aria-label="Basic example" className="flex-wrap">
        <Button className="category-btn"
          variant={activeCategory === "all" ? "dark" : "outline-dark"}
          onClick={() => handleClickCategory("all")}
        >
          All
        </Button>
        <Button className="category-btn"
          variant={
            activeCategory === "men's clothing" ? "dark" : "outline-dark"
          }
          onClick={() => handleClickCategory("men's clothing")}
        >
          Men's clothing
        </Button>
        <Button className="category-btn"
          variant={
            activeCategory === "women's clothing" ? "dark" : "outline-dark"
          }
          onClick={() => handleClickCategory("women's clothing")}
        >
          Women's clothing
        </Button>
        <Button className="category-btn"
          variant={activeCategory === "jewelery" ? "dark" : "outline-dark"}
          onClick={() => handleClickCategory("jewelery")}
        >
          Jewelery
        </Button>
        <Button className="category-btn"
          variant={activeCategory === "electronics" ? "dark" : "outline-dark"}
          onClick={() => handleClickCategory("electronics")}
        >
          Electronics
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Category;
