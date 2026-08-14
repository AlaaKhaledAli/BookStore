import Breadcrumb from "../../../SharedModule/Components/breadcrumb/Breadcrumb";

export default function Cart() {
  return (
    <>
      <Breadcrumb pageName="Cart" />
      <div className="conatiner flex flex-wrap mx-10 my-8 justify-between text-[#393280] font-manrope gap-y-5">
        <div className="cart-list bg-linear-to-tr from-[#FFE5E5] to-[#F5FFFE] w-full md:w-7/12 rounded-2xl">
          <table className="table-auto border-separate border-spacing-5 ">
            <thead >
              <tr>
                <th className="text-start">Num</th>
                <th className="text-start">Book</th>
                <th className="text-start">Amount</th>
                <th className="text-start">Cost</th>
                <th className="text-start">Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01.</td>
                <td>
                  <div className="img-container"></div>
                  <h2>My Book Cover</h2>
                </td>
                <td>
                  <div className="amount-control flex rounded-[5px] overflow-hidden text-white w-full text-center">
                    <div className="plus bg-[#393280] w-4/12">-</div>
                    <div className="amount text-[#393280] w-4/12 bg-white">1</div>
                    <div className="min bg-[#393280] w-4/12">+</div>
                  </div>
                </td>
                <td>36 AED</td>
                <td>36 AED</td>
                <td className="border border-[#393280] rounded-[5px] w-[32.5px] h-7 flex justify-center items-center ">
                  <i>
                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.27455 6.13051L11.686 2.64483C12.1047 2.21708 12.1047 1.52357 11.686 1.09548L10.9278 0.320807C10.5092 -0.106936 9.83045 -0.106936 9.41148 0.320807L6 3.80649L2.58852 0.320807C2.16989 -0.106936 1.49114 -0.106936 1.07216 0.320807L0.313977 1.09548C-0.104659 1.52322 -0.104659 2.21674 0.313977 2.64483L3.72545 6.13051L0.313977 9.61619C-0.104659 10.0439 -0.104659 10.7374 0.313977 11.1655L1.07216 11.9402C1.4908 12.368 2.16989 12.368 2.58852 11.9402L6 8.45453L9.41148 11.9402C9.83011 12.368 10.5092 12.368 10.9278 11.9402L11.686 11.1655C12.1047 10.7378 12.1047 10.0443 11.686 9.61619L8.27455 6.13051Z" fill="#393280" />
                    </svg>
                  </i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="py-6.25 total w-full md:w-3/12 flex flex-col bg-linear-to-b from-[#FFE5E5] to-[#F5FFFE] rounded-2xl font-semibold text-6 ">
          <h2 className="border-b border-[#BEBEBE] pb-2.25 ps-3 ">Cart Total Cost</h2>
          <div className="flex justify-between border-b border-[#BEBEBE] pb-2.25 ps-3 mt-7.75">
            <h3>Total</h3>
            <p>36 AED</p>
          </div>
          <div className="flex justify-between border-b border-[#BEBEBE] pb-2.25 ps-3 mt-2.25">
            <h3>Tax</h3>
            <p>1.6 AED</p>
          </div>
          <div className="flex justify-between pb-2.25 ps-3 mt-2.25">
            <h3>Total Cost</h3>
            <p>37.6 AED</p>
          </div>
        </div>
        <div className="shipping-form bg-linear-to-r from-[#FFE5E5] to-[#F5FFFE] w-full md:w-8/12 rounded-2xl mt-10 p-2 md:p-5 ">
          <h2 className="text-[#000000] font-semibold text-[36px] mb-8.5">Shipping Data</h2>
          <form action="" >
            <div className="flex flex-wrap gap-y-2 ">
              <div className="input-control flex flex-col w-full md:w-6/12 pe-8">
                <label htmlFor="user-name">User Name</label>
                <input type="text" className="bg-white rounded-0" id="user-name" />
              </div>
              <div className="input-control flex flex-col w-full md:w-6/12 pe-8">
                <label htmlFor="email">E-mail</label>
                <input type="text" className="bg-white rounded-0" id="email" />
              </div>
              <div className="input-control flex flex-col w-full md:w-6/12 pe-8">
                <label htmlFor="country">Country</label>
                <input type="text" className="bg-white rounded-0" id="country" />
              </div>
              <div className="input-control flex flex-col w-full md:w-6/12 pe-8">
                <label htmlFor="city">City</label>
                <input type="text" className="bg-white rounded-0" id="city" />
              </div>
              <div className="input-control flex flex-col w-full md:w-6/12 pe-8">
                <label htmlFor="adress">Adress</label>
                <input type="text" className="bg-white rounded-0" id="adress" />
              </div>
              <div className="input-control flex flex-col w-full md:w-6/12 pe-8">
                <label htmlFor="phone">Phone Number</label>
                <input type="text" className="bg-white rounded-0" id="phone" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
