import React from 'react';
import Header from '../../modules/Header';
import Promotion from '../../modules/Promotion';
import Footer from '../../containers/Footer';
import Feature from '../../modules/Feature';
import Feedback from '../../modules/Feedback/Feedback';
import Social from '../../modules/Social';
import Products from '../../modules/Products';
import Others from '../../modules/Others';

class Home extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <Promotion />
        <Feature />
        <Feedback />
        <Products />
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
