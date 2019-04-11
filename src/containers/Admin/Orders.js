import { connect } from 'react-redux';
import { compose } from 'recompose';
import OrdersView from '../../modules/Admin/Orders';
import { withAuthorization } from '../../session/index';
import * as ROLES from '../../constants/role';
import isEmpty from '../../validation/is-empty';
import { bindActionCreators } from 'redux';
import Actions from '../../actions';

const mapStateToProps = (state) => {
  return {
    orders: state.orders,
    products: state.products,
    cart: state.cart,
    users: state.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ordersActions: bindActionCreators(Actions.ordersActions, dispatch),
    productActions: bindActionCreators(Actions.productActions, dispatch),
    userActions: bindActionCreators(Actions.userActions, dispatch)
  };
};

const condition = authUser => !isEmpty(authUser) && authUser.roles.includes(ROLES.ADMIN);
export default compose(withAuthorization(condition), connect(mapStateToProps, mapDispatchToProps))(OrdersView);
