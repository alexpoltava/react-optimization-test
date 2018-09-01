import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import MyInput from './MyInput';

import './App.css';

import { setInputValue } from './actions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>{`${this.props.values.length} fields`}</h3>
        {this.props.values.map((value, i) =>
          <MyInput
            key={i}
            value={value}
            setInputValue={(value) => this.props.setInputValue(i, value)}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  values: state.values,
});

const mapDispatchToProps = dispatch => (bindActionCreators({
  setInputValue
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(App);
