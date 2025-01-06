'use client'

import { ProductsDetail } from "@/app/constants/products"
import Link from "next/link";
import { FaElevator } from "react-icons/fa6";
import { useWindow } from "@/app/lib/window-context";

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
    return (
        <div className="flex flex-col gap-8 p-8 w-24 word-break">
            <div className="flex justify-between items-center">

            </div>
            <ul className="flex flex-col gap-6 list-none">
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
        </div>
    )
}



export const Sidebar = () => {
    const { isMobile, isTablet, isSmallDesktop } = useWindow();
    return (
        <aside>
            {(isMobile || isTablet || isSmallDesktop) ? <MobileSidebar /> : <DesktopSidebar />}
        </aside>
    )
}





