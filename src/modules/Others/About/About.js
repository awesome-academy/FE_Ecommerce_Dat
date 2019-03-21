import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import './About.scss';

class About extends React.Component {
  render() {
    return (
      <div className={cn("col-sm-6 col-md-4 about")}>
        <h4 className={cn("title-g")}>Về chúng tôi</h4>
        <div className={cn("title-line")}>
          <hr />
          <div className={cn("more-slash")}></div>
          <hr />
        </div>
        <div className={cn("content-container")}><img src={require("../../../assets/images/logo.png")} />
          <div className={cn("title")}>Giới thiệu chung về mỹ phẩm handmade Mandala </div>
          <p className={cn("description")}>
            Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay
            tớ quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi bức,
            khi mà dân tình xô nhau đi tắm Free để giải nhiệt. Hi, chào các nàng ...
            sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog này vào
            một ngày đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.
            sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi bức,
            khi mà dân tình xô nhau đi tắm Free để giải nhiệt.
          </p>
          <Link className={cn("readmore")} to="/about">Xem thêm</Link>
        </div>
      </div>
    )
  }
}

export default About;
