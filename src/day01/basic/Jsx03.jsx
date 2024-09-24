// 컴포넌트를 만들어서 이름과 나이, 만나이를 화면에 출력하기
import React from "react";

export default function Jsx03 () {
  const name = "류재은";
  const koreanAge = 26;

  return (
    <React.Fragment>
    <h1>이름 : {name}</h1>
    <h2>나이 : {koreanAge}</h2> 
    <h3>만나이 : {koreanAge - 2}</h3>
    </React.Fragment>
  )
}