/*
8-10 jobb
companyName
jobTitle
shortDescription
linkToJobApp
tags 2-5 st (taxi, social, )
img (unsplashed.com, pexels.com, lägg en img mapp i public och länka in dem)
*/

// tag categories: field, qualification, ability, workstyle

import taxiDriverImg from '../public/images/jobs/taxi-mobile.jpg'
import foodDeliveryImg from '../public/images/jobs/food-delivery-mobile.jpg'
import nurseImg from '../public/images/jobs/nurse-mobile.jpg'
import personalAssistantImg from '../public/images/jobs/personal-assistant-mobile.jpg'
import technicianImg from '../public/images/jobs/technician-mobile.jpg'
import truckDriverImg from '../public/images/jobs/truck-driver-mobile.jpg'
import accountManagerImg from '../public/images/jobs/account-manager-mobile.jpg'
import psychologistImg from '../public/images/jobs/psychologist-mobile.jpg'
import receptionistImg from '../public/images/jobs/receptionist-mobile.jpg'
import tireChangerImg from '../public/images/jobs/tire-changer-mobile.jpg'

const api = [
    {
        companyName: 'Cabonline',
        jobTitle: 'Taxichaufför',
        shortDescription: 'Vi söker förare till oss på Cabonline. Väx med oss - kör med oss! Att köra taxi är ett socialt och viktigt jobb, där du får träffa människor och hjälpa dem i deras vardag.',
        linkToJobApplication: 'https://www.cabonline.com/jobbannonser',
        tags: [
            {
                category: 'field',
                name: 'Taxi'
            },
            {
                category: 'ability',
                name: 'Social'
            },
            {
                category: 'field',
                name: 'Service'
            },
            {
                category: 'qualification',
                name: 'Körkort'
            }
        ],
        img: taxiDriverImg,
        id: '09a873fb-40ef-4810-bd5e-96511d600d38'
    },
    {
        companyName: 'Foodora',
        jobTitle: 'Mat leverantör',
        shortDescription: '',
        linkToJobApplication: 'https://jobs.foodora.se/jobs-listing/',
        tags: [
            {
                category: 'workstyle',
                name: 'Deltid'
            },
            {
                category: 'ability',
                name: 'Aktiv'
            },
            {
                category: 'field',
                name: 'Service'
            }
        ],
        img: foodDeliveryImg,
        id: 'cc7f98fa-bd3f-4b51-95dc-569af5f9e4f7'
    },
    {
        companyName: 'Akutmottagning Skellefteå',
        jobTitle: 'Sjuksköterska',
        shortDescription: 'Region Västerbotten arbetar för att god hälsa och hållbar utveckling ska stärka varandra. Som sjuksköterska hos oss bidrar du med kunskap och engagemang som får människor att känna sig trygga.',
        linkToJobApplication: 'https://recruit.visma.com/spa/sv/public/apply?guidAssignment=e7d91e3a-81ef-4819-ae40-8bcd3b7566af&publishCode=AMS&TK=9f09159d-ad9b-4836-aaec-e139ac1ab8a8&forcelocale=true',
        tags: [
            {
                category: 'workstyle',
                name: 'Heltid'
            },
            {
                category: 'ability',
                name: 'Social'
            },
            {
                category: 'field',
                name: 'Vård och omsorg'
            }
        ],
        img: nurseImg,
        id: 'f96e9f1e-2f27-413e-8eca-8c1097ded076'
    },
    {
        companyName: 'Simplex Bemanning',
        jobTitle: 'Däckskiftare',
        shortDescription: 'Vi söker dig som vill jobba som däckskiftare hos vår kund i Skellefteå. Du jobbar i lag tillsammans med kollegor och dina främsta arbetsuppgifter kommer vara att kontrollera, skifta, tvätta, ställa undan och smörja däck.',
        linkToJobApplication: 'https://jobb.simplexbemanning.se/jobs/2416648-dackskiftare-skelleftea',
        tags: [
            {
                category: 'workstyle',
                name: 'Heltid'
            },
            {
                category: 'workstyle',
                name: 'Sommarjobb'
            },
            {
                category: 'qualification',
                name: 'Körkort'
            }
        ],
        img: tireChangerImg,
        id: '6ec521ba-0d02-48bb-9c6e-6ac51c2a4003'
    },
    {
        companyName: 'ENKV',
        jobTitle: 'Personlig assistent',
        shortDescription: 'Nu har jag äntligen flyttat till min första egna lägenhet - jättespännande! Jag behöver därför utöka mitt team av assistenter.',
        linkToJobApplication: 'https://enkv.teamtailor.com/jobs/2297785-personliga-assistenter-skelleftea?promotion=546191-arbetsformedlingen',
        tags: [
            {
                category: 'workstyle',
                name: 'Deltid'
            },
            {
                category: 'ability',
                name: 'Kul tillsammans'
            },
            {
                category: 'ability',
                name: 'Trevlig'
            },
            {
                category: 'qualification',
                name: 'Körkort'
            }
        ],
        img: personalAssistantImg,
        id: '2b8ee29b-1bb1-465a-8838-9658269ac789'
    },
    {
        companyName: 'Minnovation International AB',
        jobTitle: 'Produktionstekniker',
        shortDescription: 'Med jobbet som produktionstekniker är du ansvarig för produktionsprocesserna på vår produktionsanläggning. Vi söker dig som har god kommunikationsförmåga och problemlösningsförmåga.',
        linkToJobApplication: 'https://minnov.recman.no/job.php?job_id=320135&path=ams',
        tags: [
            {
                category: 'workstyle',
                name: 'Heltid'
            },
            {
                category: 'ability',
                name: 'Teknisk'
            },
            {
                category: 'field',
                name: 'Maskinoperatör'
            }
        ],
        img: technicianImg,
        id: 'ba917c2c-5d9a-43a3-a337-75a72a96d1f9'
    },
    {
        companyName: 'PostNord',
        jobTitle: 'Lastbilschaufför C',
        shortDescription: 'Vi hanterar mer än leveranser, vi hanterar mening. Den här tjänsten är en tidsbegränsad anställning med en sysselsättningsgrad på 100%.',
        linkToJobApplication: 'https://postnord.varbi.com/what:job/jobID:588497/type:job/where:1/apply:1',
        tags: [
            {
                category: 'workstyle',
                name: 'Heltid'
            },
            {
                category: 'qualification',
                name: 'Giltigt YKB'
            },
            {
                category: 'field',
                name: 'Kundservice'
            },
            {
                category: 'qualification',
                name: 'Körkort'
            }
        ],
        img: truckDriverImg,
        id: '3ecb29b0-4ac0-471e-9a1a-d294893d8468'
    },
    {
        companyName: 'First Unit AB',
        jobTitle: 'Account Manager',
        shortDescription: 'Här blir du inte bara en kollega, utan också viktig del i vårt familjära team! Då vi hela tiden växer och utvidgar vår verksamhet finns stora utvecklingsmöjligheter inom företaget och genom att visa framfötterna finns det inget tak för hur långt du kan gå!',
        linkToJobApplication: 'https://jobb.clear-sky.se/jobs/2149156-account-manager',
        tags: [
            {
                category: 'workstyle',
                name: 'Heltid'
            },
            {
                category: 'qualification',
                name: 'Svenska'
            },
            {
                category: 'qualification',
                name: 'Körkort'
            }
        ],
        img: accountManagerImg,
        id: '05772d35-23ac-46ae-add4-672182a6d48a'
    },
    {
        companyName: 'Skellefteå kommun',
        jobTitle: 'Psykolog',
        shortDescription: 'Anderstorp hälsocentral söker nu en psykolog. Vi söker en leg psykolog som har erfarenhet av bedömning och behandlingsarbete, gärna inom primärvården.',
        linkToJobApplication: 'https://recruit.visma.com/spa/public/apply?guidAssignment=eec0e547-66eb-4849-9a89-4f31c5787c84&publishCode=AMS&TK=8d6288a8-9743-4270-a2aa-cb4f22e1fdb5',
        tags: [
            {
                category: 'workstyle',
                name: 'Heltid'
            },
            {
                category: 'workstyle',
                name: 'Tillsvidareanställning'
            },
            {
                category: 'field',
                name: 'Vård och omsorg'
            },
            {
                category: 'field',
                name: 'Kommun'
            }
        ],
        img: psychologistImg,
        id: '0fcff30d-7efc-4644-bd5b-3b6ba7efa98c'
    },
    {
        companyName: 'Skellefteå kommun',
        jobTitle: 'Receptionist',
        shortDescription: 'Vi söker dig som är en duktig administratör och har ett gott bemötande. Vi tror att du har ett serviceinriktat förhållningssätt och har intresse, vilja och förmåga att hjälpa andra.',
        linkToJobApplication: 'https://recruit.visma.com/spa/public/apply?guidAssignment=651be8f5-d182-49b5-9a8d-b957c2bda1e9&publishCode=AMS&TK=39459fdf-5cec-4054-97ca-98627bb3205b',
        tags: [
            {
                category: 'workstyle',
                name: 'Heltid'
            },
            {
                category: 'field',
                name: 'Kommun'
            },
            {
                category: 'field',
                name: 'Service'
            }
        ],
        img: receptionistImg,
        id: 'e9927841-8c9e-45fd-8b49-4e32593f1c8f'
    },
]

export default api