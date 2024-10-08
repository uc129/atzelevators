// import { ArrowRight } from "@phosphor-icons/react"
'use client'
import { useEffect } from "react"

const SearchBox = () => {

    useEffect(() => {



    })


    return (

        <form className=" w-[70%] md:w-[80%] mx-auto p-2  h-fit flex flex-col gap-8 overflow-hidden ">

            <div className=" grid items-start grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-12">

                <div className="selectDoorType search-group">
                    <label htmlFor="doorType" className="search-label">Door Type</label>
                    <select name="doorType" id="doorType" className="search-control">
                        <option value="auto">Automatic</option>
                        <option value="collapsible">Collapsible</option>
                        <option value="swing">Swing</option>

                    </select>
                </div>

                <div className="selectFinish search-group">
                    <label htmlFor="finish" className="search-label">Interior Finish</label>
                    <select name="finish" id="finish" className="search-control">
                        <option value="stainless">Stainless Steel</option>
                        <option value="glass">Glass</option>
                        <option value="wood">Wood</option>
                    </select>
                </div>

                <div className="numPax search-group">
                    <label htmlFor="numPax" className="search-label"> Passengers </label>
                    <input type="number" name="numPax" id="numPax" placeholder="12" defaultValue={12} className="search-control w-24" />
                </div>

                <div className="numFloor search-group">
                    <label htmlFor="numFloor" className="search-label"> Floors </label>
                    <input type="number" name="numFloor" id="numFloor" placeholder="6" defaultValue={6} className="search-control w-24" />
                </div>

                {/* <button type="submit" className="flex items-center bg-white rounded-lg w-44 h-16" >
                    <ArrowRight size={32} />
                </button> */}



                <div className="selectFinish search-group">
                    <label htmlFor="machine-room" className="search-label">Machine Type</label>
                    <select name="machine-room" id="machine-room" className="search-control">
                        <option value="classic">Classic</option>
                        <option value="mrl">MRL</option>
                        <option value="gearless">Gearless</option>
                    </select>
                </div>

                <div className="search-group">
                    <label htmlFor="submit" className="search-label"> Search </label>
                    <button type="submit" name="submit" className="search-control">
                        Submit
                    </button>
                </div>





            </div>

            {/* Rounded buttons */}
            <div className="buttons-rounded flex items-center gap-4 justify-center md:justify-start w-[70%] mx-auto">

                <div className="round-button-group">
                    <button className="round-button-control">
                        Residential
                    </button>
                </div>

                <div className="round-button-group">
                    <button className="round-button-control">
                        Commercial
                    </button>
                </div>

                <div className="round-button-group">
                    <button className="round-button-control">
                        Hospital
                    </button>
                </div>

                <div className="round-button-group">
                    <button className="round-button-control">
                        Home
                    </button>
                </div>
            </div>



        </form>



    )


}


export default SearchBox