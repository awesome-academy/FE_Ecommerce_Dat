import React from 'react';
import { connect } from 'react-redux';
import Home from './../../pages/Home'
import Actions from '../../actions';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    products: state.products,
    loading: state.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    productActions: bindActionCreators(Actions.productActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
