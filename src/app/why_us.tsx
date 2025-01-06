/** @format */
'use client';

import Link from "next/link";
import { ContainerMd } from "./components/containers/containers";


const WhyUs = () => {



  const handleEnquireNow = () => {
    const enquireForm = document.querySelector("#section1");
    if (!enquireForm) return
    enquireForm.scrollIntoView({ behavior: "smooth" });
  };



  return (
    <ContainerMd>

      <div className="flex items-center justify-between flex-wrap">

        <div className="left w-full xl:w-[45%]">
          <video
            autoPlay
            className="grayscale"
            muted
            loop
            src="https://res.cloudinary.com/drqofmj2h/video/upload/v1725089229/atz-promo_yobsaj.mov"
          >
            Video not supported!!
          </video>
        </div>


        <div className="right hidden  w-full xl:w-[50%] p-8 text text-sm 2xl:text-md bg-blue_ncs xl:flex flex-col gap-12 ">

          <div className="uppercase text-baby_powder flex flex-col gap-6">
            <h1
              className="text-4xl 2xl:text-5xl font-black  "
              style={{ wordBreak: "keep-all" }}>
              Why Choose Us?
            </h1>

            <div className="w-full relative">

              <div className="absolute left-0 xl:left-16 w-56 h-56 bg-center bg-no-repeat bg-cover "
                style={{
                  background: `url("/icon/seal-question.svg")`,
                  backgroundPosition: "center", backgroundSize: "cover",
                  opacity: "0.11",

                }}
              ></div>

              <ul style={{}}
                className="pl-12  text-lg grid grid-cols-1 md:grid-cols-2"
              >
                <li className="why">25+ years in operation.</li>
                <li className="why">24/7 customer support.</li>
                <li className="why">Economical Pricing.</li>
                <li className="why">Premium Quality.</li>
                <li className="why">A vision for the future.</li>
              </ul>
            </div>

          </div>

          <div className="button relative  w-full flex justify-end items-center pb-4">
            <button className="round-button-group_light w-full 2xl:w-[72%]  h-14  cursor-pointer"
              style={{ fontSize: "1.5rem" }} onClick={handleEnquireNow}
            >
              Enquire Now
            </button>
          </div>
        </div>


        {/* text on smaller screens - Outside the video and text */}
        <div className="text  w-full p-12  flex flex-col gap-2 items-start justify-center xl:hidden ">
          <div className="uppercase flex flex-col gap-4 ">
            <h1
              className="text-4xl lg:text-6xl font-black text-red-400 pb-4 underline "
              style={{ wordBreak: "keep-all", textUnderlineOffset: "12px" }}>
              Why Choose Us?
            </h1>
            <ul className="flex text-lg flex-col gap-1 font-bold">
              <li className="why">25+ years in operation.</li>
              <li className="why">24/7 customer support.</li>
              <li className="why">Economical Pricing.</li>
              <li className="why">Premium Quality.</li>
              <li className="why">A vision for the future.</li>
            </ul>
          </div>

          <div className="button relative py-8 w-full flex justify-center gap-4 items-center pb-8  keep-word ">

            <button className="round-button-group w-full min-h-20 sm:min-h-14 cursor-pointer text-lg md:text-xl " onClick={handleEnquireNow}>
              Enquire Now
            </button>
            <Link href='/contact' className="round-button-group w-full  min-h-20 sm:min-h-14 cursor-pointer flex items-center justify-center text-center ">
              <p>
                Send Message
              </p>
            </Link>
            <Link href={"tel:9334119103"} className="round-button-group  w-full flex items-center justify-center min-h-20 sm:min-h-14 text-center  cursor-pointer">
              <p>Contact Sales</p>
            </Link>
          </div>
        </div>
      </div>
    </ContainerMd>
  );
};

export default WhyUs;
