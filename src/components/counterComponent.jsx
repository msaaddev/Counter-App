import React, { Component } from "react";

class Counter extends Component {

  componentDid

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <span className={this.getCountClasses()}>{this.formatCount()}</span>
          </div>
          <div className="col-sm">
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              className="btn btn-secondary btn-sm"
            >
              +
            </button>
          </div>
          <div className="col-sm">
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => this.props.onDecrement(this.props.counter)}
            >
              -
            </button>
          </div>
          <div className="col-sm">
            <button
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className="btn btn-danger btn-sm m-2"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }

  getCountClasses() {
    let counts = "badge m-2 badge-";
    if (this.props.counter.value === 0) counts += "warning";
    else counts += "primary";
    return counts;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
