import React from 'react';
import S from './style';

const HomeForm = () => {
  return (
    <div>
      <S.Form action="">
        <S.Wrapper>
         <span>아이디</span> <input type="id" placeholder='아이디를 입력하세요'/>
        </S.Wrapper>
       <S.Wrapper>
         <span>비밀번호</span> <input type="password" placeholder='비밀번호를 입력하세요'/>
       </S.Wrapper>
       <S.Button className='button' type='button'>전송</S.Button>
      </S.Form>
    </div>
  );
};

export default HomeForm;