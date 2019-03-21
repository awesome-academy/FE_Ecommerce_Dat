import React from 'react';

class TextInput extends React.PureComponent {
  render() {
    const { className, locked, placeholder, onChange, type, ...rest } = this.props;
    rest.input = undefined;
    const options = {
      disabled: locked,
      type: type || 'text',
      placeholder,
      onChange,
      ...rest,
    };
    return <input {...options} ref={this.props.input} />;
  }
}

export default TextInput;
