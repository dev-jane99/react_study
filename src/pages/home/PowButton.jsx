import React from 'react';
import BasicButton from '../../components/button/BasicButton';

const PowButton = () => {
  return (
    <div>
      <p>powpow 컴포넌트 테스트 버튼</p>
      <BasicButton variant={"sub"} shape={"big"} size={"large"} border={"gray300"} color={"white"} font={"h6"}>구매하기</BasicButton>
      <BasicButton variant={"primary"} shape={"large"}>구매하기</BasicButton>
    </div>
  );
};

export default PowButton;