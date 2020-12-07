import { combineReducers } from "redux";
import { contactReducer } from "./contactReducer";
// import likelist from "./likelist";

const reducer = combineReducers({
  // likelist,
  contact: contactReducer,
});

export default reducer;
