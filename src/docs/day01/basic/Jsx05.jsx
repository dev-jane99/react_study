// 19세 이하, age 는 상수로 설정
// 성인 이라면 "입장가능"
// 성인이 아니라면 " 입장 불가"
// age 가 짝수라면 "당첨"

import React from 'react';
import PassComponent from './PassComponent';
import LuckyComponent from './LuckyComponent';
import UnluckyComponent from './UnluckyComponent';
import BanComponent from './BanComponent';

const Jsx05 = () => {
  const age = 35;
  const even = age % 2 === 0;
  // const [pass, ban, lucky, unlucky] = ["입장가능", "입장불가", "당첨", "다음기회에"];
  const adult = age >= 19;

  // const passComponent = (<div>{pass}</div>)
  // const banComponent = (<div>{ban}</div>)
  // const luckyComponent = (<div>{lucky}</div>)
  // const unluckyComponent = (<div>{unlucky}</div>)

  //컴포넌트 분리 실습
  const enter = adult ? <PassComponent /> : <BanComponent />;
  const win = even ? <LuckyComponent /> : <UnluckyComponent />;
  return (
    <div>
      당신의 나이는 {age} 이므로,
      {enter}
      {win}
      {pass}
    </div>
  );
};

export default Jsx05;