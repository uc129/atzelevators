import Image from "next/image";
import { ProductVariantInterface } from "./card";
import { useState } from "react";



const VariantSlideshow = ({ variants, parent }: { variants: ProductVariantInterface[], parent: string }) => {

    const variantIndexArray = variants.map((_, index) => index);


    const [currentVariant, setCurrentVariant] = useState<ProductVariantInterface>(variants[0]);

    const handleNextClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        variants.map((variant, index) => {
            if (!variant.id) return;
            const element = document.getElementById(variant.id);
            if (element) {
                element.style.transform = 'translateX(-100%)';
            }
        })
    }

    return (
        <div>
            <div className=" slider flex justify-start gap-12 overflow-hidden" style={{ width: `${variants.length * 100}vw` }} >
                {
                    variants.map((variant, index) => {
                        return (
                            <div key={variant.id} id={variant.id} className="variant w-[80vw] slide  flex gray-200">

                                <div className="left w-1/3">
                                    <p> Featured {parent} </p>
                                    <h3> {(index + 1).toString()} </h3>
                                </div>

                                <div className="center w-1/3">
                                    <Image src={variant.images[0].src} alt={variant.title} width={400} height={400} />
                                </div>

                                <div className="right w-1/3">

                                    {variant.title}
                                    {variant.subtitle}
                                    {variant.description}
                                    {variant.price}

                                    <div>
                                        <button className="button-rounded">
                                            View Details
                                        </button>
                                    </div>

                                </div>

                            </div>
                        )
                    })
                }



            </div>

            <div className="buttons w-[80vw] flex justify-end  gap-12">

                <button name='prev' className="prev hover:text-white">
                    Prev
                </button>

                <button name='next' onClick={handleNextClick} className="next hover:text-white">
                    Next
                </button>

            </div>




        </div>


    )







}


export default VariantSlideshow