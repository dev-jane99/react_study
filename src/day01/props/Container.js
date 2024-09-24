import React from 'react';
// import Component01 from './Component01';
// import Component02 from './Component02';
import Component03 from './Component03';

const Container = () => {
  // const name = "류재은";
  // const age = 24;
  // const printName = (name) => {
  //   console.log(name)
  // }
  const phone = "010-0000-0000";
  const address = "Seoul, Seocho";
  const style = {width:"100px", height:"100px", border:"solid 1px black", fontSize:"15px"};
  return (
    <div>
      {/* <Component01 name={name} age={age} printName={printName} /> */}
    {/* <Component02>
      <p style={{color: "blue", fontSize:"20px"}}>안녕하세요 props 연습입니다 😎</p>
    </Component02> */}
    <Component03 phone={phone} address={address} style={style}/>  
    </div>
  );
};

export default Container;