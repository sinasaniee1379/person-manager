import { combineReducers } from "redux";
import { personReducer } from "./person";
import { personsReducer } from "./persons";
import { setShowPerson } from "./showPerson";

export const reducers = combineReducers({
  person: personReducer,
  persons: personsReducer,
  showPerson: setShowPerson,
});
