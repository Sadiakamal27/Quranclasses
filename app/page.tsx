import FeaturesCard from "@/components/FeaturesCard";
import StatsCards from "@/components/StatsCards";
import { Section2 } from "@/components/Section2";
import { WhyStudyWithUs } from "@/components/WhyStudyWithUs";
import HowToEnrollSection from "@/components/HowToEnrollSection";
import Reviews from "@/components/Reviews";
import FeaturedCourses from "@/components/FeaturedCourses";
import { HeroSection } from "@/components/HeroSection";
import { BlogSection } from "@/components/BlogSection";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden w-full">
      <HeroSection />
      <FeaturesCard />
      <Section2 />
      <StatsCards />
      <FeaturedCourses />
      <WhyStudyWithUs />
      <Reviews />
      <HowToEnrollSection />
      <BlogSection />
    </div>
  );
}
