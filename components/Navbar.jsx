/* eslint-disable @next/next/no-img-element */
import { useCallback, useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import NavbarItem from "./NavbarItem";
import { BsChevronDown, BsSearch, BsBell } from "react-icons/bs";
import Link from "next/link";

const TOP_OFFSET = 66;

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showBackground]);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  return (
    <nav className="h-full md:w-52 fixed z-40 bg-zinc-950">
      <div
        className={`px-4 hidden md:px-8 py-6 md:flex flex-col items-center transition duration-500 ${
          showBackground ? "bg-black bg-opacity-100" : ""
        }`}
      >
        <img className="h-24 w-24" src="/v-bank-white.png" alt="logo" />

        <div className="flex-col mt-16 items-start gap-4 hidden lg:flex">
          <Link href={"/dashboard"}>
            <NavbarItem label="Dashboard" />
          </Link>
          <Link href={"/customers"}>
            <NavbarItem label="Customers" />
          </Link>
          <Link href={"/moneytransfer"}>
            <NavbarItem label="Money Transfer" />
          </Link>
          <Link href={"/alltransactions"}>
            <NavbarItem label="Transactions" />
          </Link>
          <Link href={"/contact"}>
            <NavbarItem label="Contact Us" />
          </Link>
          <Link href={"/help"}>
            <NavbarItem label="Help Desk" />
          </Link>
         
        </div>

        <div
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
        >
          <p className="text-white text-sm">Browse</p>
          <BsChevronDown
            className={`text-white transition ${
              showMobileMenu ? "rotate-180" : "rotate-0"
            }`}
          />
          <MobileMenu visible={showMobileMenu} />
        </div>

        <div className="flex flex-row mt-5 gap-7 items-center">

          {/* <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
            <BsSearch />
          </div> */}

          {/* <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
            <BsBell />
          </div> */}
       
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
