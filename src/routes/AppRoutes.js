import { Routes, Route } from "react-router-dom";

import Shop from "../pages/Shop/Shop";
import Cart from "../pages/Cart/Cart";
import Login from "../pages/Login/Login";
import Notfound from "./Notfound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Notfound/>}/>
    </Routes>
  );
};

export default AppRoutes;
