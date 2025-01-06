/** @format */

import Link from "next/link";
import ProductChangeButton from "./button";
import Image from "next/image";

export interface CardHeaderProps {
  title: string;
  index?: string;
  subtitle: string;
  description?: string;
  variants?: { id: string; title: string }[];
  totalNumber?: number;
  bg?: string;
  icons?: React.ReactNode[];
}

const CardHeader = (props: CardHeaderProps) => {
  const { title, index, subtitle, description, variants, totalNumber, bg, icons } =
    props;

  return (
    <div className="grid grid-cols-1 gap-4">
      {/* <HeaderLayer index={index} totalNumber={totalNumber} bg={bg} /> */}
      <ContentLayer
        title={title}
        subtitle={subtitle}
        variants={variants}
        description={description}
        bg={bg}
        icons={icons}
      />
    </div>
  );
};

// const HeaderLayer = ({ index, totalNumber, bg = '', }: { index?: string; totalNumber?: number; bg?: string; }) =>
// (
//   <div
//     className="layer-1 index w-full flex items-center text-blue_ncs"
//     style={{
//       justifyContent: index ? "space-between" : "flex-end",
//       background: bg ? bg : "transparent",
//     }}>
//     {index && <h1 className="text-9xl font-black"> {index} </h1>}

//     {totalNumber && (
//       <div className="pr-12 w-[124px] h-fit ">
//         <ProductChangeButton totalNumber={totalNumber} />
//       </div>
//     )}
//   </div>
// );

const ContentLayer = ({
  title,
  subtitle,
  variants,
  description,
  bg,
  icons,
}: {
  title: string;
  subtitle: string;
  variants?: { id: string; title: string }[];
  description?: string;
  bg?: string;
  icons?: React.ReactNode[];
}) => (
  <div style={{ background: bg ? bg : "transparent" }}
    className="layer-2 header wrapper flex gap-12 flex-wrap justify-start z-10"
  >

    <div className={`left flex flex-col gap-8 text-wrap w-full text-blue_ncs`}>

      <h3 className="text-6xl font-bold " style={{ wordBreak: "keep-all" }}>
        {" "} {title} {" "}
      </h3>

      <div className="flex justify-start xl:gap-44 gap-8 items-start">

        <div className="left flex flex-col gap-4">

          <h4 className="text-2xl font-semibold text-blue_ncs underline underline-offset-4"
            style={{ wordBreak: "keep-all" }}>
            {" "}{subtitle}{" "}
          </h4>

          {variants && (
            <div className="flex flex-wrap items-center gap-4 w-[220px] font-caption text-blue_ncs">
              {variants.map((variant, index) => (
                <div key={variant.id ? variant.id : index} className="">
                  <Link href='#' className="text-sm "> {variant.title} </Link>
                </div>
              ))}
              <Link href='#' className="text-sm"> {"View All"} </Link>
            </div>
          )}

        </div>

        {icons && icons.length > 0 &&
          <div className="right icons flex flex-wrap gap-2 md:gap-4">
            {
              icons.map((icon, index) => {
                return <div key={index}>{icon}</div>
              })
            }
            {/* <Image src="/icons_animated/swing_door.gif" alt="seal" width={120} height={120} className="product_icon " />
            <Image src="/icon/seal-question.svg" alt="seal" width={50} height={20} className="product_icon wiggle" />
            <Image src="/icon/seal-question.svg" alt="seal" width={50} height={20} className="product_icon wiggle" />
            <Image src="/icon/seal-question.svg" alt="seal" width={50} height={20} className="product_icon wiggle" />
            <Image src="/icon/seal-question.svg" alt="seal" width={50} height={20} className="product_icon wiggle" />
            <Image src="/icon/seal-question.svg" alt="seal" width={50} height={20} className="product_icon wiggle" /> */}
          </div>}
      </div>

    </div>
    {
      description && (
        <div className="right text-xl normal-case xl:w-[54%] w-full  ">
          {description}
        </div>
      )
    }
  </div >
);

export default CardHeader;
