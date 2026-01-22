"use client";

import { motion } from "framer-motion";
import { BookOpen, User, Users } from "lucide-react";

const FeaturesCard = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Learn Quran With",
      subtitle: "Expert Teachers",
    },
    {
      icon: User,
      title: "Quran Classes",
      subtitle: "for Kids & Adults",
    },
    {
      icon: Users,
      title: "Online Quran Classes",
      subtitle: "for Females",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-4 -mt-12 relative z-20"
    >
      <div className="bg-gradient-to-r from-[#6abe54] via-[#3a9043] to-[#0f6132] rounded-2xl shadow-xl p-4 md:p-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-4 group"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-slate-700" />
              </div>
              <div className="flex flex-col text-white">
                <span className="text-lg md:text-xl font-bold leading-tight">
                  {feature.title}
                </span>
                <span className="text-sm md:text-base font-semibold opacity-90">
                  {feature.subtitle}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturesCard;
