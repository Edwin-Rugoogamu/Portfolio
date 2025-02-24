import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />}>
              <Route path="/" element={<Skills/>}></Route>
              <Route path="/experience" element={<Experience/>}></Route>
              <Route path="/education" element={<Education/>}></Route>
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
