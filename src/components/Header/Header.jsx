import React from 'react';
import { BurgerMenuP1, BurgerMenuP2 } from './BurgerMenu/BurgerMenu';
import './Header.scss';

export const Header = () => (
  <>
    <div className="header">
      <a href="/">
        <img
          src="../images/kafedra_logo.png"
          alt="logo"
          className="header__logo"
        />
      </a>
      <BurgerMenuP1 />
      <BurgerMenuP2 />
    </div>
  </>
);


