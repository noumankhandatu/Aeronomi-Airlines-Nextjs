import React, { useState, useEffect } from "react";
import Link from "next/link";
import TopHeader from "../TopHeader";
import { MenuData } from "./MenuData";
import MenuItems from "./MenuItems";
import SearchForm from "../SearchForm";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = (e) => {
    const header = document.querySelector(".navbar-area");
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };
  const [click, setClick] = useState(false);

  const handleClick = () => {
    if (click) {
      document
        .querySelector("#navbarSupportedContent")
        .classList.remove("navber-colpes");
    } else {
      document
        .querySelector("#navbarSupportedContent")
        .classList.add("navber-colpes");
    }
    setClick(!click);
  };

  const handleSearchOpen = () => {
    document
      .querySelector(".search-overlay")
      .classList.toggle("search-overlay-active");
  };

  return (
    <>
      <header className="header-area">
        <TopHeader />
        <div className="navbar-area ">
          <div className="transTics-nav">
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
                <Link href="/" className="navbar-brand">
                  <img src="/logo.svg" alt="logo" style={{ width: "280px" }} />
                </Link>
                <div className="mean-menu" id="navbarSupportedContent">
                  <ul className="navbar-nav">
                    {MenuData.map((item, index) => (
                      <MenuItems item={item} key={index} />
                    ))}
                    <li className="nav-item">
                      <a
                        href="#!"
                        onClick={handleSearchOpen}
                        className="nav-link search-box"
                      >
                        <i className="fas fa-search" id="search-btn"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
          <div className="transtics-responsive-nav">
            <div className="container">
              <div className="responsive-button" onClick={handleClick}>
                {click ? <AiOutlineClose /> : <HiMenuAlt3 />}
              </div>
            </div>
          </div>
        </div>
      </header>
      <SearchForm />
    </>
  );
};

export default Navbar;
