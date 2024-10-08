export interface ATZBranch {
    id: string;
    title: string;
    location: string;
    image: string;
}

const Branches: ATZBranch[] = [
    {
        id: '1',
        title: "Head Office",
        location: "Patna, Bihar",
        image: "https://res.cloudinary.com/drqofmj2h/image/upload/v1706425681/illustrator/Asset_4_ini74q.svg",
    },
    {
        id: '2',
        title: 'Branch Office',
        location: 'Kolkata, West Bengal',
        image: 'https://res.cloudinary.com/drqofmj2h/image/upload/v1706425681/illustrator/Asset_4_ini74q.svg'
    },
    {
        id: '3',
        title: 'Branch Office',
        location: 'Bhubhaneswar, Odisha',
        image: 'https://res.cloudinary.com/drqofmj2h/image/upload/v1706425681/illustrator/Asset_4_ini74q.svg'
    },
    {
        id: '4',
        title: 'Branch Office',
        location: 'Jamshedpur, Jharkhand',
        image: 'https://res.cloudinary.com/drqofmj2h/image/upload/v1706425681/illustrator/Asset_4_ini74q.svg'
    },
    {
        id: '5',
        title: 'Branch Office',
        location: 'Guwahati, Assam',
        image: 'https://res.cloudinary.com/drqofmj2h/image/upload/v1706425681/illustrator/Asset_4_ini74q.svg'

    }

]

export default Branches;


