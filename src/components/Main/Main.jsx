import React from 'react';
import { BoxItem } from './BoxItem/BoxItem';
import { NumberBox } from './NumberBox/NumberBox';
import './Main.scss';

export const Main = () => {
  const handleClickScroll = () => {
    window.scrollTo({ top: 1000, behavior: 'smooth' });
  };

  return (
    <>
      <div class="mainImage">
        <p>Кафедра інформаційних технологій та телекомунікаційних систем</p>
        <button onClick={handleClickScroll} className="mainImage__btn">
          Розпочати
        </button>
      </div>

      <div className="mainBox" id="mainBox">
        <BoxItem title="0" />
        <BoxItem title="1" />
        <BoxItem title="2" />
        <BoxItem title="3" />
      </div>
      <NumberBox />
    </>
  );
};
