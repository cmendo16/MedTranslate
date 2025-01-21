import { NavLink } from 'react-router-dom';
import React from 'react';

function TopBar() {
  return (
    <div className="bg-green-50 text-sky-950 flex flex-row items-center p-4">
      <NavLink to='/' className="text-sky-950 font-bold mr-11 text-lg">MedTranslate</NavLink>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <NavLink 
              to="/" 
              className="text-sky-950 hover:underline">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className="text-sky-950 hover:underline">
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/mission" 
              className="text-sky-950 hover:underline">
              Mission
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className="text-sky-950 hover:underline">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/login" 
              className="text-sky-950 hover:underline">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/registration" 
              className="text-sky-950 hover:underline">
              Registration
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default TopBar;
