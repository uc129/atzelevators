'use client'
import { ProductsDetail } from "@/app/constants/products";
import { useParams, useRouter } from "next/navigation";
export default function ElevatorPages() {

    const router = useRouter();
    const { elevator } = useParams();
    const urlPaths = ProductsDetail.map((product) => {
        return product.title.toLowerCase().replace(/[^a-zA-Z-]/g, '-');
    });

    if (!urlPaths.includes(elevator as string)) {
        return router.replace('/404');
        // return router.push('/404');
    }
    const product = ProductsDetail.find((product) => {
        return product.title.toLowerCase().replace(/[^a-zA-Z-]/g, '-') === elevator;
    })

    return (
        <div className="flex flex-col gap-12 py-8">
            {
                product && (
                    <div>
                        <h1>{product.title}</h1>
                        <p>{product.description}</p>
                    </div>
                )
            }


            <div>
                <div className="flex flex-col xl:flex-row gap-4  pr-12 h-[70vh]">

                    <div className="w-full xl:w-1/2 h-full flex flex-col gap-4 min-w-[300px]">

                        <div className="w-full h-5/6 bg-green-200 rounded-lg">

                        </div>
                        <div className="w-full h-1/6 bg-green-200 rounded-lg">

                        </div>

                    </div>

                    <div className="w-full xl:w-1/2  h-full flex flex-col gap-4 min-w-[300px]">

                        <div className="w-full h-2/3 bg-green-200 rounded-lg">

                        </div>
                        <div className="w-full h-1/6 bg-green-200 rounded-lg">

                        </div>
                        <div className="w-full h-1/6 bg-green-200 rounded-lg">

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}