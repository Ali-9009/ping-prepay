import {
    Check,
    CircleDollarSign,
    Building2,
    Package,
    Headset,
    Plus,
    Store,
} from "lucide-react";
import Button from "./PrimaryBtn";

export default function PricingCom() {
    const features = [
        "24/7 chat support",
        "In-person sales via phone or POS device",
        "AT&T Prepaid Spiff",
        "10% Airtime Commission",
        "No Lifetime Residuals",
        "Access to core retail tools",
    ];

    const included = [
        {
            icon: CircleDollarSign,
            title: "Built-in CRM",
            text: "Easily manage customer data, purchase history, and engagement from one place.",
        },
        {
            icon: Store,
            title: "Marketplace Access",
            text: "Expand your reach by selling through a connected retail network.",
        },
        {
            icon: Package,
            title: "Inventory Management",
            text: "Track, update, and control your stock in real time across all locations.",
        },
        {
            icon: Headset,
            title: "Gift Card Support",
            text: "Offer digital or physical gift cards to boost loyalty and repeat purchases.",
        },
        {
            icon: Plus,
            title: "And More",
            text: "From device financing to top-ups and reporting—everything you need to grow.",
        },
    ];

    return (
        <section className="py-16 px-4">
            <div className="mx-auto max-w-360">
                {/* Pricing Cards */}
                <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
                    {/* Free Plan */}
                    <div className="w-full max-w-95 rounded-xl border border-gray-300 bg-white p-6 shadow-sm">
                        <div className="mb-4 flex justify-center">
                            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-green-300">
                                <CircleDollarSign size={35} className="text-green-500" />
                            </div>
                        </div>

                        <h3 className="text-center text-xl font-bold">Free POS</h3>

                        <p className="mt-1 text-center text-md font-medium text-gray-500">
                            For independent stores starting out
                        </p>

                        <div className="my-5 border-t border-gray-300 pt-4 text-center">
                            <span className="text-5xl font-bold">$0</span>
                            <span className="ml-1 text-md font-medium">/ Month</span>
                        </div>

                        <ul className="space-y-2 text-md font-semibold text-gray-500">
                            {features.map((item) => (
                                <li key={item} className="flex gap-2">
                                    <Check size={26} className="mt-1 text-black shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Button className="mt-4 w-full" text="Start Free"/>
                    </div>

                    {/* Smart POS */}
                    <div className="w-full max-w-95 rounded-lg border border-gray-300 bg-white p-6 shadow-sm">
                        <div className="mb-4 flex justify-center">
                            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-purple-300">
                                <Building2 size={35} className="text-purple-500" />
                            </div>
                        </div>

                        <h3 className="text-center text-xl font-bold">Smart POS</h3>

                        <p className="mt-1 text-center text-md font-medium text-gray-500">
                            For growing teams that want data-driven tools
                        </p>

                        <div className="my-5 border-t border-gray-300 pt-4 text-center">
                            <span className="text-5xl font-bold">$50</span>
                            <span className="ml-1 text-md font-medium">/ Month</span>
                        </div>

                        <ul className="space-y-2 text-md font-semibold text-gray-500">
                            {features.map((item) => (
                                <li key={item} className="flex gap-2">
                                    <Check size={26} className="mt-1 text-black shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Button className="mt-4 w-full" text="Upgrade Now" />
                    </div>
                </div>

                {/* Button */}
                <div className="mt-10 text-center">
                    <button className="rounded-full border border-(--secondary-color) px-10 py-3 text-lg font-bold text-(--secondary-color)">
                        Full list of features
                    </button>
                </div>

                {/* Heading */}
                <h2 className="primary-heading text-center mt-8">
                    What's Included in Every Plan
                </h2>

                {/* Features Grid */}
                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                    {included.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="rounded-lg border border-gray-300 bg-white p-4"
                            >
                                <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                                    <Icon size={26} />
                                </div>

                                <h3 className="font-semibold text-lg text-(--secondary-color)">
                                    {item.title}
                                </h3>

                                <p className="mt-2 text-md text-gray-700">
                                    {item.text}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}