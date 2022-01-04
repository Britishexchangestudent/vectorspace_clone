import React from "react";
import { Navbar, Brand, Cta, Feature, Article } from "./components";
import {
  Header,
  Features,
  Footer,
  Blog,
  Possibility,
  WhatVector,
} from "./containers";
import "./App.css";
import "./index.js";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatVector />
      <Features />
      {/* <Possibility /> */}
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
