import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "It's Not Magic",
    text: "At our system's core, as you see in near real-time (here), you'll notice we're processing information, such as peer-reviewed scientific literature, as it's published by the minute from the National Library of Medicine along with other news and information sources. ",
  },
  {
    title: "Backed by Patents",
    text: "Our proprietary algorithms are based on variants proven within advanced Natural Language Processing/Understanding (NLP/NLU) and Machine Learning (ML) applications.",
  },
  {
    title: "Data Provenance, Lineage and Governance",
    text: "Data lineage and provenance is important. Our Data Provenance Pipeline (DPP) hash controls data lineage.",
  },
  {
    title: "Empowering Retail Traders & Investors of All Kinds",
    text: "One of our goals is to provide retail traders and investors with advanced tools used to trade the financial and crypto markets in new ways. ",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1>
          the future is now and you just need to realize it. step into the
          future today and make it happen.
        </h1>
        <button>Request early access</button>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((data, index) => (
          <Feature
            title={data.title}
            text={data.text}
            key={data.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
