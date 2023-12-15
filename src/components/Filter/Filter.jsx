import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";

import "./Filter.scss";

const Filter = (props) => {
  const [showPriceFilter, setShowPriceFilter] = useState(false);
  const [showNameFilter, setShowNameFilter] = useState(false);
  const { productList } = props;

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

  const closePriceFilter = () => {
    setShowPriceFilter(false);
  };

  return (
    <div className="d-flex justify-content-end">
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
                <i class="fa-solid fa-caret-up"></i>
              ) : (
                <i class="fa-solid fa-caret-down"></i>
              )}
            </div>
          </Dropdown.Item>
          {showPriceFilter && (
            <div>
              <Dropdown.Item>Low to high</Dropdown.Item>
              <Dropdown.Item>High to low</Dropdown.Item>
            </div>
          )}

          <Dropdown.Item
            onClick={toggleNameFilter}
            className="text-light bg-secondary"
          >
            <div className="d-flex align-items-center justify-content-between">
              <span>Name</span>
              {showNameFilter ? (
                <i class="fa-solid fa-caret-up"></i>
              ) : (
                <i class="fa-solid fa-caret-down"></i>
              )}
            </div>
          </Dropdown.Item>
          {showNameFilter && (
            <div>
              <Dropdown.Item>A-Z</Dropdown.Item>
              <Dropdown.Item>Z-A</Dropdown.Item>
            </div>
          )}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Filter;
