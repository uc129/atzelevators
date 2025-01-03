import Image from "next/image"




const LandingHero = () => {



    return (
        <section className="w-screen h-screen">
            <Image src={'/images/20.jpg'} width={2400} height={2400} alt="ATZ ELEVATORS" className="w-screen h-screen object-cover" />
        </section>
    )


}

export default LandingHero