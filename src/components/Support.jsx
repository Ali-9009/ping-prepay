import React, { useState } from "react";
import { MapPin, Phone, Mail, Check } from "lucide-react";

const contactItems = [
    {
        icon: MapPin,
        title: "Location",
        text: "6161 Savoy Dr, Ste 824, Houston, Texas, 77036",
    },
    {
        icon: Phone,
        title: "Phone",
        text: "+1 832-695-0000",
    },
    {
        icon: Mail,
        title: "Email",
        text: "info@pingprepay.com",
    },
];

const Support = () => {
    const [status, setStatus] = useState("");
    const [accepted, setAccepted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!accepted) {
            setStatus("Please accept the checkbox before submitting.");
            return;
        }

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
                setStatus("Message sent successfully!");
                form.reset();
                setAccepted(false);
            } else {
                setStatus("Oops! There was an error.");
            }
        } catch {
            setStatus("Oops! There was an error.");
        }
    };

    return (
        <section className="relative w-full overflow-hidden bg-(--secondary-color) px-6 py-20 text-white lg:px-16 bg-[url('/assets/element-3.png')] bg-cover bg-center bg-no-repeat">

            <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[36%_65%] lg:items-start">
                <div>
                    <div className="mb-10 flex items-center justify-start gap-2">
                        <img
                            src="/assets/logo-2.png"
                            alt="Ping ProCare"
                            className="h-20 w-auto"
                        />

                        <h2 className="text-4xl font-bold md:text-5xl">Support</h2>
                    </div>

                    <div className="space-y-6">
                        {contactItems.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div key={item.title} className="flex gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#00A896]">
                                        <Icon size={22} />
                                    </div>

                                    <div>
                                        <h4 className="mb-1 text-lg font-bold">{item.title}</h4>
                                        <p className="text-sm leading-6 text-white/70">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <form
                    onSubmit={handleSubmit}
                    action="https://formspree.io/f/xojzbjdr"
                    method="POST"
                    className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8"
                >
                    <div className="grid gap-5 md:grid-cols-2">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            required
                            className="h-14 rounded-xl border border-white/10 bg-[#003838] px-5 text-white outline-none placeholder:text-white/45 focus:border-[#00A896]"
                        />

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            required
                            className="h-14 rounded-xl border border-white/10 bg-[#003838] px-5 text-white outline-none placeholder:text-white/45 focus:border-[#00A896]"
                        />
                    </div>

                    <div className="mt-5 grid gap-5">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            className="h-14 rounded-xl border border-white/10 bg-[#003838] px-5 text-white outline-none placeholder:text-white/45 focus:border-[#00A896]"
                        />

                        <input
                            type="text"
                            name="company"
                            placeholder="Company Name"
                            className="h-14 rounded-xl border border-white/10 bg-[#003838] px-5 text-white outline-none placeholder:text-white/45 focus:border-[#00A896]"
                        />

                        <textarea
                            name="message"
                            placeholder="Message"
                            rows="5"
                            maxLength="180"
                            required
                            className="resize-none rounded-xl border border-white/10 bg-[#003838] px-5 py-4 text-white outline-none placeholder:text-white/45 focus:border-[#00A896]"
                        />
                    </div>

                    <label className="mt-6 flex cursor-pointer items-start gap-3 text-sm leading-6 text-white/70">
                        <input
                            type="checkbox"
                            name="agreement"
                            checked={accepted}
                            onChange={(e) => setAccepted(e.target.checked)}
                            className="peer sr-only"
                        />

                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-white/30 bg-white/5 text-transparent peer-checked:border-[#00A896] peer-checked:bg-[#00A896] peer-checked:text-white">
                            <Check size={14} strokeWidth={3} />
                        </span>

                        <span>
                            By checking this box, you agree to receive SMS text messages from Ping PrePay regarding account updates, dealer onboarding, activations, support, promotions, and other business-related communications. Message frequency may vary. Message and data rates may apply. Reply STOP to opt out at any time or HELP for assistance. Consent is not a condition of purchase. By providing your consent, you also agree to the Privacy Policy and Terms & Conditions.
                        </span>
                    </label>

                    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                        <button
                            type="submit"
                            className="rounded-full bg-white px-9 py-4 font-bold text-[#002626] transition hover:bg-[#dbeae6]"
                        >
                            Submit
                        </button>

                        {status && (
                            <span className="text-sm font-semibold text-[#00A896]">
                                {status}
                            </span>
                        )}
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Support;