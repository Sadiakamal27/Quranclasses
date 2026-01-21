"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function FeaturedCourses() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  );

  const courses = [
    {
      title: "نورانی قاعدہ",
      image: "/noorani-qaida.jpg",
      description:
        "نورانی قاعدہ سیکھنا آپ کے قرآنic سفر کے لیے مضبوط بنیاد فراہم کرتا ہے۔",
    },
    {
      title: "تجوید القرآن",
      image: "/tajweed.jpg",
      description:
        "ہماری آن لائن تجوید کلاسز آپ کی مکمل رہنمائی کرتی ہیں۔ ماہرین سے سیکھیں اور فائدہ اٹھائیں۔",
    },
    {
      title: "قرآن خوانی",
      image: "/quran-reading.jpg",
      description: "قرآن اللہ کا کلام ہے جو حضرت محمد ﷺ پر نازل ہوا۔",
    },
    {
      title: "قرآن حفظ",
      image: "/quran-memorization.jpg",
      description:
        "طلباء کی صلاحیتوں کو مدنظر رکھتے ہوئے، ہم ذاتی شیڈول کو ترجیح دیتے ہیں۔",
    },
    {
      title: "اسلامی مطالعہ",
      image: "/islamic-studies.jpg",
      description:
        "جب بھی کوئی ہمیں اسلام کے بارے میں مزید سیکھنے کا مشورہ دے، تو یہ منطقی سوچ ہے کہ ہمیں اسے قبول کرنا چاہیے۔",
    },
  ];

  return (
    <section
      id="FeaturedCourses"
      className="py-20 px-4 sm:px-6 bg-[#fcfbf7] relative overflow-hidden"
    >
      {/* Background Islamic Mandala Patterns */}
      <div className="absolute top-0 left-0 w-80 h-80 opacity-[0.07] pointer-events-none -translate-x-1/4 -translate-y-1/4">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#8b7325"
            d="M100 0c55.23 0 100 44.77 100 100s-44.77 100-100 100S0 155.23 0 100 44.77 0 100 0zm0 20c-44.18 0-80 35.82-80 80s35.82 80 80 80 80-35.82 80-80-35.82-80-80-80zM100 40c33.14 0 60 26.86 60 60s-26.86 60-60 60-60-26.86-60-60 26.86-60 60-60zm0 20c-22.09 0-40 17.91-40 40s17.91 40 40 40 40-17.91 40-40-17.91-40-40-40z"
          />
          <path
            fill="#8b7325"
            d="M100 10l5 15h15l-12 9 5 15-13-10-13 10 5-15-12-9h15z"
            transform="rotate(0 100 100)"
          />
          <path
            fill="#8b7325"
            d="M100 10l5 15h15l-12 9 5 15-13-10-13 10 5-15-12-9h15z"
            transform="rotate(45 100 100)"
          />
          <path
            fill="#8b7325"
            d="M100 10l5 15h15l-12 9 5 15-13-10-13 10 5-15-12-9h15z"
            transform="rotate(90 100 100)"
          />
          <path
            fill="#8b7325"
            d="M100 10l5 15h15l-12 9 5 15-13-10-13 10 5-15-12-9h15z"
            transform="rotate(135 100 100)"
          />
          <path
            fill="#8b7325"
            d="M100 10l5 15h15l-12 9 5 15-13-10-13 10 5-15-12-9h15z"
            transform="rotate(180 100 100)"
          />
          <path
            fill="#8b7325"
            d="M100 10l5 15h15l-12 9 5 15-13-10-13 10 5-15-12-9h15z"
            transform="rotate(225 100 100)"
          />
          <path
            fill="#8b7325"
            d="M100 10l5 15h15l-12 9 5 15-13-10-13 10 5-15-12-9h15z"
            transform="rotate(270 100 100)"
          />
          <path
            fill="#8b7325"
            d="M100 10l5 15h15l-12 9 5 15-13-10-13 10 5-15-12-9h15z"
            transform="rotate(315 100 100)"
          />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-80 h-80 opacity-[0.07] pointer-events-none translate-x-1/4 translate-y-1/4">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="rotate-180"
        >
          <path
            fill="#8b7325"
            d="M100 0c55.23 0 100 44.77 100 100s-44.77 100-100 100S0 155.23 0 100 44.77 0 100 0zm0 20c-44.18 0-80 35.82-80 80s35.82 80 80 80 80-35.82 80-80-35.82-80-80-80zM100 40c33.14 0 60 26.86 60 60s-26.86 60-60 60-60-26.86-60-60 26.86-60 60-60zm0 20c-22.09 0-40 17.91-40 40s17.91 40 40 40 40-17.91 40-40-17.91-40-40-40z"
          />
        </svg>
      </div>

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("https://www.transparenttextures.com/patterns/p6.png")`,
        }}
      ></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Yellow Badge */}
        <div className="text-center mb-6">
          <span className="inline-block bg-yellow-400 font-jameel-noori px-4 py-1 rounded-md text-black font-semibold text-sm">
            نمایاں کورسز
          </span>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold  mb-6 tracking-tight leading-tight">
            بچوں اور بڑوں کے لیے آن لائن قرآنی کورسز
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg font-jameel-noori">
            قرآنی اور اسلامی کورسز کے ہمارے متنوع انتخاب کو دریافت کریں، جو ایک
            روحانی اور تعلیمی سفر میں سیکھنے والوں کی رہنمائی کے لیے احتیاط سے
            تیار کیے گئے ہیں۔
          </p>
        </div>

        {/* Carousel */}
        <div className="mt-12 px-2 sm:px-4 md:px-6 lg:px-10 font-jameel-noori">
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 sm:-ml-4">
              {courses.map((course, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5"
                >
                  <div className="relative group h-full transition-transform duration-300 hover:-translate-y-2 active:-translate-y-2 py-4">
                    {/* Dome Card Shape */}
                    <div
                      className="bg-[#fff9e5] relative pt-12 pb-8 px-6 flex flex-col items-center h-full shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-[#fef3c7] w-full max-w-[280px] mx-auto"
                      style={{
                        borderRadius: "100px 100px 0 0",
                        clipPath:
                          'path("M0,1000 L0,110 C0,30 50,0 120,0 C190,0 240,30 240,110 L240,1000 L0,1000 Z")',
                      }}
                    >
                      {/* Top Emblem */}
                      <div className="mb-6">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 2L23.5 13H35L26 20L29.5 31L20 24L10.5 31L14 20L5 13H16.5L20 2Z"
                            fill="#ffc107"
                            stroke="#8b7325"
                            strokeWidth="1"
                          />
                          <circle cx="20" cy="20" r="5" fill="#8b7325" />
                        </svg>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-[#1a1a1a] text-center mb-6 min-h-[64px] flex items-center leading-snug">
                        {course.title}
                      </h3>

                      {/* Circular Image with Golden Border */}
                      <div className="mb-8">
                        <div className="w-32 h-32 rounded-full p-1.5 bg-gradient-to-b from-[#d4af37] to-[#f3e5ab] shadow-inner overflow-hidden">
                          <div className="w-full h-full rounded-full overflow-hidden border-2 border-white">
                            <Image
                              src={course.image}
                              alt={course.title}
                              width={128}
                              height={128}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="mb-8 flex-1">
                        <p className="text-[#333] text-center text-sm leading-relaxed font-sans px-2">
                          {course.description}
                        </p>
                      </div>

                      {/* Bottom Decorative Divider */}
                      <div className="w-full flex items-center justify-center gap-2 opacity-40">
                        <div className="h-[1px] w-8 bg-[#8b7325]"></div>
                        <div className="scale-75">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#8b7325"
                            strokeWidth="1"
                          >
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        </div>
                        <div className="h-[1px] w-8 bg-[#8b7325]"></div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation */}
            <CarouselPrevious className="hidden md:flex -left-2 lg:-left-4 bg-white border-[#ffc107] text-[#ffc107] hover:bg-[#ffc107] hover:text-white" />
            <CarouselNext className="hidden md:flex -right-2 lg:-right-4 bg-white border-[#ffc107] text-[#ffc107] hover:bg-[#ffc107] hover:text-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
