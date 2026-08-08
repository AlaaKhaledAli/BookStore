// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import 'swiper/css/bundle';
export default function CategorySwiper() {
  return (
    <>
      <div className="overflow-hidden my-6 px-1">
        <Swiper
          modules={[Autoplay, Navigation]}
          loop={true}
          spaceBetween={10}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}

        >
          <SwiperSlide>
            <div className="card text-center text-[#393280]">
              <div className="img-container w-full h-60 ">
                <img src="images/home/cat-1.jpg" alt="" className="w-full h-full rounded-[10px]" />
              </div>
              <h4 className="font-semibold text-[24px] mt-4">Higher Education</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card text-center text-[#393280]">
              <div className="img-container w-full h-60 ">
                <img src="images/home/cat-2.jpg" alt="" className="w-full h-full rounded-[10px]" />
              </div>
              <h4 className="font-semibold text-[24px] mt-4">Management Books</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card text-center text-[#393280]">
              <div className="img-container w-full h-60 ">
                <img src="images/home/cat-3.jpg" alt="" className="w-full h-full rounded-[10px]" />
              </div>
              <h4 className="font-semibold text-[24px] mt-4">Engineering Books</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card text-center text-[#393280]">
              <div className="img-container w-full h-60 ">
                <img src="images/home/cat-1.jpg" alt="" className="w-full h-full rounded-[10px]" />
              </div>
              <h4 className="font-semibold text-[24px] mt-4">Higher Education</h4>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

    </>
  )
}