import React from 'react';
import './Slide.scss';

class Slide extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="slide">
                <div className="container">
                    <div className="slide-content col-md-12">
                        <div className="info"><img className="image" src={require('../../../assets/images/bottle.png')} />
                            <p className="branch">Green Vera</p>
                            <p className="desc">Sản phẩm tinh dầu dưỡng da mới nhất của Mandala</p>
                            <p className="price">Giá chỉ 750.000đ</p><a href="#newsletter">Mua hàng</a>
                        </div>
                        <div className="bg"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Slide;