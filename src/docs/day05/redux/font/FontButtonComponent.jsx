import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bigger } from '../../../../modules/font';
// 1번
const FontButtonComponent = () => {
  // const fontSize = useSelector((state) => state.fontSize);
  const fontSize = useSelector((state) => state.font.fontSize);
const dispatch = useDispatch();


  return (
    <div>
      <h1 style={{fontSize}}>재미있는 Redux!</h1>
      <button onClick={() => {dispatch(bigger())}}>커지는 버튼</button>
    </div>
  );
};

export default FontButtonComponent;