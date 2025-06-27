import { Link } from "react-router";
import logo from "../assets/img/logo.png";
const Navbar = () => {
  return (
    <nav>
      <div className="bg-[#8A893F] w-full h-4"></div>
      <div className="navbar  px-6 py-2 bg-base-100 shadow-sm">
        {/* Left: Logo */}
        <div className="navbar-start">
          <a className="flex items-center gap-2 text-[#8A893F] font-bold text-xl">
            <img src={logo} alt="logo" className="h-14 " />
            <Link className="text-[#848239] text-3xl font-bold">ChaskiX</Link>
          </a>
        </div>

        {/* Center: Menu */}
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 text-black ">
            <li>
              <Link className="font-medium text-[18px]">Home</Link>
            </li>
            <li>
              <Link className="font-semibold text-[18px]">Pricing</Link>
            </li>
            <li>
              <Link className="font-semibold text-[18px]">Forum</Link>
            </li>
            <li>
              <Link className="font-semibold text-[18px]">Service Community</Link>
            </li>
            <li>
              <Link className="font-semibold text-[18px]">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Right: Login Button */}
        <div className="navbar-end">
          <button className="btn bg-[#8A893F] text-white border-none hover:bg-[#7a7935]">
            Login
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
