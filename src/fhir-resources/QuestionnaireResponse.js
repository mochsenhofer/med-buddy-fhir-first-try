import { Patient } from "./Patient.js";

export const QuestionnaireResponse = {
    resourceType: "QuestionnaireResponse",
    status: "in-progress",
    id: "questionnaire-response-01",
    author: 
    {
        reference: `#${Patient.id}`,
    },
    contained: [
        Patient,
    ],
    item: [
        {
            linkId: "1",
            text: "Patient Information",
            item: [
                {
                    linkId: "1.1",
                    text: "CT Examination",
                    answer: [
                        {
                            valueCoding: {
                                system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                                code: "UNK",
                            }
                        },
                    ],
                },
            ],
        },
    ],    
};
