import SimpleCard, { SimpleCardProps } from "./components/cards/card-simple"
import { ContainerMd } from "./components/containers/containers"

const simpleCardProps: SimpleCardProps[] = [
    {
        title: 'Elevators and Escalators',
        description: 'ATZ offers a wide range of elevators and escalators for residential and commercial buildings.',
        image: '/icons/lift-outline.svg',
        link: '/products'
    },
    {
        title: 'Services',
        description: 'ATZ provides world-class services and innovative solutions for new buildings and existing buildings, everything you need for smooth people flow.',
        image: '/icons/wrench.svg',
        link: '/services'

    }
]

const ServiceIntroduction = () => {
    return (
        <ContainerMd>
            <div className="flex flex-col items-center lg:flex-row justify-center  px-0 gap-0 p-8">
                {simpleCardProps.map((card) => {
                    return <SimpleCard key={card.title} {...card} imageWidth={120} cardMaxWidth={700} cardMinHeight={240} cardMinWidth={'50%'} />
                })}
            </div>
        </ContainerMd>
    )
}

export default ServiceIntroduction;