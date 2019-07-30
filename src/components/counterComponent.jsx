import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageURL: "https://picsum.photos/201",
    tags: ["tag1", "tag2", "tag3"]
  };


  styles = {
    fontSize: "16px",
    backgroundColor: 0x2d2b55
  };


  // this method is dynamically rendering all the tags in the tags array
  renderTags() {
    if (this.state.tags.length === 0) return <p>Please enter tags!</p>;
    else return this.state.tags.map(tag => <li key={tag}>{tag}</li>);
  }

  handleIncrement = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1});
  }

  render() {
    return (
      <div>
        <span style={this.styles} className={this.getCountClasses()}>
          {this.formatCount()}
        </span>
        <button onClick = {() => this.handleIncrement("Incremented")} className="btn btn-secondary btn-sm">Increment</button>
        {/* <ul>{this.renderTags()}</ul> */}
      </div>
    );
  }

  getCountClasses() {
    let counts = "badge m-2 badge-";
    if (this.state.count === 0) counts += "warning";
    else counts += "primary";
    return counts;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
