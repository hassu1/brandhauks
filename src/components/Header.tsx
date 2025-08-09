"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // ✅ Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // ✅ Apply/remove CSS classes for menu and body scroll
  useEffect(() => {
    const body = document.body;

    if (menuOpen) {
      body.classList.add("menu-open", "no-scroll"); // If your CSS depends on this
    } else {
      body.classList.remove("menu-open", "no-scroll");
    }
  }, [menuOpen]);

  return (
    <header id="bi-header" className="bi-header-section header-style-four">
      <div className="bi-header-content d-flex justify-content-between align-items-center">
        <div className="brand-logo">
          <Link href="/">
            <Image
              width={800}
              height={500}
              style={{ width: "100%", height: "auto" }}
              src="/assets/img/logo_white.png"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="bi-header-main-navigation">
          <nav className="main-navigation clearfix ul-li">
            <ul id="main-nav" className="nav navbar-nav clearfix">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/what-we-do">What We Do</Link>
              </li>
              <li>
                <Link href="/our-portfolio">Portfolio</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="bi-header-main-menu-cta-area d-flex align-items-center">
          <div className="bi-header-social">
            <Link href="https://www.instagram.com/brandhawks?igsh=MWloY3ZlMnhuN2VjYg==">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link href="https://www.linkedin.com/company/brand-hawks/">
              <i className="fab fa-linkedin-in"></i>
            </Link>
            <Link href="https://www.facebook.com/share/12M9Uqb4tx1/">
              <i className="fab fa-facebook"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* ✅ Mobile Menu */}
      <div
        className={`mobile_menu position-relative ${menuOpen ? "opened" : ""}`}
      >
        <div
          className="mobile_menu_button open_mobile_menu"
          onClick={() => setMenuOpen(true)}
        >
          <i className="fal fa-bars"></i>
        </div>
        <div className="mobile_menu_wrap">
          <div
            className="mobile_menu_overlay open_mobile_menu"
            onClick={() => setMenuOpen(false)}
          ></div>
          <div className="mobile_menu_content">
            <div
              className="mobile_menu_close open_mobile_menu"
              onClick={() => setMenuOpen(false)}
            >
              <i className="fal fa-times"></i>
            </div>
            <div className="m-brand-logo">
              <Link href="/">
                <Image
                  width={800}
                  height={500}
                  style={{ width: "100%", height: "auto" }}
                  src="/assets/img/logo_white.png"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="mobile-search-bar position-relative">
              <form action="#">
                <input type="text" name="search" placeholder="Keywords" />
                <button>
                  <i className="fal fa-search"></i>
                </button>
              </form>
            </div>
            <nav className="mobile-main-navigation clearfix ul-li">
              <ul id="m-main-nav" className="nav navbar-nav clearfix">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about-us">About Us</Link>
                </li>
                <li>
                  <Link href="/what-we-do">What We Do</Link>
                </li>
                <li>
                  <Link href="/our-portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link href="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </nav>
            <div className="bi-mobile-header-social text-center">
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
