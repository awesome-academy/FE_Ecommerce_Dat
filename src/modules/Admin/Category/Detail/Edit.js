import React from 'react';
import cn from 'classnames';
import styles from './Edit.scss';
import InputField from '../../../../components/InputField';

class Edit extends React.PureComponent {

  render() {
    const { onChange, onSave, closeModal, errors } = this.props;
    const data = this.props.data || {};
    return (
      <div className={cn('modal')}>
        <div className={cn('modal__title')}>{data.id ? 'Chỉnh sửa thể loại' : 'Thêm mới thể loại'}</div>
        <div className={cn('modal__detail')}>
          <InputField label="Tên thể loại *" type="text" name="name" value={data.name} onChange={onChange} />
          {errors.name &&
            <div className={cn('error')}>
              <div className={cn('error__text')} style={{ color: 'red' }}>{errors.name}</div>
            </div>}
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

