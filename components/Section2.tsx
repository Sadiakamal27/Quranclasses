"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Section2() {
  return (
    <section className="py-16 px-6 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Images Layout */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Three Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Top Left Image */}
              <div className="relative rounded-lg overflow-hidden shadow-lg aspect-square">
                <Image
                  src="/section2-1.jpeg"
                  alt="Student learning"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
                {/* Badge overlay */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#6abe54] to-[#0f6132] text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Certified
                </div>
              </div>

              {/* Top Right Image */}
              <div className="relative rounded-lg overflow-hidden shadow-lg mt-8 aspect-square">
                <Image
                  src="/section2-2.jpeg"
                  alt="Student learning"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Image - Spans full width */}
              <div className="relative rounded-lg overflow-hidden shadow-lg col-span-2 aspect-video md:aspect-[2/1] bg-gray-100">
                <Image
                  src="/section2-3.jpeg"
                  alt="Students studying together"
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Student Count - Bottom Left with Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 bg-white rounded-lg shadow-xl p-2 sm:p-4 flex items-center gap-1.5 sm:gap-3 z-20"
            >
              <div className="student-icon-wrapper">
                <div className="bg-gradient-to-br from-[#1AC5E8] to-[#009FC8] p-1.5 sm:p-3 rounded-full student-icon-container">
                  <BookOpen className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-bold text-gray-800 leading-tight">
                  650+
                </p>
                <p className="text-[10px] sm:text-sm text-gray-600">Students</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Yellow Badge */}
            <div className="inline-block">
              <span className="inline-block bg-yellow-400 px-4 py-1 rounded-md text-black font-semibold text-sm">
                SALIENT FEATURES
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 ">
              A Unique Package of Modern & Religious Education
            </h1>

            {/* Salient Features List */}
            <div className="space-y-4 pt-4">
              {[
                "بہترین، قابل اور تجربہ کار اساتذہ",
                "فی کلاس زیادہ سے زیادہ  ۱۰  بچے",
                "مار پیٹ سے پاک",
                "ایئر کنڈیشنڈ کیمپس",
                "صاف ستھرا، پر سکون اور کشاد و ماحول",
                "اردو اور انگریزی کے ساتھ اسلامی اور جدید تعلیم بھی دی جاتی ہے۔",
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-[#1AC5E8]  flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <p
                    dir="rtl"
                    className="font-jameel-noori text-3xl text-gray-700 font-medium group-hover:text-gray-900 transition-colors"
                  >
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Two Buttons with Animation */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              {/* Register Now Button */}
              <div className="animated-button-wrapper w-full sm:w-auto">
                <Link href="/get-started" className="w-full sm:w-auto">
                  <Button className="animated-button cursor-pointer gradient-gold text-white font-semibold px-8 py-3 rounded-md relative w-full sm:w-auto h-auto">
                    <span className="relative z-10">REGISTER NOW</span>
                  </Button>
                </Link>
              </div>

              {/* WhatsApp Button */}
              <div className="animated-button-wrapper-white w-full sm:w-auto">
                <Link
                  href="https://wa.me/+923005806700"
                  target="_blank"
                  className="w-full sm:w-auto"
                >
                  <Button className="animated-button cursor-pointer bg-white text-gray-900 font-semibold px-8 py-3 rounded-md relative border-2 border-gray-300 hover:border-[#6abe54] hover:text-[#0f6132] hover:bg-white transition-colors w-full sm:w-auto h-auto">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      WHATSAPP
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
