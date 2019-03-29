import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import './ProductItem.scss';

const ProductItem = ({ id, name, image, price_o, price_n }) => {
  return (
    <div class="product-item">
      <div class="product-item-img"><img src={image} /></div>
      <div class="product-item__branch">{branch}</div>
      <Link class="product-item__name" to={`/detail/${id}`}>{name}</Link>
      <hr class="hr-name" />
      <div class="product-item__price">
        <span class="product-item__price--new" data-end="đ">{price_n}</span>
        <span class="product-item__price--old" data-end="đ">{price_o}</span>
      </div>
      <div class="product-item__action">
        <Link class="product-item__action--buy" to={`/cart/${id}`}>Mua hàng</Link>
        <div class="product-item__action--heart"><i class="heart-icon"></i></div>
        <div class="product-item__action--reload"><i class="reload-icon"></i></div>
      </div>
    </div>
  )
}

export default ProductItem;
