import React from 'react';
import {GiDeliveryDrone} from 'react-icons/gi'


import './Header.css';

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
            <a  className="dropdown-toggle" href="MyAcount" role="button" data-bs-toggle="dropdown" aria-expanded="false">MyAcount</a>
            <ul className="dropdown-menu bg-warning">
              <li><a className="dropdown-item" href="Sign-up" >Sign up</a></li>
              <li><a className="dropdown-item" href="Log-in" >Log in</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="Logout" >Logout</a></li>
            </ul>
          </div>
          </div>
        </div>



)
export default Header;







