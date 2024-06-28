import { useSelector } from "react-redux";
import textsInPatientsChosenLanguage from "../assets/translationTexts/textsInPatientsChosenLanguage";

const useQuestionnaireData = () => {
  const registeredPatient = useSelector((state) => state.patient);
  const language = registeredPatient.communication[0].language.coding[0].code;
  const translatedTexts = textsInPatientsChosenLanguage[language];
  console.log(textsInPatientsChosenLanguage);
  const Questionnaire = {
    resourceType: "Questionnaire",
    id: "questionnaire-1",
    status: "active",
    item: [
      {
        linkId: "1",
        text: translatedTexts["1"],
        type: "group",
        item: [
          {
            linkId: "1.1",
            text: translatedTexts["1.1"],
            type: "integer",
            maxLength: 3,
          },
          {
            linkId: "1.2",
            text: translatedTexts["1.2"],
            type: "integer",
            maxLength: 3,
          },
          {
            linkId: "1.3",
            text: translatedTexts["1.3"],
            type: "choice",
            answerOption: [
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "Y",
                  display: translatedTexts["yes"],
                },
              },
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "N",
                  display: translatedTexts["no"],
                },
              },
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "ASKU",
                  display: translatedTexts["unknown"],
                },
              },
            ],
          },
        ],
      },
      {
        linkId: "2",
        text: translatedTexts["2"],
        type: "group",
        item: [
          {
            linkId: "2.1",
            text: translatedTexts["2.1"],
            type: "choice",
            answerOption: [
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "Y",
                  display: translatedTexts["yes"],
                },
              },
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "N",
                  display: translatedTexts["no"],
                },
              },
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "ASKU",
                  display: translatedTexts["unknown"],
                },
              },
            ],
          },
          {
            linkId: "2.2",
            text: translatedTexts["2.2"],
            type: "choice",
            answerOption: [
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "Y",
                  display: translatedTexts["yes"],
                },
              },
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "N",
                  display: translatedTexts["no"],
                },
              },
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "ASKU",
                  display: translatedTexts["unknown"],
                },
              },
            ],
          },
          {
            linkId: "2.3",
            text: translatedTexts["2.3"],
            type: "choice",
            answerOption: [
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "Y",
                  display: translatedTexts["yes"],
                },
              },
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "N",
                  display: translatedTexts["no"],
                },
              },
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "ASKU",
                  display: translatedTexts["unknown"],
                },
              },
            ],
          },
          {
            linkId: "2.4",
            text: translatedTexts["2.4"],
            type: "choice",
            answerOption: [
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "Y",
                  display: translatedTexts["yes"],
                },
              },
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "N",
                  display: translatedTexts["no"],
                },
              },
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "ASKU",
                  display: translatedTexts["unknown"],
                },
              },
            ],
          },
        ],
      },
      {
        linkId: "3",
        text: translatedTexts["3"],
        type: "group",
        item: [
          {
            linkId: "3.1",
            text: translatedTexts["3.1"],
            type: "choice",
            answerOption: [
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "Y",
                  display: translatedTexts["yes"],
                },
              },
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "N",
                  display: translatedTexts["no"],
                },
              },
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "ASKU",
                  display: translatedTexts["unknown"],
                },
              },
            ],
          },
          {
            linkId: "3.2",
            text: translatedTexts["3.2"],
            type: "choice",
            answerOption: [
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "Y",
                  display: translatedTexts["yes"],
                },
              },
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "N",
                  display: translatedTexts["no"],
                },
              },
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "ASKU",
                  display: translatedTexts["unknown"],
                },
              },
            ],
          },
          {
            linkId: "3.3",
            text: translatedTexts["3.3"],
            type: "choice",
            answerOption: [
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "Y",
                  display: translatedTexts["yes"],
                },
              },
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "N",
                  display: translatedTexts["no"],
                },
              },
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "ASKU",
                  display: translatedTexts["unknown"],
                },
              },
            ],
          },
          {
            linkId: "3.4",
            text: translatedTexts["3.4"],
            type: "choice",
            answerOption: [
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "Y",
                  display: translatedTexts["yes"],
                },
              },
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "N",
                  display: translatedTexts["no"],
                },
              },
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "ASKU",
                  display: translatedTexts["unknown"],
                },
              },
            ],
          },
          {
            linkId: "3.5",
            text: translatedTexts["3.5"],
            type: "choice",
            answerOption: [
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "Y",
                  display: translatedTexts["yes"],
                },
              },
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "N",
                  display: translatedTexts["no"],
                },
              },
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "ASKU",
                  display: translatedTexts["unknown"],
                },
              },
            ],
          },
        ],
      },
      {
        linkId: "4",
        text: translatedTexts["4"],
        type: "group",
        item: [
          {
            linkId: "4.1",
            text: translatedTexts["4.1"],
            type: "choice",
            answerOption: [
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "Y",
                  display: translatedTexts["yes"],
                },
              },
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "N",
                  display: translatedTexts["no"],
                },
              },
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "ASKU",
                  display: translatedTexts["unknown"],
                },
              },
            ],
          },
          {
            linkId: "4.2",
            text: translatedTexts["4.2"],
            type: "choice",
            answerOption: [
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "Y",
                  display: translatedTexts["yes"],
                },
              },
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "N",
                  display: translatedTexts["no"],
                },
              },
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "ASKU",
                  display: translatedTexts["unknown"],
                },
              },
            ],
          },
          {
            linkId: "4.3",
            text: translatedTexts["4.3"],
            type: "choice",
            answerOption: [
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "Y",
                  display: translatedTexts["yes"],
                },
              },
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "N",
                  display: translatedTexts["no"],
                },
              },
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "ASKU",
                  display: translatedTexts["unknown"],
                },
              },
            ],
          },
          {
            linkId: "4.4",
            text: translatedTexts["4.4"],
            type: "choice",
            answerOption: [
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "Y",
                  display: translatedTexts["yes"],
                },
              },
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "N",
                  display: translatedTexts["no"],
                },
              },
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "ASKU",
                  display: translatedTexts["unknown"],
                },
              },
            ],
          },
          {
            linkId: "4.5",
            text: translatedTexts["4.5"],
            type: "choice",
            answerOption: [
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "Y",
                  display: translatedTexts["yes"],
                },
              },
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "N",
                  display: translatedTexts["no"],
                },
              },
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "ASKU",
                  display: translatedTexts["unknown"],
                },
              },
            ],
          },
          {
            linkId: "4.6",
            text: translatedTexts["4.6"],
            type: "choice",
            answerOption: [
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "Y",
                  display: translatedTexts["yes"],
                },
              },
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "N",
                  display: translatedTexts["no"],
                },
              },
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "ASKU",
                  display: translatedTexts["unknown"],
                },
              },
            ],
          },
        ],
      },
      {
        linkId: "5",
        text: translatedTexts["5"],
        type: "group",
        item: [
          {
            linkId: "5.1",
            text: translatedTexts["5.1"],
            type: "string",
          },
          {
            linkId: "5.2",
            text: translatedTexts["5.2"],
            type: "choice",
            answerOption: [
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "Y",
                  display: translatedTexts["yes"],
                },
              },
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "N",
                  display: translatedTexts["no"],
                },
              },
              {
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                  code: "ASKU",
                  display: translatedTexts["unknown"],
                },
              },
            ],
          },
        ],
      },
    ],
  };

  // Transform the Questionnaire resource into a format that can be used by the SectionList component
  const questionnaireSections = Questionnaire.item.map((qItem) => ({
    title: qItem.text, // Use 'text' as the title for the section
    linkId: qItem.linkId, // Use 'linkId' as the key for the section
    data: qItem.item ? qItem.item : [], // Pass the full item objects if they exist
  }));

  return { questionnaireSections, Questionnaire };
};

export default useQuestionnaireData;
