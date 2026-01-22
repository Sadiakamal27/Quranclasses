"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative text-white pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[600px]"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/websitebanner.png')" }}
      />

      {/* Dark Overlay so text is readable */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Glow Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#ffc90d] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#0f6132] rounded-full blur-3xl"></div>
      </div>

      {/* HERO CONTENT - Aligned to the RIGHT */}
      <div className="container font-jameel-noori mx-auto px-4 sm:px-6 md:px-14 lg:px-18 text-right relative z-10 mt-10">
        <div className="flex justify-end">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl w-full"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              مکمل نظامِ حفظِ قرآن <br /> اور جدید تعلیم
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8">
              ایک ہی چھت کے نیچے مذہبی اور جدید تعلیم کا منفرد پیکج
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <Link href="/get-started">
                <Button className="bg-gradient-to-r from-[#6abe54] to-[#0f6132] cursor-pointer text-white font-semibold text-lg shadow-lg w-full sm:w-auto font-sans">
                  Get Started
                </Button>
              </Link>

              <Button
                variant="outline"
                className="bg-white/10 text-white cursor-pointer border-2 border-gray-300 hover:bg-white hover:text-[#0f6132] hover:border-[#6abe54] backdrop-blur-sm font-sans"
              >
                View Courses
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap justify-end gap-6 sm:gap-8 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#6abe54]" />
                <span>1000+ طلباء</span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#6abe54]" />
                <span>ماہر اساتذہ</span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#6abe54]" />
                <span>لچکدار وقت</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Left Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: -50 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute bottom-0 left-[-5%] sm:left-0 md:left-[2%] lg:left-[5%] z-0 
          w-[16rem] h-[16rem] 
          sm:w-[22rem] sm:h-[22rem]
          md:w-[28rem] md:h-[28rem] 
          lg:w-[38rem] lg:h-[38rem]"
      >
        <Image
          src="/bacha.png"
          alt="Hero decoration"
          width={1000}
          height={1000}
          className="w-full h-full object-contain object-bottom"
          priority
        />
      </motion.div>
    </section>
  );
}
