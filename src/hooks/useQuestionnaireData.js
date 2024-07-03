import { useSelector } from "react-redux";
import { textsInPatientsChosenLanguage } from "../assets/translationTexts/textsInPatientsChosenLanguage";

const useQuestionnaireData = () => {
  const registeredPatient = useSelector((state) => state.patient);
  const language = registeredPatient.communication[0].language.coding[0].code;
  const translatedTexts = textsInPatientsChosenLanguage[language];
  const Questionnaire = {
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
            text: translatedTexts.information["i.1"],
            type: "group",
            item: [
              {
                linkId: "i.1.1",
                text: translatedTexts.information["i.1.1"],
                type: "display",
              },
            ],
          },
          {
            linkId: "i.2",
            text: translatedTexts.information["i.2"],
            type: "group",
            item: [
              {
                linkId: "i.2.1",
                text: translatedTexts.information["i.2.1"],
                type: "display",
              },
            ],
          },
          {
            linkId: "i.3",
            text: translatedTexts.information["i.3"],
            type: "group",
            item: [
              {
                linkId: "i.3.1",
                text: translatedTexts.information["i.3.1"],
                type: "display",
              },
            ],
          },
          {
            linkId: "i.4",
            text: translatedTexts.information["i.4"],
            type: "group",
            item: [
              {
                linkId: "i.4.1",
                text: translatedTexts.information["i.4.1"],
                type: "display",
              },
            ],
          },
          {
            linkId: "i.5",
            text: translatedTexts.information["i.5"],
            type: "group",
            item: [
              {
                linkId: "i.5.1",
                text: translatedTexts.information["i.5.1"],
                type: "display",
              },
            ],
          },
          {
            linkId: "i.6",
            text: translatedTexts.information["i.6"],
            type: "group",
            item: [
              {
                linkId: "i.6.1",
                text: translatedTexts.information["i.6.1"],
                type: "display",
              },
            ],
          },
          {
            linkId: "i.7",
            text: translatedTexts.information["i.7"],
            type: "group",
            item: [
              {
                linkId: "i.7.1",
                text: translatedTexts.information["i.7.1"],
                type: "display",
              },
              {
                linkId: "i.7.2",
                text: translatedTexts.information["i.7.2"],
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
            text: translatedTexts.questionnaire["q.1"],
            type: "group",
            item: [
              {
                linkId: "q.1.1",
                text: translatedTexts.questionnaire["q.1.1"],
                type: "integer",
                maxLength: 3,
              },
              {
                linkId: "q.1.2",
                text: translatedTexts.questionnaire["q.1.2"],
                type: "integer",
                maxLength: 3,
              },
              {
                linkId: "q.1.3",
                text: translatedTexts.questionnaire["q.1.3"],
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: translatedTexts.questionnaire["q.yes"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: translatedTexts.questionnaire["q.no"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: translatedTexts.questionnaire["q.unknown"],
                    },
                  },
                ],
              },
            ],
          },
          {
            linkId: "q.2",
            text: translatedTexts.questionnaire["q.2"],
            type: "group",
            item: [
              {
                linkId: "q.2.1",
                text: translatedTexts.questionnaire["q.2.1"],
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: translatedTexts.questionnaire["q.yes"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: translatedTexts.questionnaire["q.no"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: translatedTexts.questionnaire["q.unknown"],
                    },
                  },
                ],
              },
              {
                linkId: "q.2.2",
                text: translatedTexts.questionnaire["q.2.2"],
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: translatedTexts.questionnaire["q.yes"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: translatedTexts.questionnaire["q.no"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: translatedTexts.questionnaire["q.unknown"],
                    },
                  },
                ],
              },
              {
                linkId: "q.2.3",
                text: translatedTexts.questionnaire["q.2.3"],
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: translatedTexts.questionnaire["q.yes"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: translatedTexts.questionnaire["q.no"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: translatedTexts.questionnaire["q.unknown"],
                    },
                  },
                ],
              },
              {
                linkId: "q.2.4",
                text: translatedTexts.questionnaire["q.2.4"],
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: translatedTexts.questionnaire["q.yes"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: translatedTexts.questionnaire["q.no"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: translatedTexts.questionnaire["q.unknown"],
                    },
                  },
                ],
              },
            ],
          },
          {
            linkId: "q.3",
            text: translatedTexts.questionnaire["q.3"],
            type: "group",
            item: [
              {
                linkId: "q.3.1",
                text: translatedTexts.questionnaire["q.3.1"],
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: translatedTexts.questionnaire["q.yes"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: translatedTexts.questionnaire["q.no"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: translatedTexts.questionnaire["q.unknown"],
                    },
                  },
                ],
              },
              {
                linkId: "q.3.2",
                text: translatedTexts.questionnaire["q.3.2"],
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: translatedTexts.questionnaire["q.yes"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: translatedTexts.questionnaire["q.no"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: translatedTexts.questionnaire["q.unknown"],
                    },
                  },
                ],
              },
              {
                linkId: "q.3.3",
                text: translatedTexts.questionnaire["q.3.3"],
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: translatedTexts.questionnaire["q.yes"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: translatedTexts.questionnaire["q.no"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: translatedTexts.questionnaire["q.unknown"],
                    },
                  },
                ],
              },
              {
                linkId: "q.3.4",
                text: translatedTexts.questionnaire["q.3.4"],
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: translatedTexts.questionnaire["q.yes"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: translatedTexts.questionnaire["q.no"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: translatedTexts.questionnaire["q.unknown"],
                    },
                  },
                ],
              },
              {
                linkId: "q.3.5",
                text: translatedTexts.questionnaire["q.3.5"],
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: translatedTexts.questionnaire["q.yes"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: translatedTexts.questionnaire["q.no"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: translatedTexts.questionnaire["q.unknown"],
                    },
                  },
                ],
              },
            ],
          },
          {
            linkId: "q.4",
            text: translatedTexts.questionnaire["q.4"],
            type: "group",
            item: [
              {
                linkId: "q.4.1",
                text: translatedTexts.questionnaire["q.4.1"],
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: translatedTexts.questionnaire["q.yes"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: translatedTexts.questionnaire["q.no"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: translatedTexts.questionnaire["q.unknown"],
                    },
                  },
                ],
              },
              {
                linkId: "q.4.2",
                text: translatedTexts.questionnaire["q.4.2"],
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: translatedTexts.questionnaire["q.yes"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: translatedTexts.questionnaire["q.no"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: translatedTexts.questionnaire["q.unknown"],
                    },
                  },
                ],
              },
              {
                linkId: "q.4.3",
                text: translatedTexts.questionnaire["q.4.3"],
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: translatedTexts.questionnaire["q.yes"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: translatedTexts.questionnaire["q.no"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: translatedTexts.questionnaire["q.unknown"],
                    },
                  },
                ],
              },
              {
                linkId: "q.4.4",
                text: translatedTexts.questionnaire["q.4.4"],
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: translatedTexts.questionnaire["q.yes"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: translatedTexts.questionnaire["q.no"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: translatedTexts.questionnaire["q.unknown"],
                    },
                  },
                ],
              },
              {
                linkId: "q.4.5",
                text: translatedTexts.questionnaire["q.4.5"],
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: translatedTexts.questionnaire["q.yes"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: translatedTexts.questionnaire["q.no"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: translatedTexts.questionnaire["q.unknown"],
                    },
                  },
                ],
              },
              {
                linkId: "q.4.6",
                text: translatedTexts.questionnaire["q.4.6"],
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: translatedTexts.questionnaire["q.yes"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: translatedTexts.questionnaire["q.no"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: translatedTexts.questionnaire["q.unknown"],
                    },
                  },
                ],
              },
            ],
          },
          {
            linkId: "q.5",
            text: translatedTexts.questionnaire["q.5"],
            type: "group",
            item: [
              {
                linkId: "q.5.1",
                text: translatedTexts.questionnaire["q.5.1"],
                type: "string",
              },
              {
                linkId: "q.5.2",
                text: translatedTexts.questionnaire["q.5.2"],
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: translatedTexts.questionnaire["q.yes"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: translatedTexts.questionnaire["q.no"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: translatedTexts.questionnaire["q.unknown"],
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
    (item) => item.linkId === "questionnaire"
  );

  const sectionWithLinkIdInformation = Questionnaire.item.find(
    (item) => item.linkId === "information"
  );

  const questionnaireSections = sectionWithLinkIdQuestionnaire.item.map(
    (qItem) => ({
      title: qItem.text, // Use 'text' as the title for the section
      linkId: qItem.linkId, // Use 'linkId' as the key for the section
      data: qItem.item ? qItem.item : [], // Pass the full item objects if they exist
    })
  );

  const informationSections = sectionWithLinkIdInformation.item.map(
    (qItem) => ({
      title: qItem.text, // Use 'text' as the title for the section
      linkId: qItem.linkId, // Use 'linkId' as the key for the section
      data: qItem.item ? qItem.item : [], // Pass the full item objects if they exist
    })
  );

  return { questionnaireSections, informationSections, Questionnaire };
};

export default useQuestionnaireData;
