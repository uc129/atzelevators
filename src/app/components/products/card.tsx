'use client'
import ProductCarousel from "../carousel/EmblaCarousel";
import CardHeader, { CardHeaderProps } from "./header";


export interface ProductDetailInterface {
    id: string;
    index: string;
    title: string;
    subtitle: string;
    description: string;
    images: { name: string, src: string }[];
    variants: ProductVariantInterface[];
    featured: boolean;
    price?: string;
    icon?: string;
    features?: string[];
    totalNumber?: number;
    animatedIcons?: React.ReactNode[];
}

export interface ProductVariantInterface {
    id: string;
    index: string;
    title: string;
    subtitle: string;
    description: string;
    price?: number;
    tagline: string;
    url: string;
    images: { name: string, src: string }[]
}

interface ProductCardProps {
    product: ProductDetailInterface;
    index: string;
    totalNumProducts: number;
    icons?: React.ReactNode[]
}

const ProductCard = ({ product, index, totalNumProducts, icons }: ProductCardProps) => {

    let header: CardHeaderProps = {
        title: product.title,
        index: index,
        subtitle: product.subtitle,
        description: product.description,
        variants: product.variants.map(variant => { return { id: variant.id as string, title: variant.title as string } }),
        totalNumber: totalNumProducts
    }

    return (
        <div className="uppercase    border-blue_ncs">
            <CardHeader {...header} icons={icons} />

            <div className="variants py-6 overflow-hidden">
                <ProductCarousel slides={product.variants} />
            </div>
        </div>
    )

}

export default ProductCard