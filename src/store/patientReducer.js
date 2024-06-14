import { Patient } from "../fhir-resources/Patient";

const initialPatientState = {
  patient: Patient,
};
export default (state = initialPatientState, { type, payload }) => {
  switch (type) {
    case "CHANGE_PATIENTS_GIVEN_NAME":
      return {
        ...state,
        patient: {
          ...state.patient,
          name: [
            {
              ...state.patient.name[0],
              given: [payload],
            },
          ],
        },
      };
    case "CHANGE_PATIENTS_FAMILY_NAME":
      return {
        ...state,
        patient: {
          ...state.patient,
          name: [
            {
              ...state.patient.name[0],
              family: payload,
            },
          ],
        },
      };
    case "CHANGE_PATIENTS_BIRTHDATE":
      return {
        ...state,
        patient: {
          ...state.patient,
          birthDate: payload,
        },
      };
    case "CHANGE_PATIENTS_INSURANCE_NUMBER":
      return {
        ...state,
        patient: {
          ...state.patient,
          identifier: [
            {
              ...state.patient.identifier[0],
              value: payload,
            },
          ],
        },
      };
  }

  return state;
};
