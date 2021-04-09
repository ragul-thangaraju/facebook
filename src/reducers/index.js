import { combineReducers } from "redux";
import { currentUser } from "./loginReducer";

/**
 * Combining all objects to redux store
 */
export default combineReducers({
  currentUser,
});
