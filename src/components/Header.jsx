import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
    Menu,
    X,
    ChevronDown,
    Rocket,
    ShoppingCart,
    TrendingUp,
    LayoutDashboard,
} from "lucide-react";

const Navbar = () => {
    const [isSolutionsHovered, setIsSolutionsHovered] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);

    const signupLink = "https://pos.pingprepay.com/register";
    const loginLink = "https://pos.pingprepay.com/login";
    const targetLink = signupLink;

    const solutionColumns = [
        {
            icon: Rocket,
            title: "Start",
            links: [
                { t: "Start your business", d: "Build your brand" },
                { t: "Get Approved", d: "ATT & Cricket" },
                { t: "Register", d: "Build your brand" },
            ],
        },
        {
            icon: ShoppingCart,
            title: "Sell",
            links: [
                { t: "Activation Portal", d: "Build your brand" },
                { t: "POS", d: "Build your brand" },
                { t: "Start your business", d: "Build your brand" },
            ],
        },
        {
            icon: TrendingUp,
            title: "Scale",
            links: [
                { t: "Market your business", d: "Reach & retain customers" },
                { t: "Market across social", d: "Social media integrations" },
                { t: "AI Marketing", d: "Ping Email" },
            ],
        },
        {
            icon: LayoutDashboard,
            title: "Manage",
            links: [
                { t: "Dashboard", d: "Reach & retain customers" },
                { t: "Inventory Management", d: "Track, Optimize" },
                { t: "Measure performance", d: "Analytics" },
            ],
        },
    ];

    const navLinks = [
        { label: "Industries", to: "/case-studies" },
        { label: "Features", to: "/feature" },
        { label: "Pricing", to: "/pricing" },
        { label: "Enterprise", to: "/enterprise" },
        { label: "About Us", to: "/about-us" },
        { label: "Contact Us", to: "/contact" },
    ];

    const handleMouseEnter = () => {
        if (timeoutId) clearTimeout(timeoutId);
        setIsSolutionsHovered(true);
    };

    const handleMouseLeave = () => {
        const id = setTimeout(() => setIsSolutionsHovered(false), 200);
        setTimeoutId(id);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setIsSolutionsOpen(false);
    };

    const RenderColumn = ({ icon: Icon, title, links }) => (
        <div>
            <div className="flex items-center gap-3 text-white font-bold text-[20px] mb-5">
                <div className="w-10 h-10 rounded-xl bg-(--logo-color)/15 text-(--logo-color) flex items-center justify-center">
                    <Icon size={22} />
                </div>
                <span>{title}</span>
            </div>

            <div className="space-y-5 border-t border-white/20 pt-5">
                {links.map((link, idx) => (
                    <a key={idx} href={targetLink} className="block group">
                        <h4 className="text-white text-[15px] font-bold group-hover:text-(--logo-color) transition">
                            {link.t}
                        </h4>
                        {link.d && (
                            <p className="text-[13px] text-gray-400 mt-0.5">{link.d}</p>
                        )}
                    </a>
                ))}
            </div>
        </div>
    );

    return (
        <div className="w-full bg-(--secondary-color) relative z-50">
            <nav className="w-full max-w-390 mx-auto px-6 py-5 flex items-center justify-between">
                {/* Logo */}
                <div className="shrink-0">
                    <Link to="/">
                        <img
                            src="/assets/logo.png"
                            alt="Ping PrePay Logo"
                            className="h-8 lg:h-11 w-auto"
                        />
                    </Link>
                </div>

                {/* Desktop Center Nav */}
                <div className="hidden lg:flex flex-1 justify-center items-center gap-7 text-[15px] font-bold text-white">
                    <div
                        className="relative py-2"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <a
                            href="#solutions"
                            className={`hover:text-(--logo-color) transition flex items-center gap-1 ${isSolutionsHovered ? "text-(--secondary-color)" : "text-white"
                                }`}
                        >
                            Solutions
                            <ChevronDown
                                size={16}
                                className={`transition-transform ${isSolutionsHovered ? "rotate-180" : ""
                                    }`}
                            />
                        </a>

                        <div
                            className={`fixed left-0 right-0 top-21 w-screen bg-(--primary-color) border-b border-white/10 shadow-[0_50px_90px_-20px_rgba(0,0,0,0.85)] transition-all duration-300 origin-top transform pt-8 ${isSolutionsHovered
                                ? "opacity-100 scale-y-100 pointer-events-auto"
                                : "opacity-0 scale-y-95 pointer-events-none"
                                }`}
                        >
                            <div className="max-w-7xl mx-auto px-16 pb-14 grid grid-cols-4 gap-14 text-left">
                                {solutionColumns.map((column) => (
                                    <RenderColumn key={column.title} {...column} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            to={link.to}
                            className="hover:text-(--logo-color) transition"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Desktop Buttons */}
                <div className="hidden lg:flex items-center gap-4 shrink-0 text-[15px] font-bold">
                    <a href={loginLink} className="text-white hover:text-(--logo-color) transition">
                        Log In
                    </a>
                    <a
                        href={signupLink}
                        className="bg-white text-(--secondary-color) px-6 py-2.5 rounded-full hover:bg-gray-200 transition font-bold"
                    >
                        Sign Up For Free
                    </a>
                </div>

                {/* Mobile Button */}
                <button
                    type="button"
                    className="lg:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(true)}
                >
                    <Menu size={32} />
                </button>
            </nav>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.25 }}
                        className="fixed inset-0 bg-(--secondary-color) z-99 p-6 overflow-y-auto"
                    >
                        <div className="flex justify-between items-center mb-8">
                            <img
                                src="/assets/logo.png"
                                alt="Ping PrePay Logo"
                                className="h-8 w-auto"
                            />

                            <button onClick={closeMobileMenu} className="text-white">
                                <X size={32} />
                            </button>
                        </div>

                        <div className="flex flex-col gap-6 text-white text-lg font-bold">
                            <button
                                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                                className="flex justify-between items-center text-left"
                            >
                                Solutions
                                <ChevronDown
                                    size={20}
                                    className={`transition-transform ${isSolutionsOpen ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {isSolutionsOpen && (
                                <div className="bg-[#003536] p-4 rounded-xl space-y-8">
                                    {solutionColumns.map((column) => (
                                        <RenderColumn key={column.title} {...column} />
                                    ))}
                                </div>
                            )}

                            {navLinks.map((link) => (
                                <Link key={link.label} to={link.to} onClick={closeMobileMenu}>
                                    {link.label}
                                </Link>
                            ))}

                            <div className="pt-6 border-t border-white/20 flex flex-col gap-4">
                                <a href={loginLink}>Log In</a>

                                <a
                                    href={signupLink}
                                    className="bg-white text-(--secondary-color) py-3 rounded-full text-center"
                                >
                                    Sign Up For Free
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;