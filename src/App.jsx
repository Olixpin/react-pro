import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* create index  */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Setup error page */}
        <Route path="*" element={<h1>404: Not Found</h1>} />
      </Routes>
    </Router>
  );
};

const About = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  );
};

export default App;
