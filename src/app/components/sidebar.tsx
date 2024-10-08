'use client'

import Image from "next/image"
import { useEffect, useState } from "react"
import { PiPhoneCall } from "react-icons/pi"
import { metaATZ } from "../constants/homepage"

interface SidebarProps {
    numOfSections: number,
}

export const Sidebar = ({ numOfSections }: SidebarProps) => {

    let array = Array.from({ length: numOfSections }, (_, i) => i);

    let [currSection, setCurrSection] = useState(0);


    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let target = e.currentTarget as HTMLButtonElement;
        let section_num = parseInt(target.id);
        setCurrSection(section_num);
        let section_id = `section-${section_num}`;
        let section = document.getElementById(section_id);
        if (!section) return;
        section.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center', });
    }


    useEffect(() => {
        let sections = document.querySelectorAll('.section');
        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let section_num = parseInt(entry.target.id.split('-')[1]);
                    setCurrSection(section_num);
                }
            })
        }, { threshold: 0.8 })

        sections.forEach(section => {
            setTimeout(() => {
                observer.observe(section);
            }, 100)
        })

    })

    return (

        <aside className={`  sticky top-28   h-[87.5vh] min-w-[144px] p-4 pb-8 min-h-[80vh] `}>

            <div className=" h-full relative flex flex-col gap-4 items-center max-w-[138px] ">

                <div className="bg-night_light p-2 flex flex-col gap-4 rounded-md">

                    <h1 className="font-medium font-mono hidden xl:flex h-[70px] py-[44px] bg-space_light rounded-md text-baby_powder text-7xl LED  w-full items-center  justify-center">
                        {currSection}
                    </h1>

                    <div className="  flex flex-wrap gap-0 xl:gap-2 justify-center  overflow-scroll">

                        <div className=" grid grid-cols-1 xl:grid-cols-2 gap-2 keep-word
                                        
                          p-2 rounded-md">
                            {array.map((section_num) => {
                                return (
                                    <button
                                        id={section_num.toString()}
                                        key={section_num}
                                        className="hover:bg-aero rounded-full w-10 h-10 bg-space_light_tp text-baby_powder"
                                        onClick={handleButtonClick}
                                    >
                                        {section_num}

                                    </button>
                                )
                            })}
                        </div>

                        <h1 className=" w-full break-words  pt-6 pb-12 uppercase font-bold 
                                        text-space_light text-sm xl:text-xl text-center leading-[0.8rem]">
                            {metaATZ.full_name}
                        </h1>

                    </div>
                </div>

                <div className="contact h-[120px] flex flex-col gap-6 py-4 rounded-xl bg-indian_red w-full items-center">

                    <a href="tel:+91 933411103" className="w-8 button-translate-up">
                        <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 168.03 168.33">
                            <g id="Layer_1-2" data-name="Layer_1">
                                <path className="fill-baby_powder" d="M.33,37.33c.55-2.99.93-6.02,1.67-8.96,2.15-8.55,6.19-16.07,12.79-22.02C20.29,1.37,26.9-.11,34.13,1.03c3.13.49,5.56,2.26,7.16,4.98,1.05,1.78,1.96,3.65,2.73,5.56,3.32,8.18,6.59,16.37,9.81,24.59.67,1.72,1.14,3.53,1.6,5.32,1.21,4.68.22,8.86-3.02,12.47-1.86,2.07-3.84,4.03-5.64,6.15-4.03,4.75-4.97,10.05-1.98,15.62,1.85,3.44,4.01,6.75,6.33,9.9,7.71,10.45,16.14,20.27,26.84,27.79,5.6,3.94,11.54,7.43,17.49,10.84,2.02,1.16,4.49,1.72,6.83,2.08,5.01.77,8.62-1.86,11.41-5.63,2.04-2.75,3.75-5.75,5.58-8.65,4.42-7,8.51-8.52,15.95-4.95,8.54,4.1,16.89,8.61,25.19,13.19,6.04,3.34,8.66,8.57,7.26,15.52-.34,1.71-.76,3.4-1.15,5.1-3.6,15.63-14.72,22.93-29.28,26.42-1.74.42-3.51.66-5.27.99h-7.2c-.36-.1-.71-.23-1.08-.3-3.54-.64-7.12-1.08-10.6-1.94-15.82-3.89-30.15-11.06-43.48-20.25-23.02-15.86-41.22-36.22-55.34-60.27-5.54-9.43-10.31-19.22-12.46-30.06-.61-3.09-.99-6.22-1.48-9.33,0-2.95,0-5.89,0-8.84Z" />
                            </g>
                        </svg>
                    </a>

                    <a href="mailto:atz.patna@gmail.com" className="w-8 h-8 button-translate-down">
                        <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 449 385">
                            <g id="Layer_1-2" data-name="Layer_1">
                                <g className=" *:fill-baby_powder">
                                    <path className=" " d="M1,314c0-72.67,0-145.33,0-218,1.45.74,2.99,1.34,4.34,2.24,35.23,23.37,70.43,46.78,105.64,70.18,33.96,22.57,67.99,45.04,101.84,67.77,8.38,5.63,16.21,6.08,24.32-.02.8-.6,1.66-1.11,2.49-1.66,68.34-45.41,136.68-90.82,205.04-136.22,1.35-.9,2.88-1.53,4.33-2.29v218c-.3.92-.72,1.83-.89,2.78-5.64,32.69-24.2,54.33-55.66,64.78-4.68,1.55-9.63,2.32-14.45,3.44H72c-.92-.3-1.83-.72-2.78-.89-32.46-5.6-54.08-23.96-64.61-55.17-1.63-4.84-2.43-9.96-3.61-14.95Z" />
                                    <path className=" " d="M72,1c102,0,204,0,306,0,.91.31,1.81.75,2.75.91,30.69,5.12,51.56,22.35,63.25,51.06,1.61,3.94,1.26,6.23-2.67,8.84-70.74,46.93-141.38,94.02-211.95,141.2-3.31,2.22-5.45,2.17-8.73-.02C149.94,155.7,79.15,108.55,8.38,61.36c-1.36-.91-2.67-1.9-4.19-2.98C12.86,31.87,29.79,13.79,56.17,4.99c5.15-1.72,10.55-2.68,15.83-3.99Z" />
                                </g>
                            </g>
                        </svg>
                    </a>



                </div>

                {/* <h1 id='company' className="  hidden absolute bottom-0 xl:block w-[124px] text-[9px] lg:text-xs rotate-90" style={{ lineHeight: '12px' }} >
                    {text}
                </h1> */}


            </div>



        </aside >


    )
}