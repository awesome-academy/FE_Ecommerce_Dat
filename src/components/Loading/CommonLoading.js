import React from 'react';
import GridLoader from 'react-spinners/GridLoader';
import './CommonLoading.scss';

export default ({ style, unit, size, color }) => {
  return (
    <div className="common-loading">
      <GridLoader
        css={style}
        sizeUnit={unit}
        size={size}
        color={color}
      />
    </div>
  )
}
