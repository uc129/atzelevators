import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from './EmblaCarousel'
import { ProductsDetail } from '@/app/constants/products'


const OPTIONS: EmblaOptionsType = {}
const SLIDE_COUNT = ProductsDetail.length
const SLIDES = ProductsDetail

const EmblaCarouselComponent: React.FC = () => (
    <>
        <h1> Embla Carousel Header </h1>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        <h1>Carousel Footer</h1>
    </>
)

export default EmblaCarouselComponent