// import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#about us">about us</a>
            </li>
            <li>
              <a href="#about us">our services</a>
            </li>
            <li>
              <a href="#about us">privacy policy</a>
            </li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Follow Me :</h4>
          <div class="social-links">
            <a href="https://github.com/hajrashidimad" target={[ '_blank', 'noopener,noreferrer']}>
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/imad-haj-rashid-ba4a5a178/" target={[ '_blank', 'noopener,noreferrer']}>
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCs7aN11L-9ukcy8YkAB7UEA" target={[ '_blank', 'noopener,noreferrer']}>
              <i class="fa-brands fa-youtube"></i>
            </a>
            <a href="#social-icon" target={[ '_blank', 'noopener,noreferrer']}>
              <i class="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
