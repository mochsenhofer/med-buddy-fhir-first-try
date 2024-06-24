import { QuestionnaireResponse } from "../fhir-resources/QuestionnaireResponse";

const initialQuestionnaireResponseState = {
  questionnaireResponse: QuestionnaireResponse,
};

export default (
  state = initialQuestionnaireResponseState,
  { type, payload }
) => {
  switch (type) {
    case "CHANGE_QUESTIONNAIRE_RESPONSE_ANSWER_VALUE_CODING":
      return {
        ...state,
        questionnaireResponse: {
          ...state.questionnaireResponse,
          item: [
            ...state.questionnaireResponse.item,
            {
              ...state.questionnaireResponse.item[0],
              answer: [
                {
                  valueCoding: payload,
                },
              ],
            },
          ],
        },
      };
    case "CHANGE_QUESTIONNAIRE_RESPONSE_ANSWER_VALUE_INTEGER":
      return {
        ...state,
        questionnaireResponse: {
          ...state.questionnaireResponse,
          item: [
            ...state.questionnaireResponse.item,
            {
              ...state.questionnaireResponse.item[0],
              answer: [
                {
                  valueInteger: payload,
                },
              ],
            },
          ],
        },
      };
    case "CHANGE_QUESTIONNAIRE_RESPONSE_ANSWER_VALUE_STRING":
      return {
        ...state,
        questionnaireResponse: {
          ...state.questionnaireResponse,
          item: [
            ...state.questionnaireResponse.item,
            {
              ...state.questionnaireResponse.item[0],
              answer: [
                {
                  valueString: payload,
                },
              ],
            },
          ],
        },
      };
    default:
      return state;
  }
};
