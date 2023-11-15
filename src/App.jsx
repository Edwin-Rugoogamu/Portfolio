import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
