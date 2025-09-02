import React, { useReducer } from 'react';

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <div >
      <p>Số đếm: {count}</p>
      <div>
        <button
          onClick={() => dispatch({ type: 'INCREMENT' })}>Tăng</button>
        <button
          onClick={() => dispatch({ type: 'DECREMENT' })}>Giảm</button>
      </div>
    </div>
  );
};

export default Counter;