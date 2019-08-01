import React, { Component } from "react";
import Counter from "./counterComponent";

class Counters extends Component {
  render() {
    const {onReset, onIncrement, onDelete, counters} = this.props;

    return (
      <div>
        <button
          onClick={onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            counter={counter}
            key={counter.id}
            onIncrement={onIncrement}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
