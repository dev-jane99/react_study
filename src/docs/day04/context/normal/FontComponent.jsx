import React from 'react';
import useContext from 'react'
import { FontSizeContext } from './FontContext';

const FontComponent = () => {
  
  // p태그의 폰트크기는 fontSize의 초기값을 사용.
  // useContext를 사용하여 색상 변경 버튼, 폰트사이즈 변경 버튼 완성

  const {state, action} = useContext(FontSizeContext);


  return (
      <div>
          <p style={state}>최하위 컴포넌트</p>
          <button onClick={() => {action.setColor("pink")}}>색상버튼</button>
          <button onClick={() => {action.setFontSize("30px")}}>폰트 사이즈 변경 버튼</button>
      </div>
  );
};

export default FontComponent;