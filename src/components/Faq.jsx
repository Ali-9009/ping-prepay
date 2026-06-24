import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "How can Ping's prepaid products benefit my business?",
        answer:
            "Ping's prepaid products help businesses increase revenue, attract repeat customers, and offer convenient services such as mobile top-ups, bill payments, and device activations.",
    },
    {
        question: "What industries does Ping cater to?",
        answer:
            "Ping serves a variety of industries including convenience stores, gas stations, laundromats, vape shops, grocery stores, and other retail businesses.",
    },
    {
        question: "Can Ping customize prepaid solutions to suit my business needs?",
        answer:
            "Yes, Ping can customize prepaid solutions to suit your business needs. The platform is designed to be flexible and adaptable, allowing it to cater to the unique requirements of different industries and business models. Whether you operate a laundromat, gas station, vape shop, or another type of retail business, Ping can tailor its offerings like mobile top-ups, bill payments, and device activations to fit your specific business objectives and customer base.",
    },
    {
        question:
            "How does Ping ensure a seamless experience for businesses and their customers?",
        answer:
            "Ping provides reliable technology, easy integrations, and dedicated support to ensure a smooth experience for both businesses and customers.",
    },
    {
        question:
            "What steps do I need to take to start utilizing Ping's services?",
        answer:
            "Simply contact our team, complete the onboarding process, and we'll help you get set up with the services that best fit your business.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(2);

    return (
        <section className="bg-(--secondary-color) py-16 md:py-20">
            <div className="mx-auto max-w-360 px-4 sm:px-6 lg:px-8">
                <h2 className="mb-10 text-3xl font-bold text-white md:mb-12 md:text-5xl">
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
                                            <p className="max-w-6xl text-sm leading-7 text-white md:text-base md:leading-8">
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
    );
}