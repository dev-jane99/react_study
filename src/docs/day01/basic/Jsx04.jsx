// JSX 는 if 문을 사용할 수 없기 때문에 삼항 연산자를 지원한다. 
// 조건식 ? 참일때 렌더링할 JSX : 거짓일때 랜더링할 JSX
// 조건식 && 참일때 랜더링할 JSX, 거짓이면 아무것도 출력되지 않음.
// && 연산자는 앞의 조건식이 false 면 뒤는 실행하지 않으며, false 라는 값은 랜더링 되지 않음.


import React from 'react';

const Jsx04 = () => {
  // || 초기값 사용
  const name = undefined || "류재은";
  const login = true;
  // const guest = true;
  return (
    <div>
      {/* { login && guest && (
        <h1>비회원으로 로그인 되었습니다</h1>
      )} */}
      {login ? (
        <h1>{name}님 어서오세여</h1>
      ) : (
        <h1>로그인 실패하셨음여</h1>
      )}
    </div>
  );
};

export default Jsx04;