import React from "react";
import logo from "../images/header_logo.svg";
import { Route, Link } from "react-router-dom";

const Header = ({ email, onSignOut }) => {

  
  function handleSignOut() {
    onSignOut();
  }

  return (
    <header className="header">
      <img src={logo} alt="Логотип" className="header__logo" />
      <div className="header__info">
        <Route exact path="/sign-in">
          <Link to="sign-up" className="header__title">
            Регистрация
          </Link>
        </Route>
        <Route exact path="/sign-up">
          <Link to="sign-in" className="header__title">
            Войти
          </Link>
        </Route>
        <Route exact path="/">
          <p className="header__email">{email}</p>
          <button onClick={handleSignOut} className="header__signout">
            Выйти
          </button>
        </Route>
      </div>
    </header>
  );
};

export default Header;
