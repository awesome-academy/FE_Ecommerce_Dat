import React from 'react';
import cn from 'classnames';

export default ({ }) => {
  return (
    <div className="sidebar col-md-3">
      <div className="widget best-seller">
        <h4 className="name">Sản phẩm bán chạy</h4>
        <div className="widget-content">
          <div className="item">
            <img className="image" src={require("../../../assets/images/t-co9.jpg")} />
            <div className="name-price-more">
              <div className="name">Mỹ phẩm châu âu</div>
              <div className="more">
                <span className="heart">
                  <i className="icon heart-icon-bl"></i>
                  <i className="icon heart-icon-bl"></i>
                  <i className="icon heart-icon-bl"></i>
                  <i className="icon heart-icon-bl"></i>
                  <i className="icon heart-icon-bl"></i>
                </span>
                <span>(4 Lượt mua)</span></div>
              <div className="price">355.000đ</div>
            </div>
          </div>
        </div>
      </div>
      <div className="widget popular-buying">
        <h4 className="name">Sản phẩm mua nhiều</h4>
        <div className="widget-content">
          <div className="item">
            <img className="image" src={require("../../../assets/images/t-co9.jpg")} />
            <div className="name-price-more">
              <div className="name">Mỹ phẩm châu âu</div>
              <div className="more"><span className="heart"><i className="icon heart-icon-bl"></i><i className="icon heart-icon-bl"></i><i className="icon heart-icon-bl"></i><i className="icon heart-icon-bl"></i><i className="icon heart-icon-bl"></i></span><span>(4 Lượt mua)</span></div>
              <div className="price">355.000đ</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
