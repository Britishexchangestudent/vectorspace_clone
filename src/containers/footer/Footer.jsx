import React from "react";
import "./footer.css";
import logo from "../../assets/vectorspace.png";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1>Do you want to step into the future before others</h1>
      </div>

      <div className="gpt3__footer-btn">
        <button>
          <p>Request Early Access</p>
        </button>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={logo} alt="logo" />
          <p>1011 Kearny St, San Francisco, CA 94133</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>News</p>
          <p>Case Study</p>
          <p>Careers</p>
          <p>FAQ</p>
          <p>Learn More</p>
          <p>Privacy</p>
          <p>Terms of Service</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Platform</h4>
          <p>Biosciences</p>
          <p>Examples</p>
          <p>Dataset Services</p>
          <p>On-Demand Dataset Statistics</p>
          <p>On-boarding with VXV credits</p>
          <p>Live Build Log</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>info@vectorspace.ai</p>
          <p>415.961.7193</p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>© 2022 Vectorspace AI</p>
      </div>
    </div>
  );
};

export default Footer;
