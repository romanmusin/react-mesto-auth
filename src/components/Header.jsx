import React from "react";
import logo from "../images/header_logo.svg";
import {Link} from 'react-router-dom';

const Header = ({userEmail, headerLink, addressBar, setLoggedIn}) => {

  function exitProfile (evt) {
    if (headerLink === 'Выйти') {
      evt.preventDefault()
      localStorage.removeItem('jwt')
      setLoggedIn(false)
    }
  }

  return (
    <header className="header">
      <img src={logo} alt="Логотип" className="header__logo" />
      <div className="header__info">
        <p className="header__email">{userEmail}</p>
        <Link to={addressBar} className="header__link" onClick={exitProfile}>{headerLink}</Link>
      </div>
    </header>
  );
};

export default Header;