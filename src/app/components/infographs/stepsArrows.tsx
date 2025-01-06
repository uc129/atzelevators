

export interface ArrowStepInfoGraphProps {
    textArray: string[];
}
export const StepsArrowInfoGraph = ({ textArray }: ArrowStepInfoGraphProps) => {




    return (
        <div className=" flex flex-col justify-center items-center bg-indian_red text-baby_powder p-4">
            {/* <caption className="text-left  text-sm p-12 pb-6 w-full font-bold text-gray-800">Our Process</caption> */}
            <div className="flex items-center justify-start gap-4 flex-wrap">
                {
                    textArray.map((text, index) => {
                        return (
                            <div key={text} className="flex items-center  min-w-[4rem] gap-4 uppercase">
                                <h5 className="step-text">{text}</h5>
                                {!(index === textArray.length - 1) &&
                                    <svg className="fill-white" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" color="#000"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>}
                            </div>
                        )
                    })
                }
            </div>
        </div>



    )


}