import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./Login.scss";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleLogin(e);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging...");
  };

  return (
    <Form className="login-container col-6 mt-3">
      <h3>Login</h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <div className="input-password">
          <Form.Control
            type={isShowPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => handleEnter(e)}
          />

          {isShowPassword ? (
            <i
              className="fa-solid fa-eye"
              onClick={() => setIsShowPassword(false)}
            ></i>
          ) : (
            <i
              className="fa-solid fa-eye-slash"
              onClick={() => setIsShowPassword(true)}
            ></i>
          )}
        </div>
      </Form.Group>
      <Button
        variant="dark"
        type="submit"
        disabled={!(email && password)}
        onClick={handleLogin}
      >
        Log in
      </Button>
    </Form>
  );
};

export default Login;
