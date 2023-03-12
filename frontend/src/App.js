import "./App.css";

import { Routes, Route } from "react-router-dom";

import Register from "./pages/Register";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Layout from "./pages/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="search" element={<Search />}></Route>
      </Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  );
}

export default App;
