import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageURL: "https://picsum.photos/201",
    tags : [ 'tag1' , 'tag2' , 'tag3'],
  };

  styles = {
    fontSize: "16px",
    backgroundColor: 0x2d2b55
  };

  renderTags () {
    if (this.state.tags.length === 0)
      return <p>Please enter tags!</p>;
    else
      return this.state.tags.map( tag => <li key = {tag}>{tag}</li>);
  }

  render() {
    return (
      <div>
        <span style={this.styles} className={this.getCountClasses()}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
            { this.renderTags() }
        </ul>
      </div>
    );
  }

    getCountClasses() {
        let counts = "badge m-2 badge-";
        if (this.state.count === 0)
            counts += "primary";
        else
            counts += "warning";
        return counts;
    }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
