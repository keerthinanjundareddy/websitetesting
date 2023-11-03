import React from 'react'
import { Link } from "react-router-dom";
import Navbar from '../component/navbar';
import Footer from '../component/footer';

export default function Pricing() {
    return (
        <>
            <body className="font-inter text-base text-slate-950 dark:text-white dark:bg-slate-900">

                <Navbar />

                <section className="py-28 w-full table relative bg-[url('../../assets/images/bg/bg-5.jpg')] bg-bottom bg-no-repeat" id="home">
                    <div className="absolute inset-0 bg-slate-950/80"></div>

                    <div className="container">
                        <div className="grid grid-cols-1 pb-8 text-center mt-10">
                            <h3 className="font-medium leading-normal text-3xl mt-10 text-white">Comfortable Pricing</h3>
                        </div>
                    </div>
                </section>

                <section className="relative md:py-24 py-16">
                    <div className="container">
                        <div className="grid md:grid-cols-3 grid-cols-1 gap-[30px] items-center">
                            <div className="p-6">
                                <div className="pb-8">
                                    <h3 className="mb-6 text-xl font-medium dark:text-white">Free</h3>
                                    <div className="mb-6 dark:text-white/50">
                                        <span className="relative h6 -top-5 text-xl">$</span>
                                        <span className="text-5xl h6 font-medium dark:text-white">00</span>
                                        <span className="inline-block h6 ms-1">/ month</span>
                                    </div>
                                    <p className="mb-6 text-slate-400">Free features for your business.</p>
                                    <Link to="" className="py-2 px-5 inline-block font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-violet-600/5 hover:bg-violet-600 border-violet-600/10 hover:border-violet-600 text-violet-600 hover:text-white rounded-md w-full">Redeem Now</Link>
                                </div>
                                <div className="border-b border-slate-200 dark:border-slate-200/5"></div>
                                <ul className="self-start pt-8">
                                    <li className="flex items-center mb-1 text-slate-400">
                                        <i className="uil uil-check-circle text-xl text-green-600 me-2"></i>
                                        <span>Complete documentation</span>
                                    </li>
                                    <li className="flex items-center my-1 text-slate-400">
                                        <i className="uil uil-check-circle text-xl text-green-600 me-2"></i>
                                        <span>Working materials in Figma</span>
                                    </li>
                                    <li className="flex items-center my-1 text-slate-400">
                                        <i className="uil uil-check-circle text-xl text-green-600 me-2"></i>
                                        <span>100GB cloud storage</span>
                                    </li>
                                    <li className="flex items-center my-1 text-slate-400">
                                        <i className="uil uil-check-circle text-xl text-green-600 me-2"></i>
                                        <span>500 team members</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="shadow rounded-md p-6 bg-gradient-to-t bg-violet-600">
                                <div className="pb-8">
                                    <h3 className="mb-6 text-xl font-medium text-white">Business</h3>
                                    <div className="mb-6 text-white/50">
                                        <span className="relative h6 -top-5 text-xl">$</span>
                                        <span className="text-5xl h6 font-bold text-white">10</span>
                                        <span className="inline-block h6 ms-1">/ month</span>
                                    </div>
                                    <p className="mb-6 text-white">Basic features for up to 10 users.</p>
                                    <Link to="" className="py-2 px-5 inline-block font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md w-full">Started Now</Link>
                                </div>
                                <div className="border-b border-slate-200/10"></div>
                                <ul className="self-start pt-8">
                                    <li className="flex items-center mb-1 text-white/80">
                                        <i className="uil uil-check-circle text-xl text-orange-600 me-2"></i>
                                        <span>Complete documentation</span>
                                    </li>
                                    <li className="flex items-center my-1 text-white/80">
                                        <i className="uil uil-check-circle text-xl text-orange-600 me-2"></i>
                                        <span>Working materials in Figma</span>
                                    </li>
                                    <li className="flex items-center my-1 text-white/80">
                                        <i className="uil uil-check-circle text-xl text-orange-600 me-2"></i>
                                        <span>100GB cloud storage</span>
                                    </li>
                                    <li className="flex items-center my-1 text-white/80">
                                        <i className="uil uil-check-circle text-xl text-orange-600 me-2"></i>
                                        <span>500 team members</span>
                                    </li>
                                    <li className="flex items-center my-1 text-white/80">
                                        <i className="uil uil-check-circle text-xl text-orange-600 me-2"></i>
                                        <span>Free Support</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="p-6">
                                <div className="pb-8">
                                    <h3 className="mb-6 text-xl font-medium dark:text-white">Corporate</h3>
                                    <div className="mb-6 dark:text-white/50">
                                        <span className="relative h6 -top-5 text-xl">$</span>
                                        <span className="text-5xl h6 font-medium dark:text-white">49</span>
                                        <span className="inline-block h6 ms-1">/ month</span>
                                    </div>
                                    <p className="mb-6 text-slate-400">Corporate features for up to 100 users.</p>
                                    <Link to="" className="py-2 px-5 inline-block font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-md w-full">Signup Now</Link>
                                </div>
                                <div className="border-b border-slate-200 dark:border-slate-200/5"></div>
                                <ul className="self-start pt-8">
                                    <li className="flex items-center mb-1 text-slate-400">
                                        <i className="uil uil-check-circle text-xl text-green-600 me-2"></i>
                                        <span>Complete documentation</span>
                                    </li>
                                    <li className="flex items-center my-1 text-slate-400">
                                        <i className="uil uil-check-circle text-xl text-green-600 me-2"></i>
                                        <span>Working materials in Figma</span>
                                    </li>
                                    <li className="flex items-center my-1 text-slate-400">
                                        <i className="uil uil-check-circle text-xl text-green-600 me-2"></i>
                                        <span>100GB cloud storage</span>
                                    </li>
                                    <li className="flex items-center my-1 text-slate-400">
                                        <i className="uil uil-check-circle text-xl text-green-600 me-2"></i>
                                        <span>500 team members</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="container lg:mt-24 mt-16">
                        <div className="grid grid-cols-1 text-center">
                            <h3 className="mb-6 md:text-2xl text-xl font-medium">Have Question ? Get in touch!</h3>

                            <p className="text-slate-400 max-w-xl mx-auto">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>

                            <div className="mt-6">
                                <Link to="/contactus" className="py-2 px-5 inline-block font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-md"><i className="uil uil-phone align-middle me-2"></i> Contact us</Link>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </body>
        </>
    )
}
