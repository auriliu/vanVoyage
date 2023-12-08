//
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import VansList from "./pages/VansList";
import VanDetail from "./pages/VanDetail";
import Layout from "./components/Layout";

import "./server";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/vans" element={<VansList />} />
          <Route path="/vans/:id" element={<VanDetail />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
