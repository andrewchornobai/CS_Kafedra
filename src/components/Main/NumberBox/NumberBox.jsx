import React from 'react';
import { NumberBoxItem } from './NumberBoxItem/NumberBoxItem';

import './NumberBox.scss';

export const NumberBox = () => (
  <div className="numberBox">
    <NumberBoxItem
      title="Випускники"
      link="../images/icons-student-1.png"
      count={60}
    />
    <NumberBoxItem
      title="Рятувальники"
      link="../images/icons-firemen-1.png"
      count={5}
    />
    <NumberBoxItem
      title="Країни"
      link="../images/icons-europe-1.png"
      count={3}
    />
  </div>
);
