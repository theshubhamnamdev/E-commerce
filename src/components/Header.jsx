import React, { useContext, useEffect, useState } from "react";
import SidebarContext from "../context/sidebar/SidebarContext";
import { BsBag } from "react-icons/bs";
import CartContext from "../context/cart/CartContext";
import { Link } from "react-router-dom";
// import Logo from '../img/logo.svg'
import newlogo from '../img/new-logo-removebg-preview.png'

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const { isOpen, setIsOpen } = useContext(SidebarContext);

  const { cart ,itemAmount } = useContext(CartContext);

  // event listner
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  return (
    <header
      className={`${isActive ? "bg-white py-4 shadow-sm" : "bg-none py-3"}
    fixed w-full z-10 transition-all px-8`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to={"/"}>
          <div>
            <img className="w-[70px]"
              src={newlogo}
              alt=""
            />
          </div>
        </Link>
        <div
          className="cursor-pointer flex relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <BsBag className="text-2xl" />

          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white flex justify-center items-center rounded-full">
            {cart.length}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
