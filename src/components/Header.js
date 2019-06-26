import React, {Component} from 'react';


const Header = (props) => (
  <header className="black mb5 pt5">
    <p className="ttu f3 tracked-mega anton tc mt0 mb3">Marmalade.fm</p>
    <ul className="list flex justify-center pl0">
      <li className="mh2">
         <a href="" className="nav-link link biryani-black f6 ttu gray">
            What's hot
         </a>
      </li>
      <li className="mh2">
        <a href="" className="nav-link link biryani-black f6 ttu gray">
          Archive
        </a>
      </li>
      <li className="mh2">
        <a href="" className="nav-link link biryani-black f6 ttu gray">
          About
        </a>
      </li>
    </ul>
  </header>
);

export default Header;
