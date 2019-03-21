import React from 'react';
import { Link } from 'react-router-dom';

export default ({ }) => {
  return (
    <div className="container success-page">
      <div className="success-content text-center">
        <img src={require("../../../assets/images/successful.jpg")} />
        <p className="thanksful">Cảm ơn bạn đã mua hàng tại Madala</p>
        <Link className="goback" to="/">Về trang chính</Link>
      </div>
    </div>
  )
}
