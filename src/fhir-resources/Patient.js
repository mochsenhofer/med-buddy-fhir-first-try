export const Patient = {
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
        communication: [
            {
                language: {
                    coding: [
                        {
                            system: "urn:ietf:rfc:3986",
                            code: "de",
                        },
                    ],
                },
            },
        ],
    };

/*
de - deutsch
en - english
fr - french
hr - croatian
sr - serbian
pl - polish
tr - turkish
sq - albanian
ro - romanian
bs - bosnian






*/