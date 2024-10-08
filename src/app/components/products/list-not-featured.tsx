/** @format */
'use client';

import { ProductDetailInterface } from "./card";
import CardHeader from "./header";
import ProductCardSmall from "./card-small";
import { useEffect, useState } from "react";
import { start } from "repl";



const NotFeaturedProductsList = ({ products, card_height }: { products: ProductDetailInterface[]; card_height: string }) => {

  let numInView = 2;
  let length = products.length;
  let cardHeight = card_height;
  const [startIndex, setStartIndex] = useState(0);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    let target = e.currentTarget.id;
    if (!target) return;

    let newStartIndex = startIndex;

    if (target === "scroll-up") {
      newStartIndex = startIndex - 1;
    } else {
      newStartIndex = startIndex + 1;
    }

    setStartIndex(newStartIndex);

  };


  useEffect(() => {
    if (startIndex === 0) {
      setPrevDisabled(true);
      setNextDisabled(false);
    }

    if (startIndex === length - numInView) {
      setPrevDisabled(false);
      setNextDisabled(true);
    }
  }, [startIndex])

  return (
    <div className="relative overflow-hidden flex flex-col gap-24 pb-14 ">
      <CardHeader
        title="Our Products"
        subtitle="Explore our range of products"
      />

      <div className="flex flex-col">
        <div className="content">
          <ProductCardSmall product={products[startIndex]} height={cardHeight} />
          <ProductCardSmall product={products[startIndex + 1]} height={cardHeight} />
        </div>



      </div>

      <div className="buttons flex flex-col gap-2 justify-center">
        <button
          id="scroll-up"
          onClick={handleButtonClick}
          className="round-button-group w-full"
          disabled={prevDisabled}
        >
          Scroll Up
        </button>
        <button
          id="scroll-down"
          onClick={handleButtonClick}
          className="round-button-group w-full"
          disabled={nextDisabled}
        >
          Scroll Down
        </button>
      </div>


    </div >

  );
};

export default NotFeaturedProductsList;
