'use client'

import Image from "next/image";

export interface SimpleCardProps {
    title: string;
    description: string;
    image: string;
    link: string;
    imageWidth?: number;
    cardMaxWidth?: number;
    cardMinWidth?: string;
    cardMinHeight?: number;
}



const SimpleCard = ({ title, description, image, imageWidth, link, cardMaxWidth, cardMinHeight, cardMinWidth }: SimpleCardProps) => {

    const handleMouseEnter = (e: React.MouseEvent) => {
        let target = e.currentTarget as HTMLDivElement;

        if (!target) return;

        target.classList.remove('bg-white');
        target.classList.add('bg-gray-100');

        let headline = target.querySelector('.headline') as HTMLHeadingElement;
        headline.classList.add('underline')
    }

    const handleMouseLeave = (e: React.MouseEvent) => {
        let target = e.currentTarget as HTMLDivElement;

        if (!target) return;

        target.classList.remove('bg-gray-100');
        target.classList.add('bg-white');


        let headline = target.querySelector('.headline') as HTMLHeadingElement;
        headline.classList.remove('underline')




    }



    return (

        <a href={link} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            className={`   overflow-hidden cursor-pointer border-[1px] border-gray-200 
            flex flex-col lg:flex-row  items-center  bg-white transition-all duration-100`}

            style={{ maxWidth: cardMaxWidth, minHeight: cardMinHeight, minWidth: cardMinWidth }}>

            <Image className="p-4" src={image} width={imageWidth} height={imageWidth} alt={title} />

            <div className="px-6 py-4">
                <h1 className="headline font-medium text-4xl mb-2 underline-offset-4">{title}</h1>

                <p className="text-gray-700 text-base">
                    {description}
                </p>
            </div>

        </a>


    );




}

export default SimpleCard;