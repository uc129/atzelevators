import Image from "next/image"
import { GalleryOne } from "../constants/photos"
export default function GalleryPage() {
    return (
        <div className="flex flex-wrap gap-4">
            {GalleryOne.map((photo) => {
                return (
                    <div key={photo.id} className="">
                        <Image src={photo.src} alt={photo.title} width={400} height={500} />
                    </div>
                )
            })}
        </div>
    )
}