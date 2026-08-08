// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import 'swiper/css/bundle';
export default function BooksSwiper() {
  return (
    <>
      <div className="overflow-hidden my-6 px-1">
        <Swiper
          modules={[Autoplay, Navigation]}
          loop={true}
          spaceBetween={20}
          slidesPerView={4}
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
            <div className="card text-center text-[#393280] ">
              <div className="img-container w-full h-full  bg-white ">
                <img src="images/home/book-1.png" alt="" className="w-full h-auto" />
              </div>
              <h4 className="font-semibold text-[22px] mt-4">
                <cite className=" not-italic">Simple way of piece life</cite>
              </h4>
              <p className="text-[14px] text-[#888888] font-normal mt-2">Armor Ramsey</p>
              <p className="text-[18px] font-bold text-[#ED553B] mt-5">$ 40.00</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card text-center text-[#393280] ">
              <div className="img-container w-full h-full  bg-white">
                <img src="images/home/book-2.png" alt="" className="w-full h-auto" />
              </div>
              <h4 className="font-semibold text-[22px] mt-4">
                <cite className=" not-italic">Great travel at desert</cite>
              </h4>
              <p className="text-[14px] text-[#888888] font-normal mt-2">Sanchit Howdy</p>
              <p className="text-[18px] font-bold text-[#ED553B] mt-5">$ 38.00</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card text-center text-[#393280] ">
              <div className="img-container w-full h-full bg-white">
                <img src="images/home/book-3.png" alt="" className="w-full h-auto" />
              </div>
              <h4 className="font-semibold text-[22px] mt-4">
                <cite className=" not-italic">The lady beauty Scarlett</cite>
              </h4>
              <p className="text-[14px] text-[#888888] font-normal mt-2">Arthur Doyle</p>
              <p className="text-[18px] font-bold text-[#ED553B] mt-5">$ 45.00</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card text-center text-[#393280]">
              <div className="img-container w-full h-full  bg-white ">
                <img src="images/home/book-4.png" alt="" className="w-full h-auto" />
              </div>
              <h4 className="font-semibold text-[22px] mt-4">
                <cite className=" not-italic">Once upon a time</cite>
              </h4>
              <p className="text-[14px] text-[#888888] font-normal mt-2">Klien Marry</p>
              <p className="text-[18px] font-bold text-[#ED553B] mt-5">$ 35.00</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

    </>
  )
}