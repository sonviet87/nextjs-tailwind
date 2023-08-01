import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from "@/components/MenuItem";
import {AiFillHome, AiFillInfoCircle} from "react-icons/ai";
import Link from "next/link";
import DarkModeSwitch from "@/components/DarkModeSwitch";

Header.propTypes = {};

function Header(props) {
    return (
        <div className="flex justify-between mx-2 sm:mx-auto max-w-6xl items-center py-6">
            <div className="flex">
                <MenuItem title="Home" address="/" Icon={AiFillHome}/>
                <MenuItem title="About" address="/about" Icon={AiFillInfoCircle}/>
            </div>

            <div className="flex items-center space-x-5">
                <DarkModeSwitch />
                <Link href="/">
                    <h2>
                        <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">IMDB</span>
                        <span className="text-xl hidden sm:inline">Clone</span>
                    </h2>
                </Link>
            </div>
        </div>
    );
}

export default Header;
