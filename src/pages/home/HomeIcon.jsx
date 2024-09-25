import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import S from './style';

const HomeIcon = () => {
  return (
    <div>
      <S.Wrapper>
      <FontAwesomeIcon icon={faGithub}/>
      </S.Wrapper>
    </div>
  );
};

export default HomeIcon;