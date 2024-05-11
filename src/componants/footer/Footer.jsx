import React from 'react';
import Logo from '../../Ui/Logo';
import { Link } from 'react-router-dom';
import {
  FaLocationDot,
  FaPhoneVolume,
  FaRegEnvelopeOpen,
} from 'react-icons/fa6';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="bg-primary p-6 text-white">
        <div className="container m-auto">
          <div className=" grid grid-cols-4 pb-5 max-md:grid-cols-2 max-sm:grid-cols-1 ">
            <div className=" max-md:mb-5">
              <Logo />
              <p className="mt-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
                incidunt labore doloribus dignissimos obcaecati iure ducimus
                nisi non ipsa sit.
              </p>
            </div>
            <div className="max-md:mb-5">
              <h4 className="font-semibold">Top Categories</h4>
              <ul className="">
                <li>
                  <Link to="#">Mobile Phones</Link>
                </li>
                <li>
                  <Link to="#">Modern Sofa</Link>
                </li>
                <li>
                  <Link to="#">Arm Chair</Link>
                </li>
                <li>
                  <Link to="#">Smart Watch</Link>
                </li>
              </ul>
            </div>
            <div className="max-md:mb-5">
              <h4 className="font-semibold">Useful Links</h4>
              <ul className="">
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <Link to="/cart">Cart</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="#">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div className="max-md:mb-5">
              <h4 className="font-semibold">Contact</h4>
              <ul className="">
                <li className="flex content-center items-center gap-2">
                  <span>
                    <FaLocationDot />
                  </span>
                  <p>Menofia, Egypt</p>
                </li>
                <li className="flex content-center items-center gap-2">
                  <span>
                    <FaPhoneVolume />
                  </span>
                  +20 01 06 035 0330
                </li>
                <li className="flex content-center items-center gap-2">
                  <span>
                    <FaRegEnvelopeOpen />
                  </span>
                  saidmagdypro@gmail.com
                </li>
                <li>
                  <Link to="#">Smart Watch</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t-4 py-5 text-center">
            <p>
              Copyright &copy; {year} developed by said magdy. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
