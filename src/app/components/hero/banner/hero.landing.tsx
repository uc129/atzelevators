const LandingHero = () => {



    return (
        <section className="w-screen h-screen">
            <video autoPlay muted loop className="w-full h-full object-cover">
                <source src="/videos/atz-promo.mov" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h1 className="text-6xl lg:text-8xl text-baby_powder font-bold">ATZ Elevator</h1>
                <p className="text-baby_powder">Keeping the world in motion</p>
            </div>
        </section>
    )


}

export default LandingHero