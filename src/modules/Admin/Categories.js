import React from 'react';
import cn from 'classnames';
import Modal from 'react-modal';
import DetailModal from './Category/Detail';
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

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenDetails: false,
      isOpenDeleteConfirm: false,
      data: {},
      errors: {}
    };
  };
  componentDidMount() {
    this.props.categoryActions.getAllCategories();
  }

  openModal = (id) => {
    this.setState({
      errors: {}
    })
    if (id) {
      this.setState({
        data: {...this.props.categories[id], id: id}
      })
    }
    this.setState({ isOpenDetails: true });
  }

  closeModal = () => {
    this.setState({ isOpenDetails: false, isOpenDeleteConfirm: false, data: {} });
  }

  openDeleteConfirmModal = (id) => {
    if (id) {
      this.setState({
        data: { ...this.props.categories[id], id: id }
      })
    }
    this.setState({ isOpenDeleteConfirm: true });
  }

  onChange = (e) => {
    const target = e.target;
    this.setState(state => ({
      data: {
        ...state.data,
        [target.name]: target.value
      },
      errors: {
        ...state.errors,
        [target.name]: undefined
      }
    }));
  }

  requiredFields = [{ name: 'name', text: 'Tên thể loại' }]

  onSave = () => {
    const errors = {};
    const data = { ...this.state.data };
    this.requiredFields.forEach((field) => {
      if (!data[field.name]) {
        errors[field.name] = `Hãy nhập ${field.text}`;
      }
    });
    if (JSON.stringify(errors) !== '{}') {
      this.setState({ errors });
      return;
    }
    if (!this.state.data.id) {
      this.props.categoryActions.createCategory({ ...this.state.data});
    } else {
      const data = { ...this.state.data };
      this.props.categoryActions.updateCategory({ ...data });
    }
    this.setState({ isOpenDetails: false, data: {} });
  }

  onDelete = () => {
    if (this.state.data.id) {
      this.props.categoryActions.deleteCategory(this.state.data.id);
    }
    this.setState({ isOpenDeleteConfirm: false, data: {} });
  }

  renderCategories = () => {
    return _.map(this.props.categories, (category, key) => {
      return (
        <tr key={key}>
          <td>{key}</td>
          <td>{category.name}</td>
          <td>
            <button className={cn('btn btn-edit')} onClick={() => this.openModal(key)}>Sửa</button>
            <button className={cn('btn btn-delete')} onClick={() => this.openDeleteConfirmModal(key)}>Xóa</button>
          </td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div className={cn('management-box category-management')}>
        <div className={cn('sub-title')} >Quản lý mặt hàng</div>
        <button className={cn('btn btn-primary')} onClick={() => this.openModal()}>Thêm</button>
        <table className={cn('table-responsive')}>
          <thead>
            <tr>
              <th>Mã thể loại</th>
              <th>Tên loại</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {this.renderCategories()}
          </tbody>
        </table>
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
            errors={this.state.errors}
          />

        </Modal>
        <ConfirmModal
          onDelete={this.onDelete}
          title="thể loại"
          isOpen={this.state.isOpenDeleteConfirm}
          closeModal={this.closeModal}
          data={this.state.data}
        />
      </div>
    )
  }
}

export default Categories;
