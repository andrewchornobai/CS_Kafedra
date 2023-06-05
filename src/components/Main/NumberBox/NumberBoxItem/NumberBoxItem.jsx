import React from 'react';
import { useCountUp } from 'use-count-up';

import './NumberBoxItem.scss';

export const NumberBoxItem = (props) => {
  const { value } = useCountUp({
    isCounting: true,
    start: 0,
    end: props.count,
    duration: 3.2,
  });

  return (
    <div className="numberBoxItems">
      <img src={props.link} alt="" />
      <p className="numberBoxItems__p1">{value}</p>
      <p className="numberBoxItems__p2">{props.title.toLowerCase()}</p>
    </div>
  );
};
