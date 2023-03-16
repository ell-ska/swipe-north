/*
8-10 jobb
companyName
jobTitle
shortDescription
linkToJobApp
tags 2-5 st (taxi, social, )
img (unsplashed.com, pexels.com, lägg en img mapp i public och länka in dem)
*/

import taxiDriverImg from '../public/images/jobs/taxi.jpg'
import foodDeliveryImg from '../public/images/jobs/food-delivery.jpg'
import nurseImg from '../public/images/jobs/nurse.jpg'
import personalAssistantImg from '../public/images/jobs/personal-assistant.jpg'
import technicianImg from '../public/images/jobs/technician.jpg'
import truckDriverImg from '../public/images/jobs/truck-driver.jpg'
import accountManagerImg from '../public/images/jobs/account-manager.jpg'
import psychologistImg from '../public/images/jobs/psychologist.jpg'
import receptionistImg from '../public/images/jobs/receptionist.jpg'

const api = {
    "data": [
        {
            companyName: 'Cabonline',
            jobTitle: 'Taxichaufför',
            shortDescription: 'Vi söker förare till oss på Cabonline. Väx med oss – kör med oss! Att köra taxi är ett socialt och viktigt jobb, där du får träffa människor och hjälpa dem i deras vardag.',
            linkToJobApplication: 'https://www.cabonline.com/jobbannonser',
            tags: ['Taxi', 'Social', 'Service'],
            img: taxiDriverImg,
        },
        {
            companyName: 'Foodora',
            jobTitle: 'Mat leverantör',
            shortDescription: '',
            linkToJobApplication: 'https://jobs.foodora.se/jobs-listing/',
            tags: ['Foodora', 'Deltid', 'Aktiv', 'Service'],
            img: foodDeliveryImg,
        },
        {
            companyName: 'Akutmottagning Skellefteå',
            jobTitle: 'Sjuksköterska',
            shortDescription: 'Region Västerbotten arbetar för att god hälsa och hållbar utveckling ska stärka varandra. Som sjuksköterska hos oss bidrar du med kunskap och engagemang som får människor att känna sig trygga.',
            linkToJobApplication: 'https://recruit.visma.com/spa/sv/public/apply?guidAssignment=e7d91e3a-81ef-4819-ae40-8bcd3b7566af&publishCode=AMS&TK=9f09159d-ad9b-4836-aaec-e139ac1ab8a8&forcelocale=true',
            tags: ['Heltid', 'Social'],
            img: nurseImg,
        },
        {
            companyName: 'Simplex Bemanning',
            jobTitle: 'Däckskiftare',
            shortDescription: 'Vi söker dig som vill jobba som däckskiftare hos vår kund i Skellefteå. Du jobbar i lag tillsammans med kollegor och dina främsta arbetsuppgifter kommer vara att kontrollera, skifta, tvätta, ställa undan och smörja däck.',
            linkToJobApplication: 'https://jobb.simplexbemanning.se/jobs/2416648-dackskiftare-skelleftea',
            tags: ['B Körkort', 'Sommarjobb', 'Heltid'],
            img: tireChangerImg,
        },
        {
            companyName: 'ENKV',
            jobTitle: 'Personlig assistent',
            shortDescription: 'Nu har jag äntligen flyttat till min första egna lägenhet - jättespännande! Jag behöver därför utöka mitt team av assistenter.',
            linkToJobApplication: 'https://enkv.teamtailor.com/jobs/2297785-personliga-assistenter-skelleftea?promotion=546191-arbetsformedlingen',
            tags: ['B Körkort', 'Deltid', 'Kul tillsammans', 'Trevlig'],
            img: personalAssistantImg,
        },
        {
            companyName: 'Minnovation International AB',
            jobTitle: 'Produktionstekniker',
            shortDescription: 'Med jobbet som produktionstekniker är du ansvarig för produktionsprocesserna på vår produktionsanläggning. Vi söker dig som har god kommunikationsförmåga och problemlösningsförmåga.',
            linkToJobApplication: 'https://minnov.recman.no/job.php?job_id=320135&path=ams',
            tags: ['Heltid', 'Maskinoperatör', 'Teknisk'],
            img: technicianImg,
        },
        {
            companyName: 'PostNord',
            jobTitle: 'Lastbilschaufför C',
            shortDescription: 'Vi hanterar mer än leveranser, vi hanterar mening. Den här tjänsten är en tidsbegränsad anställning med en sysselsättningsgrad på 100%.',
            linkToJobApplication: 'https://postnord.varbi.com/what:job/jobID:588497/type:job/where:1/apply:1',
            tags: ['C-körkort', 'Giltigt YKB', 'Kundservice', 'Heltid'],
            img: truckDriverImg,
        },
        {
            companyName: 'First Unit AB',
            jobTitle: 'Account Manager',
            shortDescription: 'Här blir du inte bara en kollega, utan också viktig del i vårt familjära team! Då vi hela tiden växer och utvidgar vår verksamhet finns stora utvecklingsmöjligheter inom företaget och genom att visa framfötterna finns det inget tak för hur långt du kan gå!',
            linkToJobApplication: 'https://jobb.clear-sky.se/jobs/2149156-account-manager',
            tags: ['Heltid', 'B Körkort', 'Svenska', 'Heltid'],
            img: accountManagerImg,
        },
        {
            companyName: 'Kommun: Skellefteå',
            jobTitle: 'Psykolog',
            shortDescription: 'Anderstorp hälsocentral söker nu en psykolog. Vi söker en leg psykolog som har erfarenhet av bedömning och behandlingsarbete, gärna inom primärvården.',
            linkToJobApplication: 'https://recruit.visma.com/spa/public/apply?guidAssignment=eec0e547-66eb-4849-9a89-4f31c5787c84&publishCode=AMS&TK=8d6288a8-9743-4270-a2aa-cb4f22e1fdb5',
            tags: ['Heltid', 'Tillsvidareanställning', 'Hälsa', 'Kommun'],
            img: psychologistImg,
        },
        {
            companyName: 'Kommun: Skellefteå',
            jobTitle: 'Receptionist',
            shortDescription: 'Vi söker dig som är en duktig administratör och har ett gott bemötande. Vi tror att du har ett serviceinriktat förhållningssätt och har intresse, vilja och förmåga att hjälpa andra.',
            linkToJobApplication: 'https://recruit.visma.com/spa/public/apply?guidAssignment=651be8f5-d182-49b5-9a8d-b957c2bda1e9&publishCode=AMS&TK=39459fdf-5cec-4054-97ca-98627bb3205b',
            tags: ['Heltid', 'Kommun', 'Service'],
            img: receptionistImg,
        },
    ]
    
}