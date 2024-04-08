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
            text: "Personal Information",
            item: [
                {
                    linkId: "1.1",
                    text: "Size",
                    answer: [
                        {
                            valueInteger: 180,
                        },
                    ],
                },
                {
                    linkId: "1.2",
                    text: "Weight",
                    answer: [
                        {
                            valueInteger: 79,
                        },
                    ],
                },
            ],
        },
        {
            linkId: "2",
            text: "Previous Examinations",
            item: [
                {
                    linkId: "2.1",
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
                {
                    linkId: "2.2",
                    text: "Vascular X-ray (Angiography / Cardiac Catheter)",
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
