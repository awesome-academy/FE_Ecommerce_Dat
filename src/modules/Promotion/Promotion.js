import React from 'react';
import cn from 'classnames';
import './Promotion.scss';

const Promotion = () => {
    return (
        <div className={cn("container")}>
            <ul className={cn("promotion")}>
                <li><i className={cn("icon icon-flight")}></i>Miễn phí vận chuyển</li>
                <li><i className={cn("icon icon-gift")}></i>Nhận ngay quà tặng trị giá 350.000đ</li>
                <li><i className={cn("icon icon-star")}></i>Giảm 30% cho đơn hàng trên 5.000.000đ</li>
            </ul>
        </div>
    )
}

export default Promotion;