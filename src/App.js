//
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import VansList from "./pages/VansList";
import VanDetail from "./pages/VanDetail";

import "./server";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to={"/"}>
          #vanVoyage
        </Link>
        <nav>
          <Link to="/about">about</Link>
          <Link to="/vans">vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<VansList />} />
        <Route path="/vans/:id" element={<VanDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
