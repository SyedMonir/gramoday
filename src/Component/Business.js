import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { AiOutlineSend } from 'react-icons/ai';
import './style.css';

const Business = () => {
  const [user] = useOutletContext();
  const [showModal, setShowModal] = React.useState(false);
  console.log(user.products);

  return (
    <section className="h-[60vh] overflow-x-scroll">
      <h2 className="font-bold text-[#01A39D] text-lg my-2">
        {user?.business?.userOption}
      </h2>
      <div>
        <p className="text-sm">
          Market Name{' '}
          <span className="font-bold text-base ml-6">
            {user?.business?.marketStdName}
          </span>
        </p>
        <p className="my-4">
          Firm Name{' '}
          <span className="font-bold text-base ml-7">
            {user?.business?.firmName}
          </span>
        </p>
        <p className="text-sm">
          Shop Number{' '}
          <span className="font-bold text-base ml-6">
            {user?.business?.mandiShopnum}
          </span>
        </p>
      </div>

      {/* Product */}
      <div>
        <h3 className="bg-gray-300 px-4 py-2 font-medium">Products</h3>
        {user?.products.map((product) => (
          <div
            key={product.cmdtyID}
            className="flex gap-6 m-2 py-2 my-4 product"
          >
            <div className="my-2">
              <img src={product?.picUrl + '.jpg'} alt="" />
            </div>
            <div className="w-full">
              <h2 className="font-medium text-base">
                {product?.posts[0]?.cmdtyStdName +
                  ' ' +
                  product?.posts[0]?.marketType +
                  ' Rates'}
              </h2>
              <h5 className="text-xs mt-2">
                {product?.posts[0]?.marketStdName +
                  ', ' +
                  product?.posts[0]?.loclevel3Name +
                  ', ' +
                  product?.posts[0]?.loclevel2ShortName}
              </h5>
              <p className="text-xs mb-2">13/06/2022</p>
              <h6 className=" mb-2 font-semibold">
                ₹{' '}
                {product?.posts[0]?.priceDetails[0]?.minPrice +
                  ' - ' +
                  product?.posts[0]?.priceDetails[0]?.maxPrice +
                  ' / 1 ' +
                  product?.posts[0]?.rawReportPriceUnit}
              </h6>
              <div className="flex gap-2 border-t-2 p-1 justify-around">
                <a
                  href={`https://api.whatsapp.com/send?phone=01988512131`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn flex items-center bg-[#01A39D] text-white rounded-3xl px-4 py-1 text-sm"
                >
                  <AiOutlineWhatsApp className="mr-1" />
                  Share
                </a>
                <button
                  className="btn flex items-center bg-[#D2AA1B]
                   text-white border rounded-3xl px-2 py-1 text-sm"
                  type="button"
                  onClick={() => setShowModal(true)}
                >
                  <AiOutlineSend className="mr-1" />
                  Interested
                </button>
                {showModal && (
                  <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none border-black">
                      <div className="relative w-auto my-6 mx-auto max-w-sm">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          {/*header*/}
                          <div
                            className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t
                           bg-[#01A39D] text-white rounded-lg"
                          >
                            <h3 className="text-base font-semibold">
                              You need to download the Gramoday App for this
                              action
                            </h3>
                            <button
                              className="p-1  bg-transparent border-0 float-right text-xl leading-none font-semibold outline-none ml-2 focus:outline-none"
                              onClick={() => setShowModal(false)}
                            >
                              <span className="bg-transparent h-6 w-6 text-xl block outline-none focus:outline-none">
                                X
                              </span>
                            </button>
                          </div>
                          {/*body*/}
                          <div className="relative p-3 flex-auto">
                            <p className="my-4 text-slate-500 text-lg leading-relaxed">
                              Do you want to go to the play store?
                            </p>
                            <div className="flex justify-end">
                              <button
                                className="bg-[#01A39D] text-white active:bg-emerald-600 font-bold uppercase   text-sm px-6 py-3  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                              >
                                Yes
                              </button>
                              <button
                                className="bg-[#01A39D] text-white active:bg-emerald-600 font-bold uppercase   text-sm px-6   shadow hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                              >
                                No
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Business;
