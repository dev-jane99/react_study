import React, {useState} from 'react';

const Sound = () => {
  const[sound, setSound] = useState("")
  const cat = () => {
    setSound("야옹")
  }
  const dog = () => {
    setSound("멍멍")
  }
  return (
    <>
      <button onClick={cat}>고양이</button>
      <p>{sound}</p>
      <button onClick={dog}>강아지</button>
    </>
  );
};

export default Sound;