'use client'
import { forwardRef, use, useEffect, useState } from "react"

const HeroBanner = forwardRef<HTMLDivElement>((props, ref) => {

    //typewriter effect
    const [typeCount, setTypeCount] = useState(0);
    useEffect(() => {
        const tagline = document.getElementById('atz-tagline') as HTMLElement
        const text = tagline?.textContent as String
        const textArray = text?.split('') as String[]
        let delay = 80
        tagline.textContent = '' as string
        textArray?.forEach((letter, i) => {
            setTimeout(() => {
                tagline.textContent += letter as string
            }, delay * i)
        })
        setTimeout(() => {
            setTypeCount(typeCount + 1)
        }, 8000)
    }, [typeCount])


    //     --indian-red:'#DB5461';
    //   --light-red:'#FF7477';
    //   --imperial-red:'#FF4242';
    //   --umber:'#725E54';
    //   --ebony:'#5F634F';
    //   --dave-gray:'#595457';
    //   --rufous:'#A72608';
    //   --rose-taupe:'#785964';
    //   --dark-purple:'#331832';
    //   --very-dark-purple:'#2C1320';
    //   --african-violet:'#9F87AF';
    //   --midnight-green:'#114B5F';
    //   --coral:'#FF8552';
    //   --eggplant:'#754668';
    //   --night :'#111D4A';
    //   --night-light:'#2D3047';
    //   --kelly-green:'#63C132';
    //   --flame:'#DC602E'





    let headingStyles = {
        classes: 'text-[10rem] lg:text-[12rem] leading-[10rem]'
    }

    return (
        <div id='hero-banner'
            className=" w-full  text-night  transition-all duration-700 rounded-lg font-black text-left flex  ">

            <div className="justify-center items-center w-full  flex flex-col gap-2  h-[780px] pt-12" >

                <div ref={ref} className="word-wrap  gap-1 flex flex-col justify-start items-center overflow-hidden *:underline  *:underline-offset-4 ">
                    <h1 id='heading-1' className={`${headingStyles.classes}  `} >
                        <span className="keep-word">ATZ </span> <span className="inline-block underline"> ELEVATORS </span>
                    </h1>
                    <h1 id='heading-2' className={`${headingStyles.classes} `} >
                        <span className="keep-word">ATZ </span> <span className="inline-block underline"> ELEVATORS </span>
                    </h1>
                    <h1 id='heading-3' className={`${headingStyles.classes} hidden lg:block`} >
                        <span className="keep-word">ATZ </span> <span className=" "> ELEVATORS </span>
                    </h1>'

                </div>

                <p id='atz-tagline' className="uppercase py-2 text-blue_ncs tracking-widest 
                text-xl md:text-2xl 
                font-light text-left lg:text-center pt-6 pl-4 lg:pl-0  h-fit">
                    Keeping the world in motion.
                </p>

            </div>
        </div>
    )
})
export default HeroBanner;
