import Product from "../Product/Product";

const Products = (props) => {
  const { productList } = props;


  return (
    <div
      className="row mt-5 d-flex align-items-center justify-content-start flex-wrap"
      style={{ marginLeft: "10px" }}
    >
      {productList.map((product, index) => {
        return (
          <div key={product.id} className="col-sm-6 col-md-4 col-lg-3">
            <Product data={product} />
          </div>
        );
      })}
    </div>
  );
};

export default Products;
