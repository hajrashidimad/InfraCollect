import React from 'react';
import {GiDeliveryDrone} from 'react-icons/gi'
import {AiOutlineLogout} from 'react-icons/ai'
import './Header.css';

// here we changed class to className
const Header = () => (
      <div className="Container-1">
        <div className="NavBar">
          <div className="Logo" target="_blank" href="https://">
            <h3>
              <span className="I">i</span>nfra<span className="C">C</span>ollect
            </h3>
          </div>
          <div className="Pages">
            <a href="/">HOME</a>
            <a href="Live">LIVE<GiDeliveryDrone style={{fontSize: '25px',position : 'absolute', marginLeft : '10px'}}/></a>
            <a href="MyAcount">Login<AiOutlineLogout style={{fontSize: '25px',position : 'absolute', marginLeft : '10px'}}/></a>
          </div>
        </div>
      </div>

)
export default Header;







