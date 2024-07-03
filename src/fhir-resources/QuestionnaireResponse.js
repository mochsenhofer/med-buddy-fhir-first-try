import { Patient } from "./Patient.js";
import { Questionnaire } from "./Questionnaire.js";

export const QuestionnaireResponse = {
  resourceType: "QuestionnaireResponse",
  status: "in-progress",
  id: "questionnaire-response-01",
  contained: [Patient],
  questionnaire: {
    reference: `#${Questionnaire.id}`,
  },
  author: {
    reference: `#${Patient.id}`,
  },
  item: [
    {
      linkId: "q.1",
      text: "Please answer the following questions to the best of your knowledge.",
      item: [
        {
          linkId: "q.1.1",
          text: "Size (cm)",
          answer: [{ valueInteger: 0 }],
        },
        {
          linkId: "q.1.2",
          text: "Weight (kg)",
          answer: [{ valueInteger: 0 }],
        },
        {
          linkId: "q.1.3",
          text: "Is there a possibility of pregnancy?",
          answer: [
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "UNK",
              },
            },
          ],
        },
      ],
    },
    {
      linkId: "q.2",
      text: "Did you have one of these examinations before?",
      item: [
        {
          linkId: "q.2.1",
          text: "Computer tomography (CT)",
          answer: [
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "UNK",
              },
            },
          ],
        },
        {
          linkId: "q.2.2",
          text: "Vascular X-ray (Angiography / Cardiac Catheter)",
          answer: [
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "UNK",
              },
            },
          ],
        },
        {
          linkId: "q.2.3",
          text: "Kidney X-ray (Urography)",
          answer: [
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "UNK",
              },
            },
          ],
        },
        {
          linkId: "q.2.4",
          text: "Leg vein imaging (phlebography)",
          answer: [
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "UNK",
              },
            },
          ],
        },
      ],
    },
    {
      linkId: "q.3",
      text: "Did you experience any side-effects after the administration of contrast agents? If so, which ones?",
      item: [
        {
          linkId: "q.3.1",
          text: "Nausea/Vomiting/Suffocation",
          answer: [
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "UNK",
              },
            },
          ],
        },
        {
          linkId: "q.3.2",
          text: "Astma attack / shortness of breath",
          answer: [
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "UNK",
              },
            },
          ],
        },
        // Additional side-effects based on the provided questionnaire structure
        {
          linkId: "q.3.3",
          text: "Rash",
          answer: [
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "UNK",
              },
            },
          ],
        },
        {
          linkId: "q.3.4",
          text: "Seizures / unconsciousness",
          answer: [
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "UNK",
              },
            },
          ],
        },
        {
          linkId: "q.3.5",
          text: "Shivering attacks",
          answer: [
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "UNK",
              },
            },
          ],
        },
      ],
    },
    {
      linkId: "q.4",
      text: "Do you suffer from any of the following medical conditions?",
      item: [
        // Following the pattern for medical conditions
        {
          linkId: "q.4.1",
          text: "Allergies that require treatment?",
          answer: [
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "UNK",
              },
            },
          ],
        },
        {
          linkId: "q.4.2",
          text: "of the heart?",
          answer: [
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "UNK",
              },
            },
          ],
        },
        // Adding remaining conditions as per the questionnaire structure
        {
          linkId: "q.4.3",
          text: "of the kidney / adrenal gland?",
          answer: [
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "UNK",
              },
            },
          ],
        },
        {
          linkId: "q.4.4",
          text: "of the thyroid gland?",
          answer: [
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "UNK",
              },
            },
          ],
        },
        {
          linkId: "q.4.5",
          text: "Diabetes?",
          answer: [
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "UNK",
              },
            },
          ],
        },
        {
          linkId: "q.4.6",
          text: "Myasthenia gravis? (specific muscle disease)",
          answer: [
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "UNK",
              },
            },
          ],
        },
      ],
    },
    {
      linkId: "q.5",
      text: "Please answer the following questions to the best of your knowledge.",
      item: [
        {
          linkId: "q.5.1",
          text: "If yes, which diabetes medications do you take?",
          answer: [
            {
              valueString: "",
            },
          ],
        },
        {
          linkId: "q.5.2",
          text: "Do you carry a pacemaker?",
          answer: [
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "UNK",
              },
            },
          ],
        },
      ],
    },
  ],
};
