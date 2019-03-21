import { connect } from 'react-redux';
import { compose } from 'recompose';
import OrdersView from '../../modules/Admin/Orders';
import { withAuthorization } from '../../session/index';
import * as ROLES from '../../constants/role';
import isEmpty from '../../validation/is-empty';

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const condition = authUser => !isEmpty(authUser) && authUser.roles.includes(ROLES.ADMIN);
export default compose(withAuthorization(condition), connect(mapStateToProps, mapDispatchToProps))(OrdersView);
