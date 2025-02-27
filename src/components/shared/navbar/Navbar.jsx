

import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className='fixed  z-50 w-full bg-[#FFFFFF]'>
            <nav className="container mx-auto px-4 py-4 ">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Link to='/' className="flex items-center">
                                <img src="/logo.png" alt="nav logo" className="" />
                            </Link>
                        </div>


                        {/* Mobile menu button */}
                        <div className="bg-primary  px-4 py-2 rounded-md flex lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="  text-white"
                                aria-label="toggle menu"
                            >
                                {!isOpen ? (
                                    <RiMenu3Fill className="text-2xl " />
                                ) : (
                                    <IoMdClose className="text-2xl " />
                                )}
                            </button>


                        </div>
                    </div>



                    {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                    <div
                        className={`h-screen lg:h-0 mt-4 absolute pb-8 lg:pb-0  lg:shadow-none  lg:border-none rounded-b-md lg:rounded-b-md inset-x-0 z-20 w-[90%] px-6 py-4 transition-all duration-300 ease-in-out bg-white lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
                            }`}
                    >
                        <div className="lg:flex -mx-6 lg:items-center lg:mx-8 space-x-5 hidden">
                            {/* search  */}
                            <div className="relative mt-4 md:mt-0 lg:w-[460px] lg:h-[40px] py-8 md:py-0">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg
                                        className="w-5 h-5 text-gray-400"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                    </svg>
                                </span>

                                <input
                                    type="text"
                                    className="w-full py-[8px] pl-10 pr-4 text-gray-700 bg-white border rounded-full  focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                                    placeholder="Search..."
                                />
                            </div>

                            <NavLink
                                to="/"
                                end
                                className={({ isActive }) =>
                                    `p-2 rounded-full ${isActive ? 'bg-[#E9ECEF] font-semibold hover:bg-[#E9ECEF] p-2 rounded-full' : 'font-semibold hover:bg-[#E9ECEF] p-2 rounded-full'}`
                                }
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 19V10C4 9.68333 4.07083 9.38333 4.2125 9.1C4.35417 8.81667 4.55 8.58333 4.8 8.4L10.8 3.9C11.15 3.63333 11.55 3.5 12 3.5C12.45 3.5 12.85 3.63333 13.2 3.9L19.2 8.4C19.45 8.58333 19.6458 8.81667 19.7875 9.1C19.9292 9.38333 20 9.68333 20 10V19C20 19.55 19.8042 20.0208 19.4125 20.4125C19.0208 20.8042 18.55 21 18 21H15C14.7167 21 14.4792 20.9042 14.2875 20.7125C14.0958 20.5208 14 20.2833 14 20V15C14 14.7167 13.9042 14.4792 13.7125 14.2875C13.5208 14.0958 13.2833 14 13 14H11C10.7167 14 10.4792 14.0958 10.2875 14.2875C10.0958 14.4792 10 14.7167 10 15V20C10 20.2833 9.90417 20.5208 9.7125 20.7125C9.52083 20.9042 9.28333 21 9 21H6C5.45 21 4.97917 20.8042 4.5875 20.4125C4.19583 20.0208 4 19.55 4 19Z" />
                                </svg>
                            </NavLink>

                            <NavLink to='/view-alls' className={({ isActive }) =>
                                `p-2 rounded-full ${isActive ? 'bg-[#E9ECEF] font-semibold hover:bg-[#E9ECEF] p-2 rounded-full' : 'font-semibold hover:bg-[#E9ECEF] p-2 rounded-full'}`
                            }>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_140_818" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                        <rect width="24" height="24" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_140_818)">
                                        <path d="M4 21C3.45 21 2.97917 20.8042 2.5875 20.4125C2.19583 20.0208 2 19.55 2 19V5C2 4.45 2.19583 3.97917 2.5875 3.5875C2.97917 3.19583 3.45 3 4 3H20C20.55 3 21.0208 3.19583 21.4125 3.5875C21.8042 3.97917 22 4.45 22 5V19C22 19.55 21.8042 20.0208 21.4125 20.4125C21.0208 20.8042 20.55 21 20 21H4ZM4 19H20V5H4V19ZM6 17H18V15H6V17ZM6 13H10V7H6V13ZM12 13H18V11H12V13ZM12 9H18V7H12V9Z" fill="#666666" />
                                    </g>
                                </svg>

                            </NavLink>


                            <NavLink to='/view-detailss' className={({ isActive }) =>
                                `p-2 rounded-full ${isActive ? 'bg-[#E9ECEF] font-semibold hover:bg-[#E9ECEF] p-2 rounded-full' : 'font-semibold hover:bg-[#E9ECEF] p-2 rounded-full'}`
                            }>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_140_116" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                        <rect width="24" height="24" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_140_116)">
                                        <path d="M12 12C12.55 12 13.0208 11.8042 13.4125 11.4125C13.8042 11.0208 14 10.55 14 10C14 9.45 13.8042 8.97917 13.4125 8.5875C13.0208 8.19583 12.55 8 12 8C11.45 8 10.9792 8.19583 10.5875 8.5875C10.1958 8.97917 10 9.45 10 10C10 10.55 10.1958 11.0208 10.5875 11.4125C10.9792 11.8042 11.45 12 12 12ZM12 19.35C14.0333 17.4833 15.5417 15.7875 16.525 14.2625C17.5083 12.7375 18 11.3833 18 10.2C18 8.38333 17.4208 6.89583 16.2625 5.7375C15.1042 4.57917 13.6833 4 12 4C10.3167 4 8.89583 4.57917 7.7375 5.7375C6.57917 6.89583 6 8.38333 6 10.2C6 11.3833 6.49167 12.7375 7.475 14.2625C8.45833 15.7875 9.96667 17.4833 12 19.35ZM12 22C9.31667 19.7167 7.3125 17.5958 5.9875 15.6375C4.6625 13.6792 4 11.8667 4 10.2C4 7.7 4.80417 5.70833 6.4125 4.225C8.02083 2.74167 9.88333 2 12 2C14.1167 2 15.9792 2.74167 17.5875 4.225C19.1958 5.70833 20 7.7 20 10.2C20 11.8667 19.3375 13.6792 18.0125 15.6375C16.6875 17.5958 14.6833 19.7167 12 22Z" fill="#666666" />
                                    </g>
                                </svg>

                            </NavLink>

                            <NavLink to='/commings' className={({ isActive }) =>
                                `p-2 rounded-full ${isActive ? 'bg-[#E9ECEF] font-semibold hover:bg-[#E9ECEF] p-2 rounded-full' : 'font-semibold hover:bg-[#E9ECEF] p-2 rounded-full'}`
                            }>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_140_698" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                        <rect width="24" height="24" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_140_698)">
                                        <path d="M9 16H11V13H14V11H11V8H9V11H6V13H9V16ZM4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H16C16.55 4 17.0208 4.19583 17.4125 4.5875C17.8042 4.97917 18 5.45 18 6V10.5L22 6.5V17.5L18 13.5V18C18 18.55 17.8042 19.0208 17.4125 19.4125C17.0208 19.8042 16.55 20 16 20H4ZM4 18H16V6H4V18Z" fill="#666666" />
                                    </g>
                                </svg>

                            </NavLink>

                        </div>

                        {/*===================== mobile menu ================= */}
                        <div className="lg:hidden">
                            <div className="flex items-center space-x-5">
                                <NavLink
                                    to="/"
                                    end
                                    className={({ isActive }) =>
                                        `p-2 rounded-full ${isActive ? 'bg-[#E9ECEF] font-semibold hover:bg-[#E9ECEF] p-2 rounded-full' : 'font-semibold hover:bg-[#E9ECEF] p-2 rounded-full'}`
                                    }
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 19V10C4 9.68333 4.07083 9.38333 4.2125 9.1C4.35417 8.81667 4.55 8.58333 4.8 8.4L10.8 3.9C11.15 3.63333 11.55 3.5 12 3.5C12.45 3.5 12.85 3.63333 13.2 3.9L19.2 8.4C19.45 8.58333 19.6458 8.81667 19.7875 9.1C19.9292 9.38333 20 9.68333 20 10V19C20 19.55 19.8042 20.0208 19.4125 20.4125C19.0208 20.8042 18.55 21 18 21H15C14.7167 21 14.4792 20.9042 14.2875 20.7125C14.0958 20.5208 14 20.2833 14 20V15C14 14.7167 13.9042 14.4792 13.7125 14.2875C13.5208 14.0958 13.2833 14 13 14H11C10.7167 14 10.4792 14.0958 10.2875 14.2875C10.0958 14.4792 10 14.7167 10 15V20C10 20.2833 9.90417 20.5208 9.7125 20.7125C9.52083 20.9042 9.28333 21 9 21H6C5.45 21 4.97917 20.8042 4.5875 20.4125C4.19583 20.0208 4 19.55 4 19Z" />
                                    </svg>
                                </NavLink>

                                <NavLink to='/view-alls' className={({ isActive }) =>
                                    `p-2 rounded-full ${isActive ? 'bg-[#E9ECEF] font-semibold hover:bg-[#E9ECEF] p-2 rounded-full' : 'font-semibold hover:bg-[#E9ECEF] p-2 rounded-full'}`
                                }>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <mask id="mask0_140_818" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                            <rect width="24" height="24" fill="#D9D9D9" />
                                        </mask>
                                        <g mask="url(#mask0_140_818)">
                                            <path d="M4 21C3.45 21 2.97917 20.8042 2.5875 20.4125C2.19583 20.0208 2 19.55 2 19V5C2 4.45 2.19583 3.97917 2.5875 3.5875C2.97917 3.19583 3.45 3 4 3H20C20.55 3 21.0208 3.19583 21.4125 3.5875C21.8042 3.97917 22 4.45 22 5V19C22 19.55 21.8042 20.0208 21.4125 20.4125C21.0208 20.8042 20.55 21 20 21H4ZM4 19H20V5H4V19ZM6 17H18V15H6V17ZM6 13H10V7H6V13ZM12 13H18V11H12V13ZM12 9H18V7H12V9Z" fill="#666666" />
                                        </g>
                                    </svg>

                                </NavLink>


                                <NavLink to='/view-detailss' className={({ isActive }) =>
                                    `p-2 rounded-full ${isActive ? 'bg-[#E9ECEF] font-semibold hover:bg-[#E9ECEF] p-2 rounded-full' : 'font-semibold hover:bg-[#E9ECEF] p-2 rounded-full'}`
                                }>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <mask id="mask0_140_116" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                            <rect width="24" height="24" fill="#D9D9D9" />
                                        </mask>
                                        <g mask="url(#mask0_140_116)">
                                            <path d="M12 12C12.55 12 13.0208 11.8042 13.4125 11.4125C13.8042 11.0208 14 10.55 14 10C14 9.45 13.8042 8.97917 13.4125 8.5875C13.0208 8.19583 12.55 8 12 8C11.45 8 10.9792 8.19583 10.5875 8.5875C10.1958 8.97917 10 9.45 10 10C10 10.55 10.1958 11.0208 10.5875 11.4125C10.9792 11.8042 11.45 12 12 12ZM12 19.35C14.0333 17.4833 15.5417 15.7875 16.525 14.2625C17.5083 12.7375 18 11.3833 18 10.2C18 8.38333 17.4208 6.89583 16.2625 5.7375C15.1042 4.57917 13.6833 4 12 4C10.3167 4 8.89583 4.57917 7.7375 5.7375C6.57917 6.89583 6 8.38333 6 10.2C6 11.3833 6.49167 12.7375 7.475 14.2625C8.45833 15.7875 9.96667 17.4833 12 19.35ZM12 22C9.31667 19.7167 7.3125 17.5958 5.9875 15.6375C4.6625 13.6792 4 11.8667 4 10.2C4 7.7 4.80417 5.70833 6.4125 4.225C8.02083 2.74167 9.88333 2 12 2C14.1167 2 15.9792 2.74167 17.5875 4.225C19.1958 5.70833 20 7.7 20 10.2C20 11.8667 19.3375 13.6792 18.0125 15.6375C16.6875 17.5958 14.6833 19.7167 12 22Z" fill="#666666" />
                                        </g>
                                    </svg>

                                </NavLink>

                                <NavLink to='/commings' className={({ isActive }) =>
                                    `p-2 rounded-full ${isActive ? 'bg-[#E9ECEF] font-semibold hover:bg-[#E9ECEF] p-2 rounded-full' : 'font-semibold hover:bg-[#E9ECEF] p-2 rounded-full'}`
                                }>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <mask id="mask0_140_698" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                            <rect width="24" height="24" fill="#D9D9D9" />
                                        </mask>
                                        <g mask="url(#mask0_140_698)">
                                            <path d="M9 16H11V13H14V11H11V8H9V11H6V13H9V16ZM4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H16C16.55 4 17.0208 4.19583 17.4125 4.5875C17.8042 4.97917 18 5.45 18 6V10.5L22 6.5V17.5L18 13.5V18C18 18.55 17.8042 19.0208 17.4125 19.4125C17.0208 19.8042 16.55 20 16 20H4ZM4 18H16V6H4V18Z" fill="#666666" />
                                        </g>
                                    </svg>

                                </NavLink>
                            </div>

                            {/* search */}
                            <div className="relative py-4">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg
                                        className="w-5 h-5 text-gray-400"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                    </svg>
                                </span>

                                <input
                                    type="text"
                                    className="w-full py-[8px] pl-10 pr-4 text-gray-700 bg-white border rounded-full  focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                                    placeholder="Search..."
                                />
                            </div>
                        </div>



                        <div className="flex items-center gap-[12px]">
                            <Link to={'/sign-in'} className="text-[16px] font-Roboto border border-[#666666] text-[#666666] px-[24px] py-[8px] rounded-full hover:bg-[#E9ECEF] hover:border-[#E9ECEF]">
                                Sign In
                            </Link>
                            <Link to='/signUp'>
                                <button className="text-[16px] font-Roboto bg-primary text-[#FFFFFF] px-[24px] py-[8px] rounded-full hover:bg-[#CD1A1E]">Sign Up</button>
                            </Link>
                        </div>

                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;