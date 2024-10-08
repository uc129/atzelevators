
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { Testimonial } from '@/app/constants/testimonials'
import TestimonialSlide from './slide'
import CardHeader from '../products/header'

import './testimonial.css'



type PropType = {
    slides: Testimonial[]
    options?: EmblaOptionsType
}

const TestimonialsCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

    return (
        <div className="test">
            <CardHeader title="Testimonials" subtitle='What our clients&#39; say' />

            <div className="test__viewport" ref={emblaRef}>
                <div className="test__container">
                    {slides.map((slide, index) => (
                        <div className="test__slide" key={slide.id}>
                            <div className="test__slide__number">
                                <TestimonialSlide testimonial={slide} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default TestimonialsCarousel
