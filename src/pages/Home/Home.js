import React from 'react';
import Header from '../../modules/Header';
import Promotion from '../../modules/Promotion';
import Footer from '../../containers/Footer';
import Feature from '../../modules/Feature';
import Feedback from '../../modules/Feedback/Feedback';
import Social from '../../modules/Social';
import Products from '../../modules/Products';
import Others from '../../modules/Others';
import isEmpty from '../../validation/is-empty';
import { toastr } from 'react-redux-toastr';

class Home extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (isEmpty(this.props.products)) {
      this.props.productActions.fetchAllProducts();
    }
  }

  addToCart = (id) => {
    this.props.cartActions.addToCart({id, quantity: 1});
    toastr.success('Thêm giỏ hàng thành công', '');
  }

  render() {
    return (
      <>
        <Header />
        <Promotion />
        <Feature />
        <Feedback />
        <Products
          products={this.props.products}
          fetchingProducts={this.props.loading.fetchingProducts}
          addToCart={this.addToCart}
        />
        <Social />
        <Others />
        <Footer />
      </>
    );
  }
}

Home.propTypes = {
};
export default Home;
