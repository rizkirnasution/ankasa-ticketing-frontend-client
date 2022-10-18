import { combineReducers } from "redux";
import detailUserReducer from "./detailUser";

const rootReducers = combineReducers({

  detailUser: detailUserReducer

});

export default rootReducers;
