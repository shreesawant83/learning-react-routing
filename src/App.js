import React from "react";
import {Outlet } from "react-router-dom"
import Header from "./Components/Header/Header.js"
import Footer from "./Components/Footer/Footer.js"

function App() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  );
}

export default App;
