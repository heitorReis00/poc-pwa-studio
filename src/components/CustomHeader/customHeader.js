import React from 'react';
import logo from '../../assets/logo.svg';
import { IoBagHandleOutline } from 'react-icons/io5';
import { RiMore2Line } from 'react-icons/ri';
import { HiBars3 } from 'react-icons/hi2';

const CustomHeader = () => {
    const links = ['Home', 'Pages', 'Menu', 'Shop', 'Blog', 'Contact'];

    for (let i = 0; i <= 5; i++)
        return (
            <div className=" flex justify-center">
                <header className=" w-full max-w-[1224px] bg-white/60 fixed backdrop-blur-md z-50 py-6 flex items-center justify-between px-10">
                    <div>
                        <img src={logo} alt="Logo" className="h-8 cursor-pointer" />
                    </div>
                    <nav className="hidden lg_block">
                        <ul className="flex w-full items-center justify-between gap-10 text-sm font-semibold text-indigo-950">
                            {links.map(a => (
                                <li key={links[i]}>
                                    <a href="#">{a}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="flex gap-3 items-center cursor-pointer text-indigo-950">
                        <IoBagHandleOutline size={30} />
                        <HiBars3 size={30} />
                        <RiMore2Line size={30} />
                    </div>
                </header>
            </div>
        );
};

export default CustomHeader;
