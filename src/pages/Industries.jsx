

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../components/PrimaryBtn";
import { caseStudies } from "../data/caseStudies";
import { Link } from "react-router-dom";


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

export default function Industries() {
    return (

        <>
            <section className="relative w-full overflow-hidden bg-(--secondary-color) bg-[url('/assets/element-4.png')] bg-cover bg-center bg-no-repeat px-6 py-24 text-white lg:px-16">
                <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center text-center">
                    <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
                        Case Studies
                    </h1>

                    <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">
                        Learn how world’s leading businesses work with Ping to power instant impactful and global payouts.
                    </p>
                </div>
            </section>

            <section className="w-full overflow-hidden px-6 py-12">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-12 grid items-start gap-6 lg:grid-cols-2 lg:gap-20">
                        <h2 className="primary-heading">
                            Industries We Serve
                        </h2>
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

            {caseStudies.map((item) => (
                <div key={item.slug} className="max-w-360 mx-auto py-12 px-4">
                    <div className="grid lg:grid-cols-2 items-center gap-6">
                        <div>
                            <h2 className="primary-heading mb-3">{item.title}</h2>

                            <p className="text-lg leading-8 font-medium mb-8">
                                {item.excerpt}
                            </p>

                            <Link to={`/case-studies/${item.slug}`}>
                                <Button text="Read Case Study" />
                            </Link>
                        </div>

                        <div className="flex items-end justify-end">
                            <img src={item.image} alt={item.title} />
                        </div>
                    </div>
                </div>
            ))}

            <div className="max-w-360 mx-auto py-12 px-4">
                <div className="grid lg:grid-cols-2 items-center gap-6">

                    {/* Content */}
                    <div>

                        <h2 className="primary-heading mb-3">
                            Swift Gas <br /> Stations
                        </h2>

                        <p className="text-lg leading-8 font-medium mb-8">
                            Boosting Business through Diversification. In this case study, we explore how the connivence store brand to connivence store chain.
                        </p>

                        <Button text="Get Started Now" />
                    </div>

                    {/* Image */}
                    <div className="flex items-end justify-end">
                        <img
                            src="/assets/indus-1.png"
                            alt="Ping Prepay Dashboard"
                            className=""
                        />
                    </div>
                </div>
            </div>

            <div className="max-w-360 mx-auto py-12 px-4">
                <div className="grid lg:grid-cols-2 items-center gap-6">

                    {/* Content */}
                    <div>

                        <h2 className="primary-heading mb-3">
                            AAA Wireless <br /> Store
                        </h2>

                        <p className="text-lg leading-8 font-medium mb-8">
                            Boosting Business through Diversification. How AAA Wireless Store's Mobile Top-Up and Activation Services Boosted Revenue.
                        </p>

                        <Button text="Get Started Now" />
                    </div>

                    {/* Image */}
                    <div className="flex items-end justify-end">
                        <img
                            src="/assets/indus-2.png"
                            alt="Ping Prepay Dashboard"
                            className=""
                        />
                    </div>
                </div>
            </div>

            <div className="max-w-360 mx-auto py-12 px-4">
                <div className="grid lg:grid-cols-2 items-center gap-6">

                    {/* Content */}
                    <div>

                        <h2 className="primary-heading mb-3">
                            The Vape <br /> Store
                        </h2>

                        <p className="text-lg leading-8 font-medium mb-8">
                            Leveraging Mobile Top-Ups, Bill Payments, and Activations to Drive Sales and Cross-Selling Opportunities.
                        </p>

                        <Button text="Get Started Now" />
                    </div>

                    {/* Image */}
                    <div className="flex items-end justify-end">
                        <img
                            src="/assets/indus-3.png"
                            alt="Ping Prepay Dashboard"
                            className=""
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
