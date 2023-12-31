import { useContext } from "react";
import _, { debounce } from "lodash";

import Slider from "../../components/Slider/Slider";
import PaginatedItems from "../../components/PaginatedItems/PaginatedItems";
import Filter from "../../components/Filter/Filter";
import Category from "../../components/Category/Category";

import { ProductContext } from "../../context/ProductContext";

const Shop = () => {
  const { productList, setProductList, isLoading, storeProductList } =
    useContext(ProductContext);

  const handleSearch = debounce((event) => {
    let term = event.target.value;
    console.log(term);
    if (term) {
      // Get all product for search...
      let productListClone = _.cloneDeep(storeProductList);
      productListClone = productListClone.filter((item) =>
        item.title.toLowerCase().includes(term.toLowerCase().trim())
      );
      setProductList(productListClone);
    } else if (term.trim() === "") {
      setProductList(storeProductList);
    }
  }, 500);

  return (
    <>
      <Slider />
      <Category />
      <div className="d-flex align-items-sm-center justify-content-between mt-sm-5 mt-3 flex-column flex-sm-row align-items-start">
        <input
          className="rounded col-sm-6 col-md-6 col-lg-5 col-12 px-2 py-1"
          placeholder="Search..."
          onChange={(e) => handleSearch(e)}
        />
        <Filter productList={productList} />
      </div>
      {isLoading ? (
        <div className="d-flex justify-content-center fs-1">
          <i className="fa-solid fa-spinner fa-spin-pulse"></i>
        </div>
      ) : (
        <PaginatedItems itemsPerPage={8} items={productList} />
      )}
    </>
  );
};

export default Shop;
