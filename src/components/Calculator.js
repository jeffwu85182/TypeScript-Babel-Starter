import React, { Component } from 'react';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { temperture: '' };
  }

  handleChange(e) {
    console.log(`changed`, e.target.value);
    this.setState({ temperture: e.target.value });
  }

  render() {
    const temperture = this.state.temperture;
    return (
      <div>
        <div>This is js file</div>
        <input value={temperture} onChange={this.handleChange} />
      </div>
    );
  }
}
