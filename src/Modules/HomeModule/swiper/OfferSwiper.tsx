// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";
import Countdown from '../Components/Countdown'

// Import Swiper styles
import 'swiper/css/bundle';
export default function OffersSwiper() {
  return (
    <>
      <div className="overflow-hidden my-6 px-1">
        <Swiper
          modules={[Autoplay, Navigation]}
          loop={true}
          spaceBetween={40}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          // autoplay={{
          //   delay: 1000,
          //   disableOnInteraction: false,
          //   pauseOnMouseEnter: true,
          // }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}

        >
          <SwiperSlide>
            <div className="card  text-start bg-[#FCEBEA] rounded-[20px] flex bg-[url(/images/home/offer_img.png)] bg-no-repeat px-10 bg-right bg-size-[50%_100%] ">
              <div className="content basis-6/12 mt-18.25">
                <h2 className="font-bold text-[45px] text-[#463C74]">All books are 50% off now! Don't miss such a deal!</h2>
                <p className=" text-[18px] text-[#393280] mt-3.25">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
                <div className="date-counter mt-7 mb-17.5">
                  <Countdown/>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

    </>
  )
}