// import { ArrowRight } from "@phosphor-icons/react"
'use client'
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import Modal from 'react-modal';
import { CgClose } from "react-icons/cg";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#enquiry-modal');


const EnquiryBox = () => {
    const router = useRouter()
    const [modalIsOpen, setIsOpen] = useState(false);
    const [confirmSubmit, setConfirmSubmit] = useState(false);



    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const [formState, setFormState] = useState({
        doorType: 'auto',
        finish: 'stainless',
        numPax: 6,
        numFloor: 6,
        machineRoom: 'classic',
        message: 'Message'
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }
    const handleConfirm = () => {
        setConfirmSubmit(true)
    }

    const closeConfirm = () => {
        setConfirmSubmit(false)
    }


    const handleSubmit = (e: React.MouseEvent) => {
        e.preventDefault();
        if (formState.doorType === '' || formState.finish === '' ||
            formState.numPax === 0 || formState.numFloor === 0 ||
            formState.machineRoom === '' || formState.message === '') {
            alert('Please fill all fields')
        }
        console.log(formState);
        localStorage.setItem('enquiry', JSON.stringify(formState))
        const submitButton = document.getElementById('enquiry-submit-button') as HTMLButtonElement;
        localStorage.setItem("enquiry-sent", "true")
        submitButton.disabled = true;
        closeConfirm()
        openModal()
    }

    useEffect(() => {
        if (localStorage.getItem('enquiry-sent') === 'true') {
            const submitButton = document.getElementById('enquiry-submit-button') as HTMLButtonElement;
            submitButton.disabled = true;
        };

        const timeOut = setTimeout(() => {
            localStorage.removeItem('enquiry-sent')
        }, 1000 * 60 * 30)// 30 minutes

        return () => clearTimeout(timeOut)

    }, [])



    return (

        <div>
            <form className=" w-[70%] md:w-[80%] mx-auto p-2 py-6  h-fit flex flex-col gap-8 overflow-hidden" method="POST" action="/search" >

                <div className=" grid items-start grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-12">

                    <div className="selectDoorType search-group">
                        <label htmlFor="doorType" className="search-label">Door Type</label>
                        <select name="doorType" id="doorType" className="search-control" onChange={handleChange}>
                            <option value="auto">Automatic</option>
                            <option value="collapsible">Collapsible</option>
                            <option value="swing">Swing</option>
                            <option value="telescopic">Telescopic</option>

                        </select>
                    </div>

                    <div className="selectFinish search-group">
                        <label htmlFor="finish" className="search-label">Interior Finish</label>
                        <select name="finish" id="finish" className="search-control" onChange={handleChange}>
                            <option value="stainless">Stainless Steel</option>
                            <option value="glass">Glass</option>
                            <option value="wood">Wood</option>
                        </select>
                    </div>

                    <div className="numPax search-group">
                        <label htmlFor="numPax" className="search-label"> Passengers </label>
                        <input onChange={handleChange} type="number" name="numPax" id="numPax" placeholder="6" defaultValue={6} className="search-control w-24" />
                    </div>

                    <div className="numFloor search-group">
                        <label htmlFor="numFloor" className="search-label"> Floors </label>
                        <input onChange={handleChange} type="number" name="numFloor" id="numFloor" placeholder="6" defaultValue={6} className="search-control w-24" />
                    </div>

                    <div className="selectFinish search-group">
                        <label htmlFor="machine-room" className="search-label">Machine Type</label>
                        <select onChange={handleChange} name="machineRoom" id="machine-room" className="search-control">
                            <option value="classic">Classic</option>
                            <option value="mrl">MRL (Machine room less)</option>
                            <option value="gearless">Gearless</option>
                        </select>
                    </div>
                    <div className="search-group col-span-2">
                        <label htmlFor="message" className="search-label">Message</label>
                        <textarea onChange={handleChange} name="message" id="message" className="search-control" placeholder="Message" rows={4} />
                    </div>

                    <div className="search-group">
                        <label htmlFor="submit" className="search-label"> Search </label>
                        <button onClick={handleConfirm} type="button" id="enquiry-submit-button" name="submit" className="search-control hover:bg-blue_ncs hover:text-baby_powder transition-all duration-300">
                            Submit Enquiry
                        </button>
                    </div>

                </div>


            </form >

            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
                <h2>Enquiry Submitted</h2>
                <p>Thank you for your enquiry. We will get back to you shortly</p>
                <button onClick={closeModal}>
                    <CgClose />
                </button>
            </Modal>

            <Modal isOpen={confirmSubmit} onRequestClose={closeConfirm} style={customStyles} contentLabel="Example Modal">

                <h2>Confirm Submission</h2>
                <p>Are you sure you want to submit this enquiry?</p>
                <div className="flex gap-4">
                    <button onClick={handleSubmit}>
                        Yes
                    </button>
                    <button onClick={() => setConfirmSubmit(false)}>
                        No
                    </button>
                </div>
            </Modal>

        </div>


    )


}


export default EnquiryBox