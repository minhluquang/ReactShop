import axios from "./customize-axios";

const fetchAllProducts = () => {
  return axios.get("products");
};

export { fetchAllProducts };
