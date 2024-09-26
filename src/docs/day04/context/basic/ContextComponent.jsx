import React from 'react';
import { FontSizeConsumer } from './FontContext';

const ContextComponent = () => {

  return (
    <div>
      <FontSizeConsumer>
        {(context) => {
            console.log(context)
            return (
              <>
              {/* context에 들어가있는 value 메서드로 글자크기 변경하기 */}
              {/* context에 들어가 있는 value 값으로 p 태그의 글자 크기 변경 */}
              <p style={{fontSize : context.state.fontSize}}>안녕하세요 저 컨텍스트에요~</p>
              <button onClick={() => {context.action.setFontSize("0.3rem")}}>글자크기 변경 버튼</button>
              </>
            )
        }}
      </FontSizeConsumer>
     
    </div>
  );
};

export default ContextComponent;