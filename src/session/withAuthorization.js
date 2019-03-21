import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import * as ROUTES from '../constants/routes';
import { onAuthUserListener } from '../firebase/auth';

const withAuthorization = condition => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      this.listener = onAuthUserListener(
        authUser => {
          if (!condition(authUser)) {
            this.props.history.push(ROUTES.LOGIN);
          }
        },
        () => this.props.history.push(ROUTES.LOGIN),
      );
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return (
        <>
          {
            condition(this.props.auth.user) ? <Component {...this.props} /> : null
          }
        </>
      );
    }
  }
  const mapStateToProps = (state) => {
    return {
      auth: state.auth
    }
  }
  return compose(withRouter, connect(mapStateToProps, {}))(WithAuthorization);
};

export default withAuthorization;
