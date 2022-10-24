import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import UserProfile from "./pages/UserProfile";
import Error from "./pages/Error";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Header />
        <Routes>
          {/* create index  */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:userId" element={<UserProfile />} />
          {/* Setup error page */}
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
