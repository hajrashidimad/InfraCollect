import React from 'react';
import './Header.css';


const Header = () => (
  <body>
      <div class="Container-1">
        <div className="NavBar">
          <div class="Logo" target="_blank" href="https://">
            <h3>
              <span class="I">i</span>nfra<span class="C">C</span>ollect
            </h3>
          </div>
          <div class="Pages">
            <a href="/">HOME</a>
            <a href="Live">LIVE <i class="fa-solid fa-satellite-dish"></i></a>
            <a href="MyAcount">Login <i class="fa-solid fa-right-to-bracket"></i></a>
          </div>
        </div>
      </div>
  </body>
)
export default Header;







