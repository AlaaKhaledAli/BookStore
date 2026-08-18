// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import 'swiper/css/bundle';
export default function FeaturedSwiper() {
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
            <div className="card text-start flex flex-wrap  py-10 justify-end   lg:bg-[url('/images/home/featured.png')]  md:bg-[url('/images/home/featured.png')] md:bg-size-[300px_auto] lg:bg-size-[500px_auto] bg-no-repeat bg-w-full bg-start mx-15">
              <div className="content basis-12/12 lg:basis-6/12 md:basis-5/12 py-10 flex flex-col ">
                <div className="img-container visible md:hidden">
                  <img src="images/home/featured.png" alt="" />
                </div>
                <h2 className="font-semibold text-[48px]  md:text-[32px] lg:text-[48px] text-[#393280]  ">Featured book</h2>
                <div className="horizontal-line h-0.5 bg-[#ED553B] w-[25%] mt-11.25"></div>
                <h3 className="font-medium text-[13px] text-[#888888] mt-2.75 uppercase  tracking-[16%] ">
                  By
                  <cite className='not-italic'> Timbur Hood</cite>
                </h3>
                <h4 className="text-[#393280] font-semibold text-[28px] mt-7.5 mb-4">Birds gonna be happy</h4>
                <p className="text-[#7A7A7A] text-[16px] mb-8.75  w-[75%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
                <p>
                  <span className="text-[#ED553B] text-[23px] font-bold">$ 45.00</span>
                </p>
                <div className="featured-btn  text-[#393280] flex mt-14 flex-wrap items-center-safe gap-1.5 border border-[#393280] w-fit px-2 py-3 rounded-[5px] uppercase text-[16px]">
                  <button className='uppercase'>view more</button>
                  <p className='text-2xl m-0 p-0 flex items-center'>&rarr;</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

    </>
  )
}