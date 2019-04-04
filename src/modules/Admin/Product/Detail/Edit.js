import _ from 'lodash';
import React from 'react';
import cn from 'classnames';
import { toastr } from 'react-redux-toastr';
import styles from './Edit.scss';
import InputField from '../../../../components/InputField';
import isEmpty from '../../../../validation/is-empty';

// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

// Require Font Awesome.
import 'font-awesome/css/font-awesome.css';

import FroalaEditor from 'react-froala-wysiwyg';

class Edit extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpenThumbnail: false,
    };
  }

  input = null;

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
    const { isOpenThumbnail } = this.state;
    const data = this.props.data || {};
    return (
      <div className={cn('modal')}>
        <div className={cn('modal__title')}>{data.id ? 'Chỉnh sửa sản phẩm' : 'Thêm mới sản phẩm'}</div>
        <div className={cn('modal__detail')}>
          <div className={cn('modal-control')}>
            <InputField label="Tên sản phẩm *" type="text" name="name" value={data.name} onChange={onChange} />
            {errors.name &&
              <div className={cn('error')}>
                <div className={cn('error__text')} style={{ color: 'red' }}>{errors.name}</div>
              </div>}
          </div>
          <div className={cn('modal-control')}>
            <div className="form-group">
              <label>Loại sản phẩm *</label>
              <select name="category" onChange={onChange} className={cn("form-control")} value={data.category}>
              <option value="-1">-------- Chọn --------</option>)
                {_.map(this.props.categories, (category, key) =>
                  <option value={key} key={key}>{category.name}</option>)
                }
              </select>
            </div>
            {errors.category &&
              <div className={cn('error')}>
                <div className={cn('error__text')} style={{ color: 'red' }}>{errors.category}</div>
              </div>}
          </div>
          <div className={cn('modal-control')}>
            <InputField label="Màu sắc" type="text" name="color" value={data.color} onChange={onChange} />
            {errors.color &&
              <div className={cn('error')}>
                <div className={cn('error__text')} style={{ color: 'red' }}>{errors.color}</div>
              </div>}
          </div>
          <div className={cn('modal-control')}>
            <InputField label="Số lượng *" type="number" name="quantity" value={data.quantity} onChange={onChange} />
            {errors.quantity &&
              <div className={cn('error')}>
                <div className={cn('error__text')} style={{ color: 'red' }}>{errors.quantity}</div>
              </div>}
          </div>
          <div className={cn('modal-control')}>
            <InputField label="Giá niêm yết" type="text" name="price_o" value={data.price_o} onChange={onChange} />
            {errors.price_o &&
              <div className={cn('error')}>
                <div className={cn('error__text')} style={{ color: 'red' }}>{errors.price_o}</div>
              </div>}
          </div>
          <div className={cn('modal-control')}>
            <InputField label="Giá bán *" type="text" name="price_n" value={data.price_n} onChange={onChange} />
            {errors.price_n &&
              <div className={cn('error')}>
                <div className={cn('error__text')} style={{ color: 'red' }}>{errors.price_n}</div>
              </div>}
          </div>
          <div className={cn('modal-control')}>
            <InputField label="Kích thước" type="text" name="size" value={data.size} onChange={onChange} />
            {errors.size &&
              <div className={cn('error')}>
                <div className={cn('error__text')} style={{ color: 'red' }}>{errors.size}</div>
              </div>}
          </div>
          <div className={cn('modal-control')}>
            <div className="form-group">
              <label>Hình ảnh *</label>
              <div>
                <input className={cn('form-control')} onChange={this.selectImage} type="file" id="file" ref={(input) => { this.input = input; }} accept=".jpg,.jpeg,.png" />
                {errors.images &&
                  <div className={cn('error')}>
                    <div className={cn('error__text')} style={{ color: 'red' }}>{errors.images}</div>
                  </div>}
              </div>
              {data.images && <div className={cn('images-editing')}>
                {
                  data.images.map(image => image.trim()).map((image, id) => {
                    return (
                      <div key={id} className={cn('image-item')}>
                        <img className={cn('imageThumnail')} alt="" src={image} onClick={() => this.setState({ isOpenThumbnail: true })} />
                        <div className={cn('btn-remove')} onClick={() => {
                          this.removeImg(id);
                        }}><img src={require('../../../../assets/images/icon-delete.svg')} />
                        </div>
                      </div>);
                  })
                }
              </div>
              }

            </div>
          </div>
          <div className={cn('modal-control')}>
            <div className="form-group">
              <label>Đặc điểm nổi bật *</label>
              <FroalaEditor
                tag="textarea"
                config={this.config}
                model={data.features}
                onModelChange={this.props.updateFeatures}
              />
              {errors.features &&
                <div className={cn('error')}>
                  <div className={cn('error__text')} style={{ color: 'red' }}>{errors.features}</div>
                </div>}
            </div>
          </div>
          <div className={cn('modal-control')}>
            <div className="form-group">
              <label>Thông tin sản phẩm *</label>
              <FroalaEditor
                tag="textarea"
                config={this.config}
                model={data.information}
                onModelChange={this.props.updateInformation}
              />
              {errors.information &&
                <div className={cn('error')}>
                  <div className={cn('error__text')} style={{ color: 'red' }}>{errors.information}</div>
                </div>}
            </div>
          </div>
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

