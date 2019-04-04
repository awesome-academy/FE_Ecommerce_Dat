import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';
import InputField from '../../components/InputField';
import TinyLoading from '../../components/TinyLoading';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth && this.props.auth.isAuthenticated) {
      this.props.history.push('/')
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.auth && this.props.auth.isAuthenticated) {
      this.props.history.push('/')
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.onLoginUser(email, password);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.props;
    const { logining } = this.props;
    return (
      <div className="login">
        <div className="container">
          <div className="login-title">
            <h3>Đăng nhập</h3>
            <Link to="/register" className="login-other btn btn-primary">Đăng ký</Link>
          </div>
          <div className="login-container">
            <form className="login-form form" onSubmit={this.onSubmit}>
              <div className="summary">
                <div className="title">Khách hàng đăng ký</div>
                <p className="description">
                  Nếu bạn có một tài khoản, vui lòng đăng nhập
                </p>
              </div>
              <InputField label="Địa chỉ email *" type="email" name="email" value={this.state.password} onChange={this.onChange} />
              <InputField label="Password *" type="password" name="password" value={this.state.password} onChange={this.onChange} />
              {errors && (
                <div className="invalid-feedback">{errors}</div>
              )}
              <div className="option">
                <Link className="forget" to="/forget">Quên mật khẩu ?</Link>
                {logining ? <TinyLoading /> :
                  <button className="btn btn-primary" type="submit">Đăng nhập</button>
                }
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
