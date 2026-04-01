import {
  Phone,
  Mail,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  Search,
  ShoppingCart,
  Heart,
  User,
  Menu,
  ChevronDown,
} from "lucide-react";

import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import md5 from "md5";

export default function Header() {
  const user = useSelector((state) => state.client.user);
  const emailHash = user?.email
  ? md5(user.email.trim().toLowerCase())
  : null;

  return (
    <>
      <header className="w-full font-bold">
        <div className="navbar-dark hidden lg:block bg-[#252B42] text-white text-sm">
          <div className="mx-auto max-w-365 px-6 flex justify-between items-center py-5">
            <div className="navbar-dark-left flex gap-6 items-center">
              <button type="button" className="flex items-baseline gap-2">
                <Phone size={16} />
                (225) 555-0118
              </button>
              <button type="button" className="flex items-center gap-2">
                <Mail size={16} />
                michelle.rivera@example.com
              </button>
            </div>
            <div className="navbar-dark-mid">
              <p>Follow Us and get a chance to win 80% off</p>
            </div>

            <div className="navbar-dark-right flex items-center gap-3">
              <p>Follow Us :</p>
              <div className="socials flex gap-3">
                <a>
                  <Instagram size={18} />
                </a>
                <a>
                  <Youtube size={18} />
                </a>
                <a>
                  <Facebook size={18} />
                </a>
                <a>
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="navbar-light bg-[#F6F6F6] lg:bg-[#FFFFFF]">
          <div className="mx-auto max-w-365 px-6 py-6 lg:flex lg:items-center lg:justify-between">
            <div className="flex justify-between items-center lg:shrink-0">
              <Link to="/" className="text-2xl text-[#252B42]">
                Bandage
              </Link>
              <div className="flex items-center gap-4 lg:hidden">
                <Search size={22} />
                <Link to="/cart">
                  <ShoppingCart size={22} />
                </Link>
                <Menu size={22} />
              </div>
            </div>
            <div className="navbar-light-right flex flex-col lg:flex-row lg:justify-between lg:items-center lg:flex-1 mt-16 lg:ml-32 lg:mt-0 gap-8">
              <nav>
                <ul className="navbar-light-right-pages flex flex-col lg:flex-row items-center text-[#737373] text-3xl lg:text-sm lg:gap-6">
                  <li className="mb-12 lg:mb-0">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="items-center gap-1 lg:flex mb-12 lg:mb-0">
                    <Link to="/shop">Shop</Link>
                    <ChevronDown size={18} className="hidden lg:block" />
                  </li>
                  <li className="mb-12 lg:mb-0">
                    <Link to="/about" className="lg:block">
                      About
                    </Link>
                  </li>
                  <li className="mb-12 lg:mb-0">
                    <Link className="lg:block">Blog</Link>
                  </li>
                  <li className="mb-12 lg:mb-0">
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li className="mb-12 lg:mb-0">
                    <a className="lg:block">Pages</a>
                  </li>
                  <li className="flex items-center gap-4 lg:hidden text-[#23A6F0] mb-7">
                    {user?.email ? (
                      <img
                        src={`https://www.gravatar.com/avatar/${emailHash}`}
                        alt="user"
                        className="h-10 w-10 rounded-full"
                      />
                    ) : (
                      <User size={40} />
                    )}
                    {user?.email ? (
                      <Link
                        to="/login"
                        className="text-100 font-bold text-[#23A6F0]"
                      >
                        {user.name || user.email}
                      </Link>
                    ) : (
                      <Link
                        to="/login"
                        className="text-100 font-bold text-[#23A6F0]"
                      >
                        Login / Register
                      </Link>
                    )}
                  </li>
                  <li className="flex items-center gap-4 lg:hidden text-[#23A6F0] mb-7">
                    <a>
                      <Search size={25} />
                    </a>
                  </li>
                  <li className="flex items-center gap-4 lg:hidden text-[#23A6F0] mb-7">
                    <Link to="/cart">
                      <ShoppingCart size={25} />
                    </Link>
                  </li>
                  <li className="flex items-center gap-4 lg:hidden text-[#23A6F0] mb-7 ml-1.5">
                    <a>
                      <Heart size={25} />
                    </a>
                  </li>
                </ul>
              </nav>
              <nav className="hidden lg:flex">
                <ul className="navbar-light-right-login flex items-center gap-4 text-[#23A6F0] text-sm">
                  <li className="flex items-center gap-1">
                    {user?.email ? (
                      <img
                        src={`https://www.gravatar.com/avatar/${emailHash}`}
                        alt="user"
                        className="h-6 w-6 rounded-full"
                      />
                    ) : (
                      <User size={18} />
                    )}
                    {user?.email ? (
                      <Link
                        to="/login"
                        className="text-sm font-bold text-[#23A6F0]"
                      >
                        {user.name || user.email}
                      </Link>
                    ) : (
                      <Link
                        to="/login"
                        className="text-sm font-bold text-[#23A6F0]"
                      >
                        Login / Register
                      </Link>
                    )}
                  </li>
                  <li>
                    <a>
                      <Search size={18} />
                    </a>
                  </li>
                  <li className="flex items-center gap-1">
                    <Link to="/cart">
                      <ShoppingCart size={18} />
                    </Link>
                  </li>
                  <li>
                    <a>
                      <Heart size={18} />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
