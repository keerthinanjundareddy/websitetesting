import React from 'react';
import { Link } from "react-router-dom";
import { Hexagon } from 'react-feather';

export default function OurServices() {
    const services = [
        {
            icon: 'adjust-circle',
            title: 'Grow Your Business',
            description: "If the distribution of letters and 'words' is random, the reader will not be distracted from making.",
        },
        {
            icon: 'circuit',
            title: 'Drive More Sales',
            description: "If the distribution of letters and 'words' is random, the reader will not be distracted from making.",
        },
        {
            icon: 'fire',
            title: 'Handled By Expert',
            description: "If the distribution of letters and 'words' is random, the reader will not be distracted from making.",
        },
        {
            icon: 'flower',
            title: 'Increase Conversion',
            description: "If the distribution of letters and 'words' is random, the reader will not be distracted from making.",
        },
        {
            icon: 'shopping-basket',
            title: 'Drive More Sales',
            description: "If the distribution of letters and 'words' is random, the reader will not be distracted from making.",
        },
        {
            icon: 'flip-h',
            title: 'Sales Growth Idea',
            description: "If the distribution of letters and 'words' is random, the reader will not be distracted from making.",
        }
    ];
    return (
        <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="features">
            <div className="container lg mx-auto">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-2xl text-xl font-medium">Our Services</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">
                        This is just a simple text made for this unique and awesome template, you can replace it with any text.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-4 gap-[30px]">
                    {services.map((service, index) => (
                        <div key={index} className="group relative lg:px-6 mt-4 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center">
                            <div className="relative overflow-hidden text-transparent -m-3">
                                <Hexagon className="h-28 w-28 fill-violet-600/5 mx-auto rotate-[30deg]"
                                ></Hexagon>
                                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-violet-600 rounded-xl transition duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                                    <i className={`uil uil-${service.icon}`}></i>
                                </div>
                            </div>
                            <div className="mt-6">
                                <Link to="/services" className="text-lg h5 transition duration-500 ease-in-out hover:text-violet-600" >
                                    {service.title}
                                </Link>
                                <p className="text-slate-400 transition duration-500 ease-in-out mt-3">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};