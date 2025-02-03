'use client'

import { ProductsDetail } from "@/app/constants/products"
import Link from "next/link";
import { FaElevator } from "react-icons/fa6";
import { useWindow } from "@/app/lib/window-context";
import { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { CgClose } from "react-icons/cg";

export const DesktopSidebar = () => {

    return (
        <div className="w-[24rem] min-w-12 bg-red-100  px-8 h-[90vh] sticky top-24 ">
            <div className="">
                <h2 className="text-4xl text-center py-4">ATZ Elevators</h2>

                <ul className="list-none flex flex-col gap-8">
                    {ProductsDetail.map((product) => {
                        const url = '/elevators/' + product.title.toLowerCase().replace(/[^a-zA-Z-]/g, '-');
                        return (
                            <li key={product.id} className="text-lg flex  items-center word-break ">
                                {/* <div className="pr-4"><FaElevator size={16} className="" /></div> */}
                                <Link href={url}>{product.title}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export const MobileSidebar = () => {

    const [show, setShow] = useState(false);

    return (
        <div className=" relative bg-green-100 w-12   ">

            <div className="absolute bg-red-100 flex flex-col gap-12 p-8 ">

                <div className="flex justify-between items-center">
                    {!show ?
                        <BiMenu size={36} onClick={() => setShow(!show)} />
                        : <CgClose size={36} onClick={() => setShow(!show)} />
                    }
                </div>

                {show &&
                    <ul className=" slideInFromLeft flex left-0  top-24  bg-red-100 flex-col gap-6 list-none">
                        <li>
                            <Link href="/elevators">Elevators</Link>
                        </li>
                        {ProductsDetail.map((product) => {
                            const url = '/elevators/' + product.title.toLowerCase().replace(/[^a-zA-Z-]/g, '-');
                            let title = product.title.split(' ')[0];
                            return (
                                <li key={product.id}>
                                    <Link href={url} className="relative">
                                        {/* <FaElevator size={24} className="" /> */}
                                        {title}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                }
            </div>
        </div>
    )
}



export const Sidebar = () => {
    const { isMobile, isTablet, isSmallDesktop } = useWindow();
    const [small, setSmall] = useState(true);

    useEffect(() => {
        if (isMobile || isTablet || isSmallDesktop) {
            setSmall(true);
        } else {
            setSmall(false);
        }
    })
    return (
        <aside>
            {small ? <MobileSidebar /> : <DesktopSidebar />}
            {/* <MobileSidebar /> */}
        </aside>
    )
}





