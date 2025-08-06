import React from 'react';
import { NavLink } from 'react-router-dom';
import MainLogo from '../assets/hypepad-logo.png';  // updated to match your build asset

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        {/* Main logo */}
        <NavLink to="/" className="logo">
          <img src={MainLogo} alt="HYPEPAD" className="header-logo" />
        </NavLink>

        {/* Navigation links */}
        <nav className="main-nav">
          <ul className="nav-list">
            <li><NavLink to="/launchpad">Launchpad</NavLink></li>
            <li><NavLink to="/token-creator">Token Creator</NavLink></li>
            <li><NavLink to="/meme-creator">Meme Creator</NavLink></li>
            <li><NavLink to="/staking">Staking</NavLink></li>
            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
          </ul>
        </nav>

        {/* Connect Wallet button */}
        <button className="btn-connect-wallet">
          Connect Wallet
        </button>
      </div>
    </header>
  );
};

export default Header;
