import React, { Component } from "react";
import Counter from "./counterComponent";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  counterDelete = (counterId) => {
    const newArr = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters: newArr})
  };
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.counterDelete}
            counter ={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
