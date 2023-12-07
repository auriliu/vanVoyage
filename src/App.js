//
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
      </nav>
      <Routes>
        <Route path="/" element={<p>home page</p>} />
        <Route path="/about" element={<p>about page</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
