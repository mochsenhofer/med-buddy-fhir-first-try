import { useSelector } from "react-redux";
import { textsInPatientsChosenLanguage } from "../assets/translationTexts/textsInPatientsChosenLanguage";

const useQuestionnaireData = () => {
  const registeredPatient = useSelector((state) => state.patient);
  const language =
    registeredPatient.communication[0].language.coding[0].code || "en";

  const translatedInformationTexts =
    textsInPatientsChosenLanguage[language]?.informationScreen?.information ||
    {};
  const translatedQuestionnaireTexts =
    textsInPatientsChosenLanguage[language]?.questionnaireScreen
      ?.questionnaire || {};
  const translatedConsentTexts =
    textsInPatientsChosenLanguage[language]?.consentScreen || {};

  const getText = (translations, key) =>
    translations[key] || "Text not available";

  const Questionnaire = {
    resourceType: "Questionnaire",
    id: language,
    status: "active",
    item: [
      {
        linkId: "information",
        type: "group",
        readOnly: true,
        item: [
          {
            linkId: "i.1",
            text: getText(translatedInformationTexts, "i.1"),
            type: "group",
            item: [
              {
                linkId: "i.1.1",
                text: getText(translatedInformationTexts, "i.1.1"),
                type: "display",
              },
            ],
          },
          {
            linkId: "i.2",
            text: getText(translatedInformationTexts, "i.2"),
            type: "group",
            item: [
              {
                linkId: "i.2.1",
                text: getText(translatedInformationTexts, "i.2.1"),
                type: "display",
              },
            ],
          },
          {
            linkId: "i.3",
            text: getText(translatedInformationTexts, "i.3"),
            type: "group",
            item: [
              {
                linkId: "i.3.1",
                text: getText(translatedInformationTexts, "i.3.1"),
                type: "display",
              },
            ],
          },
          {
            linkId: "i.4",
            text: getText(translatedInformationTexts, "i.4"),
            type: "group",
            item: [
              {
                linkId: "i.4.1",
                text: getText(translatedInformationTexts, "i.4.1"),
                type: "display",
              },
            ],
          },
          {
            linkId: "i.5",
            text: getText(translatedInformationTexts, "i.5"),
            type: "group",
            item: [
              {
                linkId: "i.5.1",
                text: getText(translatedInformationTexts, "i.5.1"),
                type: "display",
              },
            ],
          },
          {
            linkId: "i.6",
            text: getText(translatedInformationTexts, "i.6"),
            type: "group",
            item: [
              {
                linkId: "i.6.1",
                text: getText(translatedInformationTexts, "i.6.1"),
                type: "display",
              },
            ],
          },
          {
            linkId: "i.7",
            text: getText(translatedInformationTexts, "i.7"),
            type: "group",
            item: [
              {
                linkId: "i.7.1",
                text: getText(translatedInformationTexts, "i.7.1"),
                type: "display",
              },
              {
                linkId: "i.7.2",
                text: getText(translatedInformationTexts, "i.7.2"),
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
            text: getText(translatedQuestionnaireTexts, "q.1"),
            type: "group",
            item: [
              {
                linkId: "q.1.1",
                text: getText(translatedQuestionnaireTexts, "q.1.1"),
                type: "integer",
                maxLength: 3,
              },
              {
                linkId: "q.1.2",
                text: getText(translatedQuestionnaireTexts, "q.1.2"),
                type: "integer",
                maxLength: 3,
              },
              {
                linkId: "q.1.3",
                text: getText(translatedQuestionnaireTexts, "q.1.3"),
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: getText(translatedQuestionnaireTexts, "q.yes"),
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: getText(translatedQuestionnaireTexts, "q.no"),
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: getText(
                        translatedQuestionnaireTexts,
                        "q.unknown"
                      ),
                    },
                  },
                ],
              },
            ],
          },
          {
            linkId: "q.2",
            text: getText(translatedQuestionnaireTexts, "q.2"),
            type: "group",
            item: [
              {
                linkId: "q.2.1",
                text: getText(translatedQuestionnaireTexts, "q.2.1"),
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: getText(translatedQuestionnaireTexts, "q.yes"),
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: getText(translatedQuestionnaireTexts, "q.no"),
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: getText(
                        translatedQuestionnaireTexts,
                        "q.unknown"
                      ),
                    },
                  },
                ],
              },
              {
                linkId: "q.2.2",
                text: getText(translatedQuestionnaireTexts, "q.2.2"),
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: getText(translatedQuestionnaireTexts, "q.yes"),
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: getText(translatedQuestionnaireTexts, "q.no"),
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: getText(
                        translatedQuestionnaireTexts,
                        "q.unknown"
                      ),
                    },
                  },
                ],
              },
              {
                linkId: "q.2.3",
                text: getText(translatedQuestionnaireTexts, "q.2.3"),
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: getText(translatedQuestionnaireTexts, "q.yes"),
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: getText(translatedQuestionnaireTexts, "q.no"),
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: getText(
                        translatedQuestionnaireTexts,
                        "q.unknown"
                      ),
                    },
                  },
                ],
              },
              {
                linkId: "q.2.4",
                text: getText(translatedQuestionnaireTexts, "q.2.4"),
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: getText(translatedQuestionnaireTexts, "q.yes"),
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: getText(translatedQuestionnaireTexts, "q.no"),
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: getText(
                        translatedQuestionnaireTexts,
                        "q.unknown"
                      ),
                    },
                  },
                ],
              },
            ],
          },
          {
            linkId: "q.3",
            text: getText(translatedQuestionnaireTexts, "q.3"),
            type: "group",
            item: [
              {
                linkId: "q.3.1",
                text: getText(translatedQuestionnaireTexts, "q.3.1"),
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: getText(translatedQuestionnaireTexts, "q.yes"),
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: getText(translatedQuestionnaireTexts, "q.no"),
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: getText(
                        translatedQuestionnaireTexts,
                        "q.unknown"
                      ),
                    },
                  },
                ],
              },
              {
                linkId: "q.3.2",
                text: getText(translatedQuestionnaireTexts, "q.3.2"),
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: getText(translatedQuestionnaireTexts, "q.yes"),
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: getText(translatedQuestionnaireTexts, "q.no"),
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: getText(
                        translatedQuestionnaireTexts,
                        "q.unknown"
                      ),
                    },
                  },
                ],
              },
              {
                linkId: "q.3.3",
                text: getText(translatedQuestionnaireTexts, "q.3.3"),
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: getText(translatedQuestionnaireTexts, "q.yes"),
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: getText(translatedQuestionnaireTexts, "q.no"),
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: getText(
                        translatedQuestionnaireTexts,
                        "q.unknown"
                      ),
                    },
                  },
                ],
              },
              {
                linkId: "q.3.4",
                text: getText(translatedQuestionnaireTexts, "q.3.4"),
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: getText(translatedQuestionnaireTexts, "q.yes"),
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: getText(translatedQuestionnaireTexts, "q.no"),
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: getText(
                        translatedQuestionnaireTexts,
                        "q.unknown"
                      ),
                    },
                  },
                ],
              },
              {
                linkId: "q.3.5",
                text: getText(translatedQuestionnaireTexts, "q.3.5"),
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: getText(translatedQuestionnaireTexts, "q.yes"),
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: getText(translatedQuestionnaireTexts, "q.no"),
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: getText(
                        translatedQuestionnaireTexts,
                        "q.unknown"
                      ),
                    },
                  },
                ],
              },
            ],
          },
          {
            linkId: "q.4",
            text: getText(translatedQuestionnaireTexts, "q.4"),
            type: "group",
            item: [
              {
                linkId: "q.4.1",
                text: getText(translatedQuestionnaireTexts, "q.4.1"),
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: getText(translatedQuestionnaireTexts, "q.yes"),
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: getText(translatedQuestionnaireTexts, "q.no"),
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: getText(
                        translatedQuestionnaireTexts,
                        "q.unknown"
                      ),
                    },
                  },
                ],
              },
              {
                linkId: "q.4.2",
                text: getText(translatedQuestionnaireTexts, "q.4.2"),
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: getText(translatedQuestionnaireTexts, "q.yes"),
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: getText(translatedQuestionnaireTexts, "q.no"),
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: getText(
                        translatedQuestionnaireTexts,
                        "q.unknown"
                      ),
                    },
                  },
                ],
              },
              {
                linkId: "q.4.3",
                text: getText(translatedQuestionnaireTexts, "q.4.3"),
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: getText(translatedQuestionnaireTexts, "q.yes"),
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: getText(translatedQuestionnaireTexts, "q.no"),
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: getText(
                        translatedQuestionnaireTexts,
                        "q.unknown"
                      ),
                    },
                  },
                ],
              },
              {
                linkId: "q.4.4",
                text: getText(translatedQuestionnaireTexts, "q.4.4"),
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: getText(translatedQuestionnaireTexts, "q.yes"),
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: getText(translatedQuestionnaireTexts, "q.no"),
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: getText(
                        translatedQuestionnaireTexts,
                        "q.unknown"
                      ),
                    },
                  },
                ],
              },
              {
                linkId: "q.4.5",
                text: getText(translatedQuestionnaireTexts, "q.4.5"),
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: getText(translatedQuestionnaireTexts, "q.yes"),
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: getText(translatedQuestionnaireTexts, "q.no"),
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: getText(
                        translatedQuestionnaireTexts,
                        "q.unknown"
                      ),
                    },
                  },
                ],
              },
              {
                linkId: "q.4.6",
                text: getText(translatedQuestionnaireTexts, "q.4.6"),
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: getText(translatedQuestionnaireTexts, "q.yes"),
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: getText(translatedQuestionnaireTexts, "q.no"),
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: getText(
                        translatedQuestionnaireTexts,
                        "q.unknown"
                      ),
                    },
                  },
                ],
              },
            ],
          },
          {
            linkId: "q.5",
            text: getText(translatedQuestionnaireTexts, "q.5"),
            type: "group",
            item: [
              {
                linkId: "q.5.1",
                text: getText(translatedQuestionnaireTexts, "q.5.1"),
                type: "string",
              },
              {
                linkId: "q.5.2",
                text: getText(translatedQuestionnaireTexts, "q.5.2"),
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: getText(translatedQuestionnaireTexts, "q.yes"),
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: getText(translatedQuestionnaireTexts, "q.no"),
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: getText(
                        translatedQuestionnaireTexts,
                        "q.unknown"
                      ),
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        linkId: "consent",
        type: "group",
        item: [
          {
            linkId: "c.1",
            text: getText(translatedConsentTexts, "c.1"),
            type: "group",
            item: [
              {
                linkId: "c.1.1",
                text: getText(translatedConsentTexts, "c.1.1"),
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: getText(translatedQuestionnaireTexts, "q.yes"),
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: getText(translatedQuestionnaireTexts, "q.no"),
                    },
                  },
                ],
              },
            ],
          },
          {
            linkId: "c.2",
            text: getText(translatedConsentTexts, "c.2"),
            type: "group",
            item: [
              {
                linkId: "c.2.1",
                text: getText(translatedConsentTexts, "c.2.1"),
                type: "string",
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

  const sectionWithLinkIdConsent = Questionnaire.item.find(
    (item) => item.linkId === "consent"
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

  const consentSections = sectionWithLinkIdConsent.item.map((qItem) => ({
    title: qItem.text, // Use 'text' as the title for the section
    linkId: qItem.linkId, // Use 'linkId' as the key for the section
    data: qItem.item ? qItem.item : [], // Pass the full item objects if they exist
  }));

  return {
    consentSections,
    questionnaireSections,
    informationSections,
    Questionnaire,
  };
};

export default useQuestionnaireData;
