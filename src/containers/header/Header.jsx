import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import vs from "../../assets/vs.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1>On-Demand Correlation Matrix Datasets</h1>
        <h3>
          for Hidden Relationship Detection in Data & Training in Artificial
          Intelligence (AI) Systems
        </h3>
        <p>
          "The Next Big Breakthrough in AI Will Be Around Language" - Harvard
          Business Review{" "}
        </p>

        <p>
          While data might be the new oil, the dataset is the refined gasoline
          that powers every Machine Learning (ML) and AI operation. We focus on
          context-controlled NLP/NLU (Natural Language Processing/Understanding)
          and feature engineering for hidden relationship detection in data
          related to space biosciences.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your E-Mail Address" id="email" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p> - 1600 people requested access in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={vs} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
