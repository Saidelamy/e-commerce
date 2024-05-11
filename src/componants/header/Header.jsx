import { useEffect, useRef } from 'react';
import { FaOpencart } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';
import { CiMenuFries } from 'react-icons/ci';
import Logo from '../../Ui/Logo';

import userIcon from '../../assets/images/user-icon.png';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useAuth from '../../customHooks/useAuth';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase.config';
import { toast } from 'react-toastify';

function Header() {
  const classNameFunc = ({ isActive }) => (isActive ? 'active_link' : '');

  const headerRef = useRef(null);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const profileActionRef = useRef(null);

  const menuRef = useRef(null);

  const stickyHeaderFun = () => {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current?.classList?.add('sticky_header');
      } else {
        headerRef?.current?.classList?.remove('sticky_header');
      }
    });
  };
  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success('Logged out');
        navigate('/home');
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  useEffect(() => {
    stickyHeaderFun();
    return () => {
      window.removeEventListener('scroll', stickyHeaderFun);
    };
  }, []);

  const menuToggle = () => menuRef.current.classList.toggle('active_menu');

  const toggleProfileAction = () =>
    profileActionRef.current.classList.toggle('showProfileAction');

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <header ref={stickyHeaderFun}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-5 ">
          <Logo />
          <div className="navigation" ref={menuRef} onClick={menuToggle}>
            <ul className="menu flex items-center gap-11">
              <li className="nav_link">
                <NavLink className={classNameFunc} to="home">
                  Home
                </NavLink>
              </li>
              <li className="nav_link">
                <NavLink className={classNameFunc} to="shop">
                  Shop
                </NavLink>
              </li>
              <li className="nav_link">
                <NavLink className={classNameFunc} to="cart">
                  Cart
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-5 ">
            <span className="relative cursor-pointer  text-3xl text-primary max-sm:text-2xl  ">
              <CiHeart />
              <span className="absolute right-[0%] top-[50%] z-10 flex h-[15px] w-[15px] items-center justify-center rounded-[50px] bg-[var(--primary-color)] p-[8px] text-sm font-semibold text-[#fff] content-['']  max-sm:text-sm">
                5
              </span>
            </span>
            <span
              onClick={() => navigate('/cart')}
              className="relative cursor-pointer text-3xl text-primary max-sm:text-2xl "
            >
              <FaOpencart />
              <span className="absolute right-[0%] top-[50%] z-10 flex h-[15px] w-[15px] items-center justify-center rounded-[50px] bg-[var(--primary-color)] p-[8px] text-sm font-semibold text-[#fff] content-[''] max-sm:text-sm">
                {totalQuantity}
              </span>
            </span>
            <div className="relative z-10 ">
              <img
                className="h-8 w-8 cursor-pointer rounded-full"
                src={currentUser ? currentUser.photoURL : userIcon}
                alt="Profile Image"
                onClick={toggleProfileAction}
              />
              <div
                ref={profileActionRef}
                onClick={toggleProfileAction}
                className="profileActions bg-primary  leading-7 text-white  max-sm:w-24"
              >
                {currentUser ? (
                  <span onClick={logout}>Logout</span>
                ) : (
                  <div className="flex flex-col gap-2  ">
                    <Link className="border-b-2 pb-2" to="/signup">
                      Signup
                    </Link>
                    <Link to="/login">Login</Link>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="mobile_menu">
            <span
              onClick={menuToggle}
              className="hidden text-2xl text-primary  max-md:block"
            >
              <CiMenuFries />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
