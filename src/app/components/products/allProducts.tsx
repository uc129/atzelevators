'use client'
import { ProductsDetail } from "@/app/constants/products";
import ProductCardSmall from "./card-small";
import CardHeader from "./header";
import { GoChevronUp, GoChevronDown } from "react-icons/go";
import { MouseEventHandler, useEffect, useState } from "react";


const AllProductsScroller = () => {

    let viewport_height = {
        lg: '700px',
        md: '600px',
        sm: '500px',
    }
    let slide_height = {
        lg: '340px',
        sm: '540px'
    }
    let slide_gap = '10px';

    let scrollY = {
        lg: 350,
        md: 450,
        sm: 550
    }

    const [disablePrev, setDisablePrev] = useState(true);
    const [disableNext, setDisableNext] = useState(false)
    const [screen, setScreen] = useState({
        isLg: false,
        isSm: false,
        isMd: false
    });


    useEffect(() => {
        if (window.innerWidth < 768) {
            setScreen({ isLg: false, isSm: true, isMd: false });
        }
        if (window.innerWidth < 1024) {
            setScreen({ isLg: false, isSm: false, isMd: true });
        }
        if (window.innerWidth >= 1024) {
            setScreen({ isLg: true, isSm: false, isMd: false });
        }
    }, [])

    useEffect(() => {

        let viewport = document.getElementById('all_products_scroll_viewport');
        if (viewport) {
            viewport.addEventListener('scroll', (e) => {
                let scrollable = viewport.scrollHeight - viewport.clientHeight;
                let scroll = viewport.scrollTop;
                if (scroll === 0) {
                    setDisablePrev(true);
                } else {
                    setDisablePrev(false);
                }
                if (scroll === scrollable) {
                    setDisableNext(true);
                } else {
                    setDisableNext(false);
                }
            })
        }

    })

    const handleScrollUp = (e: React.MouseEvent<HTMLButtonElement>) => {
        let viewport = document.getElementById('all_products_scroll_viewport');
        let vh = '100';
        let scroll = 100;

        if (screen.isLg) {
            vh = viewport_height.lg;
            scroll = scrollY.lg;
        }
        if (screen.isSm) {
            vh = viewport_height.sm;
            scroll = scrollY.sm;
        }
        if (screen.isMd) {
            vh = viewport_height.md;
            scroll = scrollY.md;
        }



        if (viewport) {
            viewport.style.scrollBehavior = 'smooth';
            viewport.scrollBy(0, -scroll);
        }
    }

    const handleScrollDown = (e: React.MouseEvent<HTMLButtonElement>) => {
        let viewport = document.getElementById('all_products_scroll_viewport');
        let vh = '100';
        let scroll = 100;

        if (screen.isLg) {
            vh = viewport_height.lg;
            scroll = scrollY.lg;
        }
        if (screen.isSm) {
            vh = viewport_height.sm;
            scroll = scrollY.sm;
        }
        if (screen.isMd) {
            vh = viewport_height.md;
            scroll = scrollY.md;
        }

        if (viewport) {
            viewport.style.scrollBehavior = 'smooth';
            viewport.scrollBy(0, -scroll);
        }
        if (viewport) {
            viewport.style.scrollBehavior = 'smooth';
            viewport.scrollBy(0, scroll);

        }
    }

    return (
        <div className="flex flex-col gap-6">
            <CardHeader title="Our Products" subtitle="Explore our range of products" />

            <div className="w-full  overflow-hidden  py-4 pointer-events-none"
                style={{
                    gap: slide_gap,
                    height: screen.isLg ? viewport_height.lg :
                        screen.isSm ? viewport_height.sm :
                            viewport_height.md
                }}
            >
                <div id='all_products_scroll_viewport' className="viewport overflow-scroll h-full flex flex-col"
                    style={{ gap: slide_gap, scrollbarColor: 'transparent', scrollbarGutter: 'stable' }}
                >
                    {ProductsDetail.map((product) => {
                        return (<ProductCardSmall product={product} height={slide_height} key={product.id} />)
                    })}
                </div>
            </div>

            <div className=" flex justify-between w-[90%] mx-auto  rounded-full  border-collapse">
                <button type="button" className="round-button-group w-1/3 " onClick={handleScrollUp} disabled={disablePrev} >
                    <GoChevronUp size={40} className="pointer-events-none mx-auto" />
                </button>

                <button type="button" className="round-button-group w-1/3" onClick={handleScrollDown} disabled={disableNext}>

                    <GoChevronDown size={40} className="pointer-events-none mx-auto" />
                </button>
            </div >

        </div >

    )


}


export default AllProductsScroller;