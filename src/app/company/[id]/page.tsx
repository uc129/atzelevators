'use client'
import { ContainerMd } from "@/app/components/containers/containers";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CompanyHistory() {


    const { id } = useParams();
    const router = useRouter();

    useEffect(() => {
        if (!id) {
            router.replace('/404')
        }
        let history = document.getElementById('#history');
        let purpose = document.getElementById('#purpose');
        let organization = document.getElementById('#organization');

        let historyTop = history?.offsetTop;
        let purposeTop = purpose?.offsetTop;
        let organizationTop = organization?.offsetTop;
        let offset = 100;

        if (id === 'history' && historyTop) {
            window.scrollTo(0, historyTop - offset);
        }
        else if (id === 'purpose' && purposeTop) {
            window.scrollTo(0, purposeTop - offset);
        }
        else if (id === 'organization' && organizationTop) {
            window.scrollTo(0, organizationTop - offset);
        }
        else {
            router.replace('/404');
        }

    }, [])



    return (
        <ContainerMd classes="py-16 flex flex-col gap-16 text-justify">

            <div className="flex flex-wrap ">
                <div id='#history' className=" max-w-[1024px]">
                    <h1 className=" text-7xl mb-6  ">Our History</h1>

                    <div className=" items-center">
                        <div className="flex flex-col gap-6  ">

                            <p className="">ATZ Elevators, formerly known as Amba Tirupati Zetetic Engineering (P) Ltd., was founded in 1998 in Patna, Bihar, by the visionary Late Shri Anil Kumar Jha. With a mission to combine specialized knowledge with globally established standards, he laid a strong foundation for ATZ Elevators, instilling a belief in responsible innovation and the creation of groundbreaking technological solutions. Today, ATZ Elevators is a leading elevator company in India, with a presence in over 5 states and 20+ cities. We have a strong network of over 100 employees, 3000+ installations, and 50+ service centers across the country. Our commitment to quality, safety, and innovation has made us a trusted name in the elevator industry.
                            </p>
                            <p>
                                Over the years, ATZ Elevators has emerged as a trusted name in the elevator industry, delivering cutting-edge technology and superior products tailored to diverse projects across residential complexes, hospitals, government buildings, industrial facilities, and more. Our products are installed in prominent edifices across Bihar, Jharkhand, Odisha, West Bengal, and beyond.
                            </p>
                            <p>
                                Our journey has been marked by a commitment to safety, innovation, and customer satisfaction. With more than two decades of excellence, ATZ Elevators has expanded its presence to over 40 cities across 5+ states, completing 1500+ installations and maintaining 450+ sites
                            </p>
                            <p>
                                Today, under the leadership of our Director, Mr. Nalinikant Chaudhary, our Managing Director, Mrs. Amrita Jha and our CEO Mr. Ambudhi Vishal, we continue to honor our founder&apos;s vision by driving the company forward with next-generation ideas and state-of-the-art technology. With a steadfast focus on quality, integrity, and continuous improvement, ATZ Elevators is dedicated to enhancing city life and setting new benchmarks in the elevator industry.
                            </p>
                        </div>

                        {/* <div className="">
                        <Image src="/assets/ATZ- founder.png" width={400} height={100} alt="Our History" />
                    </div> */}
                    </div>
                </div>
                {/* <div className="flex flex-col justify-center items-center min-w-[340px]">
                    <Image src="/assets/ATZ- founder.png" width={200} height={100} alt="Our History" />
                    <Image src="/assets/ATZ- founder.png" width={200} height={100} alt="Our History" />

                </div> */}
            </div>

            <div id="#purpose" className=" flex flex-col gap-6 max-w-[1024px] ">
                <h1 className="text-7xl ">Purpose and Strategy</h1>
                <p>
                    At ATZ Elevators, our purpose is clear: to enhance urban life by providing innovative, safe, and reliable vertical transportation solutions. We aim to make buildings smarter, safer, and more efficient, contributing to better living and working environments. Our unwavering focus on customer satisfaction drives every decision we make, ensuring that our products and services consistently exceed expectations.
                </p>
                <p>
                    We are committed to delivering the highest quality products, maintaining the highest safety standards, and providing exceptional customer service. Our strategy is to leverage cutting-edge technology, industry expertise, and a customer-centric approach to deliver superior elevator solutions that enhance the quality of life for people in urban environments.
                </p>
                <p>
                    We are dedicated to continuous innovation, sustainable practices, and operational excellence, ensuring that we remain at the forefront of the elevator industry. Our goal is to be the preferred choice for vertical transportation solutions in India, setting new benchmarks for quality, safety, and customer satisfaction.
                </p>
                <div>
                    <h6 className="text-2xl">Purpose</h6>
                    <ul className="list-disc pl-6">
                        <li><p>To deliver cutting-edge elevator and escalator solutions that improve the flow of life in modern cities.</p></li>
                        <li> <p>To ensure safety, reliability, and comfort for all who use our products.</p></li>
                        <li><p>To foster sustainable innovation that benefits communities, businesses, and the environment.</p></li>
                    </ul>
                </div>

                <div>
                    <h6 className="text-2xl">Strategy</h6>
                    <ul className="list-disc pl-6">
                        <li><p><span className="font-bold">Customer-Centric Innovation:</span> We design tailored solutions to meet the unique needs of every client, collaborating closely with architects, consultants, and contractors to deliver exceptional results.</p></li>
                        <li><p><span className="font-bold">Commitment to Quality:</span> Our products are engineered with precision and built using superior materials and advanced technology, ensuring durability and reliability.</p></li>
                        <li><p><span className="font-bold">Sustainable Growth:</span> By adhering to eco-friendly practices and responsible manufacturing, we contribute to a greener future while driving consistent business growth.</p></li>
                        <li><p><span className="font-bold">Teamwork and Expertise:</span> We leverage the knowledge and experience of our dedicated team of 100+ specialists to provide seamless project execution and unmatched customer service.</p></li>
                        <li><p><span className="font-bold">Expanding Footprint:</span> With a growing presence in over 40 cities across 5+ states, we aim to expand our reach while maintaining our commitment to quality and customer satisfaction.</p></li>
                    </ul>
                </div>
                <p className="md:text-xl lg:text-2xl">Our purpose and strategy reflect our core values— <span className="font-bold">Teamwork, Integrity, Dedication, and Innovation (TIDI).</span> Together, they guide us in our mission to redefine the vertical transportation landscape and continue leading the industry into the future.</p>
            </div>

            <div id='#organization' className="flex flex-col gap-6 max-w-[1024px]" >
                <h1>Organization</h1>
                <div>
                    <p>
                        ATZ Elevators is a pioneering name in the vertical transportation industry, recognized for delivering exceptional products, innovative solutions, and unmatched customer service for over two decades. Founded in 1998 by the visionary Late Shri Anil Kumar Jha, we have grown from a humble start in Patna, Bihar, into a trusted partner for architects, contractors, and businesses across India.
                    </p>
                    <p>
                        We take pride in our expertise, offering a diverse range of elevators, escalators, and custom-designed solutions tailored to the unique needs of each project. Our organization thrives on collaboration, bringing together a team of 100+ skilled specialists dedicated to engineering excellence and customer satisfaction.
                    </p>

                </div>
                <div>
                    <h6 className="text-2xl">Our Structure: </h6>
                    <ul className="list-disc pl-6">
                        <li>
                            <p><span className="font-bold">Leadership:</span> Guided by our M.D. Mrs. Amrita Jha and our C.E.O Mr. Ambudhi Vishal, we are embracing a future of innovation and sustainability, building on the strong foundation laid by our beloved founder.</p>
                        </li>
                        <li>
                            <p><span className="font-bold">Departments:</span> Our cohesive structure includes in-house Safety and Design teams, ensuring streamlined operations, enhanced safety, and precise execution in every project..</p>
                        </li>
                        <li>
                            <p><span className="font-bold">Geographic Reach:</span> GWith a growing presence in 40+ cities across 5+ states, we have established ourselves as a leader in the elevator equipment manufacturing and services industry.</p>
                        </li>
                    </ul>
                </div>
            </div>

        </ContainerMd>
    )
}