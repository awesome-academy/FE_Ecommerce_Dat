import React from 'react';
import Skeleton from 'react-loading-skeleton';
import cn from 'classnames';

export default () => {
  return (
    <div className={cn("product-item")}>
      <div className={cn("product-item-img")}><Skeleton count={1} height={250} /></div>
      <div className={cn("product-item__branch")}><Skeleton count={1} width={80}/></div>
      <div className={cn("product-item__name")}><Skeleton count={1} /></div>
      <div className={cn("product-item__price")}>
        <span className={cn("product-item__price--new")}><Skeleton count={1} width={100}/></span>
      </div>
      <div className={cn("product-item__action")}>
      </div>
    </div>
  )
}
