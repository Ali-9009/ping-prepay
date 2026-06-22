import React from 'react'
import Button from '../components/PrimaryBtn'
import PricingCom from '../components/PricingCom'
import FAQ from '../components/Faq'

export default function Pricing() {
    return (
        <>
            <section className="relative w-full overflow-hidden bg-(--secondary-color) bg-[url('/assets/element-5.png')] bg-cover bg-center bg-no-repeat md:pt-32 pt-8 text-white px-6">
                <div className="mx-auto max-w-390 grid lg:grid-cols-2  grid-cols-1 items-center justify-center ">
                    <div>
                        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
                            Choose Your POS. Fuel Growth. Unlock Profits
                        </h1>

                        <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">
                            With Ping Prepay, you get access to the most powerful and flexible POS platform built specifically for retail success. Whether you’re just getting started or ready to scale, our POS systems let you unlock the highest AT&T Prepaid payouts and build long-term, recurring income.
                        </p>
                        <Button text="Sign Up For Free" className='mt-6' />
                    </div>
                    <div className="relative h-120">
                        <img
                            src="/assets/pricing-1.png"
                            alt=""
                            className="absolute right-0 lg:top-0 top-20 z-9"
                        />

                        <img
                            src="/assets/pricing-2.png"
                            alt=""
                            className="absolute bottom-0 left-0  lg:w-[70%]  animate-fl"
                        />
                    </div>
                </div>
            </section>

            <PricingCom />

            <FAQ />

            <div className="mx-auto max-w-3xl text-center py-12">
                <h2 className="primary-heading">
                    Everything you need to sell online, all in one place
                </h2>

                <p className="mb-8 text-[#00292a]/80 md:text-lg">
                    Whether you're building a website or managing inventory, do it all with us.
                </p>

                <form className="mx-auto flex max-w-2xl flex-col gap-3 sm:flex-row">
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="Enter your email"
                        className="h-14 flex-1 rounded-full px-6 outline-none ring-1 ring-black/10"
                    />

                    <button
                        type="submit"
                        className="h-14 whitespace-nowrap rounded-full bg-[#00292a] px-8 font-bold text-white transition hover:scale-105"
                    >
                        Get Started
                    </button>
                </form>
            </div>
        </>
    )
}
