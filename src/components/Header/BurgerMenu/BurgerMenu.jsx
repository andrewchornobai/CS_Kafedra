import React from 'react';
import './BurgerMenu.scss';

function addClass() {
  let menu = document.querySelector('.menu');
  menu.classList.toggle('showmenu');
}

const handleClickScroll = () => {
  window.scrollTo({ top: 1000, behavior: 'smooth' });
};

export const BurgerMenuP1 = () => (
  <div className="container" onClick={addClass}>
    <div className="menuLogo"></div>
    <div className="menuLogo"></div>
    <div className="menuLogo"></div>
  </div>
);

export const BurgerMenuP2 = () => (
  <>
    <ul className="menu">
      <li>
        <a href="/">Головна</a>
      </li>
      <li>
        <a href="news">Новини</a>
      </li>
      <li>
        <a onClick={handleClickScroll}>Загальна інформація</a>
      </li>
      <li>
        <a href="https://www.instagram.com/official_page_ldubgd/" target='_blank'>instagram <img src="../images/icons-instagram.png" alt="" /></a> 
      </li>
      <li>
        <a href="https://www.facebook.com/ldubgd/?locale=uk_UA" target='_blank'>facebook <img src="../images/icons-facebook.png" alt="" /></a>
      </li>
      <li>
      <a href="https://www.youtube.com/@Harciy1993" target='_blank'>YouTube <img src="../images/icons-youtube.png" alt="" /></a>
      </li>
    </ul>
  </>
);
