import React from "react";
import PropTypes from "prop-types";

const Counter = ({count, increment, decrement}) => {
    return (
        <div>
            <h3>Counter</h3>
            <button onClick={increment}>+</button>
            <span>{` ` + count + ` `}</span>
            <button onClick={decrement}>-</button>
        </div>
    )
}

Counter.propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
}

export default Counter;
