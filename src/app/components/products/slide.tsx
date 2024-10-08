import Link from "next/link"
import { ProductVariantInterface } from "./card"
import Image from "next/image"



export const ProductSlide = ({ variantDetail }: { variantDetail: ProductVariantInterface }) => {

    return (
        <div className="slide-wrapper px-4 py-6 text-blue_ncs min-w-[244px]">

            <div className="flex flex-col md:flex-row gap-2">

                <div className="image  border-[1px] border-black rounded-sm">

                    <Image className=" w-[380px] shadow-intense h-[280px] object-cover  "
                        style={{ filter: 'grayscale(50%)' }}
                        src={variantDetail.images[0].src} alt={variantDetail.images[0].name} width={500} height={500} />

                </div>

                <div className="text uppercase text-left flex flex-col justify-between py-8 -ml-5  z-20 tracking-widest" style={{ wordBreak: 'keep-all' }}>
                    <div>
                        <h1 className="text-3xl font-bold ">{variantDetail.title} </h1>
                        <p className="text-xs font-medium">{variantDetail.subtitle}</p>
                    </div>
                    <div>
                        <p>{variantDetail.price}</p>
                        <p>{variantDetail.tagline}</p>
                    </div>

                    <Link className="round-button-group text-center" style={{ background: 'transparent' }} href={'/'}> View Details </Link>

                </div>

            </div>
        </div>
    )

}