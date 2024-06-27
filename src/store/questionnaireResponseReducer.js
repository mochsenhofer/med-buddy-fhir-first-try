import { createSlice } from "@reduxjs/toolkit";
import { QuestionnaireResponse } from "../fhir-resources/QuestionnaireResponse";

const initialState = QuestionnaireResponse;

export const questionnaireResponseReducer = createSlice({
  name: "questionnaireResponse",
  initialState,
  reducers: {
    updateValueInteger: (state, action) => {
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
    updateValueString: (state, action) => {
      const { linkId, value } = action.payload;
      // Find the item with the matching linkId
      const findAndUpdateItem = (items) => {
        for (let item of items) {
          if (item.linkId === linkId && item.answer && item.answer[0]) {
            item.answer[0].valueString = value;
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
    updateValueCoding: (state, action) => {
      const { linkId, value } = action.payload;
      // Find the item with the matching linkId
      const findAndUpdateItem = (items) => {
        for (let item of items) {
          if (item.linkId === linkId && item.answer && item.answer[0]) {
            item.answer[0].valueCoding.code = value;
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
export const { updateValueInteger, updateValueString, updateValueCoding } =
  questionnaireResponseReducer.actions;

export default questionnaireResponseReducer.reducer;
