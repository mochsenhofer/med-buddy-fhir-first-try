// Your Questionnaire resource
export const Questionnaire = {
  resourceType: "Questionnaire",
  id: "questionnaire-1",
  status: "active",
  item: [
    {
      linkId: "information",
      type: "group",
      readOnly: true,
      item: [
        {
          linkId: "i.1",
          text: "Informationtext 1",
          type: "group",
          item: [
            {
              linkId: "i.1.1",
              text: "Some information text 1",
              type: "display",
            },
          ],
        },
      ],
    },
    {
      linkId: "questionnaire",
      type: "group",
      readOnly: false,
      item: [
        {
          linkId: "q.1",
          text: "Please answer the following questions",
          type: "group",
          item: [
            {
              linkId: "q.1.1",
              text: "Size (cm)",
              type: "integer",
              maxLength: 3,
            },
            {
              linkId: "q.1.2",
              text: "Weight (kg)",
              type: "integer",
              maxLength: 3,
            },
            {
              linkId: "q.1.3",
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
      ],
    },
  ],
};

// Transform the Questionnaire resource into a format that can be used by the SectionList component

const sectionWithLinkIdQuestionnaire = Questionnaire.item.find(
  (item) => item.linkId === "questionnaire" // Correct equality check
);

console.log(
  "sectionWithLinkIdQuestionnaire: " +
    JSON.stringify(sectionWithLinkIdQuestionnaire, null, 2)
);

export const questionnaireSections = sectionWithLinkIdQuestionnaire.item.map(
  (qItem) => ({
    title: qItem.text, // Use 'text' as the title for the section
    linkId: qItem.linkId, // Use 'linkId' as the key for the section
    data: qItem.item ? qItem.item : [], // Pass the full item objects if they exist
  })
);

console.log(
  "questionnaireSections: " + JSON.stringify(questionnaireSections, null, 2)
);

// Now you can use 'questionnaireSections' with the SectionList component
