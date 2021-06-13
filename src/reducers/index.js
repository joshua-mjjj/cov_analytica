import { combineReducers } from "redux";

import data_ops from "./data_ops";
import messages from "./messages";

export default combineReducers({
  data_ops,
  messages
});
