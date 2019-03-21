import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../../constants/routes';

export default ({
  id,
  name,
  branch,
  price_o,
  price_n,
  description,
  colors,
  sizes,
  onAddToCart,
  size,
  color
}) => {
  return (
    <div className={cn("product-summary col-md-5 col-md-push-1")}>
      <h2 className={cn("name")}>{name}</h2>
      <div className={cn("type")}>{branch}1</div>
      <div className={cn("price")}> <span className={cn("new")}>{price_n}đ</span><span className={cn("old")}>{price_o}đ</span></div>
      <p className={cn("description")}>
        Không thể phủ nhận, thời trang và phong cách chính là “tuyên ngôn”
        không lời mạnh mẽ nhất của mỗi người phụ nữ. Do đó, việc mua sắm thời
        trang trở thành niềm vui, và có khi là nguồn cảm hứng vô tận để phái đẹp
        sống vui, sống đẹp hơn trong mắt nửa còn lại của thế giới. Để F5 tủ đồ
        của mình trước những xu hướng ngày một đa dạng hơn trong thế giới thời
        trang, nhiều chị em không ngần ngại chi tiêu “mạnh tay” để sở hữu
        những món đồ yêu thích.
      </p>
      <div className={cn("optional")}>
        {color && <div className={cn("color")}><label>Màu sắc</label>
          <div className={cn("select-wrapper")}>
            <select>
              <option value="Màu bạc">Màu bạc</option>
              <option value="Màu vàng">Màu vàng</option>
              <option value="Màu đồng">Màu đồng</option>
            </select>
          </div>
        </div>}
        {size && <div className={cn("size")}><label>Size</label>
          <div className={cn("select-wrapper")}>
            <select>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
            </select>
          </div>
        </div>}
        <div className={cn("quality")}>
          <label>Số lượng</label>
          <input type="number" min="1" placeholder="Nhập số lượng" />
        </div>
      </div>
      <div className={cn("product-action")}>
        <div className={cn("product-item__action")}>
          <a className={cn("product-item__action--buy")} onClick={() => onAddToCart(id)}>Mua hàng</a>
          <div className={cn("product-item__action--heart")}><i className={cn("heart-icon")}></i></div>
          <div className={cn("product-item__action--reload")}><i className={cn("reload-icon")}></i></div>
        </div>
      </div>
      <div className={cn("note")}><span>Shipping & </span><Link to={ROUTES.RETURNS} className={cn("return")}>Returns</Link></div>
      <div className={cn("social-plugin")}><img src={require('../../../assets/images/social-plugin.jpg')} /></div>
    </div>
  )
}
