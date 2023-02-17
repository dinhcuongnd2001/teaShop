import React, { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./header.css";
import SidebarCart from "./../components/cart/SildebarCart";
import { useSelector } from "react-redux";
import { getQuantity } from "./../redux/selector";
import userSlice from "./../redux/userSilce";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

function Header() {
  const [open, setOpen] = useState(false);
  const showMenu = useRef();
  const UlRef = useRef();
  const quantity = useSelector(getQuantity);

  // useEffect(() => {
  //   const handleClickOutSide = (e) => {
  //     if (UlRef.current && !UlRef.current.contains(e.target)) {
  //       UlRef.current.classList.remove("mobie:hidden");
  //     }
  //     document.addEventListener("click", handleClickOutSide);
  //     return () => {
  //       document.removeEventListener("click", handleClickOutSide);
  //     };
  //   };
  // }, [UlRef.current.classList]);
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          // onClick={() => TeaRef.current.scrollIntoView()}
        >
          Sản Phẩm Trà
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          // onClick={() => devicePlace.current.scrollIntoView()}
        >
          Dụng Cụ Trà
        </a>
      ),
    },
  ];

  window.onscroll = () => {
    window.scrollY > 50
      ? showMenu?.current.classList.add("showMenu")
      : showMenu?.current.classList.remove("showMenu");
    return () => window.screenY(null);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <header ref={showMenu}>
      <div className="laptop:max-w-[1170px] flex justify-between items-center m-auto tablet:px-5 mobie:px-8 mobie:py-2">
        <img
          className="image w-[50px] h-[50px]"
          src={require("../asset/image/logo.png")}
          alt="#error_picture"
        />
        <div className="relative flex w-[60%] tablet:justify-between items-center mobie:justify-end">
          <ul className="tablet:flex tablet:gap-3 mobie:hidden">
            <NavLink
              className={({ isActive }) => (isActive ? "link active" : "link")}
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              className={({ isActive }) => (isActive ? "link active" : "link")}
              to="/cart"
            >
              Cart
            </NavLink>

            <NavLink
              className={({ isActive }) => (isActive ? "link active" : "link")}
              to="/contact"
            >
              Contact
            </NavLink>
          </ul>

          <ul
            ref={UlRef}
            className="mobie:hidden animate-dropDown mobie:flex-col mobie:absolute mobie:top-[100%] mobie:flex mobie:bg-white mobie:w-[180px] mobie:gap-2 mobie:py-3"
          >
            <NavLink
              className={({ isActive }) => (isActive ? "link active" : "link")}
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              className={({ isActive }) => (isActive ? "link active" : "link")}
              to="/cart"
            >
              Cart
            </NavLink>

            <NavLink
              className={({ isActive }) => (isActive ? "link active" : "link")}
              to="/contact"
            >
              Contact
            </NavLink>
          </ul>

          <div className="tablet:hidden mr-5 cursor-pointer hover:opacity-70">
            <DehazeIcon
              onClick={(e) => {
                UlRef.current.classList.toggle("mobie:hidden");
              }}
            />
          </div>

          <div className="relative">
            {quantity > 0 ? (
              <span className="text-white bg-primary rounded-[50%] inline-block text-center w-6 h-6 absolute top-[-8px] right-[-22px]">
                {quantity}
              </span>
            ) : null}
            <ShoppingCartIcon
              onClick={handleOpen}
              className="cursor-pointer hover:text-price ease-linear duration-300"
            />
          </div>
        </div>
      </div>
      <SidebarCart open={open} handleClose={handleClose} />
    </header>
  );
}

export default Header;
