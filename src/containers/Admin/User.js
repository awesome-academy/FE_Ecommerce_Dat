import { connect } from 'react-redux';
import { compose } from 'recompose';
import UserView from '../../modules/Admin/Users';
import { withAuthorization } from '../../session/index';
import * as ROLES from '../../constants/role';
import { bindActionCreators } from 'redux';
import Actions from '../../actions';

const mapStateToProps = (state) => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userActions: bindActionCreators(Actions.userActions, dispatch)
  };
};

const condition = authUser => authUser && authUser.roles.includes(ROLES.ADMIN);
export default compose(withAuthorization(condition), connect(mapStateToProps, mapDispatchToProps))(UserView);
