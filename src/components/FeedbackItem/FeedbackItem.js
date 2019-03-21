import React from 'react';
import cn from 'classnames';

const FeedbackItem = ({ speech, img, postion, name }) => {
  return (
    <div className={cn("feedback__item")}>
      <p>“ {speech} ” </p>
      <div className={cn("author")}>
        <img className={cn("photo")} src={require(img)} alt={name} />
        <div className={cn("name-pos")}>
          <span className={cn("name")}>{name}</span>
          <span className={cn("position")}>{postion}</span>
        </div>
      </div>
    </div>
  )
}

export default FeedbackItem;
