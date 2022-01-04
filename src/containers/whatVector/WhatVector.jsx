import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatVector.css";

const WhatVector = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="whpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is VectorspaceAI"
          text="We invents systems and datasets that mimic human cognition for the purpose of information arbitrage and scientific discovery. With a focus on Natural Language Processing/ Understanding for hidden relationship detection in data"
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1>The possibilities are beyond your imagination</h1>
        <button>Explore The Library</button>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Efficient"
          text="Enables any group analyzing data to save time by testing a hypothesis or running experiments with higher throughput."
        />
        <Feature
          title="Innovative"
          text="Data is considered the new oil, but datasets will power all data analytics including those used in machine learning and artificial intelligence."
        />
        <Feature
          title="Collaborative"
          text="The platform powers research groups, data vendors, funds and institutions by generating on-demand NLP/NLU correlation matrix datasets."
        />
      </div>
    </div>
  );
};

export default WhatVector;
