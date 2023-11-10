"use client"
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

type Props = {}

const heroImage = [
    { imgUrl: "/public/assets/images/hero-1.svg", alt: "hero-1" },
    { imgUrl: "/public/assets/images/hero-2.svg", alt: "hero-2" },
    { imgUrl: "/public/assets/images/hero-3.svg", alt: "hero-3" },
    { imgUrl: "/public/assets/images/hero-4.svg", alt: "hero-4" },
    { imgUrl: "/public/assets/images/hero-5.svg", alt: "hero-5" },

]

const HeroCarousel = (props: Props) => {
  return (
    <div className='hero-carousel'>
        <Carousel showThumbs={false} autoPlay infiniteLoop interval={2000} showArrows={false} showStatus={false}>
            {heroImage.map((item) => (
                <Image src={item.alt} alt={item.alt} width={484} height={484} className=' object-contain' key={item.alt} />
            ))}
        </Carousel>
        <Image src="/public/assets/icons/hand-drawn-arrow.svg" alt='arrow' width={175} height={175} className=' max-xl:hidden absolute -left-[15%] bottom-0 z-0' />
    </div>
  )
}

export default HeroCarousel