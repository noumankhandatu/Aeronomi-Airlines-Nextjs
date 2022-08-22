import React, { useState, useEffect } from "react";
import Link from "next/link";
import TopHeader from "../TopHeader";
import { MenuData } from "./MenuData";
import MenuItems from "./MenuItems";
import SearchForm from "../SearchForm";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  // Sticky Menu Area
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
  //Responsive Menu Area
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
                  <img
                    src={
                      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAABOCAMAAADmZV9mAAAC+lBMVEUAAADcKz3cKz3cKz3cKz3cKz3cKz2OpLGdsLvcKz3cKz3cKz3J09pxi53cKz3cKz3cKz1beY57k6PJ09o9YHrcKz0rU3DcKz22w8vK1do5WnVIaIB5kqOBmaj///8sVHG5xs3J09pngpX////P2N2MorARO12SprTc4uaEmqmPpLOmt8AyWXQkS2k7XXhgfJFog5f///+wv8gKN1khSWc4W3ZviZyYq7ioucO1xMzO2Nz////J09oROlsTP18cRGNFZX8/YHtPboVZdozcKz18k6T///9qhpn///////+Jn63///////+nuMObrrqesbyoucO8ytD///8WP2BLaoJWdIpTcon///9ngpaInq3///+esLv///+3xMyInq3z9fYONlgtU3A0WHMsU3A9X3pWc4paeI7///92j6D///////+VqLb///////+zwsr///8rUW42V3L///8dRWQ3WHNHZ383V3NNbYV+laZuiJt+laf///+Xqrf///+nt8GMobD////K09oAKEwAMFPk6esrTWogSmnl6ex8lKUrUnA6X3kZQmL///9Zc4p0iJtdd40vU2/j6Os0V3Pk6ez4+fn////e5OdgfZFVc4v///9rhpl0jZ+0wcq2xMu1wspZeI3///8AMlXcKz3///8AK08AMFQAJkwAMFMAKk4ALlIAL1IALVEDMlUAJ00RPV309/iFm6wAKU2ouMMAJUrO1dy6xs+qusVgfpNee5AAI0kAIUcAHkSer7xBYXoHNFaEm6wUP2BZd44KN1lPb4ZEZH8jS2mtvMaHna1phJhMbIVIaYLo7O52jqBjf5S9yNGltsKjs8AuU3AqUG0AKEzl6ezX3uPR2d7FztbCzNSUprVTcYlCY30gR2YFMFP6+/vt8PLT3OG/ytK2wcuXqrdngZYbQ2MUPV73+Pna4OWhsr87XXc1WnUoTmwOOlsQNViMoK+Blqd9k6V5kKNuiJtYdIs9YXwzVnKyv8marbpfepBdepAVNlicr7xCXHlpfZRCAAAAoXRSTlMAQIC/7xAwAwEgn6/6aGDfz4dm/cWPxlBCBsCygUT97jn8hkMeBvuAEllMQ+7cwZCLZRH648d/SB4XC/n48vDowL2llnBuamlhV1JQPjc0LSgJ9Omq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"
                    }
                    alt="logo"
                  />
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
