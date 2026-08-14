import { Link } from 'react-router-dom'
import HeroSwiper from '../swiper/HeroSwiper'
import CategorySwiper from '../swiper/CatSwiper'
import BooksSwiper from '../swiper/BooksSwiper'
import ArticlesSwiper from '../swiper/ArticlesSwiper'
import OffersSwiper from '../swiper/OfferSwiper'
import FeaturedSwiper from '../swiper/FeaturedSwiper'
export default function Home() {
  return (
    <>
      {/* navbar */}
      <div className="page-navbar my-5">
        <nav className="phone-nav flex justify-between items-center flex-wrap mx-8">
          <div className="avatar">
            <div className="w-10 h-10 bg-gray-500 rounded-full "></div>
          </div>
          <div className="links uppercase text-[#111111]">
            <ul className=" mx-auto flex gap-x-5 flex-wrap">
              <li className="border-r-2 pr-5 border-[#D1D1D1]  active:text-[#ED553B]">
                <Link to="/">Home</Link>
              </li>
              <li className="border-r-2 pr-5 border-[#D1D1D1]">
                <Link to="/about">About</Link>
              </li>
              <li className="border-r-2 pr-5 border-[#D1D1D1]">
                <Link to="/listing-books"> BOOKS</Link>
              </li>
              <li className="border-r-2 pr-5 border-[#D1D1D1]">
                <Link to="/new-releases">  NEW RELEASE </Link>
              </li>
              <li className="border-r-2 pr-5 border-[#D1D1D1]">
                <Link to="/contact">CONTACT US</Link>
              </li>
              <li>
                <Link to="/BLOG">BLOG</Link>
              </li>
            </ul>
          </div>
          <div className="icons flex flex-wrap gap-5">
            <ul className="flex gap-x-5 flex-wrap">
              <li className="border-r-2 pr-5 border-[#D1D1D1]">
                <Link to="/profile">
                  <i>
                    <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.5 0C5.22325 0 2.55 2.71614 2.55 6.04545C2.55 8.12682 3.5955 9.975 5.1799 11.0658C2.14795 12.3871 0 15.4444 0 19H1.7C1.7 15.1741 4.7345 12.0909 8.5 12.0909C12.2655 12.0909 15.3 15.1741 15.3 19H17C17 15.4444 14.8521 12.388 11.8201 11.0649C12.6287 10.5103 13.2913 9.76271 13.7498 8.88767C14.2082 8.01263 14.4487 7.03676 14.45 6.04545C14.45 2.71614 11.7768 0 8.5 0ZM8.5 1.72727C10.857 1.72727 12.75 3.65059 12.75 6.04545C12.75 8.44032 10.857 10.3636 8.5 10.3636C6.14295 10.3636 4.25 8.44032 4.25 6.04545C4.25 3.65059 6.14295 1.72727 8.5 1.72727Z" fill="#393280" />
                    </svg>
                  </i>
                </Link>
              </li>
              <li className="border-r-2 pr-5 border-[#D1D1D1]">
                <Link to="/cart">
                  <i>
                    <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.00036 0C6.01455 0 4.38454 1.64715 4.38454 3.65385V4.38462H0.813559L0.768723 5.07008L0.0455595 18.2239L0 19H16L15.9552 18.2232L15.232 5.06935L15.1864 4.38462H11.6162V3.65385C11.6162 1.64715 9.98617 0 8.00036 0ZM8.00036 1.46154C8.57575 1.46154 9.12757 1.69251 9.53442 2.10365C9.94128 2.51479 10.1699 3.07241 10.1699 3.65385V4.38462H5.83087V3.65385C5.83087 3.07241 6.05944 2.51479 6.4663 2.10365C6.87316 1.69251 7.42498 1.46154 8.00036 1.46154ZM2.16949 5.84615H4.38454V8.03846H5.83087V5.84615H10.1699V8.03846H11.6162V5.84615H13.8312L14.464 17.5385H1.53745L2.16949 5.84615Z" fill="#393280" />
                    </svg>
                  </i>
                </Link>
              </li>
              <li>
                <Link to="/fav">
                  <i>
                    <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.33442 10.7112C-0.0452584 7.61487 0.747967 2.97036 4.71409 1.42219C8.68022 -0.125985 11.0599 2.97036 11.8531 4.51853C12.6463 2.97036 15.8192 -0.125985 19.7854 1.42219C23.7515 2.97036 23.7515 7.61487 21.3718 10.7112C18.9921 13.8076 11.8531 20.0002 11.8531 20.0002C11.8531 20.0002 4.71409 13.8076 2.33442 10.7112Z" stroke="#393280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </i>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* hero section */}
      <section id="hero-sec">
        <div className='grid grid-cols-1 md:grid-cols-2  bg-linear-to-tr from-[#FFE5E5] via-[#F5FFFE] to-[#FFFFFF]'>
          <div className="hero-content text-[#393280] ms-10 md:me-0 me-10 h-full mb-10  flex flex-col justify-center">
            <h1 className='font-semibold text-[60px]'>ipsum dolor si</h1>
            <p className='font-medium text-[22px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.</p>
            <div className="hero-btn  flex mt-14 flex-wrap items-center-safe gap-1.5 border border-[#393280] w-fit px-2 py-3 rounded-[5px] uppercase text-[16px]">
              <button className="uppercase">read more</button>
              <p className='text-2xl m-0 p-0 flex items-center'>&rarr;</p>
            </div>
          </div>
          <div className="swiper-wrapper hidden! md:block!">
            <HeroSwiper />
          </div>
        </div>
      </section>
      {/* categories section */}
      <section id="categories">
        <div className="categories px-10 my-10">
          <div className="heading flex gap-2 items-center">
            <div className="w-[32.150733947753906px] h-0.5 bg-[#ED553B] mb-0.5"></div>
            <h2 className="text-[#ED553B] font-bold text-[14px] uppercase">
              Categories
            </h2>
          </div>
          <h3 className="text-[#393280] text-[32px] font-bold">Explore our Top Categories</h3>
          <div className="cat-items">
            <CategorySwiper />
          </div>
          <div className="hero-btn  text-[#393280] flex mt-14 flex-wrap mx-auto items-center-safe gap-1.5 border border-[#393280] w-fit px-2 py-3 rounded-[5px] uppercase text-[16px]">
            <button className='uppercase'>view more</button>
            <p className='text-2xl m-0 p-0 flex items-center'>&rarr;</p>
          </div>
        </div>
      </section>
      {/* new release section */}
      <section id="new-release">
        <div className="new-release pb-8 my-10 bg-[#FCECEC] text-center">
          <h3>Some quality items</h3>
          <div className="header relative after:bg-[#E0E0E0] after:w-fullcd vefr4 after:h-px after:absolute after:top-3/6 after:left-0 before:bg-[#E0E0E0] before:w-4/12 before:h-px before:absolute before:top-3/6 before:right-0  ">
            <h2 className="text-[48px] text-[#393280]  font-semibold  z-20   text-center  px-5">New Release Books</h2>
          </div>
          <div className="swiper-container  px-10">
            <BooksSwiper />
          </div>
          <div className="h-px bg-[#E0E0E0] w-full h-10"></div>
        </div>
      </section>
      {/* featured section */}
      <section id="featured">
        <div className="featured bg-linear-to-tr from-[#FBEEEE] to-[#F7FFFE]">
          <div className="swiper-container">
            <FeaturedSwiper />
          </div>
        </div>
      </section>
      {/* offers section */}
      <section id="offers">
        <div className="offers my-10">
          <div className="swiper-container px-10">
            <OffersSwiper />
          </div>
        </div>
      </section>
      {/* newsletter section */}
      <section id="newsletter">
        <div className="newsletter bg-[#FCEBEA] pb-20">
          <div className="content bg-[#ED553B] text-center text-white w-[80%] mx-auto px-[12%] pb-15">
            <h2 className=" font-bold text-[56px]">Subscibe to Our Newsletter</h2>
            <p className="text-[20px] font-medium">Sed eu feugiat amet, libero ipsum enim pharetra hac dolor sit amet, consectetur. Elit adipiscing enim pharetra hac.</p>
          </div>
          <div className="mail-box bg-white flex justify-between p-5 -translate-y-1/2 w-[50%] mx-auto">
            <div className="mail-icon">
              <div className="img-container border border-[#DFDFDF] w-13.5 h-13.5 flex justify-center items-center">
                <img src="images/home/mail.png" alt="" className="" />
              </div>
            </div>
            <input type="email" placeholder="youremail123@gmail.com" className="placeholder:text-[#57656C] text-[18px] font-normal mx-5 grow" />
            <button className="text-white font-bold text-[16px] bg-[#ED553B] px-3 py-1 ">SUBSCRIBE</button>
          </div>
        </div>
      </section>
      {/*articles section */}
      <section id="new-release">
        <div className="new-release pb-8 my-10 bg-[#F7FCFC] text-center">
          <h3>Read our articles</h3>
          <div className="header relative after:bg-[#E0E0E0] after:w-fullcd vefr4 after:h-px after:absolute after:top-3/6 after:left-0 before:bg-[#E0E0E0] before:w-4/12 before:h-px before:absolute before:top-3/6 before:right-0  ">
            <h2 className="text-[48px] text-[#393280]  font-normal  z-20   text-center  px-5">Latest Articles</h2>
          </div>
          <div className="swiper-container  px-10">
            <ArticlesSwiper />
          </div>
          <div className="article-btn  text-[#173F5F] flex my-10 flex-wrap mx-auto items-center-safe gap-1.5 border border-[#C0C0C0] w-fit px-7 py-3 uppercase text-[16px] font-normal">
            <button className='uppercase'>read all articles</button>
            <p className='text-2xl m-0 p-0 flex items-center'>&rarr;</p>
          </div>
        </div>
      </section>
    </>
  )
}
