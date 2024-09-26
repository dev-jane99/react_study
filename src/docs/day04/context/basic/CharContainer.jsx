import React from 'react';
import A from './A';
import CharContext from './CharContext';

const CharContainer = () => {
  return (
      <CharContext.Provider value={{color : "lightblue", fontSize : "20px"}}>
      <A />
      </CharContext.Provider>
  );
};

export default CharContainer;