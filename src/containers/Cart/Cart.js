import { connect } from 'react-redux';
import { compose } from 'recompose';
import CartView from '../../pages/Cart';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import Actions from '../../actions';
import { withAuthorization } from '../../session';
import isEmpty from '../../validation/is-empty';

const mapStateToProps = (state) => {
  return {
    products: state.products,
    cart: state.cart,
    auth: state.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    productActions: bindActionCreators(Actions.productActions, dispatch),
    cartActions: bindActionCreators(Actions.cartActions, dispatch)
  };
};

const condition = authUser => !isEmpty(authUser);

export default compose(withAuthorization(condition), connect(mapStateToProps, mapDispatchToProps))(withRouter(CartView));
