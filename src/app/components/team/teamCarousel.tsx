import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './arrow-buttons'
import useEmbla_Carousel from 'embla-carousel-react'
import { Department } from '@/app/constants/team'
import Image from 'next/image'
import './embla_team.css'

type PropType = {
    slides: Department[]
    options?: EmblaOptionsType
}

const TeamCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props
    const [embla_Ref, embla_Api] = useEmbla_Carousel(options)
    const {
        onPrevButtonClick,
        onNextButtonClick,
        currentIndex
    } = usePrevNextButtons(embla_Api, slides.length)
    let currIndex = currentIndex;
    return (
        <div className="">
            <div className=" " ref={embla_Ref}>
                <div className="flex -ml-[5.5%] ">
                    {slides.map((slide, index) => (
                        <div className="embla___slide flex flex-col items-center justify-center" key={slide.id}>
                            <div className="">{slide.title}</div>
                            <Image src={slide.image} alt={slide.title}
                                width={index === currIndex ? 400 : 150}
                                height={index === currIndex ? 400 : 150}
                                className='rounded-full'
                            />
                        </div>
                        // <TeamSlide key={slide.id} department={slide} index={index} currIndex={currIndex} />
                    ))}
                </div>
            </div>

            <div className="pt-12">
                <div className=" flex justify-center gap-36">
                    <PrevButton onClick={onPrevButtonClick} disabled={currIndex === 0} />
                    <NextButton onClick={onNextButtonClick} disabled={currIndex === slides.length - 1} />
                </div>
            </div>
        </div>
    )
}

export default TeamCarousel
