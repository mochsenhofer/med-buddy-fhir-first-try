import { combineReducers, createStore } from "redux";
import patientReducer from "./patientReducer";
import questionnaireResponseReducer from "./questionnaireResponseReducer";

const rootReducer = combineReducers({
  patientData: patientReducer,
  questionnaireResponseData: questionnaireResponseReducer,
});

export const store = createStore(rootReducer);
