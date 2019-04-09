import React from 'react';
import cn from 'classnames';
import './CartItem.scss';

const CartItem = ({product, removeProduct}) => {
  return (
    <li>
      <img className={cn("product-image")} src={product.image} alt={product.name} />
      <div className={cn("name-price")}>
        <h6 className={cn("product-name")}>{product.name.substring(0, 18)}...</h6>
        <p className={cn("product-price")}><span className={cn("product-quantity")}>{product.quantity}</span> x {product.price_n}đ</p>
      </div><div onClick={() => removeProduct(product.id)}><i className={cn("icon-remove")}></i></div>
    </li>
  )
}

export default CartItem;
