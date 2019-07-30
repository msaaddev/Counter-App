import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  handleIncrement = product => {
    console.log(product);
    this.setState({ value: this.state.value + 1});
  }

  render() {
    return (
      <div>
        <span style={this.styles} className={this.getCountClasses()}>
          {this.formatCount()}
        </span>
        <button onClick = {() => this.handleIncrement("Incremented")} className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  getCountClasses() {
    let counts = "badge m-2 badge-";
    if (this.state.value === 0) counts += "warning";
    else counts += "primary";
    return counts;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
