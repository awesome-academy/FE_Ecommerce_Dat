import { connect } from 'react-redux';
import { compose } from 'recompose';
import ProductsView from '../../modules/Admin/Products';
import { withAuthorization } from '../../session/index';
import * as ROLES from '../../constants/role';
import { bindActionCreators } from 'redux';
import Actions from '../../actions';
import isEmpty from '../../validation/is-empty';

const mapStateToProps = (state) => {
  return {
    products: state.products,
    categories: state.categories
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    productActions: bindActionCreators(Actions.productActions, dispatch),
    uploadFileActions: bindActionCreators(Actions.uploadFileActions, dispatch),
    categoryActions: bindActionCreators(Actions.categoryActions, dispatch)
  };
};

const condition = authUser => !isEmpty(authUser) && authUser.roles.includes(ROLES.ADMIN);
export default compose(withAuthorization(condition), connect(mapStateToProps, mapDispatchToProps))(ProductsView);
