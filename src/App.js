import React from "react";
import {Route, Routes} from "react-router-dom";
import "./App.css";
import Sidenavs from "./components/sidenav/sidenav";
import Discovery1 from "./components/discovery1";
import Discovery2 from "./components/discovery2";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Sidenavs />} />
        <Route path="/discovery1" element={<Discovery1 />} />
        <Route path="/discovery2" element={<Discovery2 />} />
      </Routes>
    </div>
  );
}

export default App;
