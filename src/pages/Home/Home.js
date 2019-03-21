import React from 'react';
import Header from '../../modules/Header';
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
        <Footer />
      </>
    );
  }
}

Home.propTypes = {
};
export default Home;
