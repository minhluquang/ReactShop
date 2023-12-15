import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/ProductContext";

import ReactPaginate from "react-paginate";
import Products from "../Product/Products/Products";

function PaginatedItems(props) {
  const { itemsPerPage, items } = props;
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [isHidePaginate, setIsHidePaginate] = useState(false);

  useEffect(() => {
    if (items.length < itemsPerPage) {
      setIsHidePaginate(true);
    }
  }, [items]);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Products productList={currentItems} />
      {!isHidePaginate && (
        <>
          <div className="mt-3 mb-5 d-flex justify-content-center">
            <ReactPaginate
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="< previous"
              renderOnZeroPageCount={null}
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
            />
          </div>
        </>
      )}
    </>
  );
}

export default PaginatedItems;
