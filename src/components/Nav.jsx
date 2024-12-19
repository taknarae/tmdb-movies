import React from 'react';

import { Link, NavLink } from "react-router-dom";
import { RiMovie2Fill } from "react-icons/ri";

const Nav = () => {
  const activeStyle = {
    color: '#ff3e3e',
  };
  return (
    <>
      <header>
        <div className="layout-fix">
          <h1><Link to="/"><RiMovie2Fill style={{color:"#222"}}/></Link></h1>
          <ul className="gnb">
              <li><NavLink to="/" style={({isActive})=>(isActive ? activeStyle : null)}>Home</NavLink></li>
              <li><NavLink to="/movies" style={({isActive})=>(isActive ? activeStyle : null)}>Movies</NavLink></li>
              <li><NavLink to="/event" style={({isActive})=>(isActive ? activeStyle : null)}>Event</NavLink></li>
              <li><NavLink to="/users" style={({isActive})=>(isActive ? activeStyle : null)}>Users</NavLink></li>
            </ul>
        </div>
      </header>
    </>
  );
};

export default Nav;