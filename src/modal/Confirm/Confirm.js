import React from 'react';
import cn from 'classnames';
import './Confirm.scss';
import Modal from 'react-modal';

class Confirm extends React.PureComponent {

  customStyles = {
    content: {
      top: '40%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  };

  render() {
    const { title, onDelete, isOpen, closeModal } = this.props;
    return (
      <Modal
        isOpen={isOpen}
        onDelete={onDelete}
        closeModal={closeModal}
        style={this.customStyles}
        contentLabel="Example Modal"
      >
        <div className={cn('body')} >
          <div className={cn('titleColEdit')}>Bạn có chắc muốn xoá {title} này? </div>
        </div>
        <div className={cn('action')}>
          <button onClick={closeModal} className={cn('btn btn-close')}>Đóng</button>
          <button onClick={onDelete} className={cn('btn btn-delete')}>Xoá</button>
        </div>
      </Modal>
    );
  }
}

export default Confirm;
