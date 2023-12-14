import { useContext, useState } from "react";
import { userLogin } from "../../services/UserService";
import { UserContext } from "../../context/UserContext";
import { NavLink } from "react-router-dom";

import "./Login.scss";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { loginContext } = useContext(UserContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleLogin(e);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email && !password) {
      toast.error("Email/Password is required!");
      return;
    }
    setIsLoading(true);
    const res = await userLogin(email.trim(), password);
    if (res && res.token) {
      loginContext(email.trim(), res.token);
      toast.success("Logged in success!");
      navigate("/");
    } else if (res && +res.status === 401) {
      toast.error(res.data);
    }
    setIsLoading(false);
  };

  return (
    <div className="container-login col-sm-5 col-12">
      <h3>Login</h3>
      <label>Email or username ( email: mor_2314 | password: 83r5^_ )</label>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="password-input">
        <input
          type={isShowPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleEnter}
        />
        <i
          className={
            isShowPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"
          }
          onClick={() => setIsShowPassword(!isShowPassword)}
        ></i>
      </div>
      <button
        disabled={!(email && password) || isLoading}
        onClick={handleLogin}
      >
        {isLoading && <i className="fas fa-spinner fa-pulse"></i>}
        &nbsp;Log in
      </button>
      <NavLink to="/" className="go-back">
        <i className="fa-solid fa-angles-left"></i> Go back
      </NavLink>
    </div>
  );
};

export default Login;
