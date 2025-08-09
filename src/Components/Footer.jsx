import React from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";

import { Link } from "react-router";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-purple-700">
      <div className="footer sm:footer-horizontal   text-white p-10">
        <aside>
          <img className="rounded-full  w-16 h-16" src={logo} alt="" />
          <p className="text-2xl font-bold">E-Services</p>
          <p>Providing reliable tech since 2016</p>
        </aside>
        <nav>
          <h6 className="footer-title">Terms & Conditions </h6>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </nav>

        <nav>
          <h6 className="footer-title"> Contact details</h6>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>

          <Link className="link link-hover">Press kit</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Social Media Links </h6>
          <div className="flex items-center gap-3">
            <Link>
              <FaFacebookSquare size={30} />
            </Link>
            <Link>
              <FaLinkedin size={30} />
            </Link>
          </div>
        </nav>
      </div>
      <footer className="footer sm:footer-horizontal footer-center text-white p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by E-Services (Dev. H@san)
          </p>
        </aside>
      </footer>
    </footer>
  );
};

export default Footer;
