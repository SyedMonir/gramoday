import React from 'react';

const Navbar = ({ children }) => {
  return (
    <>
      <header className="text-white body-font bg-gradient-to-b from-[#6506EF]  to-[#A872F5] shadow ">
        <div className="container mx-auto flex justify-center items-center p-3 ">
          <p className="flex title-font font-medium ">
            <span className="ml-3 text-xl font-bold">{children}</span>
          </p>
        </div>
      </header>
    </>
  );
};

export default Navbar;
