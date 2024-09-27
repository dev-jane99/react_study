import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from '../../../../modules/count';
import useInput from '../../../../hooks/useInput'

const Counter = () => {

  //store에 값을 가져올때 useSelector(); 이용하기
  // console.log(useSelector((state) => state)) (아래거랑 이거랑 둘중 하나만 사용하면 됨)
  console.log(useSelector(({number}) => number)) //(위에꺼랑 이거랑 둘중 하나만 사용하면 됨)
  const number = useSelector((state) => state.number);

  //action 을 발생 시키는 훅 함수 useDispatch();
  const dispatch = useDispatch();

  const [value, onChangeValue] = useInput("");
  console.log(value);

  return (
    <div>
      <h1>{number}</h1>
      <input type="text" value={value} onChange={onChangeValue}/>
      <div>
        <button onClick={() => {dispatch(decrease(value))}}>감소</button>
        <button onClick={() => {dispatch(increase(value))}}>증가</button>
      </div>
    </div>
  );
};

export default Counter;