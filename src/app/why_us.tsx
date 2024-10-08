/** @format */

import Image from "next/image";
import { ContainerMd } from "./components/containers/containers";

const WhyUs = () => {
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
                className="pl-12 *:z-10 text-lg lg:text-lg 2xl:text-xl underline underline-offset-4
                                  flex justify-end flex-wrap gap-0 lg:gap-4 tracking-tighter"
              >
                <li className="why">25+ years in operation.</li>
                <li className="why">Excellent quality guaranteed.</li>
                <li className="why">24/7 customer support.</li>
                <li className="why">25+ years in operation.</li>
                <li className="why">Excellent quality guaranteed.</li>
                <li className="why">24/7 customer support.</li>
              </ul>
            </div>

          </div>

          <div className="button relative  w-full flex justify-end items-center pb-4">
            <button className="round-button-group_light w-full 2xl:w-[72%]  h-14 "
              style={{ fontSize: "1.5rem" }}
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
            <div className="flex flex-col gap-1 font-bold">
              <p className="">25+ years in operation</p>
              <p className="">Excellent quality guaranteed</p>
              <p className="">24/7 customer support</p>
              <p className="">24/7 customer support</p>
              <p className="">24/7 customer support</p>
            </div>
          </div>

          <div className="button relative py-8 w-full flex justify-center gap-4 items-center pb-8 *:text-lg keep-word">
            <button className="round-button-group w-full h-14 ">
              Enquire Now
            </button>
            <button className="round-button-group w-full h-14">
              Send Message
            </button>
            <button className="round-button-group w-full h-14">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </ContainerMd>
  );
};

export default WhyUs;
