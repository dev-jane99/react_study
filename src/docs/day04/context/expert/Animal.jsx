import React, { useContext } from 'react';
import { AnimalsContext } from './AnimalsContext';

const Animal = () => {

  const {state, action} = useContext(AnimalsContext);
  const AnimalList = state.animals.map((animal, i) => (
    <li key={i}>
      <button onClick={() => {action.remove(i)}}>{animal}</button>
    </li>
  ))

  return (
    <div>
      {AnimalList}
    </div>
  );
};

export default Animal;