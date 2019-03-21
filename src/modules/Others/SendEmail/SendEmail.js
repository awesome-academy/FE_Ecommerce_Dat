import React from 'react';
import cn from 'classnames';
import './SendEmail.scss';

class SendEmail extends React.Component {
  render() {
    return (
      <div className={cn("col-sm-12 col-md-4 send-email")}>
        <div className={cn("row")}>
          <div className={cn("col-sm-6 col-md-12 email")}>
            <h4 className={cn("title-g")}>Gửi email cho chúng tôi</h4>
            <div className={cn("title-line")}>
              <hr />
              <div className={cn("more-slash")}></div>
              <hr />
            </div>
            <div className={cn("content-container")}>
              <input type="text" placeholder="Email của bạn" />
              <p>Gửi email để nhận những ưu đãi mới nhất</p>
              <a className={cn("btn btn-send")}> Gửi </a>
            </div>
          </div>
          <div className={cn("col-sm-6 col-md-12 tag")}>
            <h4 className={cn("title-g")}>Tag sản phẩm</h4>
            <div className={cn("title-line")}>
              <hr />
              <div className={cn("more-slash")}></div>
              <hr />
            </div>
            <div className={cn("content-container")}>
              {/* Render category with data then */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SendEmail;
