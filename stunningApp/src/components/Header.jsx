import React from "react";
import 'boxicons/css/boxicons.min.css';

const Header = () => {
    const toggleMobileMsnu = () => {
        const mobileMenu = document.getElementById("mobileMenu")
        // if it has the hidden class remove it otherwise add it.
        if (mobileMenu.classList.contains("hidden")) {
            mobileMenu.classList.remove("hidden");
        }
        else {
            mobileMenu.classList.add("hidden");
        }

    }


    return (
        <header className="flex justify-between items-center py-4
        px-4 lg:px-20">
            <h1 data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500" className="text-3xl md:text-4xl
            lg:text-5xl font-light m-0">
                VELVET
            </h1>

            {/*desktop navigation */}
            <nav className="hidden md:flex items-center gap-12">
                <a data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000" className=" text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
                    Company
                </a>
                <a data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500" className=" text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
                    Features
                </a>
                <a data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="2000" className=" text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
                    Resources
                </a>
                <a data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="2500" className=" text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
                    About Us
                </a>
            </nav>

            <button className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full 
            border-none font-medium transition-all duration-500 hover:bg-white
            cursor-pointer z-50">
                Sign Up
            </button>

            {/* mobile button */}
            <button onClick={toggleMobileMsnu} className="md:hidden text-3xl p-2 z-50">
                <i class='bx bx-menu'></i>
            </button>

            {/* mobie menu  Hidden button */}
            <div id="mobileMenu" className="hidden fixed-top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40
            bg-black bg-opacity-70 backdrop-blur-md">
                <nav className="flex flex-col gap-6
                 items-center">
                    <a className=" text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
                        Company
                    </a>
                    <a className=" text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
                        Features
                    </a>
                    <a className=" text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
                        Resources
                    </a>
                    <a className=" text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
                        About Us
                    </a>
                </nav>
            </div>
        </header>
    )
}

export default Header;

