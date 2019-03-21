import React from 'react';
import Header from '../../modules/Header';
import Promotion from '../../modules/Promotion';
import Footer from '../../containers/Footer';

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
        <Footer />
      </>
    );
  }
}

Home.propTypes = {
};
export default Home;
