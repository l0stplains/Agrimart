"use client";

import React from "react";
import SearchBar from "./SearchBar";
import Image from "next/image";

const Navbar = ({ includeSearchBar = false }: any) => {
    const [showNavbar, setShowNavbar] = React.useState(false);

    const handleNavbarToggle = () => {
        setShowNavbar(!showNavbar);
    };

    return (
        <header className="fixed top-0 w-[min(100%,_1024px)] h-[80px] rounded-b-3xl bg-white flex justify-between items-center gap-4 p-6 text-black z-30">
            <div className="md:hidden">
                <button className="navbar-toggler text-black" onClick={handleNavbarToggle}>
                    <Image src="/menu-burger.svg" alt="Menu Icon" width={29} height={18} />
                </button>
                <div
                    className={`transition-all ease-out absolute top-0 left ${showNavbar ? "left-0" : "-left-full"
                        } w-4/5 bg-white h-[max(100dvh,_880px)] overflow-hidden z-50 text-black px-6`}
                >
                    <button
                        className="navbar-toggler absolute top-6 left-6"
                        onClick={handleNavbarToggle}
                    >
                        <Image src="/cross.svg" alt="Close Icon" width={29} height={29} />
                    </button>
                    <div className="h-dvh flex flex-col justify-center items-center gap-4">
                        <a href="/" className="navbar-item">
                            <h1 className="text-2xl font-semibold">Agrimart</h1>
                        </a>
                        <a href="/products" className="navbar-item">
                            <h1 className="text-2xl font-semibold">Products</h1>
                        </a>
                        <a href="/payment" className="navbar-item">
                            <h1 className="text-2xl font-semibold">Payment</h1>
                        </a>
                    </div>
                </div>
                <div
                    className={`transition-all ease-out absolute top-0 ${showNavbar ? "" : "hidden"
                        } left-0 w-full bg-white/30 backdrop-blur-sm h-[max(100dvh,_880px)] overflow-hidden z-40`}
                    onClick={handleNavbarToggle}
                    onTouchStart={handleNavbarToggle} // For mobile
                >
                </div>
            </div>
            <div className="max-md:hidden flex justify-between gap-4">
                <a href="/" className="navbar-item">
                    <h1 className="text-2xl font-semibold">Agrimart</h1>
                </a>
                <a href="/products" className="navbar-item">
                    <h1 className="text-2xl font-semibold">Products</h1>
                </a>
                <a href="/payment" className="navbar-item">
                    <h1 className="text-2xl font-semibold">Payment</h1>
                </a>
            </div>
            {includeSearchBar && (
                <SearchBar />
            )}
        </header>
    );
};

export default Navbar;
