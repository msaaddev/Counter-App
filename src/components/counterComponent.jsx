import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageURL: "https://picsum.photos/201"
  };

  styles = {
      color: 'black',
      fontSize: '16px',
      backgroundColor: 0x2D2B55,
  }


  render() {
    return (
      <div>
        <span style = {this.styles} className = "badge badge-primary m-2">{this.formatCount()}</span>
        <button className = "btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
