import {combineReducers} from "redux"
import font from "./font"
import count from "./count"
import route from "./route";

const rootReducer = combineReducers({
  font,
  count,
  route
});

export default rootReducer;