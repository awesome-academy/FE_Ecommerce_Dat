import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import './ProductItem.scss';

const ProductItem = ({product, id}) => {
  return (
    <div className={cn("product-item")}>
      <div className={cn("product-item-img")}><img src={product.images[0]} /></div>
      <div className={cn("product-item__branch")}>{product.branch}</div>
      <Link className={cn("product-item__name")} to={`/detail/${id}`}>{product.name.substring(0, 20)}...</Link>
      <hr className={cn("hr-name")} />
      <div className={cn("product-item__price")}>
        <span className={cn("product-item__price--new")} data-end="đ">{product.price_n}</span>
        <span className={cn("product-item__price--old")} data-end="đ">{product.price_o}</span></div>
      <div className={cn("product-item__action")}>
        <Link className={cn("product-item__action--buy")} to={`detail/${product.id}`}>Mua hàng</Link>
        <div className={cn("product-item__action--heart")}>
          <i className={cn("heart-icon")}></i>
        </div>
        <div className={cn("product-item__action--reload")}>
          <i className={cn("reload-icon")}></i>
        </div>
      </div>
    </div>
  )
}

export default ProductItem;
