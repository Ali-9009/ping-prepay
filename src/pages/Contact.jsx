import { Mail, Phone, MapPin, ChevronDown } from "lucide-react";
import { useState } from "react";

import ContactCom from "../components/ContactCom";

const faqs = [
    {
        question: "What is the cost to use Ping Prepay?",
        answer:
            "$0/month plan – Includes activations, top-ups, and basic features. $50/ month plan – Includes improved compensation rates and access to premium POS tools like AI marketing, inventory management, and operational insights.",
    },
    {
        question: "Are there hidden fees?",
        answer:
            "No. All fees are clearly disclosed in our dealer agreement.",
    },
    {
        question: "How do I sign up to become a dealer?",
        answer:
            "Fill out our dealer application form on pingprepay.com, and our team will contact you to complete the onboarding process.",
    },
    {
        question:
            "Is there training available for new dealers?",
        answer:
            "Yes. We offer onboarding support, training materials, and dedicated account managers to help you get started.",
    },
    {
        question:
            "How fast are top-ups processed?",
        answer:
            "Top-ups are processed instantly once the transaction is completed in the portal.",
    },
];



export default function Contact() {
    const [openIndex, setOpenIndex] = useState(2);
    return (
        <div>
            <div className=" bg-(--secondary-color) py-18 px-4">
                <div className="grid gap-5 md:grid-cols-3 max-w-360 mx-auto">

                    {/* Email */}
                    <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:bg-white/10">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                            <Mail className="h-6 w-6 text-white" />
                        </div>

                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                                Email
                            </p>
                            <a
                                href="mailto:info@pingprepay.com"
                                className="text-base font-semibold text-white md:text-lg"
                            >
                                info@pingprepay.com
                            </a>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:bg-white/10">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                            <Phone className="h-6 w-6 text-white" />
                        </div>

                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                                Phone
                            </p>
                            <a
                                href="tel:+18326950000"
                                className="text-base font-semibold text-white md:text-lg"
                            >
                                +1 832-695-0000
                            </a>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:bg-white/10">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                            <MapPin className="h-6 w-6 text-white" />
                        </div>

                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                                Location
                            </p>
                            <p className="text-sm font-medium text-white">
                                6161 Savoy Dr, Ste 824, Houston, TX 77036
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <ContactCom />

            <section className="py-16 md:py-20">
                <div className="mx-auto max-w-360 px-4 sm:px-6 lg:px-8">
                    <h2 className="mb-10 primary-heading">
                        Frequently asked questions
                    </h2>

                    <div className="space-y-3">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div key={index}>
                                    <button
                                        onClick={() =>
                                            setOpenIndex(isOpen ? null : index)
                                        }
                                        className="flex w-full items-center justify-between rounded-2xl bg-[#efefef] px-5 py-5 text-left transition-all duration-300 hover:bg-white md:px-6"
                                    >
                                        <span className="pr-4 text-base font-semibold text-[#00292a] md:text-xl">
                                            {faq.question}
                                        </span>

                                        <ChevronDown
                                            size={24}
                                            className={`shrink-0 text-[#00292a] transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>

                                    <div
                                        className={`grid transition-all duration-500 ease-in-out ${isOpen
                                            ? "grid-rows-[1fr] opacity-100"
                                            : "grid-rows-[0fr] opacity-0"
                                            }`}
                                    >
                                        <div className="overflow-hidden">
                                            <div className="px-5 py-5 md:px-6">
                                                <p className="max-w-6xl text-sm leading-7 md:text-base md:leading-8">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}
