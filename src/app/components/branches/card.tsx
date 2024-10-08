import { ATZBranch } from "@/app/constants/branches";
import Image from "next/image";

const BranchCard = ({ branch, classNames, width = 50 }: { branch: ATZBranch, classNames?: string, width?: number }) => {
    if (!branch) return null;
    return (
        <div className={`min-w-44 ${classNames}`}>
            <Image src={branch.image} alt={branch.title} width={width} height={width} />
            <h3>{branch.title}</h3>
            <p>{branch.location}</p>
        </div>
    )
}

export default BranchCard