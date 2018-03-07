import React from 'react';
import classnames from 'classnames';
import { LIGHT, COLOR } from './props';
import './style.less';

const Bulb = (props) => {
  const { [LIGHT]: light, [COLOR]: color } = props;
  const lightClass = !light ? 'no-light' : undefined;
  return (
    <div className={classnames('bulb-style', color, lightClass)} />
  );
};

export default Bulb;
