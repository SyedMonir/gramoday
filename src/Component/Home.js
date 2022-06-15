import React from 'react';
import { useQuery } from 'react-query';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { IoMdCall } from 'react-icons/io';
import { Outlet, NavLink } from 'react-router-dom';

const Home = () => {
  const {
    isLoading,
    error,
    data: user,
  } = useQuery('user', () =>
    fetch(
      'https://api.gramoday.net:8082/v1/user/bySlug?profileSlug=mmtradingco'
    ).then((res) => res.json())
  );

  if (isLoading) return 'Loading...';

  if (error) {
    console.log(error.message);
  }

  let activeStyle = {
    borderColor: '#01A39D',
  };

  return (
    <section className="w-auto sm:w-1/2 mx-auto px-4">
      <div className="flex gap-6 my-4">
        <div className="mt-4">
          <FaUserCircle color="#616161" size={82} />
        </div>
        <div>
          <h1 className="font-bold text-xl">{user?.name}</h1>
          <h5 className="my-2">
            {user?.loclevel3Name + ', ' + user?.loclevel2Name}
          </h5>
          <h6 className="text-xs italic mb-4">
            Speak, {user?.language === 'en' ? 'English' : user?.language}
          </h6>

          <div className="flex gap-2">
            <button className="btn flex items-center bg-[#01A39D] text-white rounded-3xl px-2 py-1 text-sm">
              <AiOutlineUserAdd className="mr-1" /> Connect
            </button>
            <button className="btn flex items-center text-[#01A39D] border border-[#01A39D] rounded-3xl px-2 py-1 text-sm">
              <IoMdCall className="mr-1" /> Contact
            </button>
          </div>
        </div>
      </div>

      {/* Tav */}
      <div>
        <nav className="tabs flex">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className=" w-1/2 text-black py-4 px-6 block hover:text-[#01A39D] uppercase  border-b-4 font-medium  text-center"
          >
            Business
          </NavLink>
          <NavLink
            to="/review"
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className=" w-1/2 text-black py-4 px-6 block hover:text-[#01A39D] uppercase  border-b-4 font-medium text-center"
          >
            Review
          </NavLink>
        </nav>

        <Outlet context={[user]}>A</Outlet>
      </div>
    </section>
  );
};

export default Home;
