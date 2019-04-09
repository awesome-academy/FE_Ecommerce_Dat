import { connect } from 'react-redux';
import { compose } from 'recompose';
import DetailView from '../../pages/Detail';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import Actions from '../../actions';

const mapStateToProps = (state) => {
  return {
    products: state.products,
    loading: state.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    productActions: bindActionCreators(Actions.productActions, dispatch)
  };
};

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(DetailView);
