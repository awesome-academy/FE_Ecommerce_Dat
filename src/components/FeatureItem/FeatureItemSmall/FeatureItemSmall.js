import React from 'react';
import cn from 'classnames';

const FeatureItemSmall = (props) => {
  return (
    <div className={cn(`feature__item--small ${props.class}`)}>
      {props.children}
    </div>
  )
}

export default FeatureItemSmall;
