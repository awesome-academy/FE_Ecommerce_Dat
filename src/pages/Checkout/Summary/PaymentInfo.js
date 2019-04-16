import React from 'react';
import InputField from '../../../components/InputField';
import InputSelect from '../../../components/InputSelect';
import CheckBoxItem from '../../../components/CheckBoxItem';
import * as address from '../../../constants/address.json';

export default ({ data, errors, onChange, onNext}) => {
  return (
    <div id="info-payout">
      <div className="container-title title">1. Thông tin thanh toán</div>
      <div className="container-content">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <InputField
              name="name"
              label="Họ tên"
              type="text"
              value={data.name}
              onChange={onChange}
              error={errors.name}
            />
            <InputField
              name="phone"
              label="Điện thoại di động"
              type="text"
              value={data.phone}
              onChange={onChange}
              error={errors.phone}
            />
            <InputSelect
              label="Tỉnh/Thành phố *"
              name="city"
              onChange={onChange}
              value={data.city}
              data={address.default}
              error={errors.city}
              default="-1"
            />
            <InputSelect
              label="Quận/Huyện *"
              name="district"
              onChange={onChange}
              value={data.district}
              data={data.city != -1 && data.city !== undefined ? address.default[data.city].districts : {}}
              error={errors.district}
            />
            <InputField
              name="address"
              label="Địa chỉ"
              type="text"
              value={data.address}
              onChange={onChange}
              error={errors.address}
            />
            <div className="form-group">
              <label>Loại địa chỉ</label>
              <CheckBoxItem name="individualType" checked={data.individualType} onChange={onChange} label="Nhà riêng" />
              <CheckBoxItem name="companyType" checked={data.companyType} onChange={onChange} label="Cơ quan" />
              {errors.individualType || errors.companyType && <div className="invalid-feedback">{errors.individualType || errors.companyType}</div>}
            </div>
            <div className="action">
              <button className="btn btn-primary" onClick={onNext}>Cập nhật</button>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </div>
  )
}
