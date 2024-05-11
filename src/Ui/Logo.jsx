import React from 'react';
import logo from '../assets/images/eco-logo.png';
function Logo() {
  return (
    <>
      <div className="flex items-center gap-x-[8px] ">
        <img className="h-[35px] w-[35px]" src={logo} alt="logo" />
        <div>
          <h1 className="text-xl font-bold text-primary max-sm:text-base">
            My Shopping Store
          </h1>
        </div>
      </div>
    </>
  );
}

export default Logo;
