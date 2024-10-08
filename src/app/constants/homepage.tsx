export const HomePageCardData = [
    {
        title: "Assessment and Consultation",
        description: "Our team begins by conducting a comprehensive assessment of your specific requirements, taking into account factors such as building type, usage patterns, and budget. We then provide personalized consultations to discuss your options in detail, ensuring that we recommend the most suitable elevator solution tailored to your unique needsZ.",
    },

    {
        title: "Design and Planning",
        description: "Our team of experts will work closely with you to design a customized elevator solution that meets your specific requirements. We will take into account factors such as building type, usage patterns, and budget to ensure that the final design is both functional and aesthetically pleasing.",
    },

    {
        title: "Installation and Commissioning",
        description: "Our team of experienced technicians will install your elevator solution with precision and care, ensuring that it meets all safety and quality standards. We will then commission the elevator, testing it thoroughly to ensure that it is functioning correctly and safely.",
    },

    {
        title: "Maintenance and Support",
        description: "We offer comprehensive maintenance and support services to ensure that your elevator solution remains in optimal condition. Our team of technicians will conduct regular inspections and maintenance checks to identify and address any issues before they become major problems.",
    },
]

export interface Meta {
    full_name: string,
    title: string,
    established_date: Date,
    rating: string,
    installations?: string,
    modernizations?: string,
    maintenance?: string,
    employees: string,
    clients: string,
}

export const metaATZ: Meta = {
    full_name: 'Amba Tirupati Zetetic Engineering Pvt. Ltd.',
    title: 'ATZ ELEVATORS',
    established_date: new Date(1998, 3, 30, 0, 0, 0, 0),
    rating: '4.5',
    installations: '3000+',
    modernizations: '1500+',
    employees: '70+',
    clients: '400+',
}

export const metaATZServices: Meta = {
    full_name: 'ATZ Engineering Services Ltd.',
    title: 'ATZ ELEVATORS',
    established_date: new Date(2001, 3, 30),
    rating: '4.5',
    maintenance: '1500+',
    employees: '70+',
    clients: '1100+',

}
//// The objects above are converted to arrays below for easier access in the component, when iterating over them.

export const metaATZArray = Object.entries(metaATZ).map(([key, value]) => ({ key, value }));
export const metaATZServicesArray = Object.entries(metaATZServices).map(([key, value]) => ({ key, value }));

