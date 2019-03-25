import { connect } from 'react-redux';
import LoginView from '../../pages/Login';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import Actions from '../../actions';

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    errors: state.errors,
    loading: state.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authActions: bindActionCreators(Actions.authActions, dispatch)
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginView));
