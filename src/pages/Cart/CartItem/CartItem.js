import React from 'react';

export default ({ id, product, removeProduct, handleKeyDown }) => {
  return (
    <tr>
      <td><img className="product-image" src={product.image} /></td>
      <td>{product.name}</td>
      <td data-end="đ">{product.price_n}</td>
      <td>
        <input
          type="text"
          name="quantity"
          defaultValue={product.quantity}
          onKeyDown={(e) => handleKeyDown(id, e)}
        />
      </td>
      <td data-end="đ">{product.price_n * product.quantity}</td>
      <td><img onClick={removeProduct} src={require('../../../assets/images/remove-icon.png')} /></td>
    </tr>
  )
}
