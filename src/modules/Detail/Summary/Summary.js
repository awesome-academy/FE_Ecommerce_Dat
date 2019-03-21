import _ from 'lodash';
import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../../constants/routes';
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share';
import {
  FacebookIcon,
  TwitterIcon,
  GooglePlusIcon,
  LinkedinIcon,
} from 'react-share';

export default ({
  id,
  name,
  branch,
  price_o,
  price_n,
  description,
  onAddToCart,
  size,
  color,
  quantity,
  onChange,
  fetchDetail
}) => {
  var colors = color ? color.split(',') : null;
  const url = 'http://localhost:9000/detail';
  return (
    <div className={cn("product-summary col-md-5 col-md-push-1")}>
      <h2 className={cn("name")}>{name}</h2>
      <div className={cn("type")}>{branch}1</div>
      <div className={cn("price")}> <span className={cn("new")}>{price_n}đ</span><span className={cn("old")}>{price_o}đ</span></div>
      <p className={cn("description")}>
        {description}
      </p>
      <div className={cn("optional")}>
        {colors && <div className={cn("color")}><label>Màu sắc</label>
          <div className={cn("select-wrapper")}>
            <select>
              {
                _.map(colors, (clr, index) => {
                  return <option key={index} value="clr">{clr}</option>
                })
              }
            </select>
          </div>
        </div>}
        {size && <div className={cn("size")}><label>Size</label>
          <div className={cn("select-wrapper")}>
            <select>
            </select>
          </div>
        </div>}
        <div className={cn("quality")}>
          <label>Số lượng</label>
          <input type="number"
            name="quantity"
            value={quantity}
            placeholder="Nhập số lượng"
            onChange={onChange}
          />
        </div>
      </div>
      <div className={cn("product-action")}>
        <div className={cn("product-item__action")}>
          <a className={cn("product-item__action--buy")} onClick={() => onAddToCart({ id, quantity })}>Mua hàng</a>
          <div className={cn("product-item__action--heart")}><i className={cn("heart-icon")}></i></div>
          <div className={cn("product-item__action--reload")} onClick={fetchDetail}><i className={cn("reload-icon")}></i></div>
        </div>
      </div>
      <div className={cn("note")}><span>Shipping & </span>
        <Link to={ROUTES.RETURNS} className={cn("return")}>Returns</Link>
      </div>
      <div className={cn("social-plugin")}>
        <FacebookShareButton url={`${url}/${id}`}>
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        <TwitterShareButton url={`${url}/${id}`}>
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
        <GooglePlusShareButton url={`${url}/${id}`}>
          <GooglePlusIcon size={32} round={true} />
        </GooglePlusShareButton>
        <LinkedinShareButton url={`${url}/${id}`}>
          <LinkedinIcon size={32} round={true} />
        </LinkedinShareButton>
      </div>
    </div>
  )
}
