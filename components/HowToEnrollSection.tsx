"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const steps = [
  {
    no: "01",
    title: "Choose Your Course",
    desc: "Select from a variety of Quranic courses tailored to empower your journey with us!",
    btn: "Book Free Trial",
    icon: "/alquran-icon-1.svg",
  },
  {
    no: "02",
    title: "Schedule Trial Class",
    desc: "Book your trial Quran class today and embark on your learning journey with us!",
    btn: "Claim Free Lesson",
    icon: "/alquran-icon-2.svg",
  },
  {
    no: "03",
    title: "Start Learning Quran",
    desc: "Begin your Quranic education today with our comprehensive on-site learning platform.",
    btn: "Enroll Now",
    icon: "/alquran-icon-3.svg",
  },
];

export default function HowToEnrollSection() {
  return (
    <section
      id="how-to-enroll"
      className="py-20 bg-gradient-to-r from-[#6abe54] to-[#0f6132] "
    >
      <div className="max-w-6xl mx-auto text-center px-5">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-block bg-yellow-400 px-4 py-1 rounded-md text-black font-semibold text-sm"
        >
          3 SIMPLE STEPS
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl text-white font-bold mt-4"
        >
          How to Enroll
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-300 mt-4 max-w-3xl mx-auto"
        >
          Start learning Quran in just three simple steps, bringing
          Quranic education closer to you through accessible on-site learning.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.3, duration: 0.6 }}
              className="
                group
                bg-white 
                rounded-xl 
                shadow-md 
                p-8 
                text-left 
                transition-all 
                duration-500
                hover:shadow-xl
                hover:bg-gradient-to-br
                hover:from-[#6abe54]
                hover:to-[#0f6132]
                active:shadow-xl
                active:bg-gradient-to-br
                active:from-[#6abe54]
                active:to-[#0f6132]
              "
            >
              <div className="flex justify-between items-start">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={60}
                  height={60}
                  className="object-contain"
                />

                <span className="text-5xl font-bold text-gray-300 group-hover:text-white transition">
                  {step.no}
                </span>
              </div>

              <h3 className="text-2xl font-semibold mt-6 text-black group-hover:text-white transition">
                {step.title}
              </h3>

              <p className="text-gray-600 group-hover:text-gray-200 mt-3 transition">
                {step.desc}
              </p>

              <Button className="mt-6 bg-gradient-to-r from-[#6abe54] to-[#0f6132] text-white font-bold px-6 py-2 rounded-md transition hover:bg-yellow-500">
                {step.btn}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
