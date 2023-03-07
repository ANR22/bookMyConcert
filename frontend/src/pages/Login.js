import { useState } from "react";

import FormInput from "../components/FormInput";

const userDetails = {
  name: "",
  email: "",
  password: "",
  cpass: "",
};

const Login = () => {
  const [userData, setUserData] = useState(userDetails);

  const { name, email, password, cpass } = userData;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-div">
      <h1 className="title">BookMyConcert</h1>
      <div className="div-form">
        <div className="form-title">Create your account</div>
        <form className="form">
          <FormInput
            name="name"
            type="text"
            title="Name"
            value={name}
            handleChange={handleChange}
          />
          <FormInput
            name="email"
            type="email"
            title="Email"
            value={email}
            handleChange={handleChange}
          />
          <FormInput
            name="password"
            type="password"
            title="Password"
            value={password}
            handleChange={handleChange}
          />
          <FormInput
            name="cpass"
            type="password"
            title="Confirm Password"
            value={cpass}
            handleChange={handleChange}
          />
          <button
            className="field form-button"
            type="submit"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
