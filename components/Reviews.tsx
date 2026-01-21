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

export default function Reviews() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  );

  const reviews = [
    {
      name: "Sahil Ahmad",
      country: "Georgia, USA",
      img: "/scholar1.png",
      review:
        "Amazing teachers who help us with anything we need and are very lovely to communicate with. So grateful for their effort.",
    },
    {
      name: "Muqaddas Ghani",
      country: "Virginia, USA",
      img: "/scholar2.png",
      review:
        "I’ve been attending Quran classes for almost two years and learned so much. Alhamdulillah my understanding improved a lot.",
    },
    {
      name: "Ayesha Amin",
      country: "London, UK",
      img: "/scholar3.png",
      review:
        "Exceptionally supportive and responsive teachers. Learning Quran has become easier and convenient for me.",
    },
    {
      name: "Abdullah Khan",
      country: "Canada",
      img: "/scholar4.png",
      review:
        "Highly recommended Quran academy with professional teachers and friendly environment.",
    },
  ];

  return (
    <section id="reviews" className="py-16 bg-[#F5F7F6]">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Parents/Students Reviews
        </h2>
        <p className="text-gray-600 mt-2">
          What our students and parents say about our online Quran classes and
          Teachers
        </p>
      </div>

      {/* Carousel */}
      <div className="max-w-7xl mx-auto px-6 relative">
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {reviews.map((r, i) => (
              <CarouselItem
                key={i}
                className="basis-full md:basis-1/2 lg:basis-1/3"
              >
                <div
                  className="
                    bg-white border 
                    rounded-2xl shadow-md 
                    p-8 h-full
                    transition-all duration-500
                    hover:shadow-xl
                    hover:bg-gradient-to-br
                    hover:from-[#6abe54]
                    hover:to-[#0f6132]
                    active:shadow-xl
                    active:bg-gradient-to-br
                    active:from-[#6abe54]
                    active:to-[#0f6132]
                    group
                  "
                >
                  {/* Stars */}
                  <div className="flex gap-1 text-yellow-400 text-xl mb-3">
                    ⭐⭐⭐⭐⭐
                  </div>

                  {/* Review */}
                  <p className="text-gray-600 mb-6 group-hover:text-white leading-relaxed">
                    {r.review}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center gap-4">
                    <Image
                      src={r.img}
                      alt={r.name}
                      width={55}
                      height={55}
                      className="rounded-full border"
                    />

                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg group-hover:text-white">
                        {r.name}
                      </h3>
                      <p className="text-sm text-gray-500 group-hover:text-white">
                        {r.country}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation */}
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
