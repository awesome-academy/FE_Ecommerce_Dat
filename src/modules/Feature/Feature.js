import React from 'react';
import cn from 'classnames';
import FeatureItem from '../../components/FeatureItem';
import './Feature.scss';
import FeatureItemSmall from '../../components/FeatureItem/FeatureItemSmall';

class Feature extends React.Component {
  render() {
    return (
      <div className={cn('feature container')}>
        <FeatureItem>
          <FeatureItemSmall>
            <img src={require("../../assets/images/feature_1.jpg")} />
          </FeatureItemSmall>
          <FeatureItemSmall className="bg-yellow">
            <div className="box-gel">
              <h3 className="name">Sữa tắm</h3>
              <div className="title-line-w">
                <hr />
                <div className="more-slash-w"></div>
                <hr />
              </div>
            </div>
          </FeatureItemSmall>
          <FeatureItemSmall className="bg-grey">
            <div className="box-perfume">
              <h3 className="name">Nước hoa</h3>
              <div className="title-line-bl">
                <hr />
                <div className="more-slash-bl"></div>
                <hr />
              </div>
            </div>
          </FeatureItemSmall>
          <FeatureItemSmall>
            <img src={require("../../assets/images/feature_3.jpg")} />
          </FeatureItemSmall>
        </FeatureItem>
        <FeatureItem>
          <div className="player--round">
            <i className="player-icon"></i>
          </div>
          <img src={require("../../assets/images/feature_2.jpg")} />
        </FeatureItem>
        <FeatureItem>
          <img src={require("../../assets/images/feature_4.jpg")} />
        </FeatureItem>
        <FeatureItem>
          <FeatureItemSmall className="bg-ligt-blue">
            <div className="box-jewelry">
              <h3 className="name">Trang sức</h3>
              <div className="title-line-bl">
                <hr />
                <div className="more-slash-bl"></div>
                <hr />
              </div>
            </div>
          </FeatureItemSmall>
          <FeatureItemSmall>
            <img src={require("../../assets/images/feature_5.jpg")} />
          </FeatureItemSmall>
          <FeatureItemSmall>
            <img src={require("../../assets/images/feature_6.jpg")} />
          </FeatureItemSmall>
          <FeatureItemSmall>
            <img src={require("../../assets/images/daisy.jpg")} />
          </FeatureItemSmall>
        </FeatureItem>
      </div>
    )
  }
}

export default Feature;
