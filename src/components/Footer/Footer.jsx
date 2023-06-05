import React from 'react';

import './Footer.scss';

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__items">
          <img className="items__img" src="../images/kafedra_logo.png" alt="" />
          <p className="items__p1">Why join the navy if you can be a pirate?</p>
          <p className="items__p1-1">Steve Jobs</p>
        </div>

        <div className="footer__items">
          <p className="items__title">Contact</p>
          <div className="items_block">
            <img src="../images/icons1-point-1.png" alt="" />
            <p>
              Україна, 79007 Львів
              <br />
              вул. Клепарівська 35
            </p>
          </div>

          <div className="items_block">
            <img src="../images/icons-phone-1.png" alt="" />
            <p>
              {' '}
              Тел: (032) 233-32-40
              <br />
              черговий по університету
            </p>
          </div>

          <div className="items_block">
            <img src="../images/icons-mail-1.png" alt="" />
            <p> ldubgd@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="copyright">
        <img src="../images/icons-copyright-1.png" alt="" />
        <p> 2023 Lviv State University of Life Safety</p>
      </div>
    </>
  );
};
