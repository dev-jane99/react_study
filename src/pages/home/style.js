import {styled} from 'styled-components';
import {flexCenterColumn} from '../../global/common';
import { fadeIn } from '../../keyframes/keyframes';

const S = {};

S.StyledDiv = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid #333;
  font-size: 20px
`;
// home.jsx 에서 사용
/* S.StyledButton = styled.button`
  color: ${(props) => props.color && props.color};
  background-color: pink;
  border: none;
`; */

S.StyledInput = styled.input`
  width: 200px;
  height: 200px;
  border: none;
`;

// homeInput.jsx 에서 사용
S.StyledButton = styled.button`
background-color: ${(props) => props.backgroundcolor && props.backgroundcolor};
`;

//homeform 에서 사용
S.Wrapper = styled.div`
  ${flexCenterColumn}

  & path{
    color: pink;
  }
`;

S.Form = styled.form`
  ${flexCenterColumn}


  // & 자기 자신을 선택하는 선택자 
  & input{
    width: 200px;
    border: none;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.15);
  }

  ::placeholder{
    color: lightcoral;
    font-size: 9px;
  }

  span {
    display: block;
    width: 100%;
    text-align: left;
    margin: 6px 0 6px 0;
    font-size: 10px;
  }

  .button {
    width: 200px;
    background-color: pink;
    color: #fff;
    border: none;
    margin: 20px 0 0 0;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.15);
    cursor: pointer;

    animation: ${fadeIn} 2s forwards;
  }

`;

S.Button = styled.button`
  font-size: ${({theme}) => theme.FONT_SIZE["h1"]};
`;

export default S;