import React from "react";
import classes from "./customFooter.module.css";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import logo from "../../assets/logo.svg";

const CustomFooter = () => {
    return (
        <div className="flex justify-center">
            <footer className="w-full max-w-[1024px] lg_flex-row lg_justify-between  py-5 text-center flex flex-col items-center gap-6">
            <div><img src={logo} alt="Logo" className="w-22"/></div>
            <div className="text-indigo-950 flex space-x-3">
            
                <FaXTwitter />
                <FaInstagram />
                <FaFacebookF />
                <FaYoutube /></div>
                <div>
                    <p className="text-xs text-gray-600">© 2026 Starbelly | Dev by <strong className="text-indigo-950">bslthemes</strong></p>
                </div>
            </footer>
        </div>
    )
}

export default CustomFooter;