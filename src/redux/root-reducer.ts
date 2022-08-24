import { combineReducers } from "redux";
import InterfaceReducer from "./interface/interface.reducer";

const rootReducer = combineReducers({
  interface: InterfaceReducer,
});



export default rootReducer;
