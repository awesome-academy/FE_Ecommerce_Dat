import _ from 'lodash';
import React from 'react';
import cn from 'classnames';
import Modal from 'react-modal';
import DetailModal from './User/Detail';
import ConfirmModal from '../../modal/Confirm';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    width: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

Modal.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, 0.75)';
Modal.setAppElement('#app')

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenDetails: false,
      isOpenDeleteConfirm: false,
      data: {},
      errors: {}
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  componentDidMount() {
    this.props.userActions.getAllUsers();
  }

  openModal(id) {
    if (id) {
      this.setState({
        data: { ...this.props.users[id], id: id }
      })
    }
    this.setState({ isOpenDetails: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ isOpenDetails: false, isOpenDeleteConfirm: false });
  }

  openDeleteConfirmModal = (id) => {
    if (id) {
      this.setState({
        data: { ...this.props.users[id], id: id }
      })
    }
    this.setState({ isOpenDeleteConfirm: true });
  }

  onChange = (e) => {
    const target = e.target;
    this.setState(state => ({
      data: {
        ...state.data,
        [target.name]: target.type === 'checkbox' ? target.checked : target.value
      },
      errors: {
        ...state.errors,
        [target.name]: undefined
      }
    }));
  }

  onSave = () => {
    if (!this.state.data.id) {
      // Create new account
    } else {
      const data = { ...this.state.data };
      this.props.userActions.updateUser({ ...data });
    }
    this.setState({ isOpenDetails: false, data: {} });
  }

  onDeleteUser = () => {
    if (this.state.data.id) {
      this.props.userActions.deleteUser(this.state.data.id);
    }
    this.setState({ isOpenDeleteConfirm: false, data: {} });
  }

  renderUsers = () => {
    return _.map(this.props.users, (user, key) => {
      return (
        <tr key={key}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.status ? 'Hoạt động' : 'Đã xóa'}</td>
          <td>
            <button className={cn('btn btn-edit')} onClick={() => this.openModal(key)}>Sửa</button>
            {
              user.status ? <button className={cn('btn btn-delete')} onClick={() => this.openDeleteConfirmModal(key)}>Xóa</button> : ''
            }
          </td>
        </tr>
      )
    })
  }

  render() {
    console.log(this.state.data)
    return (
      <div className={cn('management')}>
        <div className={cn('management-box user-management #user-management')}>
          <div className={cn('sub-title')} >Quản trị tài khoản</div>
          <table className={cn('table-responsive')}>
            <thead>
              <tr>
                <th>Họ tên</th>
                <th>Email</th>
                <th>Trạng thái</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {this.renderUsers()}
            </tbody>
            <Modal
              isOpen={this.state.isOpenDetails}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Loại sản phẩm"
            >
              <DetailModal
                closeModal={this.closeModal}
                data={this.state.data}
                onSave={this.onSave}
                mode={this.state.mode}
                onChange={this.onChange}
              />

            </Modal>
            <ConfirmModal
              onDelete={this.onDeleteUser}
              title="tài khoản"
              isOpen={this.state.isOpenDeleteConfirm}
              closeModal={this.closeModal}
              data={this.state.data}
            />
          </table>
        </div>
      </div>
    )
  }
}

export default Users;


