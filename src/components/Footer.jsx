import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const footerLinks = [
    {
        title: "Case Studies",
        links: [
            { label: "Aawireless", to: "/aawireless" },
            { label: "Product Features", to: "/features" },
            { label: "Swift", to: "/swift" },
        ],
    },
    {
        title: "Company",
        links: [
            { label: "About Us", to: "/about" },
            { label: "DMCA", to: "/dmca" },
            { label: "Case Studies", to: "/case-studies" },
            { label: "Become a Dealer", to: "/become-a-dealer" },
        ],
    },
    {
        title: "Resources",
        links: [
            { label: "Contact Us", to: "/contact" },
            { label: "Refund Policy", to: "/refund-policy" },
        ],
    },
    {
        title: "Legal",
        links: [
            { label: "Terms & Conditions", to: "/terms-conditions" },
            { label: "Privacy Policy", to: "/privacy-policy" },
            { label: "Regulatory", to: "/regulatory" },
        ],
    },
];
const Footer = () => {
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const data = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: data,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                setStatus("Thank you for subscribing!");
                form.reset();
            } else {
                setStatus("Oops! There was an error.");
            }
        } catch {
            setStatus("Oops! There was an error.");
        }
    };

    return (
        <div className="px-3 py-3">
            <footer className="relative max-w-390 bg-[url('/assets/element-2.png')] bg-cover bg-center bg-no-repeat mx-auto rounded-3xl bg-(--secondary-color) px-6 py-12 text-white md:px-10 lg:px-14">

                <div className="relative z-10">
                    <div className="mx-auto mb-12 max-w-3xl text-center">
                        <h2 className="mb-6 text-3xl font-bold leading-tight md:text-5xl">
                            Instantly Access Ping for Free
                        </h2>

                        <a
                            href="https://pos.pingprepay.com/register"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-[#002626] transition hover:bg-[#dbeae6]"
                        >
                            Sign Up For Free
                            <ArrowRight size={18} />
                        </a>
                    </div>

                    <div className="mb-10 h-px bg-white/10" />

                    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_1.4fr]">
                        {footerLinks.map((section) => (
                            <div key={section.title}>
                                <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
                                    {section.title}
                                </h4>

                                <ul className="space-y-3">
                                    {section.links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                to={link.to}
                                                className="text-sm text-white/65 transition hover:text-white"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        <div>
                            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
                                Subscribe for a Demo
                            </h4>

                            <form
                                onSubmit={handleSubmit}
                                action="https://formspree.io/f/xojzbjdr"
                                method="POST"
                                className="space-y-3"
                            >
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    required
                                    className="h-12 w-full rounded-full border border-white/10 bg-white px-5 text-sm text-[#002626] outline-none placeholder:text-[#002626]/45 focus:border-[#00A896]"
                                />

                                <button
                                    type="submit"
                                    className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#00A896] px-5 text-sm font-bold text-white transition hover:bg-white hover:text-[#002626]"
                                >
                                    Submit
                                    <ArrowRight size={16} />
                                </button>

                                {status && (
                                    <p className="text-sm font-medium text-[#00A896]">
                                        {status}
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>

                    <div className="mt-12 flex flex-col-reverse items-center justify-between gap-6 border-t border-white/10 pt-8 text-center md:flex-row md:text-left">
                        <p className="max-w-2xl text-xs leading-6 text-white/50">
                            Ping Prepay is registered in 6161 Savoy Dr, Ste 824, Houston,
                            Texas, 77036. Ping Prepay is a technology services provider, not a
                            bank. © Ping Prepay 2025.
                        </p>

                        <img
                            src="/assets/logo-2.png"
                            alt="Ping Prepay"
                            className="h-16 w-auto md:h-20"
                        />
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;