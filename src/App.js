import React from "react";
import Home from "./Pages/Home";
import List_Search from "./Pages/List_Search";
import Info from "./Pages/Info";
import Demo from "./Pages/Demo";
import AdoptForm from "./Pages/AdoptForm"
import {Routes, Route} from "react-router-dom"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Dashboard" element={<List_Search/>}/>
        <Route path="/Info" element={<Info/>}/>
        <Route path="/Demo/:user" element={<Demo/>}/>
        <Route path="/AdoptForm/:userAdopt" element={<AdoptForm/>}/>
      </Routes>
    </>
  );
}

export default App;
