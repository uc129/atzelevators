
import Image from 'next/image';
import React from 'react';

export interface CardVerticalLgProps {
    title: string;
    description?: string;
    image: string;
    link: string;
}

const CardVerticalLg = ({ title, description, image, link }: CardVerticalLgProps) => {
    return (
        <a href={link} className='vertical-card  flex lg:flex-col gap-8'>

            <Image className='w-[220px] md:w-[320px] lg:w-full' src={image} alt={title} width={2400} height={2400} />

            <div className='flex flex-col gap-4'>

                <h1 className="title2 w-full">{title}</h1>

                {description && <p className=" w-full text-gray-700 text-xl">{description}</p>}

            </div>
        </a>
    );
}

export default CardVerticalLg;