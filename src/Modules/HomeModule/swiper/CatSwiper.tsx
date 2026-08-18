// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import 'swiper/css/bundle';
import { useRef } from 'react';
export default function CategorySwiper() {
  const nextRef = useRef(null)
  const prevRef = useRef(null)
  return (
    <>
      <div className="overflow-hidden my-6 px-1">
        <Swiper
          modules={[Autoplay, Navigation]}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 5
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 10
            },
          }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          // autoplay={{
          //   delay: 1000,
          //   disableOnInteraction: false,
          //   pauseOnMouseEnter: true,
          // }}
          navigation={{
            nextEl: nextRef.current,
            prevEl: prevRef.current,
          }}
          onBeforeInit={(swiper) => {
            if (swiper.params.navigation) {
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.params.navigation.prevEl = prevRef.current;
            }
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
        {/* <div className="swiper-controls absolute bg-black top-0 right-0 ">
          <button ref={prevRef} className="swiper-button-prev bg-black"></button>
          <button ref={nextRef} className="swiper-button-next bg-black"></button>
        </div> */}
      </div >

    </>
  )
}