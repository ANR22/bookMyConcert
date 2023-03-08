import { useState } from "react";

import FormInput from "../components/FormInput";

const userDetails = {
  name: "",
  email: "",
  password: "",
  cpass: "",
  isMember: false,
};

const Register = () => {
  const [userData, setUserData] = useState(userDetails);

  const { name, email, password, cpass } = userData;

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(userData);
    if (userData.cpass === userData.password) {
      console.log("proceed");
    } else {
      console.log("invalid");
    }
  };

  const handleChange = (e) => {
    // console.log(e.target);
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const toggleMember = () => {
    setUserData({ ...userData, isMember: !userData.isMember });
  };
  return (
    <div className="login-div">
      <div className="div-form">
        <h1 className="title">BookMyConcert</h1>
        <div className="form-title">
          {userData.isMember ? "Login to your account" : "Create your account"}
        </div>
        <form className="form" onSubmit={handleSubmit}>
          {!userData.isMember && (
            <FormInput
              name="name"
              type="text"
              title="Name"
              value={name}
              handleChange={handleChange}
            />
          )}
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
          {!userData.isMember && (
            <FormInput
              name="cpass"
              type="password"
              title="Confirm Password"
              value={cpass}
              handleChange={handleChange}
            />
          )}
          <p className="toggle-member">
            {userData.isMember
              ? "Do not have an account?"
              : "Already have an account?"}
            <button
              className="highlight-button"
              type="button"
              onClick={toggleMember}
            >
              {userData.isMember ? "Register" : "Login"}
            </button>
          </p>
          <button className="field form-button" type="submit">
            {userData.isMember ? "Login" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
