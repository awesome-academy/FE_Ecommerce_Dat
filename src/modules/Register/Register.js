import React from 'react';
import './Register.scss';
import InputField from '../../components/InputField';
import TinyLoading from '../../components/TinyLoading';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      phone: '',
      errors: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    if (this.props.auth && this.props.auth.isAuthenticated) {
      console.log(this.props.auth)
      this.props.history.push('/')
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('nextProps.errors: ', nextProps.errors);
    if (nextProps.errors && nextState.errors !== nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.auth && this.props.auth.isAuthenticated) {
      this.props.history.push('/')
    }
  }

  isValid() {
    const { name, email, password, password2 } = this.state;
    if (email === '' || password === '' || password2 === '' || name === '') {
      this.setState({ errors: "Vui lòng điền đầy đủ các trường." })
      return false;
    }
    if (password !== password2) {
      this.setState({ errors: "Mật khẩu xác nhận không giống nhau." })
      return false;
    }
    return true;
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleBack = () => {
    this.props.history.goBack();
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, phone } = this.state;
    if (!this.isValid()) {
      return;
    }
    console.log(email, password, name, phone);
    this.props.createUserWithEmailAndPassword(email, password, name, phone);
  }

  render() {
    const { errors } = this.state;
    const { registering } = this.props;

    return (
      <div className="register">
        <div className="container">
          <div className="register-title">
            <h3>Đăng ký</h3>
          </div>
          <div className="register-container">
            <form className="register-form form" onSubmit={this.onSubmit}>
              <div className="summary">
                <div className="title">Thông tin cá nhân</div>
              </div>
              <InputField
                label="Họ tên *"
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
              />
              <InputField
                label="Điện thoại *"
                type="text"
                name="name"
                value={this.state.phone}
                onChange={this.onChange}
              />

              <div className="summary">
                <div className="title">Thông tin đăng nhập</div>
              </div>
              <InputField
                label="Địa chỉ email *"
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
              />
              <InputField
                label="Mật khẩu *"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
              />
              <InputField
                label="Xác nhận mật khẩu *"
                type="password"
                name="password2"
                value={this.state.password2}
                onChange={this.onChange}
              />
              {errors && (
                <div className="invalid-feedback">{errors}</div>
              )}
              <div className="option">
                {
                  registering ? <TinyLoading /> : <button className="btn btn-primary" type="submit">Gửi</button>
                }

                <a className="btn-primary btn-back" onClick={() => this.handleBack()}>
                  <span className="icon icon-back"> </span>
                  <span>Quay lại</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Register;
