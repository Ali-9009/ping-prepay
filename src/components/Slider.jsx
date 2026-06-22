import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const services = [
    { img: "/assets/s-1.png" },
    { img: "/assets/s-2.png" },
    { img: "/assets/s-3.png" },
    { img: "/assets/s-4.png" },
    { img: "/assets/s-5.png" },
    { img: "/assets/s-6.png" },
    { img: "/assets/s-7.png" },
    { img: "/assets/s-8.png" },
    { img: "/assets/s-9.png" },
];

const Slider = () => {
    return (
        <section className="w-full overflow-hidden px-6 py-12">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 grid items-start gap-6 lg:grid-cols-2 lg:gap-20">
                    <h2 className="primary-heading">
                        Multiple Services. One Solution
                    </h2>

                    <p className="text-lg leading-8 text-black font-medium mb-8">
                        We support growth for various resellers in diverse industries by
                        helping them attract the under banked consumer through our innovative
                        Ping platform.
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
                                    <div className="h-70 overflow-hidden rounded-3xl shadow-lg md:h-105">
                                        <img
                                            src={service.img}
                                            alt={service.title}
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
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
    );
};

export default Slider;