import { useState } from "react";
import Breadcrumb from "../../SharedModule/Components/breadcrumb/Breadcrumb";

const items = [
  {
    id: 0,
    title: "Price",
    content: (
      <div className="accordion-body mb-5 ">
        <p className="flex flex-wrap justify-between">
          $<input type="number" name="" id="" className="border w-4/12 mx-1" />
          <span className="text-[#888888] w-2/12 text-4.5 tracking-[4%] text-center font-medium">to</span>
          $<input type="number" name="" id="" className="border w-4/12 mx-1" />
        </p>
        <button className="uppercase h-11 bg-[#393280] text-white w-full mt-6">filter</button>
      </div>
    ),
  },
  {
    id: 1,
    title: "Product type",
    content: (
      <div className="accordion-body" data-isExpended="0">

      </div>
    ),
  },
  {
    id: 2,
    title: "Availability",
    content: (
      <div className="accordion-body" data-isExpended="0">

      </div>
    ),
  },
  {
    id: 3,
    title: "Brand",
    content: (
      <div className="accordion-body" data-isExpended="0">

      </div>
    ),
  },
  {
    id: 4,
    title: "Color",
    content: (
      <div className="accordion-body" data-isExpended="0">

      </div>
    ),
  },
  {
    id: 5,
    title: "Material",
    content: (
      <div className="accordion-body" data-isExpended="0">

      </div>
    ),
  }
]
export default function ListingBooks() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const handleToggle = (index: number) =>
    setExpandedIndex((current) => {
      return current === index ? null : index
    })

  return (
    <>
      <Breadcrumb pageName="Books" />
      <div className="container flex flex-wrap my-10">
        <div className="accordion-wrapper flex flex-col gap-1.5 w-full md:w-4/12 px-15 text-[#393280]">
          {items.map((item, index) => {
            const isExpanded = expandedIndex === index
            return (
              <button
                type="button"
                onClick={() => handleToggle(index)}
                aria-expanded={isExpanded}
              >
                <div className="accordion-item" data-item-id="0">
                  <div className="accordion-header flex justify-between">
                    <h2 className="font-bold text-4">{item.title}</h2>
                    {
                      isExpanded ?
                        <span className="w-4.25 bg-[#393280] h-0.5 my-auto" ></span> :
                        <span className="font-bold text-[#393280] text-2xl my-auto" >+</span>
                    }
                  </div>
                  <div className="div bg-[#E0E0E0] h-0.5 my-4.25"></div>
                  {isExpanded && item.content}
                </div>
              </button>
            )
          })}
        </div>
        <div className="book-list flex justify-center my-10 md:my-0 flex-wrap w-full md:w-8/12 gap-y-10">
          <div className="card w-8/12 md:w-4/12 text-center px-5  ">
            <div className="card-content  shadow-[0_4px_10px_0_rgba(0,0,0,0.15)] border border-[#EAE8DF]">
              <div className="img-wrapper">
                <img src="images/books/book_1.png" alt="" />
              </div>
              <h2 className="text-[#393280] font-semibold text-[18px] capitalize">Simple way of piece life</h2>
              <h3><cite className="not-italic tracking-[2%] text-[#888888] text-[14px] mt-2.5 mb-4.75">Armor Ramsey</cite></h3>
              <p className="text-[#ED553B] text-[22px] font-bold">$ 40.00</p>
            </div>
          </div>
          <div className="card w-8/12 md:w-4/12 text-center px-5  ">
            <div className="card-content  shadow-[0_4px_10px_0_rgba(0,0,0,0.15)] border border-[#EAE8DF]">
              <div className="img-wrapper">
                <img src="images/books/book_2.png" alt="" />
              </div>
              <h2 className="text-[#393280] font-semibold text-[18px] capitalize">Simple way of piece life</h2>
              <h3><cite className="not-italic tracking-[2%] text-[#888888] text-[14px] mt-2.5 mb-4.75">Armor Ramsey</cite></h3>
              <p className="text-[#ED553B] text-[22px] font-bold">$ 40.00</p>
            </div>
          </div>
          <div className="card w-8/12 md:w-4/12 text-center px-5  ">
            <div className="card-content   shadow-[0_4px_10px_0_rgba(0,0,0,0.15)] border border-[#EAE8DF]">
              <div className="img-wrapper">
                <img src="images/books/book_3.png" alt="" />
              </div>
              <h2 className="text-[#393280] font-semibold text-[18px] capitalize">Simple way of piece life</h2>
              <h3><cite className="not-italic tracking-[2%] text-[#888888] text-[14px] mt-2.5 mb-4.75">Armor Ramsey</cite></h3>
              <p className="text-[#ED553B] text-[22px] font-bold">$ 40.00</p>
            </div>
          </div>
          <div className="card w-8/12 md:w-4/12 text-center px-5  ">
            <div className="card-content shadow-[0_4px_10px_0_rgba(0,0,0,0.15)]  border border-[#EAE8DF]">
              <div className="img-wrapper">
                <img src="images/books/book_3.png" alt="" />
              </div>
              <h2 className="text-[#393280] font-semibold text-[18px] capitalize">Simple way of piece life</h2>
              <h3><cite className="not-italic tracking-[2%] text-[#888888] text-[14px] mt-2.5 mb-4.75">Armor Ramsey</cite></h3>
              <p className="text-[#ED553B] text-[22px] font-bold">$ 40.00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
