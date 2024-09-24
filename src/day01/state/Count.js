
import React, { useState } from 'react';

//훅함수 use
// const [변수명, setter 메서드] = useState(초기값)
const Count = () => {
  const[number, setNumber] = useState(0)
  const decrease = ()=>{
    setNumber(number - 1)
  }
  const increase = () => {
    setNumber(number + 1)
  }

  return (
    <>
    <button onClick={decrease}>-1 감소</button>
    <p>{number}</p>
    <button onClick={increase}>+1 증가</button>
    </>
  );
};

export default Count;