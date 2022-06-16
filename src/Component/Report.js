import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { FaUserCircle } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { FaTruck } from 'react-icons/fa';
import { BiUserVoice } from 'react-icons/bi';
import Navbar from './Navbar';

const Report = () => {
  const { reportID } = useParams();
  const {
    isLoading,
    error,
    data: product,
  } = useQuery(['product'], () =>
    fetch(
      'https://api.gramoday.net:8082/v1/user/bySlug?profileSlug=mmtradingco'
    ).then((res) => res.json())
  );

  if (isLoading) return 'Loading...';

  if (error) {
    console.log(error.message);
  }

  const reportProduct = product?.products?.find(
    (product) => product.posts[0].reportID === reportID
  );

  console.log(reportProduct);
  return (
    <>
      <Navbar>
        {reportProduct?.posts[0]?.cmdtyStdName}{' '}
        <span className="capitalize">
          {reportProduct?.posts[0]?.contentType}
        </span>
      </Navbar>
      <section className="w-auto sm:w-3/5 h-screen mx-auto px-1">
        <section className="bg-[#EEEEEE] m-4 p-3 rounded-lg report">
          <div className="flex justify-between pb-2">
            <div className="flex">
              <FaUserCircle
                color="#616161"
                className="w-10 h-10 mr-4 rounded-full border-4 border-[#01A39D]"
              />
              <div className="">
                <h1 className="font-bold text-sm flex ">
                  {product?.name}{' '}
                  <span className="flex items-center pl-1 text-[#D2AA1B]">
                    5 <AiFillStar />
                  </span>
                </h1>
                <p className="text-xs">
                  {product?.loclevel3Name + ', ' + product?.loclevel2ShortName}
                </p>
              </div>
            </div>
            <div>
              <FiPhoneCall className="text-[#60ebe6] bg-[#01A39D] w-8 h-8 mr-4 rounded-full border-4 border-[#ccc8c8]" />
            </div>
          </div>
          {/* 2 */}
          <div className="flex justify-between items-center pt-2 border-t-2">
            <div className="flex">
              <div className="">
                <h1 className="font-semibold text-sm flex ">
                  {reportProduct?.posts[0]?.marketStdName}
                  {', '}
                  {product?.loclevel3Name + ', ' + product?.loclevel2ShortName}
                </h1>
                <p className="text-xs">15 June 2022</p>
              </div>
            </div>
            <div>
              <AiFillQuestionCircle className="text-white bg-[#01A39D] w-8 h-8 mr-4 rounded-full border-4 border-[#ccc8c8]" />
              <span className="text-xs">Ask Info</span>
            </div>
          </div>
        </section>

        {/* Rates */}
        <div className="border-l-[6px] border-[#01A39D] mx-2 ">
          <div className="flex justify-between items-center  border-b-2 border-[#01A39D] px-2">
            <h1 className="font-bold text-sm italic text-[#01A39D]">Rates</h1>
            <div className="text-[#01A39D] font-bold">₹</div>
          </div>
          {reportProduct?.posts[0]?.priceDetails?.map((rate) => (
            <div className="flex justify-between items-center pt-2 border-t-2 px-2">
              <h1 className="font-bold text-sm flex ">
                {rate?.varietyName}
                {rate?.gradeName ? ' (' + rate?.gradeName + ')' : ''}
              </h1>
              <div className="font-bold">
                {rate?.minPrice + '-' + rate?.maxPrice}
              </div>
            </div>
          ))}
          <small className="italic px-2 text-xs">
            Rates are in ₹/1 Kg and exclude mandi commission and tax
          </small>
        </div>
        <br />
        {/* Arrival */}
        <div className="border-l-[6px] border-[#6202EE] mx-2 ">
          <div className="flex justify-between items-center  border-b-2 border-[#6202EE] px-2">
            <h1 className="font-bold text-sm italic text-[#6202EE]">Arrival</h1>
            <div className="text-[#6202EE] font-bold">
              <FaTruck />
            </div>
          </div>
          <div className="flex justify-between items-center pt-2 border-t-2 px-2">
            <h1 className="font-bold text-sm flex ">Fresh Arrival</h1>
            <div className="font-bold">3300</div>
          </div>
          <div className="flex justify-between items-center pt-2 border-t-2 px-2">
            <h1 className="font-bold text-sm flex ">Balance Arrival</h1>
            <div className="font-bold">3300</div>
          </div>
          <small className="italic px-2 text-xs">
            Arrivals are in Large Trucks. 1 Large Trucks = 20 Tonss
          </small>
        </div>
        <br />
        {/* Analysis */}

        <div className="border-l-[6px] border-[#D2AA1B] mx-2 ">
          <div className="flex justify-between items-center  border-b-2 border-[#D2AA1B] px-2">
            <h1 className="font-bold text-sm italic text-[#D2AA1B]">Arrival</h1>
            <div className="text-[#D2AA1B] font-bold">
              <BiUserVoice />
            </div>
          </div>
          <h2 className="px-2 pb-4">Sale is slow..</h2>
        </div>

        <div className=" bg-white text-sm fixed bottom-0 left-1/3 mx-auto product px-2  rounded-2xl mb-2 text-[#6506EF] ">
          Join the agricultural community{' '}
          <button className="text-white bg-gradient-to-b from-[#6506EF]  to-[#A872F5] rounded-3xl py-2 px-2">
            DOWNLOAD GRAMODAYA
          </button>
        </div>
      </section>
    </>
  );
};

export default Report;
