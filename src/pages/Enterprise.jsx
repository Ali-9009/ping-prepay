import Button from "../components/PrimaryBtn";

import {
    ArrowUp,
    BarChart3,
    CheckCircle,
    SlidersHorizontal,
    Clock3,
    FileText,
} from "lucide-react";

const logos = [
    {
        name: "Cricket",
        src: "/assets/cricket.png",
    },
    {
        name: "AT&T Prepaid",
        src: "/assets/at&t.png",
    },
    {
        name: "Progressive Leasing",
        src: "/assets/surge.png",
    },
    {
        name: "Acima",
        src: "/assets/acima.png",
    },
    {
        name: "Fiserv",
        src: "/assets/fis.png",
    },
];

const solutions = [
    {
        title: "Direct-to-Consumer (D2C)",
        image: "/assets/enterprise-1.webp",
        description:
            "Launch and manage high-performing mobile brands with fully customizable user journeys, seamless activation flows, and modern account management tools.",
    },
    {
        title: "Wholesale (B2B)",
        image: "/assets/enterprise-3.webp",
        description:
            "Grow your distribution network with a wholesale infrastructure designed for scale. Offer resellers and partners a branded portal with self-service tools.",
    },
    {
        title: "Retail",
        image: "/assets/enterprise-2.webp",
        description:
            "Support your in-store strategy with a retail-ready platform that syncs locations, enables real-time activations, and provides integrated POS tools.",
    },
];

const features = [
    {
        icon: ArrowUp,
        title: "Accelerate Time To Market",
        description:
            "Bring your MVNO to life in days, not months with direct TSP access and pre-built integrations.",
    },
    {
        icon: BarChart3,
        title: "Boost Revenue Across Channels",
        description:
            "Reach more customers with a platform designed to support direct, wholesale, and retail channels.",
    },
    {
        icon: CheckCircle,
        title: "Maximize Network Performance",
        description:
            "Enjoy reliable, high-volume performance with 99.99% uptime and real-time monitoring.",
    },
    {
        icon: SlidersHorizontal,
        title: "Built For Customization",
        description:
            "Use APIs and white-label tools to create a unique customer experience and brand.",
    },
    {
        icon: Clock3,
        title: "Lower Operational Costs",
        description:
            "Reduce overhead with a centralized platform that eliminates multiple vendors and tools.",
    },
    {
        icon: FileText,
        title: "Empower Your Tech Team",
        description:
            "Let your developers focus on innovation while we handle the infrastructure.",
    },
];

const highlights = [
    {
        value: "Over $200 Million",
        title: "In prepaid services processed",
        description:
            "Ping PrePay has facilitated over $200 million in prepaid transactions, helping MVNOs and retailers scale with reliable, enterprise-grade infrastructure.",
    },
    {
        value: "Hundreds of MVNOs and Retailers",
        title: "Across the United States",
        description:
            "From emerging mobile brands to established telecom retailers, businesses across the United States trust Ping PrePay to power their operations.",
    },
    {
        value: "A Team Built for Telecom Innovation",
        title: "With decades of industry expertise",
        description:
            "Our team of engineers, telecom experts, and product specialists are dedicated to one mission — simplifying prepaid wireless through powerful, modern tools built for growth.",
    },
];

export default function Enterprise() {
    const doubledLogos = [...logos, ...logos];
    return (
        <>
            <div className="py-20 px-6 bg-(--secondary-color)">
                <div className="max-w-360 mx-auto">
                    <p className="text-(--logo-color) font-semibold tracking-wider text-sm mb-4 uppercase">PINGPREPAY FOR ENTERPRISE</p>
                    <h1 className="primary-heading max-w-4xl text-white! mb-4 leading-tight!">
                        Empowering MVNOs to scale faster with reliable infrastructure and a competitive edge
                    </h1>
                    <p className="text-lg leading-8 font-medium mb-4 text-white">
                        Unlock unprecedented growth on the platform that keeps enterprises ahead.
                    </p>
                    <a
                        href="https://calendly.com/pingdemo/ping-mvno-info?month=2026-06"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-(--logo-color) text-[#00292a] px-8 py-2 rounded-full font-semibold text-md hover:bg-white duration-300 shadow-lg"
                    >
                        Get In Touch
                    </a>
                </div>
                <div className="flex-1 w-full overflow-hidden md:mt-18 mt-8">
                    <div className="flex items-center gap-16 animate-marquee">
                        {doubledLogos.map((logo, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center shrink-0 h-12 w-40 grayscale hover:grayscale-0 transition-all duration-300"
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.name}
                                    loading="lazy"
                                    className="max-h-10 w-auto object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <section className="max-w-360 mx-auto md:px-0 px-6 py-12">

                <div className="max-w-4xl mb-16 text-(--secondary-color)">
                    <span className="text-sm font-semibold tracking-[0.2em] uppercase">
                        Solutions
                    </span>

                    <h2 className="mt-3 primary-heading text-(--secondary-color)! leading-tight">
                        One Platform to Power Every MVNO Channel
                    </h2>

                    <p className="mt-3 text-lg leading-8 font-medium ">
                        Run your direct-to-consumer, wholesale, and retail operations from
                        a single, unified platform built for customization, scalability,
                        and revenue growth.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {solutions.map((item) => (
                        <div
                            key={item.title}
                            className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="p-8">
                                <h3 className="text-3xl font-medium text-(--secondary-color) mb-4">
                                    {item.title}
                                </h3>

                                <p className="text-(--secondary-color)/70 leading-7">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="pt-12 pb-28 bg-(--secondary-color)">
                <div className="max-w-360 mx-auto md:px-0 px-6">

                    <div className="max-w-4xl mb-16">
                        <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-(--logo-color) mb-4">
                            Why MVNOs Choose Ping PrePay
                        </span>

                        <h2 className="mb-3 primary-heading text-white! leading-tight">
                            The platform built to future-proof your mobile brand
                        </h2>

                        <p className="mt-3 text-lg text-white leading-8 font-medium">
                            Ping PrePay is the enterprise platform built for modern MVNOs.
                            Engineered for speed, scale, and adaptability, we give you the
                            infrastructure to grow today and the flexibility to evolve tomorrow.
                            From carrier integration to customer onboarding, every piece is
                            optimized to help you move faster, reduce costs, and outperform the
                            competition.
                        </p>
                    </div>

                    {/* Features */}
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature) => {
                            const Icon = feature.icon;

                            return (
                                <div
                                    key={feature.title}
                                    className="group rounded-3xl border border-white/10 p-8 transition-all duration-300 hover:border-(--logo-color)/30 hover:bg-white/5"
                                >
                                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-(--logo-color)">
                                        <Icon size={26} className="text-[#00292a]" />
                                    </div>

                                    <h3 className="mb-4 text-xl font-semibold text-white">
                                        {feature.title}
                                    </h3>

                                    <p className="text-gray-300 leading-7">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="pb-24 -mt-20">
                <div className="max-w-360 mx-auto md:px-0 px-6">
                    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                        {highlights.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-3xl bg-(--logo-color) p-8 lg:p-10 text-(--secondary-color) flex flex-col h-full"
                            >
                                <h3 className="text-4xl font-medium leading-tight mb-4">
                                    {item.value}
                                </h3>

                                <h4 className="text-xl font-medium mb-5">
                                    {item.title}
                                </h4>

                                <p className="text-md leading-7">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12">
                <div className="max-w-360 mx-auto md:px-0 px-6">

                    <div className="max-w-4xl mb-16">
                        <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[#00292a]">
                            Cost-Effective Operations
                        </span>

                        <h2 className="mt-4 primary-heading">
                            Where Flexibility Meets Telecom-Grade Performance
                        </h2>

                        <p className="mt-3 text-lg leading-8 font-medium">
                            No matter how you structure your MVNO, Ping PrePay provides a powerful
                            and reliable platform built to support innovation, scale, and speed.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">

                        <div className="overflow-hidden rounded-3xl">
                            <img
                                src="/assets/enterprise-4.png"
                                alt="Infrastructure Flexibility"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="space-y-8">
                            <div className="">
                                <h3 className="text-2xl font-semibold text-(--secondary-color) mb-3">
                                    Infrastructure Flexibility
                                </h3>

                                <p className="text-(--secondary-color) text-lg">
                                    Design your MVNO stack your way. Choose from a full-service
                                    white-label solution, go fully API-driven, or pick only the modules
                                    you need to complement your existing setup.
                                </p>
                            </div>

                            <div className="">
                                <h3 className="text-2xl font-semibold text-(--secondary-color) mb-3">
                                    Modular By Design
                                </h3>

                                <p className="text-(--secondary-color) text-lg">
                                    Seamlessly integrate Ping PrePay's native tools with your custom
                                    workflows or third-party systems. Our platform is built for
                                    interoperability, giving you full control without complexity.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-(--secondary-color) py-20">
                <div className="max-w-360 mx-auto md:px-0 px-6">
                    <div className="space-y-16">
                        {/* Stat 1 */}
                        <div className="border-l-4 border-(--logo-color) pl-8">
                            <h3 className="text-4xl font-medium text-white mb-3">
                                Over $200 Million
                            </h3>

                            <p className="text-(--logo-color) font-semibold text-lg mb-1">
                                In prepaid wireless transactions processed through the Ping PrePay
                                platform since inception
                            </p>

                            <p className="text-white/90 font-light leading-8">
                                Our infrastructure supports seamless activations, top-ups, and plan
                                management across all major carriers.
                            </p>
                        </div>

                        {/* Stat 2 */}
                        <div className="border-l-4 border-(--logo-color) pl-8">
                            <h3 className="text-4xl font-medium text-white mb-3">
                                Over 1 Million End Users Served
                            </h3>

                            <p className="text-(--logo-color) font-semibold text-lg mb-1">
                                Through MVNOs and retailers powered by Ping PrePay in 2024
                            </p>

                            <p className="text-white/90 font-light leading-8">
                                From niche carriers to nationwide brands, Ping PrePay helps MVNOs
                                deliver exceptional service to millions of mobile subscribers.
                            </p>
                        </div>

                        {/* Stat 3 */}
                        <div className="border-l-4 border-(--logo-color) pl-8">
                            <h3 className="text-4xl font-medium text-white mb-3">
                                Powering a Growing Share of US Prepaid Wireless
                            </h3>

                            <p className="text-(--logo-color) font-semibold text-lg mb-1">
                                Our partners represent a fast-growing portion of the prepaid market
                            </p>

                            <p className="text-white/90 font-light leading-8">
                                Ping PrePay is trusted by the new wave of telecom innovators driving
                                growth in the U.S. prepaid ecosystem.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="">
                <div className="max-w-360 mx-auto py-12 md:px-0 px-6">
                    <div className="grid lg:grid-cols-2 gap-6 lg:gap-24 items-start">

                        <div>
                            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[#00292a]">
                                Partner Ecosystem
                            </span>

                            <h2 className="mt-4 primary-heading">
                                Established partnerships with leaders in telecom and technology
                            </h2>

                            <p className="mt-6 text-lg leading-8 text-[#00292a]/80">
                                We collaborate with industry-leading partners who support MVNOs and
                                retailers through every stage of implementation, launch, and growth.
                            </p>
                        </div>

                        {/* Right */}
                        <div className="space-y-2">
                            <div className="pb-2 border-b border-[#00292a]/15">
                                <h3 className="text-2xl font-medium text-(--secondary-color) mb-2">
                                    Service Partners
                                </h3>

                                <p className="text-[#00292a]/80 leading-8">
                                    Accelerate time to market with support from top telecom
                                    consultants, wireless system integrators, and deployment experts
                                    specializing in prepaid wireless solutions.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-medium text-(--secondary-color) mb-2">
                                    Technology Partners
                                </h3>

                                <p className="text-[#00292a]/80 leading-8">
                                    Integrate Ping PrePay seamlessly with your existing systems. Our
                                    ecosystem includes trusted technology providers, carrier partners,
                                    and tools that expand what your MVNO can do.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className="bg-(--secondary-color) py-20 px-6 text-center md:mb-20 mb-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-semibold text-white mb-4">
                        Powering enterprise businesses
                    </h2>
                    <p className="text-md text-gray-300 mb-3">
                        Speak with our enterprise team on how to bring Ping PrePay into your tech stack.
                    </p>
                    <Button text="Get in Touch" to="/contact" />
                </div>
            </div>


        </>
    )
}
