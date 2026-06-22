import { Mail, Phone, MapPin } from "lucide-react";
import ContactCom from "../components/ContactCom";

export default function Contact() {
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


        </div>
    )
}
