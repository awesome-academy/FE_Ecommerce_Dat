import React from 'react';
import Modal from 'react-modal';
import cn from 'classnames';

Modal.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, 0.75)';

class DetailModal extends React.PureComponent {

  customStyles = {
    overlay: {
      zIndex: 99
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  };

  wideStyles = {
    overlay: {
      zIndex: 99
    },
    content: {
      top: '50%',
      left: '50%',
      width: '80%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      overlfow: 'scroll',
      height: '90%',
    }
  };

  render() {
    const { isOpen, afterOpenModal, DetailModal, title, isWideStyle, ...rest } = this.props;
    return (
      <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        style={isWideStyle ? this.wideStyles : this.customStyles}
        contentLabel="Example Modal"
      >
        <DetailModal {...rest} />
      </Modal>
    );
  }
}

export default DetailModal;
