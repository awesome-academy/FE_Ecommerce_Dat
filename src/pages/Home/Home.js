import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Home.scss';
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
