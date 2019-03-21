import React from 'react';
import cn from 'classnames';
import './FeatureItem.scss';

const FeatureItem = (props) => {
  return (
    <div className={cn("feature__item")}>
      {props.children}
    </div>
  )
}

export default FeatureItem;
