import { ProductDetailInterface } from "../components/products/card";




export const ProductsDetail: ProductDetailInterface[] = [

    {
        title: "Manual Door Passenger Elevators",
        subtitle: 'Easy to use and maintain',
        description: "Manual Door Passenger Elevators are traditional lifts that feature manually operated doors, offering a simple and reliable solution for low to mid-rise buildings. Ideal for residential and small commercial spaces, these elevators combine durability with straightforward functionality, providing a cost-effective option for passenger transportation.",
        featured: true,
        id: 'manual-door-passenger-elevators',
        index: '01',
        images: [
            {
                name: "Manual Door Passenger Elevator 1",
                src: "/elevators/collapsible/collapsible-1.jpg"
            },
            {
                name: "Manual Door Passenger Elevator 2",
                src: "https://res.cloudinary.com/drqofmj2h/image/upload/v1724642002/ATZ/manual_-4_mydmq1.png"
            },
            {
                name: "Manual Door Passenger Elevator 3",
                src: "https://res.cloudinary.com/drqofmj2h/image/upload/v1724641999/ATZ/manual_-1_katl8a.jpg"
            }
        ],
        animatedIcons: [<></>],
        variants: [
            {
                title: 'Collapsible Door',
                description: 'Featuring traditional grill design doors, these elevators are ideal for residential and small commercial spaces. The grill doors provide a classic look and feel, while ensuring safety and security for passengers.',
                subtitle: 'Easy to use and maintain',
                images: [
                    {
                        name: 'Collapsible Door Passenger Elevator 1',
                        src: '/elevators/manual/manual-1.jpg'
                    },
                    {
                        name: 'Collapsible Door Passenger Elevator 2',
                        src: 'https://res.cloudinary.com/drqofmj2h/image/upload/v1724642002/ATZ/manual_-4_mydmq1.png'
                    }

                ],
                price: 100000,
                id: 'collapsible-door-passenger-elevators',
                index: '01',
                tagline: 'Shiny Finish, Premium Feel',
                url: '/elevators/manual-door-passenger-elevators'
            },
            {
                title: 'Swing Door',
                description: 'Featuring traditional swing doors, these elevators are ideal for residential and small commercial spaces. The swing doors provide a classic look and feel, while ensuring safety and security for passengers.',
                subtitle: 'Easy to use and maintain',
                images: [
                    {
                        name: 'Swing Door Passenger Elevator 1',
                        src: '/elevators/manual/swing.jpg'
                    },
                    {
                        name: 'Swing Door Passenger Elevator 2',
                        src: 'https://res.cloudinary.com/drqofmj2h/image/upload/v1724642002/ATZ/manual_-4_mydmq1.png'
                    },
                ],
                price: 120000,
                id: 'swing-door-passenger-elevators',
                index: '02',
                tagline: 'Classic Finish, Durable',
                url: '/elevators/manual-door-passenger-elevators'


            }
        ],
        price: 'starting at 1,20,000',
        icon: 'https://res.cloudinary.com/drqofmj2h/image/upload/v1724641999/ATZ/manual_-1_katl8a.jpg',
        features: ['Feature 1', 'Feature 2', 'Feature 3']
    },

    {
        id: 'automatic-door-passenger-elevators',
        title: "Automatic Door Passenger Elevators",
        subtitle: 'Easy to use and maintain',
        description: "Automatic Door Passenger Elevators are modern lifts that feature automatic doors, offering a sleek and efficient solution for mid to high-rise buildings. Ideal for residential and commercial spaces, these elevators combine advanced technology with contemporary design, providing a premium option for passenger transportation.",
        featured: true,
        index: '05',
        images: [
            {
                name: "Mild Steel",
                src: "/elevators/auto/ms-elevator.avif"
            },
            {
                name: "Automatic Door Passenger Elevator 2",
                src: "https://res.cloudinary.com/drqofmj2h/image/upload/v1724642002/ATZ/manual_-4_mydmq1.png"
            },
            {
                name: "Automatic Door Passenger Elevator 3",
                src: "https://res.cloudinary.com/drqofmj2h/image/upload/v1724668970/ATZ/manual_-3-removebg_yzydb0.png"
            }
        ],
        animatedIcons: [<></>],
        variants: [
            {
                id: 'automatic-door-passenger-elevators-ms',
                title: 'Mild Steel',
                subtitle: 'Easy to use and maintain',
                description: 'Featuring traditional grill design doors, these elevators are ideal for residential and small commercial spaces. The grill doors provide a classic look and feel, while ensuring safety and security for passengers.',
                images: [
                    {
                        name: 'Mild Steel Passenger Elevator 1',
                        src: '/elevators/auto/ms-elevator.avif'
                    },
                ],
                price: 100000,
                tagline: 'Powder coated steel, Economical',
                index: '01',
                url: '/elevators/automatic-door-passenger-elevators'

            },
            {
                id: 'automatic-door-passenger-elevators-auto-door-2',
                title: 'Stainless Steel',
                subtitle: 'Easy to use and maintain',
                description: 'Featuring traditional swing doors, these elevators are ideal for residential and small commercial spaces. The swing doors provide a classic look and feel, while ensuring safety and security for passengers.',
                images: [
                    {
                        name: 'Stainless Steel Passenger Elevator 1',
                        src: '/elevators/auto/ss-cop.jpg'
                    },

                ],
                price: 120000,
                tagline: 'Polished Steel, Durable',
                index: '01',
                url: '/elevators/automatic-door-passenger-elevators'
            },
            {
                id: 'automatic-door-passenger-elevators-auto-door-3',
                title: 'Mirror Finish',
                subtitle: 'Easy to use and maintain',
                description: 'Featuring traditional swing doors, these elevators are ideal for residential and small commercial spaces. The swing doors provide a classic look and feel, while ensuring safety and security for passengers.',
                images: [
                    {
                        name: 'Swing Door Passenger Elevator 1',
                        src: '/elevators/auto/auto-3.jpg'
                    },

                ],
                price: 150000,
                tagline: 'Mirror Finish, Shiny',
                index: '01',
                url: '/elevators/automatic-door-passenger-elevators'
            }



        ],
        icon: 'https://res.cloudinary.com/drqofmj2h/image/upload/v1724641999/ATZ/manual_-1_katl8a.jpg',
        price: 'starting at 1,20,000',
        features: ['Feature 1', 'Feature 2', 'Feature 3']

    },

    {
        id: 'freight-elevator',
        title: "Freight/Goods Elevators",
        subtitle: 'For heavy duty and industrial use',
        description: "Freight/Goods Elevators are heavy-duty lifts that are designed to transport goods and materials in industrial and commercial settings. Ideal for warehouses, factories, and manufacturing facilities, these elevators combine strength with reliability, providing a robust solution for heavy-duty transportation.",
        featured: true,
        index: '04',
        images: [
            {
                name: "Freight Elevator 1",
                src: "https://res.cloudinary.com/drqofmj2h/image/upload/v1724641999/ATZ/manual_-1_katl8a.jpg"
            },
            {
                name: "Freight Elevator 2",
                src: "https://res.cloudinary.com/drqofmj2h/image/upload/v1724642002/ATZ/manual_-4_mydmq1.png"
            },
            {
                name: "Freight Elevator 3",
                src: "https://res.cloudinary.com/drqofmj2h/image/upload/v1724668970/ATZ/manual_-3-removebg_yzydb0.png"
            }
        ],
        variants: [
            {
                title: 'Goods Elevator 1',
                subtitle: 'For heavy duty and industrial use',
                description: 'Featuring traditional grill design doors, these elevators are ideal for residential and small commercial spaces. The grill doors provide a classic look and feel, while ensuring safety and security for passengers.',
                images: [
                    {
                        name: 'Goods Elevator 1',
                        src: '/elevators/goods/goods-1.jpg'
                    },
                ],
                price: 100000,
                tagline: 'Shiny Finish, Premium Feel',
                id: 'goods-elevator-1',
                index: '01',
                url: '/elevators/freight-goods-elevator'
            },

        ],
        icon: 'https://res.cloudinary.com/drqofmj2h/image/upload/v1724641999/ATZ/manual_-1_katl8a.jpg',
        price: 'starting at 1,20,000',
        features: ['Feature 1', 'Feature 2', 'Feature 3']
    }

]