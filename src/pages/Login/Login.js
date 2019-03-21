import React from 'react';
import Header from '../../modules/Header/Navbar';
import LoginModule from '../../modules/Login';
import Footer from '../../modules/Footer';

class Login extends React.Component {
  render() {
    return (
      <>
        <Header />
        <LoginModule
          ref={(r) => {
            this.loginModule = r;
          }}
          onLoginUser={this.props.authActions.loginUser}
          errors={this.props.errors}
          logining={this.props.loading.logining}
          auth={this.props.auth}
          history={this.props.history}
        />
        <Footer />
      </>
    )
  }
}

export default Login;
