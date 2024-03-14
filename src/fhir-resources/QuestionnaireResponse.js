export const QuestionnaireResponse = {
    resourceType: "QuestionnaireResponse",
    status: "completed",
    id: "questionnaire-response-01",
    contained: [
        {
            resourceType: "Patient",
            id: "patient-01",
            gender: "male",
            birthDate: "1905-08-23",
            name: [
                {
                    family: "Turbo",
                    given: ["Tom"],
                },
            ],
            identifier: [
                {
                    type: {
                        coding: [
                            {
                                system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                                code: "SS",
                                display: "Social Security number"
                            }
                        ],
                    },
                    value: "78689",
                    use: "official",
                },
            ]
            
        },
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
                                system: "http://terminology.hl7.org/CodeSystem/v2-0136",
                                code: "Y",
                            }
                        },
                    ],
                },
            ],
        },
    ],
};
