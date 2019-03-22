import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <div className={cn("footer")}>
        <div className={cn("footer-nav")}>
          <div className={cn("container")}>
            <div className={cn("row clearfix")}>
              <div className={cn("col-md-4 about")}>
                <h4 className={cn("title-f")}>Liên hệ với chúng tôi</h4>
                <div className={cn("content-container")}>
                  <div className={cn("maker")}><i className={cn("icon maker-icon")}></i><span>Tầng 4, Tòa nhà Hanoi Group Số 442 Đội Cấn,
                                        P. Cống Vị, Q. Ba Đình, Hà Nội</span></div>
                  <div className={cn("phone-fax")}>
                    <div className={cn("phone")}><i className={cn("icon phone-icon")}></i><span>(04) 6674 2332</span></div>
                    <div className={cn("fax")}><i className={cn("icon fax-icon")}> </i><span>(04) 3786 8904</span></div>
                  </div>
                  <div className={cn("phone-mail")}>
                    <div className={cn("phone")}><i className={cn("icon phone-icon")}></i><span>(08) 6680 9686</span></div>
                    <div className={cn("mail")}><i className={cn("icon mail-icon")}></i><span>Support@bizweb.vn </span></div>
                  </div>
                </div>
              </div>
              <div className={cn("col-md-2 delivery")}>
                <h4 className={cn("title-f")}>Chuyển hàng</h4>
                <div className={cn("content-container")}>
                  <ul>
                    <li><Link to="/">Mua sắm trực tuyến</Link></li>
                    <li><Link to="/">Đến từ chúng tôi gửi đến</Link></li>
                    <li><Link to="/">Chính sách vận chuyển</Link></li>
                    <li><Link to="/">Vận chuyển thông tin</Link></li>
                  </ul>
                </div>
              </div>
              <div className={cn("col-md-2 support")}>
                <h4 className={cn("title-f")}>Hỗ trợ</h4>
                <div className={cn("content-container")}>
                  <ul>
                    <li><Link to="/">Câu chuyện của chúng ta</Link></li>
                    <li><Link to="/">Thanh toán an toàn</Link></li>
                    <li><Link to="/">Chính sách vận chuyển</Link></li>
                    <li><Link to="/">Vận chuyển thông tin</Link></li>
                  </ul>
                </div>
              </div>
              <div className={cn("col-md-2 information")}>
                <h4 className={cn("title-f")}>Thông tin</h4>
                <div className={cn("content-container")}>
                  <ul>
                    <li><Link to="/">Về chúng tôi</Link></li>
                    <li><Link to="/">Điều khoản &amp; điều kiện</Link></li>
                    <li><Link to="/">Chính sách riêng tư</Link></li>
                    <li><Link to="/">Đơn đặt hàng</Link></li>
                  </ul>
                </div>
              </div>
              <div className={cn("col-md-2 myaccount")}>
                <h4 className={cn("title-f")}>My account</h4>
                <div className={cn("content-container")}>
                  <ul>
                    <li><Link to="/">Xem giỏ hàng</Link></li>
                    <li><Link to="/">Sản phẩm yêu thích</Link></li>
                    <li><Link to="/">Kiểm tra</Link></li>
                    <li><Link to="/">Theo dõi đơn hàng</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cn("copyright")}>
          <div className={cn("container")}>
            <div className={cn("row")}>
              <p>&copy; Copyright 2008-{new Date().getFullYear()} DKT Technology JSC</p>
              <img src={require('../../assets/images/purchase_branch.png')} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;
