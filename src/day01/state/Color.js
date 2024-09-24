import React, {useState, useRef} from 'react';

const Color = () => {
  const [result, setResult] = useState("");
  const [color, setColor] = useState("")

  const inputRef = useRef();
 const textReset = () =>{
  inputRef.current.value = "";
 }

  const onResult = (e) => {
    if(EventTarget.vale === "핑크색"){setColor("")};
    setResult(e.target.value)
  }
  const red = () => {
    setColor("red");
  }
  const blue = () => {
    setColor("blue");
  }

  return (
    <div>
      <p style={{color}}>{result}</p>
      <input ref={inputRef} onChange={onResult} type="text" placeholder='색상을 입력하세요'/>
      <button onClick={red}>빨강색</button>
      <button onClick={blue}>파란색</button>
      <button onClick={textReset}>값 초기화</button>
    </div>
  );
};

export default Color;