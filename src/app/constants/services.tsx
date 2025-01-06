export interface Service {
    id: string,
    title: string,
    subtitle: string,
    description: string,
    images: { name: string, src: string }[],
    featured: boolean,
    url: string,
    meta: {
        meta1: string,
        meta2: string,
        meta3?: string,
        meta4?: string,
        meta5?: string,
    },
    catalog: {
        name: string,
        thumbnail: string,
        src: string
    }



}

export const ServicesData: Service[] = [
    {
        id: 'installation',
        title: 'Installation Services',
        subtitle: 'Elevator and Escalator Installation',
        description: 'We provide installation services for elevators and escalators. Our team of experts will ensure that the installation is done in a timely and efficient manner. We use the latest technology and equipment to ensure that your elevators and escalators are installed to the highest standards.',
        url: '/services/installation',

        meta: {
            meta1: '3000+ Installations',
            meta2: '1500+ Modernizations',
            meta3: '70+ Employees',
            meta4: '2000+ Clients',
        },
        featured: true,
        images: [
            {
                name: 'installation',
                src: '/services/installation-2.jpg'
            },
            {
                name: 'installation',
                src: 'https://res.cloudinary.com/drqofmj2h/image/upload/v1706425567/illustrator/Asset_25_jnybxk.svg'
            },
            {
                name: 'installation',
                src: 'https://res.cloudinary.com/drqofmj2h/image/upload/v1706425567/illustrator/Asset_25_jnybxk.svg'
            },
        ],
        catalog: {
            name: 'installation',
            thumbnail: '/Atz-catalog-front.png',
            src: '/ATZ-catalog.pdf'
        }
    },
    {
        id: 'maintenance',
        title: 'Maintenance Services',
        subtitle: 'Elevator and Escalator Maintenance',
        description: 'We provide maintenance services for elevators and escalators. Our team of experts will ensure that the maintenance is done in a timely and efficient manner.',
        url: '/services/maintenance',

        meta: {
            meta1: '1500+ Maintenance',
            meta2: '70+ Employees',
            meta3: '1100+ Clients',
        },
        featured: false,
        images: [
            {
                name: 'maintenance',
                src: '/services/maintenance.png'
            },
            {
                name: 'maintenance',
                src: 'https://res.cloudinary.com/drqofmj2h/image/upload/v1706425567/illustrator/Asset_25_jnybxk.svg'
            },
            {
                name: 'maintenance',
                src: 'https://res.cloudinary.com/drqofmj2h/image/upload/v1706425567/illustrator/Asset_25_jnybxk.svg'
            },
        ],
        catalog: {
            name: 'maintenance',
            thumbnail: '/Atz-catalog-front.png',
            src: '/ATZ-catalog.pdf'

        }
    },
    {
        id: 'modernization',
        title: 'Modernization Services',
        subtitle: 'Elevator and Escalator Modernization',
        description: 'We provide modernization services for elevators and escalators. Our team of experts will ensure that the modernization is done in a timely and efficient manner.',
        url: '/services/modernization',
        meta: {
            meta1: '1500+ Modernizations',
            meta2: '70+ Employees',
            meta3: '1100+ Clients',
        },
        featured: false,
        images: [
            {
                name: 'modernization',
                src: '/services/modernization.png'
            },
            {
                name: 'modernization',
                src: 'https://res.cloudinary.com/drqofmj2h/image/upload/v1706425567/illustrator/Asset_25_jnybxk.svg'
            },
            {
                name: 'modernization',
                src: 'https://res.cloudinary.com/drqofmj2h/image/upload/v1706425567/illustrator/Asset_25_jnybxk.svg'
            },
        ],
        catalog: {
            name: 'modernization',
            thumbnail: '/Atz-catalog-front.png',
            src: '/ATZ-catalog.pdf'
        }

    }
] 