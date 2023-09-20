import { useState } from 'react';
import React from 'react';
import './navbar.css';
import menuss from '../../assets/menuss.svg';
import closes from '../../assets/closes.svg';

import logo from '../../assets/logo.svg';

const Menu = () => (
  <>
    <p>
      <a href='#home'>Home</a>
    </p>
    <p>
      <a href='#whatgpt3'>What is GPT3?</a>
    </p>
    <p>
      <a href='#possibility'>Open AI</a>
    </p>
    <p>
      <a href='#features'>Case Studies</a>
    </p>
    <p>
      <a href='#blog'>Library</a>
    </p>
  </>
);

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign Up</button>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggle ? (
          <img
            src={closes}
            alt='close'
            className='nav-img'
            onClick={() => setToggle(false)}
          />
        ) : (
          // <Icon
          //   icon='material-symbols:menu'
          //   color='#fff'
          //   size={27}
          //   onClick={() => setToggle(false)}
          // />

          // <Icon
          //   icon='fa-solid:times'
          //   color='#fff'
          //   size={27}
          //   onClick={() => setToggle(true)}
          // />

          <img
            src={menuss}
            alt='open'
            color='#fff'
            className='nav-img'
            onClick={() => setToggle(true)}
          />
        )}
        {toggle && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container_links'>
              <Menu />
              <div className='gpt3__navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type='button'>Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
