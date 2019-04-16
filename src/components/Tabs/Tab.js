import React, { Component } from 'react';

class Tab extends Component {

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const {
      onClick,
      props: {
        activeTab,
        label,
      },
    } = this;

    let className = '';

    if (activeTab === label) {
      className += 'active';
    }

    return (
      <li
        onClick={onClick}
      >
        <span className={className}>
          {label}
        </span>
      </li>
    );
  }
}

export default Tab;
