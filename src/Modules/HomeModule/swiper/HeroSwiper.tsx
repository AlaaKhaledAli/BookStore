// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import 'swiper/css/bundle';
export default function HeroSwiper() {
  return (
    <>
      <div className="overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}

        >
          <SwiperSlide>
            <div className="img-container flex justify-end items-center">
              <img src="images/heroImg.png" alt="Hero Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          ...
        </Swiper>
      </div>

    </>
  )
}