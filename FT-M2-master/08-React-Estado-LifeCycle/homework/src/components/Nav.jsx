import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';


function Nav({onSearch}) {
  return (
    <div >
      <nav className='navbar navbar- dark bg-dark'>
      <a className='navbar-brand' href='dark bg-dark'>
      <img src={Logo} alt="xd" />   
      </a>

      <h3>Henry - Weather App</h3>
      <SearchBar onSearch={onSearch}/>

      </nav>

    </div>
  );
};

export default Nav;
