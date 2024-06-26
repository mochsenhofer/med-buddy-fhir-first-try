import { createSlice } from "@reduxjs/toolkit";
import { QuestionnaireResponse } from "../fhir-resources/QuestionnaireResponse";

const initialState = QuestionnaireResponse;

export const questionnaireResponseReducer = createSlice({
  name: "questionnaireResponse",
  initialState,
  reducers: {
    updateProperty: (state, action) => {
      const { linkId, value } = action.payload;
      // Find the item with the matching linkId
      const findAndUpdateItem = (items) => {
        for (let item of items) {
          if (item.linkId === linkId && item.answer && item.answer[0]) {
            item.answer[0].valueInteger = value;
            return true;
          }
          if (item.item && findAndUpdateItem(item.item)) {
            return true;
          }
        }
        return false;
      };

      findAndUpdateItem(state.item);
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateProperty } = questionnaireResponseReducer.actions;

export default questionnaireResponseReducer.reducer;
