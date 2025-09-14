// src/components/Footer.js
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";
import { MdLocationOn, MdCall, MdEmail, MdAccessTime } from "react-icons/md";
import Logo from "../assets/img/AlphaSoft_logo1.png"; // Adjust the path as needed

const Footer = () => {
  return (
    <footer id="rs-footer" className="rs-footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            {/* Logo & About */}
            <div className="col-lg-3 col-md-12 col-sm-12 footer-widget">
              <div className="footer-logo mb-30">
                <a href="/">
                  <img src={Logo} alt="logo" />
                </a>
              </div>
              <p className="pb-30">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
              <ul className="footer-social">
                <li>
                  <a href="#">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaPinterestP />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="col-lg-3 col-md-12 col-sm-12 pl-45 md-pl-15 md-mb-30">
              <h3 className="widget-title">IT Services</h3>
              <ul className="site-map">
                <li>
                  <a href="/software-development">Software Development</a>
                </li>
                <li>
                  <a href="/web-development">Web Development</a>
                </li>
                <li>
                  <a href="/analytic-solutions">Analytic Solutions</a>
                </li>
                <li>
                  <a href="/cloud-and-devops">Cloud and DevOps</a>
                </li>
                <li>
                  <a href="/product-design">Product Design</a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-lg-3 col-md-12 col-sm-12 md-mb-30">
              <h3 className="widget-title">Contact Info</h3>
              <ul className="address-widget">
                <li>
                  <MdLocationOn />{" "}
                  <span><a href="">374 ABC</a></span>
                </li>
                <li>
                  <MdCall /> <a href="/">1234567890</a>
                </li>
                <li>
                  <MdEmail />{" "}
                  <a href="mailto:info@yourmail.com">info@yourmail.com</a>
                </li>
                <li>
                  <MdAccessTime /> <span>Opening Hours: 10:00 - 18:00</span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="col-lg-3 col-md-12 col-sm-12">
              <h3 className="widget-title">Newsletter</h3>
              <p className="widget-desc">
                Subscribe to our newsletter and stay updated with the latest
                news & offers.
              </p>

              <form className="newsletter-form">
                <input type="email" placeholder="Your email address" required />
                <button type="submit">
                  <FaPaperPlane />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row y-middle">
            <div className="col-lg-6 text-right md-mb-10 order-last">
              <ul className="copy-right-menu">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/shop">Shop</a>
                </li>
                <li>
                  <a href="/faq">FAQs</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="copyright">
                <p>
                  © {new Date().getFullYear()} All Rights Reserved. Developed by{" "}
                  AlphaSoft360
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
