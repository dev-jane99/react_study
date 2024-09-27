import React from 'react';
import FontButtonComponent from './FontButtonComponent';
import FontInputComponent from './FontInputComponent';

//"재미있는 리덕스 수업..."
// 폰트 기본 크기 1rem
// 2rem 으로 변경하기

//사용자에게 입력받은 폰트 사이즈로
//폰트 크기 변경하기

const FontContainer = () => {
  
  return (
    <div>
      <FontButtonComponent />
      <FontInputComponent />
    </div>
  );
};

export default FontContainer;