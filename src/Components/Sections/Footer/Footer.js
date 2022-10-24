// import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AiFillGithub } from "react-icons/ai";
import { GrLinkedin } from "react-icons/gr";
import { IoLogoYoutube } from "react-icons/io";
import "./Footer.css";

const Footer = () => (
  <div className="footer">
    <div className="container">
      <div className="row">
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#about us">about us</a>
            </li>
            <li>
              <a href="#about us">our services</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Follow Me :</h4>
          <div className="social-links">
            <a href="https://github.com/hajrashidimad" target={[ '_blank', 'noopener,noreferrer']}>
            <AiFillGithub/>
              {/* <i className="fa-brands fa-github"></i> */}
              {/* <FontAwesomeIcon icon="fa-brands fa-github"  fixedWidth/> */}
              {/* <FontAwesomeIcon icon={solid('user-secret')} /> */}
            </a>
            <a href="https://www.linkedin.com/in/imad-haj-rashid-ba4a5a178/" target={[ '_blank', 'noopener,noreferrer']}>
              <GrLinkedin/>
              {/* <i className="fab fa-linkedin-in"></i> */}
            </a>
            <a href="https://www.youtube.com/channel/UCs7aN11L-9ukcy8YkAB7UEA" target={[ '_blank', 'noopener,noreferrer']}>
              <IoLogoYoutube/>
              {/* <i className="fa-brands fa-youtube"></i> */}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Footer;
