import { createSlice } from "@reduxjs/toolkit";
import { QuestionnaireResponse } from "../fhir-resources/QuestionnaireResponse";

const initialState = QuestionnaireResponse;

export const questionnaireResponseReducer = createSlice({
  name: "questionnaireResponse",
  initialState,
  reducers: {
    updateSize: (state, action) => {
      state.item[0].item[0].answer[0].valueInteger = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateSize } = questionnaireResponseReducer.actions;

export default questionnaireResponseReducer.reducer;
