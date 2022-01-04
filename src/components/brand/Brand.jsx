import React from "react";
import "./brand.css";
import { microsoft, nih, morningstar, pubmed } from "./import";

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <img src={microsoft} alt="microsoft" />
      </div>
      <div>
        <img src={nih} alt="nih" />
      </div>
      <div>
        <img src={morningstar} alt="morningstar" />
      </div>
      <div>
        <img src={pubmed} alt="pubmed" />
      </div>
    </div>
  );
};

export default Brand;
