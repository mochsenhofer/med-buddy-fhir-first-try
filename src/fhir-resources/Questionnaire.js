export const Questionnaire = {
    resourceType: "Questionnaire",
    id: "questionnaire-1",
    subjectType: ["Patient"],
    status: "active",
    item: [
        {
            linkId: "1",
            text: "Did you have one of these examinations before?",
            type: "group",
            item: [
                {
                    linkId: "1.1",
                    text: "Computed Tomography (CT)",
                    display: "Computed Tomography (CT)",
                    type: "choice",
                    answerOption: [
                        {
                            valueCoding: {
                                system: "http://terminology.hl7.org/CodeSystem/v2-0136",
                                code: "N",
                                text: "No",
                                display: "No"
                            }
                        },
                        {
                            valueCoding: {
                                system: "http://terminology.hl7.org/CodeSystem/v2-0136",
                                code: "Y",
                                text: "Yes",
                                display: "Yes"
                            }
                        },
                        {
                            valueCoding: {
                                system: "http://terminology.hl7.org/CodeSystem/v2-0136",
                                code: "ASKU",
                                text: "Unknown",
                                display: "I don't know"
                            }
                        }
                    ]
                },
                {
                    linkId: "1.2",
                    text: "Vascular X-ray (Angiography / Cardiac Catheter)",
                    type: "choice",
                    answerOption: [
                        {
                            valueCoding: {
                                system: "http://terminology.hl7.org/CodeSystem/v2-0136",
                                code: "N",
                                text: "No",
                                display: "No"
                            }
                        },
                        {
                            valueCoding: {
                                system: "http://terminology.hl7.org/CodeSystem/v2-0136",
                                code: "Y",
                                text: "Yes",
                                display: "Yes"
                            }
                        },
                        {
                            valueCoding: {
                                system: "http://terminology.hl7.org/CodeSystem/v2-0136",
                                code: "ASKU",
                                text: "Unknown",
                                display: "I don't know"
                            }
                        }
                    ]
                },
                {
                    linkId: "1.3",
                    text: "Kidney X-ray (Urography)",
                    display: "Kidney X-ray (Urography)",
                    type: "choice",
                    answerOption: [
                        {
                            valueCoding: {
                                system: "http://terminology.hl7.org/CodeSystem/v2-0136",
                                code: "N",
                                text: "No",
                                display: "No"
                            }
                        },
                        {
                            valueCoding: {
                                system: "http://terminology.hl7.org/CodeSystem/v2-0136",
                                code: "Y",
                                text: "Yes",
                                display: "Yes"
                            }
                        },
                        {
                            valueCoding: {
                                system: "http://terminology.hl7.org/CodeSystem/v2-0136",
                                code: "ASKU",
                                text: "Unknown",
                                display: "I don't know"
                            }
                        }
                    ]
                },
                {
                    linkId: "1.4",
                    text: "Leg vein imaging (phlebography)",
                    type: "choice",
                    answerOption: [
                        {
                            valueCoding: {
                                system: "http://terminology.hl7.org/CodeSystem/v2-0136",
                                code: "N",
                                text: "No",
                                display: "No"
                            }
                        },
                        {
                            valueCoding: {
                                system: "http://terminology.hl7.org/CodeSystem/v2-0136",
                                code: "Y",
                                text: "Yes",
                                display: "Yes"
                            }
                        },
                        {
                            valueCoding: {
                                system: "http://terminology.hl7.org/CodeSystem/v2-0136",
                                code: "ASKU",
                                text: "Unknown",
                                display: "I don't know"
                            }
                        }
                    ]
                },
                // Placeholder for additional questions within this group
            ],
        },
        {
            linkId: "2",
            text: "Did you experience any side-effects after the administration of contrast agents? If so, which ones?",
            type: "group",
            item: [
                {
                    linkId: "2.1",
                    text: "Nausea/Vomiting/Suffocation",
                    type: "choice",
                    answerOption: [
                        {
                            valueCoding: {
                                system: "http://terminology.hl7.org/CodeSystem/v2-0136",
                                code: "N",
                                text: "No",
                                display: "No"
                            }
                        },
                        {
                            valueCoding: {
                                system: "http://terminology.hl7.org/CodeSystem/v2-0136",
                                code: "Y",
                                text: "Yes",
                                display: "Yes"
                            }
                        },
                        {
                            valueCoding: {
                                system: "http://terminology.hl7.org/CodeSystem/v2-0136",
                                code: "ASKU",
                                text: "Unknown",
                                display: "I don't know"
                            }
                        }
                    ]
                },
                {
                    linkId: "2.2",
                    text: "Astma attack / shortness of breath",
                    type: "choice",
                    answerOption: [
                        {
                            valueCoding: {
                                system: "http://terminology.hl7.org/CodeSystem/v2-0136",
                                code: "N",
                                text: "No",
                                display: "No"
                            }
                        },
                        {
                            valueCoding: {
                                system: "http://terminology.hl7.org/CodeSystem/v2-0136",
                                code: "Y",
                                text: "Yes",
                                display: "Yes"
                            }
                        },
                        {
                            valueCoding: {
                                system: "http://terminology.hl7.org/CodeSystem/v2-0136",
                                code: "ASKU",
                                text: "Unknown",
                                display: "I don't know"
                            }
                        }
                    ]
                },
                {
                    linkId: "2.3",
                    text: "Rash",
                    display: "Rash",
                    type: "choice",
                    answerOption: [
                        {
                            valueCoding: {
                                system: "http://terminology.hl7.org/CodeSystem/v2-0136",
                                code: "N",
                                text: "No",
                                display: "No"
                            }
                        },
                        {
                            valueCoding: {
                                system: "http://terminology.hl7.org/CodeSystem/v2-0136",
                                code: "Y",
                                text: "Yes",
                                display: "Yes"
                            }
                        },
                        {
                            valueCoding: {
                                system: "http://terminology.hl7.org/CodeSystem/v2-0136",
                                code: "ASKU",
                                text: "Unknown",
                                display: "I don't know"
                            }
                        }
                    ]
                },
                {
                    linkId: "2.4",
                    text: "Seizures/unconsciousness",
                    type: "choice",
                    answerOption: [
                        {
                            valueCoding: {
                                system: "http://terminology.hl7.org/CodeSystem/v2-0136",
                                code: "N",
                                text: "No",
                                display: "No"
                            }
                        },
                        {
                            valueCoding: {
                                system: "http://terminology.hl7.org/CodeSystem/v2-0136",
                                code: "Y",
                                text: "Yes",
                                display: "Yes"
                            }
                        },
                        {
                            valueCoding: {
                                system: "http://terminology.hl7.org/CodeSystem/v2-0136",
                                code: "ASKU",
                                text: "Unknown",
                                display: "I don't know"
                            }
                        }
                    ]
                },
            ]
        },
        // Placeholder for additional groups or individual questions
    ],
};
