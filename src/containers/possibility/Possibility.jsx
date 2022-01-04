import React from "react";
import "./possibility.css";
import aiImage from "../../assets/pngwing.com.png";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={aiImage} alt="" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to get started</h4>
        <h1>The Possibilities Are Beyond Your Imagination</h1>
        <p>
          We invents systems and datasets that mimic human cognition for the
          purpose of information arbitrage and scientific discovery. With a
          focus on Natural Language Processing/ Understanding for hidden
          relationship detection in data
        </p>
        <h4>Request Early Access to get started</h4>
      </div>
    </div>
  );
};

export default Possibility;
