


const GlassView = () => {


    return (
        <div className="w-[4%] sticky top-24 border-l-[1px] h-[94vh]   min-w-[44px]  pb-8 min-h-[80vh] border-blue_ncs">

            <div className="h-full w-full relative   "
                style={{ backgroundImage: 'url("/images/50.jpg")', backgroundAttachment: 'fixed', backgroundSize: 'cover' }}
            >

                <div className="h-full w-full absolute bg-transparent"
                    style={{ backdropFilter: 'blur(5px)' }}
                >
                </div>
            </div>
        </div>
    )


}

export default GlassView