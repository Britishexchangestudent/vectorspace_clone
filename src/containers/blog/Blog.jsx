import React from "react";
import "./blog.css";
import { Article } from "../../components";
import {
  blog01,
  blog02,
  blog03,
  blog04,
  blog05,
  blog1,
  blog2,
  blog3,
  blog4,
} from "./import";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="gpt3__blog">
      <div className="gpt3__blog-heading">
        <h1>A lot is happening, We are blogging about it</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl={blog1}
            title="Mina J. Bissell Ph.D. & Vectorspace AI Advance New Space Biosciences Division"
            text="SAN FRANCISCO, June 22, 2021 /PRNewswire/ — As the new space race heats up, more humans will be traveling into space than ever before. Spaceflight causes many changes in human health. Humans cannot be sent into space without understanding how to protect and repair human DNA along with tissue regeneration while in space. To understand stressors and develop countermeasures that can be used to protect and repair human DNA while in space, Vectorspace AI welcomes Mina J. Bissell, Ph.D., distinguished senior scientist (the highest rank bestowed at Lawrence Berkeley National Laboratory (LBNL)/DOE) in the Biological Systems and Engineering Division, to its Scientific Advisory Board (SAB). Dr. Bissell was previously head of the Biosciences division of LNBL for 14 years along with being the chair of the 200+ page report for the NASA Space Radiation Health Program study related to a mission to Mars."
            date="
            Jul 3, 2021"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={blog2}
            title="Vectorspace AI Datasets: ABT Crypto Academy AMA (Ask Me Anything)"
            date="Nov 30, 2020"
          />
          <Article
            imgUrl={blog4}
            title="Vectorspace AI & CERN Create Natural Language Processing (NLP) Datasets in Particle Physics with Applications in Artificial Intelligence (AI) for Every Industry"
            date="Sep 26, 2020"
          />
          <Article
            imgUrl={blog3}
            title="Ernst & Young: A Thematic Short Basket"
            date="Oct 17, 2020"
          />
          <Article
            imgUrl={blog05}
            title="FinTech Innovators Partner to Turn NLP into Dollars"
            date="Dec 21, 2020"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
