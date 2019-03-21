import { connect } from 'react-redux';
import { compose } from 'recompose';
import ProductsView from '../../modules/Admin/Products';
import { withAuthorization } from '../../session/index';
import * as ROLES from '../../constants/role';

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const condition = authUser => authUser && authUser.roles.includes(ROLES.ADMIN);
export default compose(withAuthorization(condition), connect(mapStateToProps, mapDispatchToProps))(ProductsView);
