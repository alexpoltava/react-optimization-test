import React, { Component } from 'react';

class MyInput extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.value === this.props.value ? false : true;
  }

  render() {
    return (
      <input
        value={this.props.value}
        onChange={(e) => this.props.setInputValue(e.target.value)}
      />
    );
  }
}

export default MyInput;
