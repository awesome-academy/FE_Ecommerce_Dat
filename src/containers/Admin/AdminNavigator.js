import { connect } from 'react-redux';
import { compose } from 'recompose';
import AdminNavigatorView from '../../modules/Admin/Navigator';

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminNavigatorView);
