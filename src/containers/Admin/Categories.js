import { connect } from 'react-redux';
import { compose } from 'recompose';
import CategoriesView from '../../modules/Admin/Categories';
import { withAuthorization } from '../../session/index';
import * as ROLES from '../../constants/role';
import { bindActionCreators } from 'redux';
import Actions from '../../actions';

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    categoryActions: bindActionCreators(Actions.categoryActions,dispatch)
  };
};

const condition = authUser => authUser && authUser.roles.includes(ROLES.ADMIN);
export default compose(withAuthorization(condition), connect(mapStateToProps, mapDispatchToProps))(CategoriesView);
