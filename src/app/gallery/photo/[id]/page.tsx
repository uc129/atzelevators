import { GalleryOne } from "@/app/constants/photos"
import Image from "next/image"

export default function PhotoPage({ params }: { params: { id: string } }) {


    const photo = GalleryOne.find((photo) => photo.id === params.id)


    if (!photo) return <div>Invalid Photo ID</div>

    return (
        <div>
            <h1>Photo</h1>
            <Image className="img" src={photo.src} alt={photo.title} width={400} height={500} priority />
        </div>
    )
}