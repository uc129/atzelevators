/** @format */

import Image from "next/image";
import { ProductDetailInterface } from "./card";

const ProductCardSmall = ({ product, height, }: { product: ProductDetailInterface; height: { lg: string, sm: string } }) => {

  return (
    <div id={product.id + '-small-card'}
      className={`flex flex-col px-6 xl:pl-24 xl:pr-12  py-4  w-[${height.sm}] lg:w-[${height.lg}] `}
      style={{ wordBreak: "keep-all", textJustify: "inter-character" }}>

      <div className="layer-1 flex flex-wrap md:flex-nowrap gap-3 md:gap-8 h-full">
        {product.icon && (
          <div className="left pt-2">
            <Image className="rounded-full min-w-4" src={product.icon} alt={product.title} width={20} height={20} />
          </div>

        )}

        <div className="center  flex flex-col gap-4">
          <h3 className="text-4xl font-bold"> {product.title} </h3>
          <h4 className="text-2xl font-semibold"> {product.subtitle} </h4>

          <div className="flex flex-wrap  w-[80%] gap-4 lg:gap-12">
            <p className="w-3/4 min-w-[344px]">{product.description}</p>

            {product.features && product.features.length > 0 && (
              <div className="right flex flex-col">
                {product.features.map((feature, index) => {
                  return (
                    <p key={index} className="font-semibold">
                      {" "}
                      {feature}{" "}
                    </p>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <div className="right w-full lg:w-[424px] pt-3 flex items-start">
          <button className="round-button-group w-full pointer-events-auto">View Details</button>
        </div>
      </div>

      <div className="layer-2"></div>
    </div>
  );
};

export default ProductCardSmall;
