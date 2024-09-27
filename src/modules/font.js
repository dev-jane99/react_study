// type

import { createAction, handleActions } from "redux-actions";

const BIGGER = "font/BIGGER";
const INPUT_BIGGER = "font/INPUT_BIGGER";

// action
export const bigger = createAction(BIGGER);
export const inputBigger = createAction(INPUT_BIGGER)

// state 초기값
const initialState = {
  fontSize : "1rem",
  inputFontSize : "1rem"
}

// reducer
const font = handleActions({
  [BIGGER] : (state, action) => ({...state, fontSize : "3rem"}),
  [INPUT_BIGGER] : (state, action) => ({...state, inputFontSize : action.payload})
}, initialState)

export default font;