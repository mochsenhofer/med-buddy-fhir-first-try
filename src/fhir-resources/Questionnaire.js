export const Questionnaire = {
  resourceType: "Questionnaire",
  id: "questionnaire-1",
  status: "active",
  item: [
    {
      linkId: "0",
      text: "Patient Information",
      type: "group",
      item: [
        {
          linkId: "0.1",
          text: "A CT scan is an special X-Ray examination",
          type: "display",
        },
      ],
    },
    {
      linkId: "1",
      text: "Please answer the following questions to the best of your knowledge.",
      type: "group",
      item: [
        {
          linkId: "1.1",
          text: "Size (cm)",
          type: "integer",
          maxLength: 3,
        },
        {
          linkId: "1.2",
          text: "Weight (kg)",
          type: "integer",
          maxLength: 3,
        },
        {
          linkId: "1.3",
          text: "Is there a possibility of pregnancy?",
          type: "choice",
          answerOption: [
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "Y",
                display: "Yes",
              },
            },
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "N",
                display: "No",
              },
            },
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "ASKU",
                display: "asked but unknown",
              },
            },
          ],
        },
      ],
    },
    {
      linkId: "2",
      text: "Did you have one of these examinations before?",
      type: "group",
      item: [
        {
          linkId: "2.1",
          text: "Computer tomography (CT)",
          type: "choice",
          answerOption: [
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "Y",
                display: "Yes",
              },
            },
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "N",
                display: "No",
              },
            },
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "ASKU",
                display: "asked but unknown",
              },
            },
          ],
        },
        {
          linkId: "2.2",
          text: "Vascular X-ray (Angiography / Cardiac Catheter)",
          type: "choice",
          answerOption: [
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "Y",
                display: "Yes",
              },
            },
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "N",
                display: "No",
              },
            },
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "ASKU",
                display: "asked but unknown",
              },
            },
          ],
        },
        {
          linkId: "2.3",
          text: "Kidney X-ray (Urography)",
          type: "choice",
          answerOption: [
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "Y",
                display: "Yes",
              },
            },
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "N",
                display: "No",
              },
            },
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "ASKU",
                display: "asked but unknown",
              },
            },
          ],
        },
        {
          linkId: "2.4",
          text: "Leg vein imaging (phlebography)",
          type: "choice",
          answerOption: [
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "Y",
                display: "Yes",
              },
            },
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "N",
                display: "No",
              },
            },
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "ASKU",
                display: "asked but unknown",
              },
            },
          ],
        },
      ],
    },
    {
      linkId: "3",
      text: "Did you experience any side-effects after the administration of contrast agents? If so, which ones?",
      type: "group",
      item: [
        {
          linkId: "3.1",
          text: "Nausea/Vomiting/Suffocation",
          type: "choice",
          answerOption: [
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "Y",
                display: "Yes",
              },
            },
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "N",
                display: "No",
              },
            },
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "ASKU",
                display: "asked but unknown",
              },
            },
          ],
        },
        {
          linkId: "3.2",
          text: "Astma attack / shortness of breath",
          type: "choice",
          answerOption: [
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "Y",
                display: "Yes",
              },
            },
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "N",
                display: "No",
              },
            },
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "ASKU",
                display: "asked but unknown",
              },
            },
          ],
        },
        {
          linkId: "3.3",
          text: "Rash",
          type: "choice",
          answerOption: [
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "Y",
                display: "Yes",
              },
            },
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "N",
                display: "No",
              },
            },
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "ASKU",
                display: "asked but unknown",
              },
            },
          ],
        },
        {
          linkId: "3.4",
          text: "Seizures / unconsciousness",
          type: "choice",
          answerOption: [
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "Y",
                display: "Yes",
              },
            },
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "N",
                display: "No",
              },
            },
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "ASKU",
                display: "asked but unknown",
              },
            },
          ],
        },
        {
          linkId: "3.5",
          text: "Shivering attacks",
          type: "choice",
          answerOption: [
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "Y",
                display: "Yes",
              },
            },
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "N",
                display: "No",
              },
            },
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "ASKU",
                display: "asked but unknown",
              },
            },
          ],
        },
      ],
    },
    {
      linkId: "4",
      text: "Do you suffer from any of the following medical conditions?",
      type: "group",
      item: [
        {
          linkId: "4.1",
          text: "Allergies that require treatment?",
          type: "choice",
          answerOption: [
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "Y",
                display: "Yes",
              },
            },
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "N",
                display: "No",
              },
            },
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "ASKU",
                display: "asked but unknown",
              },
            },
          ],
        },
        {
          linkId: "4.2",
          text: "of the heart?",
          type: "choice",
          answerOption: [
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "Y",
                display: "Yes",
              },
            },
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "N",
                display: "No",
              },
            },
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "ASKU",
                display: "asked but unknown",
              },
            },
          ],
        },
        {
          linkId: "4.3",
          text: "of the kidney / adrenal gland?",
          type: "choice",
          answerOption: [
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "Y",
                display: "Yes",
              },
            },
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "N",
                display: "No",
              },
            },
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "ASKU",
                display: "asked but unknown",
              },
            },
          ],
        },
        {
          linkId: "4.4",
          text: "of the thyroid gland?",
          type: "choice",
          answerOption: [
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "Y",
                display: "Yes",
              },
            },
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "N",
                display: "No",
              },
            },
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "ASKU",
                display: "asked but unknown",
              },
            },
          ],
        },
        {
          linkId: "4.5",
          text: "Diabetes?",
          type: "choice",
          answerOption: [
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "Y",
                display: "Yes",
              },
            },
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "N",
                display: "No",
              },
            },
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "ASKU",
                display: "asked but unknown",
              },
            },
          ],
        },
        {
          linkId: "4.6",
          text: "Myasthenia gravis? (specific muscle disease)",
          type: "choice",
          answerOption: [
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "Y",
                display: "Yes",
              },
            },
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "N",
                display: "No",
              },
            },
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "ASKU",
                display: "asked but unknown",
              },
            },
          ],
        },
      ],
    },
    {
      linkId: "5",
      text: "Please answer the following questions to the best of your knowledge.",
      type: "group",
      item: [
        {
          linkId: "5.1",
          text: "If yes, which diabetes medications do you take?",
          type: "string",
        },
        {
          linkId: "5.2",
          text: "Do you carry a pacemaker?",
          type: "choice",
          answerOption: [
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "Y",
                display: "Yes",
              },
            },
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "N",
                display: "No",
              },
            },
            {
              valueCoding: {
                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                code: "ASKU",
                display: "asked but unknown",
              },
            },
          ],
        },
      ],
    },
  ],
};

// Transform the Questionnaire resource into a format that can be used by the SectionList component

export const questionnaireSections = Questionnaire.item.map((qItem) => ({
  title: qItem.text, // Use 'text' as the title for the section
  linkId: qItem.linkId, // Use 'linkId' as the key for the section
  data: qItem.item ? qItem.item : [], // Pass the full item objects if they exist
}));
