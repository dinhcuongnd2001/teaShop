import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./header.css";
import SidebarCart from "./../components/cart/SildebarCart";
import { useSelector } from "react-redux";
import { getQuantity } from "./../redux/selector";
import userSlice from "./../redux/userSilce";
function Header() {
  const [open, setOpen] = useState(false);
  const showMenu = useRef();
  const quantity = useSelector(getQuantity);
  const navLinks = [
    { id: "1", component: "Home", path: "/" },
    // { id: "2", component: "Products", path: "/products" },
    { id: "2", component: "Cart", path: "/cart" },
    { id: "3", component: "Contact", path: "/contact" },
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
      <div className="max-w-[1170px] flex justify-between items-center m-auto">
        <img
          className="image w-[50px] h-[50px]"
          src={require("../asset/image/logo.png")}
          alt="#error_picture"
        />
        <div className="flex w-[60%] justify-between items-center">
          <ul className="flex gap-3">
            {navLinks.map((each) => (
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
                to={each.path}
                key={each.id}
              >
                {each.component}
              </NavLink>
            ))}
          </ul>
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
