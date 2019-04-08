import _ from 'lodash';
import React from 'react';
import cn from 'classnames';
import { toastr } from 'react-redux-toastr';
import './Edit.scss';

// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';
// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
// Require Font Awesome.
import 'font-awesome/css/font-awesome.css';

import InputDetail from '../InputDetail';
import FormEditor from '../../../../components/FormEditor/FormEditor';
import ImageSelect from '../../../../components/ImageSelect/ImageSelect';
import InputSelect from '../../../../components/InputSelect';

class Edit extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpenThumbnail: false,
    };
  }

  selectImage = (file) => {
    this.props.uploadImage(file.target.files[0], image => {
      if (image) {
        const resource = image;
        if (['png', 'jpeg', 'jpg'].indexOf(resource.split('.')[resource.split('.').length - 1].split('?')[0].toLowerCase()) === -1) {
          toastr.error('Ảnh không đúng định dạng PNG hoặc JPEG', '');
        } else {
          toastr.success('Tải ảnh lên thành công', '');
          this.props.updateImages(image);
        }
      } else {
        toastr.error('Tải ảnh lên không thành công', '');
      }
    });
  }

  removeImg = (id) => {
    this.props.removeImg(id);
  }

  config = {
    placeholderText: 'Nội dung',
    charCounterCount: true,
  }

  render() {
    const { onChange, onSave, closeModal, errors } = this.props;
    const data = this.props.data || {};
    return (
      <div className={cn('modal')}>
        <div className={cn('modal__title')}>{data.id ? 'Chỉnh sửa sản phẩm' : 'Thêm mới sản phẩm'}</div>
        <div className={cn('modal__detail')}>
          <InputDetail
            label="Tên sản phẩm *"
            type="text"
            name="color"
            value={data.name}
            onChange={onChange}
            error={errors.name}
          />
          <InputSelect
            label="Loại sản phẩm *"
            onChange={onChange}
            value={data.category}
            data={this.props.categories}
            error={errors.category}
          />
          <InputDetail
            label="Màu sắc"
            type="text"
            name="color"
            value={data.color}
            onChange={onChange}
            error={errors.color}
          />
          <InputDetail
            label="Số lượng *"
            type="number"
            name="quantity"
            value={data.quantity}
            onChange={onChange}
            error={errors.quantity}
          />
          <InputDetail
            label="Giá niêm yết"
            type="number"
            name="price_o"
            value={data.price_o}
            onChange={onChange}
            error={errors.price_o}
          />
          <InputDetail
            label="Giá bán *"
            type="number"
            name="price_n"
            value={data.price_n}
            onChange={onChange}
            error={errors.price_n}
          />
          <InputDetail
            label="Kích thước"
            type="text"
            name="size"
            value={data.size}
            onChange={onChange}
            error={errors.size}
          />
          <ImageSelect
            label="Hình ảnh *"
            error={errors.images}
            onChange={this.selectImage}
            images={data.images}
            onRemove={this.removeImg}
          />
          <FormEditor
            label="Đặc điểm nổi bật *"
            config={this.config}
            model={data.features}
            onModelChange={this.props.updateFeatures}
            error={errors.features}
          />
          <FormEditor
            label="Thông tin sản phẩm *"
            config={this.config}
            model={data.information}
            onModelChange={this.props.updateInformation}
            error={errors.information}
          />
        </div>
        <div className={cn('action')}>
          <div onClick={closeModal} className={cn('btn btn-cancel')}>Đóng</div>
          <div onClick={onSave} className={cn('btn btn-save')}>
            {data.id ? "Lưu" : "Thêm"}
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;

