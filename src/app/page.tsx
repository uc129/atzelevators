/** @format */
"use client";
import HeroBanner from "./components/banner";
import SearchBox from "./components/search";
import ProductCard from "./components/products/card";
import { ProductsDetail } from "./constants/products";
import FeaturedCard from "./components/featured/featured";
import { ServicesData } from "./constants/services";
import { StepsArrowInfoGraph } from "./components/infographs/stepsArrows";
import GalleryStatic from "./components/gall/gallery";
import TeamCarousel from "./components/team/teamCarousel";
import { Departments } from "./constants/team";
import { convertObjToArr } from "./lib/objToArr";
import TestimonialDetails from "./constants/testimonials";
import TestimonialsCarousel from "./components/testimonials/carousel";
import WhyUs from "./why_us";
import AllProductsScroller from "./components/products/allProducts";
import SvgMap from "./components/branches/map";
import { scrollContext } from "./lib/scrollObserver";
import { useContext, useEffect } from "react";
import { Sidebar } from "./components/sidebar";
import HeroSection from "./hero";
import { ContainerMd } from "./components/containers/containers";
import ServiceIntroduction from "./service.introduction";

export default function Home() {
  let process1 = ["Enquiry", "Requirements", "Measurement", "Contract", "Payment", "Installation", "Testing", "Handover",];

  let DepartmentSlide = convertObjToArr(Departments);
  let featuredProducts = ProductsDetail.filter(
    (product) => product.featured === true
  );


  const { scrollY } = useContext(scrollContext);
  console.log(scrollY);


  useEffect(() => {
    if (!window) return;
    if (!document) return;

    let height = window.innerHeight;
    let width = window.innerWidth;
    console.log("h+w", height, width);

  })


  return (
    <main className="wrapper grid grid-cols-1 gap-16 pb-24  ">

      <div id="section-0" className="" >
        {/* <HeroBanner /> */}
        <HeroSection />
      </div>



      <section id="section-1" className="section"  >
        <SearchBox />
      </section>

      <section id="section-2" className="section">
        <WhyUs />
      </section>

      <div className="p-12 px-16">
        <StepsArrowInfoGraph textArray={process1} />
      </div>


      <ContainerMd classes="">


        <section id="section-3" className="section products py-8 ">
          <ProductCard product={featuredProducts[1]} index={"01"} totalNumProducts={featuredProducts.length} icons={["abc", "abc"]} />
        </section>

        <section id="section-4" className=" featured  section">
          <FeaturedCard featuredList={ServicesData} listName="services" />
        </section>

        <section id="section-5" className=" products pt-16 section ">

          <ProductCard product={featuredProducts[0]} index={"02"} totalNumProducts={featuredProducts.length} />

        </section>

        <section id="section-6" className="transition-all duration-300 section">
          <GalleryStatic />
          <button className="round-button-group float-center mt-12 w-[80%] mx-auto h-14" style={{}}>
            View Gallery
          </button>
        </section>

        <section id="section-7" className=" team section">
          <TeamCarousel slides={DepartmentSlide} options={{ align: "center" }} />
        </section>



        <section id="section-8" className="  products py-8 section">
          <ProductCard product={featuredProducts[2]} index={"03"} totalNumProducts={featuredProducts.length} />
        </section>



        <section id="section-9" className="section bg-cover bg-center overflow-hidden">
          <AllProductsScroller />
        </section>


        <section id="section-10" className="section  rounded-b-2xl">
          <TestimonialsCarousel slides={TestimonialDetails} />
        </section>

        <div id="section-11" className=" overflow-hidden mt-12 section rounded-t-xl">
          <SvgMap />
        </div>

      </ContainerMd>



    </main>
  );
}

