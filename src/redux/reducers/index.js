import { combineReducers } from "redux";
import detailUserReducer from "./detailUser";
import listMyBookingReducer from "./transaction";
const rootReducers = combineReducers({

  detailUser: detailUserReducer,
  myBooking: listMyBookingReducer

});

export default rootReducers;
