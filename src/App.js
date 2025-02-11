import "./App.css";
import React from "react";

import { Routes, Route } from "react-router";
import ValentineProposal from "./Container/ValentineProposal";
import Home from "./Container/Home";
import PromiseContainer from "./Container/Promise";
function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/promise" element={<PromiseContainer />}></Route>
        <Route path="/proposal" element={<ValentineProposal />}></Route>
      </Routes>
    </main>
  );
}

export default App;
