import { useContext, useState } from "react";   
import { Link, useLocation } from "react-router-dom";
import { assets } from '../assets/assets.js'
import { Heart, ShoppingBag } from 'lucide-react';
import { AppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const Navbar = () => {

    const { navigate, user, setUser, cart, favorites } = useContext(AppContext);
    const [open, setOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false); // CLICK TO OPEN PROFILE MENU
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? "text-secondary border-b border-primary" : "";
    };

    const logout = () => {
        setUser(null);
        toast.success("Logged out successfully");
        navigate("/");
    }

    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

            <Link>
                <img src={assets.logo} alt="" className="w-42" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">
                <Link to={"/"} className={isActive("/")}>Home</Link>
                <Link to={"/shop"} className={isActive("/shop")}>Shop</Link>
                <Link to={"/about"} className={isActive("/about")}>About</Link>
                <Link to={"/contact"} className={isActive("/contact")}>Contact</Link>
                <button
                  onClick={() => navigate("/admin")}
                  className="bg-primary text-white px-6 py-2 cursor-pointer rounded-full"
                >
                  Admin Dashboard
                </button>

                <div onClick={() => navigate("/cart")} className="relative cursor-pointer">
                    <ShoppingBag className="w-5 h-5" />
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">
                        {cart ? cart.length : 0}
                    </button>
                </div>

                <div onClick={() => navigate("/wishlist")} className="relative cursor-pointer">
                    <Heart className="w-5 h-5" />
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">
                        {favorites ? favorites.length : 0}
                    </button>
                </div>

                {/* CLICK TO OPEN PROFILE MENU */}
                {
                    user ? (
                        <div className="relative">
                            <img
                                src={assets.profile_pic}
                                alt=""
                                onClick={() => setProfileOpen(!profileOpen)}
                                className="w-10 h-10 rounded-full cursor-pointer"
                            />

                            {profileOpen && (
                                <div className="absolute right-0 top-full mt-2 w-40 bg-secondary text-white shadow-lg rounded-lg z-50">
                                    <ul>
                                        <li
                                            onClick={() => { setProfileOpen(false); navigate("/my-order"); }}
                                            className="cursor-pointer hover:bg-primary py-1 px-3">
                                            My Orders
                                        </li>
                                        <li
                                            onClick={() => { setProfileOpen(false); logout(); }}
                                            className="cursor-pointer hover:bg-primary py-1 px-3">
                                            Logout
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    ) : (
                        <button
                            onClick={() => navigate("/login")}
                            className="cursor-pointer px-8 py-2 bg-primary hover:bg-secondary transition text-white rounded-full">
                            Login
                        </button>
                    )
                }
            </div>

            {/* Mobile menu button */}
            <button onClick={() => setOpen(!open)} aria-label="Menu" className="sm:hidden">
                <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="21" height="1.5" rx=".75" fill="#426287" />
                    <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                    <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
                </svg>
            </button>

            {/* Mobile Menu */}
            <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden z-50`}>
                <Link onClick={() => setOpen(false)} to={"/"} className={isActive("/")}>
                    Home
                </Link>

                <Link onClick={() => setOpen(false)} to={"/shop"} className={isActive("/shop")}>
                    Shop
                </Link>

                <Link onClick={() => setOpen(false)} to={"/about"} className={isActive("/about")}>
                    About
                </Link>

                <Link onClick={() => setOpen(false)} to={"/contact"} className={isActive("/contact")}>
                    Contact
                </Link>
                <button
                  onClick={() => navigate("/admin")}
                  className="bg-primary text-white px-4 py-2 cursor-pointer rounded-full"
                >
                  Admin Dashboard
                </button>

                {/* MOBILE CLICK TO OPEN PROFILE MENU */}
                {
                    user ? (
                        <div className="relative">
                            <img
                                src={assets.profile_pic}
                                alt=""
                                onClick={() => setProfileOpen(!profileOpen)}
                                className="w-10 h-10 rounded-full cursor-pointer"
                            />

                            {profileOpen && (
                                <div className="absolute right-0 top-full mt-2 w-40 bg-secondary text-white shadow-lg rounded-lg z-50">
                                    <ul>
                                        <li
                                            onClick={() => { setProfileOpen(false); navigate("/my-order"); }}
                                            className="cursor-pointer hover:bg-primary py-1 px-3">
                                            My Orders
                                        </li>
                                        <li
                                            onClick={() => { setProfileOpen(false); logout(); }}
                                            className="cursor-pointer hover:bg-primary py-1 px-3">
                                            Logout
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    ) : (
                        <button
                            onClick={() => navigate("/login")}
                            className="cursor-pointer px-8 py-2 bg-primary hover:bg-secondary transition text-white rounded-full">
                            Login
                        </button>
                    )
                }
            </div>

        </nav>
    )
}

export default Navbar;
