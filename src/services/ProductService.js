import axios from "./customize-axios";

const fetchAllProducts = () => {
  return axios.get("products");
};

const fetchProductsByCategory = (category) => {
  return axios.get(`products/category/${category}`);
};

export { fetchAllProducts, fetchProductsByCategory };
