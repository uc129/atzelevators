interface TeamMember {
    id: string;
    index: string;
    name: string;
    role: string;
    department: string;
    image: string;
    linkedin: string;
    twitter: string;
    instagram: string;
    facebook: string;
    email: string;
}


export interface Department {
    id: string;
    title: string;
    image: string;
}

interface Departments {
    [key: string]: Department;
}



export const Departments: Departments = {
    management: {
        id: "management",
        title: "Management",
        image: "https://res.cloudinary.com/drqofmj2h/image/upload/v1706425681/illustrator/Asset_4_ini74q.svg",
    },
    erection: {
        id: "erection",
        title: "Erection",
        image: "https://res.cloudinary.com/drqofmj2h/image/upload/v1706425681/illustrator/Asset_4_ini74q.svg",
    },
    executive: {
        id: "executive",
        title: "Executive",
        image: "https://res.cloudinary.com/drqofmj2h/image/upload/v1706425681/illustrator/Asset_4_ini74q.svg",
    },
    marketing: {
        id: "marketing",
        title: "Marketing",
        image: "https://res.cloudinary.com/drqofmj2h/image/upload/v1706425681/illustrator/Asset_4_ini74q.svg",
    },
    sales: {
        id: "sales",
        title: "Sales",
        image: "https://res.cloudinary.com/drqofmj2h/image/upload/v1706425681/illustrator/Asset_4_ini74q.svg",
    },
    service: {
        id: "service",
        title: "Service",
        image: "https://res.cloudinary.com/drqofmj2h/image/upload/v1706425681/illustrator/Asset_4_ini74q.svg",
    },
    support: {
        id: "support",
        title: "Support",
        image: "https://res.cloudinary.com/drqofmj2h/image/upload/v1706425681/illustrator/Asset_4_ini74q.svg",
    },

}


export const TeamATZ: TeamMember[] = [
    {
        id: "amit-kumar-ceo",
        index: '01',
        name: "Amit Kumar",
        role: "Founder & CEO",
        department: Departments.management.title,
        image: "https://res.cloudinary.com/drqofmj2h/image/upload/v1706425681/illustrator/Asset_4_ini74q.svg",
        linkedin: "https://www.linkedin.com/in/amit-kumar-atz/",
        twitter: "https://twitter.com/atz_elevators",
        instagram: "https://www.instagram.com/atz_elevators/",
        facebook: "https://www.facebook.com/ATZElevators",
        email: "mailto:amit.kumar123@gmil.com"
    },

    {
        id: 'sandeep-kumar-coo',
        index: '02',
        name: "Sandeep Kumar",
        role: "COO",
        department: Departments.management.title,
        image: "https://res.cloudinary.com/drqofmj2h/image/upload/v1706425567/illustrator/Asset_25_jnybxk.svg",
        linkedin: "https://www.linkedin.com/in/sandeep-kumar-atz/",
        twitter: "https://twitter.com/atz_elevators",
        instagram: "https://www.instagram.com/atz_elevators/",
        facebook: "https://www.facebook.com/ATZElevators",
        email: "mailto:sandeep.kumar@gmail.com"
    },
    {
        id: 'suresh-kumar-cfo',
        index: '03',
        name: "Suresh Kumar",
        role: "Technician",
        department: Departments.erection.title,
        image: "https://res.cloudinary.com/drqofmj2h/image/upload/v1706425567/illustrator/Asset_25_jnybxk.svg",
        linkedin: "https://www.linkedin.com/in/suresh-kumar-atz/",
        twitter: "https://twitter.com/atz_elevators",
        instagram: "https://www.instagram.com/atz_elevators/",
        facebook: "https://www.facebook.com/ATZElevators",
        email: "mailto:suresh.kumar@gmail.com"
    },

    {
        id: 'manoj-kumar-cto',
        index: '04',
        name: "Manoj Kumar",
        role: "mechanical engineer",
        department: Departments.erection.title,
        image: "https://res.cloudinary.com/drqofmj2h/image/upload/v1706425567/illustrator/Asset_25_jnybxk.svg",
        linkedin: "https:// www.linkedin.com/in/manoj-kumar-atz/",
        twitter: "https://twitter.com/atz_elevators",
        instagram: "https://www.instagram.com/atz_elevators/",
        facebook: "https://www.facebook.com/ATZElevators",
        email: "mailto:manoj.kumar@gmail.com"
    },

    {
        id: 'mohit-kumar-cmo',
        index: '05',
        name: "Mohit Kumar",
        role: "technician",
        department: Departments.service.title,
        image: "https://res.cloudinary.com/drqofmj2h/image/upload/v1706425567/illustrator/Asset_25_jnybxk.svg",
        linkedin: "https://www.linkedin.com/in/mohit-kumar-atz/",
        twitter: "https://twitter.com/atz_elevators",
        instagram: "https://www.instagram.com/atz_elevators/",
        facebook: "https://www.facebook.com/ATZElevators",
        email: "mailto:mohit@gail.com"
    },
    {
        id: 'anil-kumar-cpo',
        index: '06',
        name: "Anil Kumar",
        role: "CPO",
        department: Departments.marketing.title,
        image: "https://res.cloudinary.com/drqofmj2h/image/upload/v1706425567/illustrator/Asset_25_jnybxk.svg",
        linkedin: "https://www.linkedin.com/in/anil-kumar-atz/",
        twitter: "https://twitter.com/atz_elevators",
        instagram: "https://www.instagram.com/atz_elevators/",
        facebook: "https://www.facebook.com/ATZElevators",
        email: "mailto:amit@gmail.com"
    }



]