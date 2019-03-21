import React from 'react';
import cn from 'classnames';
import styles from './Edit.scss';
import InputField from '../../../../components/InputField';
import CheckBoxItem from '../../../../components/CheckBoxItem';

class Edit extends React.PureComponent {

  render() {
    const { onChange, onSave, closeModal } = this.props;
    const data = this.props.data || {};
    return (
      <div className={cn('modal')}>
        <div className={cn('modal__title')}>Tài khoản người dùng</div>
        <div className={cn('modal__detail')}>
          <InputField label="Họ tên *" type="text" name="name" value={data.name} onChange={onChange} />
          <InputField label="Số điện thoại *" type="text" name="phone" value={data.phone} onChange={onChange} />
          <CheckBoxItem name="status" checked={data.status} onChange={onChange} label="Kích hoạt" />
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

