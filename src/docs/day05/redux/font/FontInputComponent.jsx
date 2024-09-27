import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../../../../hooks/useInput';
import { inputBigger } from '../../../../modules/font';
//2번
const FontInputComponent = () => {
  const fontSize = useSelector((state) => state.font.inputFontSize);
  const[value, onChangeValue] = useInput("");
  console.log(value);

  //useDIspatch();
  const dispatch = useDispatch();


  return (
    <div>
      <h1 style={{fontSize}}>재미있는 리덕스2</h1>
      <input type="text" value={value} onChange={onChangeValue}/>
      <button onClick={() => {dispatch(inputBigger(value))}}>입력한 값으로 커져라</button>
    </div>
  );
};

export default FontInputComponent;