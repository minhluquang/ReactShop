import React, { useContext, useState } from "react";

import { ProductContext } from "../../context/ProductContext";
import { Dropdown } from "react-bootstrap";

import "./Filter.scss";

const Filter = (props) => {
  const [showPriceFilter, setShowPriceFilter] = useState(false);
  const [showNameFilter, setShowNameFilter] = useState(false);
  const { handleFilter } = useContext(ProductContext);

  const togglePriceFilter = (event) => {
    event.stopPropagation();
    setShowPriceFilter(!showPriceFilter);
    setShowNameFilter(false);
  };

  const toggleNameFilter = (event) => {
    event.stopPropagation();
    setShowNameFilter(!showNameFilter);
    setShowPriceFilter(false);
  };

  return (
    <div className="d-flex justify-content-end mt-sm-0 mt-3">
      <Dropdown className="filter-container" align={"end"}>
        <Dropdown.Toggle variant="dark" id="dropdown-basic">
          Filter
        </Dropdown.Toggle>
        <Dropdown.Menu className="p-0 rounded filter-menu">
          <Dropdown.Item
            onClick={togglePriceFilter}
            className="text-light bg-secondary"
          >
            <div className="d-flex align-items-center justify-content-between">
              <span>Price</span>
              {showPriceFilter ? (
                <i className="fa-solid fa-caret-up"></i>
              ) : (
                <i className="fa-solid fa-caret-down"></i>
              )}
            </div>
          </Dropdown.Item>
          {showPriceFilter && (
            <div>
              <Dropdown.Item onClick={() => handleFilter("price", "asc")}>
                Low to high
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilter("price", "desc")}>
                High to low
              </Dropdown.Item>
            </div>
          )}

          <Dropdown.Item
            onClick={toggleNameFilter}
            className="text-light bg-secondary"
          >
            <div className="d-flex align-items-center justify-content-between">
              <span>Name</span>
              {showNameFilter ? (
                <i className="fa-solid fa-caret-up"></i>
              ) : (
                <i className="fa-solid fa-caret-down"></i>
              )}
            </div>
          </Dropdown.Item>
          {showNameFilter && (
            <div>
              <Dropdown.Item onClick={() => handleFilter("title", "asc")}>
                A-Z
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilter("title", "desc")}>
                Z-A
              </Dropdown.Item>
            </div>
          )}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Filter;
