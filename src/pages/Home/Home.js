import React from 'react';
import Header from '../../modules/Header';
import Promotion from '../../modules/Promotion';
import Footer from '../../containers/Footer';
import Feature from '../../modules/Feature';
import Feedback from '../../modules/Feedback/Feedback';

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
        <Footer />
      </>
    );
  }
}

Home.propTypes = {
};
export default Home;
