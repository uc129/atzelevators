
import Link from "next/link"
import Image from "next/image"


const NavigationBar = () => {
    return (
        <nav
            id="navbar"
            className={`nav px-12 h-[10vh] min-h-[64px] 0 z-50
                flex justify-between items-center font-bold  border-b-[1px] border-blue_ncs `}
        >
            <div className="left">
                <Link href={'/'} className="text-xl">
                    <Image src="/logo-transparent.png" alt="atz logo" width={60} height={60} className="w-auto h-auto" />
                </Link>
            </div>

            <div className="flex gap-12">
                <Link href='/elevators'> Elevators </Link>
                <Link href='/escalators'> Escalators </Link>
                <Link href='/services'> Services </Link>
            </div>
        </nav>
    )
}




export default NavigationBar