"use client";

import {
  Globe,
  Clock,
  Users,
  GraduationCap,
  BarChart3,
  MessageSquare,
  Award,
  Wallet,
  Headphones,
} from "lucide-react";

export function WhyStudyWithUs() {
  const features = [
    {
      icon: Globe,
      title: "عالمی سطح پر تدریس",
      description:
        "القرآن کلاسز 2014 سے دنیا بھر میں 60+ ممالک میں خدمات فراہم کر رہی ہے، جن میں امریکہ، برطانیہ، کینیڈا، آسٹریلیا اور یورپ شامل ہیں۔",
    },
    {
      icon: Clock,
      title: "لچکدار شیڈول",
      description:
        "ہمارا ادارہ طلباء کو ان کے پسندیدہ اوقات کے مطابق کلاس شیڈول بنانے کی اجازت دیتا ہے تاکہ قرآن کی کلاسیں روزمرہ کے معمول میں آسانی سے شامل کی جا سکیں۔",
    },
    {
      icon: Users,
      title: "ایک سے ایک کلاسز",
      description:
        "القرآن کلاسز پلیٹ فارم پر برادر بہ برادر اور بہن بہن کے لیے ذاتی نوعیت کی ایک سے ایک کلاسز دستیاب ہیں۔",
    },
    {
      icon: GraduationCap,
      title: "ماہر اور مستند اساتذہ",
      description:
        "ہمارے تجربہ کار اور سرٹیفائیڈ قرآن ٹیچرز تدریسی معیار کو یقینی بناتے ہیں اور تجوید و اسلامی تعلیمات میں گہرا علم رکھتے ہیں۔",
    },
    {
      icon: BarChart3,
      title: "ماہانہ پیشرفت رپورٹ",
      description:
        "ہماری باقاعدہ فیڈبیک اور تفصیلی رپورٹس والدین اور طلباء کو سیکھنے کی پیشرفت اور بہتری کے شعبوں سے باخبر رکھتی ہیں۔",
    },
    {
      icon: MessageSquare,
      title: "متبادل اساتذہ",
      description:
        "اگر آپ کے استاد غیر حاضر ہوں تو آپ کی کلاس نہ رہ جائے اس کے لیے ہمارے پاس متبادل اساتذہ موجود ہیں جو کلاسز جاری رکھتے ہیں۔",
    },
    {
      icon: Award,
      title: "تکمیل کا سرٹیفکیٹ",
      description:
        "کسی بھی کورس کی تکمیل پر آپ کو ایک تصدیق شدہ سرٹیفکیٹ ملتا ہے، جو قرآن کی تعلیم میں آپ کی محنت اور کامیابی کو تسلیم کرتا ہے۔",
    },
    {
      icon: Wallet,
      title: "آن لائن ادائیگیاں آسان",
      description:
        "ہمارا پلیٹ فارم محفوظ اور آسان ادائیگی کے طریقے فراہم کرتا ہے، جس سے داخلہ اور ماہانہ فیس کا عمل ہموار ہو جاتا ہے۔",
    },
    {
      icon: Headphones,
      title: "24/7 سپورٹ اسٹاف",
      description:
        "ہماری وقف شدہ سپورٹ ٹیم ہر وقت دستیاب ہے تاکہ آپ کے سوالات کا فوری جواب دے اور سیکھنے کے تجربے کو آسان بنائے۔",
    },
  ];

  return (
    <section
      id="why-study"
      className="py-20 px-6 bg-gradient-to-r from-[#6abe54] to-[#0f6132]  font-jameel-noori"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Headings */}
        <div className="text-center mb-12">
          {/* Yellow Badge */}
          <div className="inline-block mb-4">
            <span className="inline-block bg-yellow-400 px-4 py-1 rounded-md text-black font-semibold text-sm uppercase tracking-wider font-sans">
              Our Quality Principles
            </span>
          </div>

          {/* Large Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white font-sans">
            Why Study With Us?
          </h2>
        </div>

        {/* 3x3 Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="quality-card bg-white rounded-lg p-6 shadow-lg transition-all duration-300 ease-out cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  {/* Icon on Left */}
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6abe54] to-[#0f6132] flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content on Right */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
