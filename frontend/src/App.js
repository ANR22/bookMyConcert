import { useState } from "react";
import "./App.css";

const userDetails = {
  name: "",
  email: "",
  password: "",
  cpass: "",
};

function App() {
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
    <div className="signup-form">
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        ></input>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        ></input>
        <label htmlFor="cpass">Confirm Password</label>
        <input
          type="password"
          name="cpass"
          value={cpass}
          onChange={handleChange}
        ></input>
        <button type="submit" onClick={handleSubmit}>
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
