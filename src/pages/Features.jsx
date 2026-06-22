import Button from "../components/PrimaryBtn";

import {
    Smartphone,
    SmartphoneCharging,
    Globe,
    Package,
    Wrench,
    Users,
    CreditCard,
    Shield,
    Wallet,
} from "lucide-react";

const services = [
    {
        title: "Mobile Top Up",
        description:
            "Instantly recharge prepaid mobile accounts worldwide. Our platform supports multiple carriers, ensuring fast, secure, and hassle-free top-ups for your customers",
        icon: Smartphone,
    },
    {
        title: "Activations",
        description:
            "Streamline the activation process for new devices, SIM cards, or service plans with simple, guided workflows that save time and reduce errors.",
        icon: SmartphoneCharging,
    },
    {
        title: "AI Marketing",
        description:
            "Leverage Al-powered insights to create targeted campaigns, personalized offers, and customer engagement strategies that drive loyalty and sales.",
        icon: Globe,
    },
    {
        title: "Inventory Management",
        description:
            "Track, organize, and optimize your stock in real-time. Gain visibility across all locations, reduce shrinkage, and automate reorders for best-selling items.",
        icon: Package,
    },
    {
        title: "Repair & Service Ticketing",
        description:
            "Simplify repair workflows with a fully integrated ticketing system that logs issues, tracks progress, and keeps customers informed from intake to completion.",
        icon: Wrench,
    },
    {
        title: "CRM",
        description:
            "Manage customer relationships with a centralized database, interaction history, and tools to build lasting connections and repeat business.",
        icon: Users,
    },
    {
        title: "Gift Cards",
        description:
            "Offer physical or digital gift cards for in-store or online use, giving customers flexible payment options and increasing sales opportunities.",
        icon: CreditCard,
    },
    {
        title: "Device Insurance",
        description:
            "Provide customers peace of mind with easy-to-manage insurance plans that protect against damage, theft, or loss all handled through your platform.",
        icon: Shield,
    },
    {
        title: "Buy Now, Pay Later",
        description:
            "Empower your customers with flexible payment options by offering Buy Now, Pay Later solutions. Increase sales and improve conversion rates by allowing shoppers to split purchases into easy, interest-free installments – all seamlessly integrated into your platform for a smooth checkout experience.",
        icon: Wallet,
    },
];

export default function Feature() {
    return (

        <>
            <section className="px-4 py-6">
                <div
                    className="
      relative overflow-hidden
      bg-(--secondary-color)
      bg-[url('/assets/element-4.png')]
      bg-cover bg-center bg-no-repeat
      px-6 py-24 lg:px-16
      text-white rounded-2xl
    "
                >
                    <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
                        <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                            Your Journey Into The Future Starts Now
                        </h1>

                        <p className="mt-6 max-w-2xl text-base text-white/80 md:text-lg">
                            Step confidently into tomorrow with innovative solutions designed to
                            empower your business. Experience seamless integration, cutting-edge
                            technology, and tools crafted to drive your success every step of the
                            way.
                        </p>

                        <Button className="mt-6" text="Book A Demo"/>
                    </div>
                </div>
            </section>

            <section className="px-4 py-10">
                <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={service.title}
                                className="rounded-xl border border-[#b9cbc4] bg-white p-6 transition hover:shadow-lg"
                            >
                                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#3d5d60] text-white">
                                    <Icon size={18} />
                                </div>

                                <h3 className="mb-2 text-xl font-semibold text-slate-900">
                                    {service.title}
                                </h3>

                                <p className="text-md font-medium leading-6 text-slate-600">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>

        </>
    )
}
