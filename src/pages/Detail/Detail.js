import React from 'react';
import Header from '../../modules/Header/Navbar';
import Footer from '../../modules/Footer';
import DetailModule from '../../modules/Detail';
import isEmpty from '../../validation/is-empty';
import { css } from '@emotion/core';
import { CommonLoading } from '../../components/Loading';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class Detail extends React.Component {
  componentDidMount() {
    this.fetchDetail()
  }

  fetchDetail = () => {
    if (isEmpty(this.props.products)) {
      this.props.productActions.fetchAllProducts();
    }
  }

  render() {
    const { products, loading, match, cartActions } = this.props;
    if (isEmpty(products)) return <CommonLoading
      style={override}
      unit="px"
      size={30}
      color="#789629"
    />;
    return (
      <>
        <Header />
        <div className="container">
          <DetailModule
            product={products[match.params.id]}
            id={match.params.id}
            addToCart={cartActions.addToCart}
            fetchDetail={this.fetchDetail}
          />
        </div>
        <Footer />
      </>
    )
  }
}

export default Detail;
