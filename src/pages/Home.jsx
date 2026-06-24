import { CheckCircle, ChevronLeft, ChevronRight, Gift, Megaphone, Package, Rocket, ShieldCheck, Smartphone, Users, Wrench } from "lucide-react";
import Button from "../components/PrimaryBtn";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import Support from "../components/Support";
import Brands from "../components/Brands";


const platformFeatures = [
    { icon: Smartphone, label: "Mobile Top Up" },
    { icon: Rocket, label: "Activations" },
    { icon: Megaphone, label: "AI Marketing" },
    { icon: Package, label: "Inventory Management" },
    { icon: Wrench, label: "Repair & Service" },
    { icon: Users, label: "CRM" },
    { icon: Gift, label: "Gift Cards" },
    { icon: ShieldCheck, label: "Device Insurance" },
];

const cards = [
    {
        title: "Seamless Reconciliation & Financial Transparency",
        description:
            "Our system streamlines the reconciliation of your books and provides comprehensive financial visibility, ensuring accurate and timely commission payments.",
        image: "/assets/home-2.png",
        imageAlt: "Reconciliation",
        overlays: [
            {
                src: "/assets/home-b.png",
                alt: "Total Refills",
                className: "top-[12%] left-[10%] w-[35%]  animate-fl",
            },
            {
                src: "/assets/home-c.png",
                alt: "Commission",
                className: "top-[45%] left-[10%] w-[35%]",
            },
        ],
    },
    {
        title: "Operational Efficiencies: Streamlining Processes.",
        description:
            "Ping Pre Pay offers a seamless and intuitive onboarding process, making it incredibly user-friendly and ensuring employees can get up to speed with minimal or no training required.",
        image: "/assets/home-3.png",
        imageAlt: "Operational efficiency",
        overlays: [
            {
                src: "/assets/home-a.png",
                alt: "Stats Chart",
                className: "top-[15%] left-[10%] w-[80%] animate-grow",
            },
        ],
    },
];

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

const steps = [
    {
        image: "/assets/s-01.png",
    },
    {
        image: "/assets/s-02.png",
    },
    {
        image: "/assets/s-03.png",
    },
    {
        image: "/assets/s-04.png",
    },
];

function Home() {

    return (
        <>
            <section className="relative overflow-hidden bg-(--secondary-color)">
                {/* Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/assets/globe-video.mp4" type="video/mp4" />
                </video>

                {/* Content */}
                <div className="relative z-10 container mx-auto px-4 pt-16">

                    {/* Heading */}
                    <div className="text-center text-white max-w-5xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-bold">
                            Attract and Retain Prepaid Customers Instantly.
                        </h2>

                        <p className="mt-4 text-lg text-gray-200">
                            We simplify the way retailers access and offer prepaid
                            services, creating new revenue opportunities and fostering
                            customer loyalty.
                        </p>
                    </div>

                    {/* Floating Images Section */}
                    <div className="relative h-90 md:h-107 lg:h-160 bg-[url('/assets/element.png')] bg-cover bg-center bg-no-repeat">

                        {/* Left Card */}
                        <img
                            src="/assets/b-1.png"
                            alt=""
                            className="absolute left-0 top-28 md:top-24 scale-[0.45] md:scale-75 lg:scale-100 origin-top-left animate-fl"
                        />

                        {/* Center Card */}
                        <img
                            src="/assets/b-2.png"
                            alt=""
                            className="absolute left-1/2 top-36 md:top-32 -translate-x-1/2 scale-[0.45] md:scale-75 lg:scale-100 origin-top"
                        />

                        {/* Right Card */}
                        <div className="absolute right-0 top-28 md:top-24 animate-grow">
                            <img
                                src="/assets/b-3.png"
                                alt=""
                                className="scale-[0.45] md:scale-75 lg:scale-100 origin-top-right"
                            />
                        </div>

                        {/* Bottom Right */}
                        <img
                            src="/assets/b-5.png"
                            alt=""
                            className="absolute right-[18%] bottom-14 md:right-[25%] md:bottom-10 scale-[0.45] md:scale-75 lg:scale-100 animate-fl"
                        />

                        {/* Bottom Left */}
                        <img
                            src="/assets/b-4.png"
                            alt=""
                            className="absolute left-[12%] bottom-14 md:left-[20%] md:bottom-10 scale-[0.45] md:scale-75 lg:scale-100"
                        />
                    </div>
                </div>
            </section>

            <Brands />

            <div className="max-w-360 mx-auto py-12 px-4">
                <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-16">

                    {/* Content */}
                    <div>

                        <h2 className="primary-heading mb-3">
                            Prepaid Retail Shouldn't Be This Hard
                        </h2>

                        <p className="text-lg leading-8 font-medium mb-8">
                            Say goodbye to the headaches of retail prepaid management. Ping
                            Prepay eliminates siloed distribution, redundant applications,
                            multiple POS systems, and fragmented data. Our unified platform
                            streamlines operations so you can focus on growth, improve efficiency,
                            and maximize sales.
                        </p>

                        <Button text="Get Started Now" />
                    </div>

                    {/* Image */}
                    <div className="relative">
                        <img
                            src="/assets/dashboard-1.jpg"
                            alt="Ping Prepay Dashboard"
                            className=""
                        />
                    </div>
                </div>
            </div>

            <section className="px-3 py-3">
                <div className="bg-(--secondary-color) max-w-360 mx-auto pt-20 px-6 overflow-hidden rounded-3xl">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left Content */}
                        <div>
                            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#00A896] mb-4">
                                Unified Retail Platform
                            </span>

                            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
                                Everything Prepaid in a Single Platform
                            </h2>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {platformFeatures.map((feature, index) => {
                                    const Icon = feature.icon;

                                    return (
                                        <div
                                            key={index}
                                            className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-[#00A896]/40"
                                        >
                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#00A896]/10 text-[#00A896] transition-all duration-300 group-hover:bg-[#00A896] group-hover:text-white">
                                                <Icon size={22} strokeWidth={2} />
                                            </div>

                                            <span className="text-white font-medium">
                                                {feature.label}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="flex justify-center lg:justify-end">
                            <img
                                src="/assets/home-1.png"
                                alt="Ping Prepay Platform"
                                className=""
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full overflow-hidden px-6 py-12 ">
                <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 lg:grid-cols-2">
                    {cards.map((card, index) => (
                        <div key={index} className="flex flex-col">
                            <h3 className="mb-5 text-3xl font-bold leading-tight text-[#002626] md:text-4xl">
                                {card.title}
                            </h3>

                            <p className="mb-8 text-lg leading-8 text-black font-medium">
                                {card.description}
                            </p>

                            <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl shadow-2xl">
                                <img
                                    src={card.image}
                                    alt={card.imageAlt}
                                    className="h-full w-full object-cover"
                                />

                                {card.overlays.map((overlay, overlayIndex) => (
                                    <img
                                        key={overlayIndex}
                                        src={overlay.src}
                                        alt={overlay.alt}
                                        className={`absolute drop-shadow-2xl ${overlay.className}`}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

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

            <section className="w-full overflow-hidden px-6 py-12">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-14 grid gap-6 lg:grid-cols-2 lg:items-start">
                        <h2 className="primary-heading">
                            Enroll and Start Transacting Within Minutes
                        </h2>

                        <p className="text-lg leading-8 font-medium lg:pt-8">
                            Signing up is a breeze with our user-friendly interface, ensuring
                            swift onboarding for businesses and quick access to comprehensive
                            solutions.
                        </p>
                    </div>

                    <div className="relative">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            loop
                            spaceBetween={32}
                            autoplay={{
                                delay: 3500,
                                disableOnInteraction: false,
                            }}
                            navigation={{
                                prevEl: ".enroll-prev",
                                nextEl: ".enroll-next",
                            }}
                            pagination={{
                                clickable: true,
                                el: ".enroll-pagination",
                            }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 2,
                                    spaceBetween: 32,
                                },
                            }}
                            className="overflow-hidden"
                        >
                            {steps.map((step, index) => (
                                <SwiperSlide key={step.image + index}>
                                    <img
                                        src={step.image}
                                        alt="Enrollment Step"
                                        className="w-full object-cover"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <button
                            type="button"
                            className="enroll-prev absolute -left-5 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#002626] shadow-lg transition hover:bg-[#002626] hover:text-white lg:flex"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft size={22} />
                        </button>

                        <button
                            type="button"
                            className="enroll-next absolute -right-5 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#002626] shadow-lg transition hover:bg-[#002626] hover:text-white lg:flex"
                            aria-label="Next slide"
                        >
                            <ChevronRight size={22} />
                        </button>

                        <div className="enroll-pagination mt-8 flex justify-center gap-2" />
                    </div>
                </div>
            </section>

            <Support />

        </>
    );
}

export default Home;