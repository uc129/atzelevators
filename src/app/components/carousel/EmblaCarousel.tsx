'use client'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback } from 'react'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './ArrowButtons'
import './embla.css'
import { ProductDetailInterface, ProductVariantInterface } from '../products/card'
import Image from 'next/image'
import { ProductSlide } from '../products/slide'

interface EmblaCarouselProps {
    slides: ProductVariantInterface[]
    options?: EmblaOptionsType
}


const ProductCarousel: React.FC<EmblaCarouselProps> = ({ slides, options }) => {


    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])


    const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
        // const autoplay = emblaApi?.plugins()?.autoplay;
        // if (!autoplay) return;

        // const resetOrStop = autoplay.options.stopOnInteraction === false ? autoplay.reset : autoplay.stop;
        // resetOrStop();

    }, [])


    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi, onNavButtonClick)




    return (
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((slide, index) => (
                        <div className="embla__slide" key={slide.id ? slide.id : index}>
                            <div className="">
                                {/* <Image src={slide.images[0].src} alt={slide.images[0].name} width={240} height={440} /> */}
                                <ProductSlide variantDetail={slide} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
            </div>
        </section>
    )

}

export default ProductCarousel