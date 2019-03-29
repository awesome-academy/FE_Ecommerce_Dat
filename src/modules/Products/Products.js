import React from 'react';
import cn from 'classnames';
import './Products.scss';

class Products extends React.Component {
  render() {
    return (
      <div className={cn("products")}>
        <div className={cn("container products-container")}>
          <ul className={cn("product-tabs")}>
            <li><a href="#new">Sản phẩm mới</a></li>
            <li><a className={cn("active")} href = "#hot">Sản phẩm bán chạy</a></li>
            <li><a href="#special">Sản phẩm đặc biệt</a></li>
          </ul>
          <div className={cn("title-line")}>
            <hr />
            <div className={cn("more-slash")}></div>
            <hr />
          </div>
          <div className={cn("product-menu")}>
            <ul>
              {/* Data from json then */}
            </ul>
          </div>
          <div className={cn("product-list")}>
            <a className={cn("icon previous-icon")} href="#"></a>
            {/* Render products with data then */}
            <a className={cn("icon next-icon")} href="#"></a>
          </div>
        </div>
      </div>
    )
  }
}

export default Products;
