'use client'
import { Meta, metaATZ } from "@/app/constants/homepage";
import { Service } from "@/app/constants/services";
import Image from "next/image"
import Link from "next/link";
import { useEffect, useState } from "react"

interface FeaturedData extends Service {
}





const FeaturedCard = ({ featuredList, listName }: { featuredList: FeaturedData[], listName: string }) => {
    let meta = metaATZ as Meta;
    let age = new Date().getFullYear() - meta.established_date.getFullYear();
    let [currFrIndex, setCurrFrIndex] = useState(0);

    let alternateHeadings = [meta.title, meta.full_name, age.toString() + ' years in operation.', `since, ${metaATZ.established_date.getFullYear()}`, ` ${featuredList[currFrIndex].meta.meta2} `]
    let [currMeta, setCurrMeta] = useState(alternateHeadings[0])


    useEffect(() => {
        if (!document) return
        let meta = document.querySelector('.meta') as HTMLElement

        let interval = setInterval(() => {
            meta.textContent = currMeta;
            setCurrMeta(alternateHeadings[(alternateHeadings.indexOf(currMeta) + 1) % alternateHeadings.length])
        }, 5000)

        return () => clearInterval(interval)
    })



    return (
        <div className=" featureList">
            <div className=" featureList">
                <div className=" feature  flex flex-col gap-24">

                    <div className=" feature top  h-fit flex flex-wrap  justify-between gap-24 items-center ">

                        <div className="left image w-full md:w-[30%]">
                            <Image className="w-full xl:w-[430px]" src={featuredList[currFrIndex].images[0].src} alt={featuredList[currFrIndex].images[0].name}
                                width={430} height={430} />
                        </div>

                        <div className="right flex flex-col gap-8 text-lg w-full lg:w-[60%] text-pretty keep-word">

                            <div className="text flex flex-col gap-4 ">
                                <div className="header flex gap-16 items-center">

                                    <div className="left ">
                                        <h1 className="uppercase text-4xl font-bold">{featuredList[currFrIndex].title}</h1>
                                        <h2 className="underline underline-offset-4 text-xl">{featuredList[currFrIndex].subtitle}</h2>
                                    </div>

                                    <div className="right">
                                        <h3 className="">{featuredList[currFrIndex].meta.meta1}</h3>
                                        <h3 className="meta"> {featuredList[currFrIndex].meta.meta2}</h3>
                                    </div>

                                </div>
                                <p>{featuredList[currFrIndex].description}</p>
                            </div>

                            <div className=" flex gap-1">
                                <button className="round-button-group w-12 h-12"></button>
                                <button className="round-button-group w-12 h-12"></button>
                                <button className="round-button-group w-12 h-12"></button>
                            </div>
                        </div>

                    </div>

                    <div className=" feature bottom h-[40%] w-full flex flex-1 flex-wrap gap-12 justify-end xl:justify-between items-center">

                        <div className="left flex gap-4">
                            {featuredList.map((feature, index) => {
                                let active = index === currFrIndex ? 'active' : ''
                                let src = feature.images[0].src
                                let alt = feature.images[0].name
                                return (
                                    <button key={feature.id} onClick={() => setCurrFrIndex(index)}
                                        className={`${active} round-button-group w-32 h-20 bg-center bg-cover bg-no-repeat`} style={{ background: `url(${src})` }}>
                                    </button>
                                )
                            })}
                        </div>

                        <div className="center  round-button-group w-96 h-16 flex items-center justify-center">
                            <Link href={''} className=""> View all <span className="">{listName}</span> </Link>
                        </div>

                        <div className="right flex items-center gap-8">
                            <h4>Download Catalog</h4>
                            <button className="round-button-group w-32 h-11 bg-center" style={{ background: `url(${featuredList[0].catalog.thumbnail})` }}></button>

                        </div>
                    </div>

                </div>

            </div>


        </div>
    )

}



export default FeaturedCard;