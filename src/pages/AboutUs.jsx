import Button from "../components/PrimaryBtn";
import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
    GraduationCap,
    HeartHandshake,
    Store,
    Heart,
    Settings,
    Lightbulb,
    MessageCircle,
    Diamond,
    Smile,
    TrendingUp,
    ChevronLeft, ChevronRight,
} from "lucide-react";

const services = [
    { img: "/assets/about-s-1.png" },
    { img: "/assets/about-s-2.png" },
    { img: "/assets/about-s-3.png" },
    { img: "/assets/about-s-4.png" },
    { img: "/assets/about-s-5.png" },
    { img: "/assets/about-s-6.png" },
    { img: "/assets/about-s-7.png" },
];

const services2 = [
    { img: "/assets/about-s-8.png" },
    { img: "/assets/about-s-9.png" },
    { img: "/assets/about-s-10.png" },
    { img: "/assets/about-s-11.png" },
    { img: "/assets/about-s-12.png" },
];

const principles = [
    {
        icon: GraduationCap,
        text: "We don't just sell, we educate.",
    },
    {
        icon: HeartHandshake,
        text: "We obsess over our clients, not our competitors.",
    },
    {
        icon: Store,
        text: "We are uncompromising about flawless retail experience.",
    },
    {
        icon: Heart,
        text: "We do not make recommendations we would not use ourselves.",
    },
    {
        icon: Settings,
        text: "We believe nothing is ever perfect, as it can always be improved.",
    },
    {
        icon: Lightbulb,
        text: "We value curiosity and the explorations of ideas.",
    },
    {
        icon: MessageCircle,
        text: "We speak the truth and deliver the raw facts.",
    },
    {
        icon: Diamond,
        text: "We give ourselves the autonomy to be awesome.",
    },
    {
        icon: Smile,
        text: "We believe in work/life balance, not work vs. life.",
    },
    {
        icon: TrendingUp,
        text: "We believe in the personal growth of our employees, suppliers, customers, and community.",
    },
];

export default function AboutUs() {
    return (
        <>
            <section className="relative w-full overflow-hidden bg-(--secondary-color) bg-[url('/assets/element.png')] bg-contain bg-bottom bg-no-repeat px-6 pt-24 text-white lg:px-16">
                <div className="relative z-10 mx-auto flex max-w-380 flex-col items-center justify-center text-center">
                    <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
                        Attract and Retain Prepaid Customers Instantly.
                    </h1>

                    <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">
                        We simplify the way retailers access and offer prepaid services, creating new revenue opportunities and fostering customer loyalty.
                    </p>

                    <Button text="Sign Up For Free" className="md:mb-14 my-6" />

                    <img src="/assets/about-1.png" alt="" />
                </div>
            </section>

            <section className="w-full overflow-hidden px-6 py-12">
                <div className="mx-auto max-w-360">
                    <div className="mb-12 grid items-center justify-center gap-6 lg:grid-cols-2 lg:gap-20">
                        <h2 className="primary-heading">
                            Our Mission: Enable brands and independent retailers to achieve more thru digital innovation.

                        </h2>

                        <p className="text-lg leading-8 text-black font-medium mb-8">
                            Ping Prepay is a leading Technology Service Provider (TSP) and FinTech company helping top brands like AT&T Prepaid and Cricket Wireless grow by serving prepaid and cash-preferred customers. Focused on empowering Independent Retailers through AI-driven, integrated solutions, we drive revenue and expand reach for our partners.
                        </p>
                    </div>

                    <div className="relative">
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            spaceBetween={24}
                            loop
                            autoplay={{
                                delay: 3500,
                                disableOnInteraction: false,
                            }}
                            navigation={{
                                prevEl: ".service-prev",
                                nextEl: ".service-next",
                            }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1.3,
                                    spaceBetween: 14,
                                },
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 18,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 22,
                                },
                                1280: {
                                    slidesPerView: 4,
                                    spaceBetween: 24,
                                },
                            }}
                            className="overflow-visible"
                        >
                            {services.map((service) => (
                                <SwiperSlide key={service.title}>
                                    <div className="group">
                                        <div className="overflow-hidden ">
                                            <img
                                                src={service.img}
                                                alt={service.title}
                                                className=""
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className="mt-10 flex justify-center gap-4">
                            <button
                                type="button"
                                className="service-prev flex h-12 w-12 items-center justify-center rounded-full border border-[#002626]/20 bg-white/60 text-[#002626] transition hover:bg-[#002626] hover:text-white"
                                aria-label="Previous slide"
                            >
                                <ChevronLeft size={22} />
                            </button>

                            <button
                                type="button"
                                className="service-next flex h-12 w-12 items-center justify-center rounded-full border border-[#002626]/20 bg-white/60 text-[#002626] transition hover:bg-[#002626] hover:text-white"
                                aria-label="Next slide"
                            >
                                <ChevronRight size={22} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-6 py-12 max-w-360 mx-auto">
                <h1 className="mb-12 primary-heading text-center">
                    <span className="text-(--logo-color)">10</span> Principles that run Ping
                </h1>

                <div className="grid gap-x-20 gap-y-8 md:grid-cols-4">
                    {principles.map(({ icon: Icon, text }, index) => (
                        <div
                            key={index}
                            className={`max-w-[270px] ${index >= 8 ? "md:col-start-auto" : ""
                                }`}
                        >
                            <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-md bg-white">
                                <Icon size={24} strokeWidth={2} />
                            </div>

                            <p className="text-md leading-tight font-medium">
                                {text}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <div className="max-w-360 mx-auto md:px-0 px-4">
                <div className="px-8 bg-[url('/assets/about-bg.png')] bg-cover bg-top-center bg-no-repeat rounded-2xl min-h-[480px] flex items-center md:px-12 lg:px-20">
                    <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-16 w-full">
                        <div className="max-w-xl">
                            <h2 className="primary-heading mb-5 text-white!">
                                We're in business to help you thrive
                            </h2>

                            <p className="text-md leading-8 mb-8 text-white/90">
                                Ping Prepay enables dealers to activate and refill plans with ease
                                through Ping's advanced technology solutions, providing streamlined
                                access to products and services that keep you equipped to serve
                                customers efficiently and maintain a competitive edge in the market.
                            </p>

                            <Button text="Get Started Now" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-360 mx-auto py-12 px-4">
                <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-16">

                    <div>
                        <h2 className="primary-heading mb-3">
                            Meet Our Your Team
                        </h2>

                        <p className="text-lg leading-8 font-medium mb-8">
                            Our dedicated team embodies a commitment to excellence, innovation, and collaboration. With diverse talents and a shared passion for delivering exceptional service, we work tirelessly to empower businesses and enhance customer experiences.
                        </p>
                    </div>

                    <div className="relative">
                        <img
                            src="/assets/about.png"
                            alt="Ping Prepay Dashboard"
                            className=""
                        />
                    </div>
                </div>
            </div>

            <section className="w-full overflow-hidden px-6 py-12">
                <div className="mx-auto max-w-360">
                    <h2 className="primary-heading text-center mb-8 max-w-5xl mx-auto">
                        Ping blends convenience with innovation to fuel your growth.
                    </h2>

                    <div className="relative">
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            spaceBetween={24}
                            loop
                            autoplay={{
                                delay: 3500,
                                disableOnInteraction: false,
                            }}
                            navigation={{
                                prevEl: ".service-prev",
                                nextEl: ".service-next",
                            }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1.3,
                                    spaceBetween: 14,
                                },
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 18,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 22,
                                },
                                1280: {
                                    slidesPerView: 4,
                                    spaceBetween: 24,
                                },
                            }}
                            className="overflow-visible"
                        >
                            {services2.map((service) => (
                                <SwiperSlide key={service.title}>
                                    <div className="group">
                                        <div className="overflow-hidden ">
                                            <img
                                                src={service.img}
                                                alt={service.title}
                                                className=""
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className="mt-10 flex justify-center gap-4">
                            <button
                                type="button"
                                className="service-prev flex h-12 w-12 items-center justify-center rounded-full border border-[#002626]/20 bg-white/60 text-[#002626] transition hover:bg-[#002626] hover:text-white"
                                aria-label="Previous slide"
                            >
                                <ChevronLeft size={22} />
                            </button>

                            <button
                                type="button"
                                className="service-next flex h-12 w-12 items-center justify-center rounded-full border border-[#002626]/20 bg-white/60 text-[#002626] transition hover:bg-[#002626] hover:text-white"
                                aria-label="Next slide"
                            >
                                <ChevronRight size={22} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
