import Image from "next/image"


export interface CarouselHeroSlideProps {
    image?: string,
    title?: string,
    subtitle?: string,
    description?: string,
    button_text?: string,
    video?: string,

}

const CarouselHeroSlide = ({ image, title, description, button_text, video, subtitle }: CarouselHeroSlideProps) => {

    const hasHeader = () => title && description && button_text;

    const header = hasHeader();

    return (
        <div className="w-full h-[700px] bg-red-200 text-white">

            {
                video ?
                    <div className="relative">
                        <video className="h-[700px] w-screen object-cover "
                            src={video} autoPlay loop muted playsInline width={1200} height={1200}  ></video>
                        {
                            header &&
                            <div className="header fixed bottom-[40%] left-[10%] flex flex-col gap-2">
                                <h1 className="text-7xl text-white font-medium">{title}</h1>
                                <p>{description}</p>
                                <p>{subtitle}</p>

                                <button className="px-4 py-2 bg-blue-800 rounded-full text-xl w-44  mt-12">{button_text}</button>
                            </div>
                        }
                    </div>

                    :

                    <div className="relative h-[700px] w-screen object-cover bg-no-repeat bg-center"
                        style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
                    >
                        {/* {image && title && <Image src={image} alt={title} width={1200} height={1200} className="w-screen" />} */}
                        {header &&
                            <div className="header fixed bottom-[30%] left-[10%] flex flex-col gap-2">
                                <h1 className="text-7xl  font-medium">{title}</h1>
                                <p>{description}</p>
                                <button className="primary px-4 py-2 bg-blue-800 rounded-full text-xl w-44 mt-12">{button_text}</button>
                            </div>}
                    </div>
            }
        </div>
    )
}


export default CarouselHeroSlide;