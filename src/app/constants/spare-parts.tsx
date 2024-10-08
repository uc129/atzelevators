
interface SparePart {
    id: string,
    title: string,
    subtitle: string,
    description: string,
    featured: boolean,
    price: string,
    images: { name: string, src: string }[],
    variants: SparePartVariant[]
}

interface SparePartVariant {
    id: string,
    title: string,
    subtitle: string,
    description: string,
    price: string,
    brand: string,
    featured: boolean,
    brandLogo: string,
    images: { name: string, src: string }[]
}


export const SparePartsData: SparePart[] = [

    {
        id: 'vvvf-drive',
        title: 'VVVF AC INVERTER DRIVE',
        subtitle: 'Tested on fully loaded motors.',
        description: 'Experience the latest technological advancements in AC motor speed control.',
        featured: true,
        price: 'starting from 100',
        images: [
            {
                name: 'vvf-drive image 1',
                src: 'https://res.cloudinary.com/drqofmj2h/image/upload/v1724641999/ATZ/manual_-1_katl8a.jpg'
            },
            {
                name: 'Spare Part 1 Image 2',
                src: 'https://res.cloudinary.com/drqofmj2h/image/upload/v1724642002/ATZ/manual_-4_mydmq1.png'
            }
        ],
        variants: [
            {
                id: 'spare-part-1-variant-1',
                title: 'Variant 2',
                subtitle: 'Subtitle of Variant 2',
                description: 'Description of Variant 2',
                price: '200',
                brand: 'Brand 2',
                featured: true,
                brandLogo: 'https://res.cloudinary.com/drqofmj2h/image/upload/v1724641999/ATZ/manual_-1_katl8a.jpg',

                images: [
                    {
                        name: 'Variant 2 Image 1',
                        src: 'https://res.cloudinary.com/drqofmj2h/image/upload/v1724641999/ATZ/manual_-1_katl8a.jpg'
                    },
                    {
                        name: 'Variant 2 Image 2',
                        src: 'https://res.cloudinary.com/drqofmj2h/image/upload/v1724642002/ATZ/manual_-4_mydmq1.png'
                    }
                ]

            },
            {
                id: 'spare-part-1-variant-2',
                title: 'Variant 3',
                subtitle: 'Subtitle of Variant 3',
                description: 'Description of Variant 3',
                price: '300',
                brand: 'Brand 3',
                featured: false,
                brandLogo: 'https://res.cloudinary.com/drqofmj2h/image/upload/v1724641999/ATZ/manual_-1_katl8a.jpg',
                images: [
                    {
                        name: 'Variant 3 Image 1',
                        src: 'https://res.cloudinary.com/drqofmj2h/image/upload/v1724641999/ATZ/manual_-1_katl8a.jpg'
                    },
                    {
                        name: 'Variant 3 Image 2',
                        src: 'https://res.cloudinary.com/drqofmj2h/image/upload/v1724642002/ATZ/manual_-4_mydmq1.png'
                    }
                ]
            }
        ]


    }

]