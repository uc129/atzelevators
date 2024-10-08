import Image from "next/image";
import Link from "next/link";

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}

export const NavLink = ({ href, children }: NavLinkProps) => {


    return (
        <div>
            <Link href={href}> {children} </Link>
        </div>
    )


};