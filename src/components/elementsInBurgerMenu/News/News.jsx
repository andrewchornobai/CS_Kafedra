import React, { useEffect, useState } from 'react';
import './News.scss';

export const News = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8081/news')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="news__wrapper">
      <p className='news_main_title'> Новини </p>
      {data.map((d, i) => (
        <div className="item" key={i}>
          <img className="item__img" src={d.imgHref} alt="" />
          <div className='item__text-block'>
            <p className='item__text-block__title'>{d.title}</p>
            <p className='item__text-block__info'>{d.info}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
