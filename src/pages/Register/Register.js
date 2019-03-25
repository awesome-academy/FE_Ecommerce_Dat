import React from 'react';
import Header from '../../modules/Header/Navbar';
import RegisterModule from '../../modules/Register';
import Footer from '../../modules/Footer';

class Register extends React.Component {
  render() {
    return (
      <>
        <Header />
        <RegisterModule
          history={this.props.history}
          registering={this.props.loading.registering}
          auth={this.props.auth}
          errors={this.props.errors}
          createUserWithEmailAndPassword={this.props.authActions.createUserWithEmailAndPassword}
        />
        <Footer />
      </>
    )
  }
}

export default Register;
