import React from 'react';
import { Link } from 'react-router-dom';
import './ProgressNav.scss';
import cn from 'classnames';

export default ({step}) => {
  return (
    <div className={cn("navbar-checkout")}>
      <div className={cn("navbar-checkout-container container")}>
        <div className={cn("row")}>
          <div className={cn("logo col-lg-2")}>
            <Link to="/"><img src={require("../../../assets/images/logo.png")} /></Link>
          </div>
          <div className={cn("wizard col-lg-10")}>
            <div className={cn("row")}>
              <div className={cn("col-md-4 wizard-step", {'active': step < 1, 'complete': step >= 1})} id="login-step">
                <div className={cn("text-center wizard-stepnum")}><span>Đăng nhập</span></div>
                <div className={cn("progress")}>
                  <div className={cn("progress-bar")}></div>
                </div>
                <span className={cn("wizard-dot")}>1</span>
              </div>
              <div className={cn("col-md-4 wizard-step", {'disabled': step === 0, 'active': step === 1, 'complete': step === 2})} id="delivery-step">
                <div className={cn("text-center wizard-stepnum")}><span>Thông tin giao hàng</span></div>
                <div className={cn("progress")}>
                  <div className={cn("progress-bar")}></div>
                </div><span className={cn("wizard-dot")}>2</span>
              </div>
              <div className={cn("col-md-4 wizard-step", {'disabled': step < 2, 'active': step === 2})} id="pay-step">
                <div className={cn("text-center wizard-stepnum")}><span>Thanh toán & Đặt mua</span></div>
                <div className={cn("progress")}>
                  <div className={cn("progress-bar")}></div>
                </div><span className={cn("wizard-dot")}>3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
