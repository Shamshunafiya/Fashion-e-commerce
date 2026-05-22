"use client";

import { motion } from "framer-motion";

const logos = [
    { src: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original", label: "Zara" },
    { src: "https://p7.hiclipart.com/preview/592/977/126/5bbc5e3106059.jpg", label: "H&M" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UNIQLO_logo.svg/960px-UNIQLO_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail", label: "Uniqlo" },
    { src: "https://media.designrush.com/inspiration_images/758941/conversions/1-desktop.jpg", label: "Levi's" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Gucci_logo.svg/960px-Gucci_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail", label: "Gucci" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg", label: "Nike" },
];

export default function LogoMarquee() {
    return (
        <section className="w-full overflow-hidden bg-[#f5f3f1] py-24">


            <div className="relative overflow-hidden ">
                <motion.div
                    className="flex gap-24 w-max"
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        duration: 20,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {/* First set */}
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center min-w-[180px]"
                        >
                            <img
                                src={logo.src}
                                alt={logo.label}
                                className="h-10 object-contain opacity-90"
                            />
                        </div>
                    ))}

                    {/* Duplicate set for seamless loop */}
                    {logos.map((logo, index) => (
                        <div
                            key={`duplicate-${index}`}
                            className="flex items-center justify-center min-w-[180px]"
                        >
                            <img
                                src={logo.src}
                                alt={logo.label}
                                className="h-10 object-contain opacity-90"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}