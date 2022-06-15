import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { FaUserCircle } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';
import { AiFillQuestionCircle } from 'react-icons/ai';
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
      <Navbar>Pr</Navbar>
      <section className="w-auto sm:w-3/5 h-screen mx-auto px-4">
        <section className="bg-[#EEEEEE] m-4 p-2 rounded-lg">
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
      </section>
    </>
  );
};

export default Report;
