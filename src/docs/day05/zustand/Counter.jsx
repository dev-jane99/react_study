import React from 'react';
import useCountStore from './store/useCountStore';

const Counter = () => {
  const {number, decrease, increase} = useCountStore();
  return (
    <div>
      <button onClick={decrease}>-1 감소</button>
      {number}
      <button onClick={increase}>+1 증가</button>
    </div>
  );
};

export default Counter;