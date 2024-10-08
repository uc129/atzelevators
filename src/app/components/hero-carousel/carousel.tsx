/** @format */
'use client'
import React, { useCallback } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./carousel-arrow-buttons";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import "./carousel.css";
import { CarouselHeroSlideProps } from "./carousel.slides";
import CarouselHeroSlide from "./carousel.slides";

type PropType = {
  slides: CarouselHeroSlideProps[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({ delay: 7000 })]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <div className="hero_carousel relative">
      <div className="hero_carousel__viewport" ref={emblaRef}>
        <div className="hero_carousel__container">
          {slides.map((slide, index) => (
            <div className="hero_carousel__slide" key={index}>
              <div>
                <CarouselHeroSlide {...slide} />
              </div>
            </div>
          ))}
        </div>


        <div className=" absolute w-full h-full bg-transparent top-0 flex justify-center items-center">

          <div className="w-full flex justify-between px-16">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>

        </div>
      </div>


    </div>
  );
};

export default EmblaCarousel;
