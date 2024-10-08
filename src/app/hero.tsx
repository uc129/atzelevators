import EmblaCarousel from "./components/hero/hero-carousel/carousel"
import { CarouselHeroSlideProps } from "./components/hero/hero-carousel/carousel.slides"


let slides: CarouselHeroSlideProps[] = [
  {
    title: "Rise to lead",
    description: "Best in class vertical transportation solutions",
    button_text: "Learn More",
    video: '/videos/atz-promo.mov'
  },
  {
    title: 'We shape the future of cities',
    description: 'Our purpose is to make cities more accessible for all',
    button_text: 'Learn More',
    video: '/videos/video-2.webm'
  },
  {
    title: 'Diversity makes us unique, inclusion makes us strong',
    description: 'We are committed to creating a diverse and inclusive environment',
    button_text: 'Learn More',
    video: '/videos/video-3.webm'
  },
  {
    title: 'ATZ report 2024',
    description: 'Our annual report is out now',
    button_text: 'Download',
    image: '/images/atz-report-2024.png'
  },
  {
    title: 'We are hiring',
    description: 'Join our team of experts',
    button_text: 'Apply Now',
    image: '/images/hiring.jpeg'
  },
  {
    title: 'Helping cities grow sustainably',
    description: 'Our commitment to sustainability',
    button_text: 'Learn More',
    image: '/images/atz-sustainability.jpeg'
  },
  {
    title: 'A lifetime of support',
    description: 'Our commitment to our customers',
    button_text: 'Learn More',
    image: '/images/atz-support.jpeg'
  },
  {
    title: 'Designing for the future',
    description: 'Our commitment to innovation',
    button_text: 'Learn More',
    image: '/images/atz-innovation.jpeg'
  }
]

const HeroSection = () => {

  return (
    <EmblaCarousel slides={slides} />
  )


}

export default HeroSection