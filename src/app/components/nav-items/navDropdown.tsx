import Image from "next/image"
import { BiChevronDown } from "react-icons/bi"


interface NavDropdownProps {
    title: string,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    ariaControls?: string
}


export const NavDropdown = ({ title, onClick, ariaControls }: NavDropdownProps) => {

    return (
        <li>
            <button className="nav-link break-word dropdown-toggle *:transition-all  *:duration-300 " onClick={onClick} aria-expanded={false} aria-haspopup aria-controls={ariaControls}>
                <div className="pointer-events-none flex items-center gap-4 py-2">
                    <span className="text-sm md:text-md xl:text-xl">{title}</span>
                    <span className="transition-transform duration-300" id={ariaControls + '-chevron'}>
                        {/* <Image src="/icons/arrow-up" alt="chevron-down" width={12} height={12} /> */}
                        <BiChevronDown />
                    </span>
                </div>
            </button>
        </li>
    )


}