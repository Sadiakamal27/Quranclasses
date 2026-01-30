"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function StatsCards() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const cards = [
    {
      number: "10+",
      title: "Years",
      description: "We have been Teaching Quran on-site for 10+ Years Worldwide.",
    },
    {
      number: "650+",
      title: "Students",
      description: "In our Quran Academy we have 650+ satisfied students.",
    },
    {
      number: "60+",
      title: "Teachers",
      description:
        "We have a 60+ team of Qualified Male and Female Quran teachers",
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 overflow-x-hidden">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 py-10 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`group relative bg-gray-100 rounded-3xl px-8 py-8 w-full max-w-[320px] sm:w-[320px] shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl active:shadow-xl touch-manipulation ${
              activeCard === index ? "stats-card-active" : ""
            }`}
            onTouchStart={() => setActiveCard(index)}
            onTouchEnd={() => setActiveCard(null)}
            onMouseDown={() => setActiveCard(index)}
            onMouseUp={() => setActiveCard(null)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-r from-[#6abe54] to-[#0f6132] stats-card-bg transition-all duration-500 ${
                activeCard === index ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></div>

            <div className="relative z-10">
              <h2
                className={`text-4xl font-bold stats-card-text transition-colors ${
                  activeCard === index
                    ? "text-white"
                    : "text-[#009FC8] group-hover:text-white"
                }`}
              >
                {card.number}
              </h2>
              <h3
                className={`text-2xl font-semibold mt-1 stats-card-text transition-colors ${
                  activeCard === index
                    ? "text-white"
                    : "text-[#009FC8] group-hover:text-white"
                }`}
              >
                {card.title}
              </h3>
              <p
                className={`mt-2 stats-card-text transition-colors ${
                  activeCard === index
                    ? "text-white"
                    : "text-gray-700 group-hover:text-white"
                }`}
              >
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
