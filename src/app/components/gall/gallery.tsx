'use client'
import Image from "next/image";
import { GalleryOne } from "@/app/constants/photos";
import { forwardRef, use, useEffect, useRef, useState } from "react";

import { useRouter } from "next/router";
import Link from "next/link";


const GalleryStatic = () => {

    let viewportRef = useRef<HTMLDivElement>(null);
    let slice = GalleryOne.slice(0, 8);
    let [img1, img2, img3, img4, img5, img6, img7] = slice;
    let images = [img2, img4, img7, img3, img6, img1, img5];
    let width = [640, 640, 280, 440, 540, 600, 600];
    // let translate = [{ x: -540, y: 0 }, { x: -540, y: 0 }, { x: -680, y: 100 }, { x: -840, y: 0 }, { x: -880, y: 0 }, { x: -680, y: 0 }, { x: 0, y: 0 },];
    let translate = [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 },]

    useEffect(() => {

        if (!document) return;
        let images = document.querySelectorAll('.link') as NodeListOf<HTMLAnchorElement>;
        let viewport = document.querySelector('.gall_image_viewport') as HTMLDivElement;

        if (!images) return;
        if (!viewport) return;

        images.forEach((image, index) => {
            image.style.transition = `all 0.5s ease-in-out`;
            image.addEventListener('mouseenter', () => {
                image.style.transform = `scale(1.1)`;
                image.style.zIndex = '100';
                viewport.getAnimations().forEach((animation) => {
                    animation.pause();
                })
            })

        })

        images.forEach((image, index) => {
            image.addEventListener('mouseleave', () => {
                image.style.transform = `scale(1)`;
                image.style.zIndex = '1';
                viewport.getAnimations().forEach((animation) => {
                    animation.play();
                })
            })
        })


        let interval = setInterval(() => {
            images.forEach((image, index) => {
                image.style.transform = `translateX(${width[index]}}px`;
            }, 3000)
        })

        return () => clearInterval(interval);

    }, [viewportRef, images])

    return (

        <>
            <div ref={viewportRef} className=" carousel gall_image_viewport cursor-pointer flex gap-16 items-center "
                style={{ touchAction: 'pinch-zoom', direction: 'ltr' }}>
                {images.map((image, index) => {
                    return (

                        <Link className="link" target="_blank" rel="noopener noreferrer" href={`/gallery/photo/${image.id}`} key={image.id}>
                            <Image src={image.src} alt={image.title} width={800} height={800} className="rounded-2xl" style={{ minWidth: `${width[index]}px` }} />
                        </Link>

                    )
                })}
            </div>


        </>
    )
}

export default GalleryStatic;