"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

const cards = [
  {
    title: "Online Quran Classes for Kids",
    desc: "The “Basic Quran Reading Course for Kids” is specially designed for kids who are beginners…",
    img: "/quran.jpg",
  },
  {
    title: "Online Quran Classes for Adults",
    desc: "The “Basic Quran Reading Course for Adults” is suitable for both brothers and sisters…",
    img: "/quran.jpg",
  },
  {
    title: "Online Quran Classes for Females",
    desc: "This course is designed for Muslim sisters who want to enhance their Islamic knowledge…",
    img: "/quran.jpg",
  },
];

export default function QuranClassesSection() {
  return (
    <section
      className="py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/bg-pattern.png')" }}
    >
      <div className="max-w-6xl mx-auto text-center px-5">
        {/* Top Text */}
        <p className="inline-block bg-yellow-400 px-4 py-1 rounded-md text-black font-semibold text-sm">
          FOR EVERY AGE GROUP
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-4">
          Online Quran Classes For <br /> Kids, Adults, & Ladies
        </h2>

        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          Discover Quranic teachings online with personalized courses designed
          for kids, adults and ladies, offering structured learning and an
          engaging experience.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {cards.map((card, i: number) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="bg-white rounded-xl shadow-md border border-transparent hover:border-yellow-400 transition duration-300"
            >
              <div className="p-6 flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold text-left">
                  {card.title}
                </h3>

                <div className="w-16 h-16">
                  <Image
                    src={card.img}
                    alt={card.title}
                    width={70}
                    height={70}
                    className="object-contain"
                  />
                </div>
              </div>

              <p className="text-gray-600 px-6 pb-6 text-left">{card.desc}</p>

              <div className="bg-gray-100 hover:bg-yellow-400 transition duration-300 text-left px-6 py-3 font-semibold cursor-pointer">
                Read More →
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <button className="mt-10 bg-blue-900 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition">
          Avail 50% Off Today
        </button>
      </div>
    </section>
  );
}
