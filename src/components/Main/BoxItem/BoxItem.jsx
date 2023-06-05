import React from 'react';
import './BoxItemInfo.json';
import './BoxItem.scss';

let admin = require('./BoxItemInfo.json');

export const BoxItem = (props) => (
  <div className="boxItems">
    <img className="boxItems__photo" src="../images/photo_2.png" alt="" />
    <div className="boxItems__wrapper">
      <p className="title">{admin.box.title[props.title]}</p>
      <ul className="title__items">{addTitleItems(props.title)}</ul>
    </div>
  </div>
);

function addTitleItems(liInfo) {
  return admin.box.subTitle[liInfo].map((num) => (
    <a className='items__a' href={num.link} target='_blank'><li className='items__li'>{num.title}</li></a>
  ));
}
