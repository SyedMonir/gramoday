import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { AiOutlineSend } from 'react-icons/ai';
import './style.css';
import Modal from './Modal';

const Business = () => {
  const [user, showModal, setShowModal] = useOutletContext();
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
                {showModal && <Modal setShowModal={setShowModal} />}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Business;
