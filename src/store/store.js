import { combineReducers, createStore } from "redux";
import patientReducer from "./patientReducer";

const rootReducer = combineReducers({
  patientData: patientReducer,
});

export const store = createStore(rootReducer);
