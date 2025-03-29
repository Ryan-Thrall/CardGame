import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from "./pages/Home";
import Playground from "./pages/Playground";
function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Home</Link>
        <Link to="/Playground">Playground</Link>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/Playground" Component={Playground} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
