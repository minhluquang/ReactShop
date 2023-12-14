import axios from "./customize-axios";

const userLogin = (username, password) => {
  return axios.post("auth/login", {
    username,
    password,
  });
};

export { userLogin };
