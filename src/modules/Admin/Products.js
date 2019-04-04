import React from 'react';
import cn from 'classnames';
import Detail from './Product/Detail';
import DetailModal from './../../modal/DetailModal';
import ConfirmModal from '../../modal/Confirm';
import isEmpty from '../../validation/is-empty';

class Products extends React.Component {
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
    if (isEmpty(this.props.products)) {
      this.props.productActions.fetchAllProducts();
    }
    if (isEmpty(this.props.categories)) {
      this.props.categoryActions.getAllCategories();
    }
  }

  openModal = (id) => {
    this.setState({
      errors: {}
    })
    if (id) {
      this.setState({
        data: { ...this.props.products[id], id: id }
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
        data: { ...this.props.products[id], id: id }
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

  updateImages = (image) => {
    let images = this.state.data.images || [];
    images.push(image);
    this.setState(state => ({
      data: {
        ...state.data,
        images: images
      }
    }))
  }

  onDelete = () => {
    if (this.state.data.id) {
      this.props.productActions.deleteProduct(this.state.data.id);
    }
    this.setState({ isOpenDeleteConfirm: false, data: {} });
  }

  requiredProductFields = [
    { name: 'name', text: 'Tên sản phẩm' },
    { name: 'category', text: 'Loại sản phẩm' },
    { name: 'quantity', text: 'Số lượng' },
    { name: 'price_n', text: 'Giá bán' },
    { name: 'images', text: 'Hình ảnh' },
    { name: 'features', text: 'Đặc điểm nổi bật' },
    { name: 'information', text: 'Thông tin sản phẩm' }
  ]

  validateFields = () => {
    const errors = {};
    const data = { ...this.state.data };
    this.requiredProductFields.forEach((field) => {
      if (!data[field.name]) {
        errors[field.name] = `Hãy nhập ${field.text}`;
      }
    });
    if (JSON.stringify(errors) !== '{}') {
      this.setState({ errors });
      return false;
    }
    return true;
  }

  updateFeatures = (html) => {
    this.state.data.features = html
  }

  updateInformation = (html) => {
    this.state.data.information = html
  }

  removeImg = (idx) => {
    let images = this.state.data.images;
    images.splice(idx, 1);
    this.setState(state => ({
      data: {
        ...state.data,
        images: images
      }
    }))
  }

  save = () => {
    if (this.validateFields()) {
      this.updatePosts();
    }
  }

  updatePosts = () => {
    if (!this.state.data.id) {
      const data = { ...this.state.data, status: true };
      this.props.productActions.createProduct({ ...data });
    } else {
      const data = { ...this.state.data };
      this.props.productActions.updateProduct({ ...data });
    }
    this.setState({ isOpenDetails: false, data: {} });
  }

  renderProducts = () => {
    return _.map(this.props.products, (product, key) => {
      if (product.status !== false) {
        return (
          <tr key={key}>
            <th>...{key.substring(15)}</th>
            <th>{product.name}</th>
            <th>{product.quantity}</th>
            <th>{product.price_n}</th>
            <th>{product.quantity > 0 ? 'Còn hàng' : 'Hết hàng'}</th>
            <td>
              <button className={cn('btn btn-edit')} onClick={() => this.openModal(key)}>Sửa</button>
              <button className={cn('btn btn-delete')} onClick={() => this.openDeleteConfirmModal(key)}>Xóa</button>
            </td>
          </tr>
        )
      }
    })
  }
  render() {
    return (
      <div className={cn('management-box products-management')}>
        <div className={cn('sub-title')} >Quản lý sản phẩm</div>
        <button className={cn('btn btn-primary')} onClick={() => this.openModal()}>Thêm</button>
        <table className={cn('table-responsive')}>
          <thead>
            <tr>
              <th>Mã sản phẩm</th>
              <th>Tên</th>
              <th>Số lượng</th>
              <th>Giá bán</th>
              <th>Trình trạng</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {this.renderProducts()}
          </tbody>
        </table>
        <DetailModal
          DetailModal={Detail}
          errors={this.state.errors}
          onSave={this.save}
          onChange={this.onChange}
          data={this.state.data}
          isOpen={this.state.isOpenDetails}
          closeModal={this.closeModal}
          categories={this.props.categories}
          isWideStyle={true}
          uploadImage={this.props.uploadFileActions.uploadImage}
          updateImages={this.updateImages}
          updateInformation={this.updateInformation}
          updateFeatures={this.updateFeatures}
          removeImg={this.removeImg}
        />
        <ConfirmModal
          onDelete={this.onDelete}
          title="sản phẩm"
          isOpen={this.state.isOpenDeleteConfirm}
          closeModal={this.closeModal}
          data={this.state.data}
        />
      </div>
    )
  }
}

export default Products;


