"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Phone, Mail, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "ہوم", nameEn: "Home", href: "#top" },
    { name: "خصوصیات", nameEn: "Features", href: "#FeaturedCourses" },
    { name: "کیوں پڑھیں", nameEn: "Why Study", href: "#why-study" },
    { name: "جائزے", nameEn: "Reviews", href: "#reviews" },
    { name: "داخلہ", nameEn: "How to Enroll", href: "#how-to-enroll" },
    { name: "بلاگ", nameEn: "Blog", href: "#blog" },
  ];

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("#")) {
      if (pathname === "/") {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          const offset = 100; // Offset for fixed header
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
          setIsMobileMenuOpen(false);
        }
      } else {
        // Let the default Link behavior or <a> behavior happen with absolute path
        // but we need to ensure the href is /#...
      }
    }
  };

  return (
    <>
      {/* Moving Admission Ticker - Fixed at very top */}
      <div className="fixed top-0 left-0 right-0 z-[100] bg-gradient-to-r from-[#6abe54] to-[#0f6132] h-8 flex items-center overflow-hidden">
        <div className="animate-marquee inline-block whitespace-nowrap">
          <p className="text-white font-extrabold text-sm md:text-base px-4 uppercase tracking-widest inline-block">
            Admissions Open 2026 &nbsp; • &nbsp; Admissions Open 2026 &nbsp; •
            &nbsp; Admissions Open 2026 &nbsp; • &nbsp; Admissions Open 2026
            &nbsp; • &nbsp; Admissions Open 2026 &nbsp; • &nbsp; Admissions Open
            2026 &nbsp; • &nbsp; Admissions Open 2026 &nbsp; • &nbsp; Admissions
            Open 2026
          </p>
        </div>
      </div>

      {/* Top Contact Bar - Scrolls away */}
      <div className="absolute top-8 left-0 right-0 z-[60] py-3 px-6 hidden lg:block">
        <div className="container mx-auto">
          <div className="bg-transparent px-6 mt-5">
            <div className="flex items-center justify-center gap-6 text-sm">
              <Link
                  href="https://wa.me/+923005806700"
                  target="_blank"
                                  className="flex items-center gap-1 text-white hover:text-[#6abe54] transition-colors"

                >
                <Phone className="w-3.5 h-3.5" />
                <span className="text-xs">+92 300 5806700</span>
              </Link>
             
              <Link
                href="mailto:info@quraanhouse.com"
                className="flex items-center gap-1 text-white hover:text-[#6abe54] transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span className="text-xs"> info@quraanhouse.com</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar - Sticky/Fixed */}
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled ? "top-0 pt-2 mt-8" : "top-8 lg:top-20 pt-4"
        }`}
      >
        {/* Navigation Container */}
        <div
          className={`transition-all duration-300 ${
            isScrolled
              ? "py-1 mt-0 rounded-xl lg:max-w-[90%] shadow-md"
              : "py-1 md:py-2 rounded-xl lg:max-w-[85%] shadow-lg"
          } bg-white text-black px-3 sm:px-4 md:px-6 flex items-center justify-between mx-2 sm:mx-4 md:mx-6 lg:mx-auto overflow-hidden`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <div className="text-xl md:text-2xl font-bold flex items-center">
              <Image
                src="/logos/logo.png"
                alt="Al Quran Logo"
                width={70}
                height={70}
                className="object-contain md:w-[80px]"
              />
            </div>
          </Link>

          {/* Navigation Links - Desktop */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-3 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={pathname === "/" ? link.href : `/${link.href}`}
                onClick={(e) => scrollToSection(e, link.href)}
                className="hover:text-[#0f6132] transition-colors px-2 py-1 text-xs xl:text-sm whitespace-nowrap font-semibold"
              >
                {link.nameEn}
              </Link>
            ))}
          </nav>

          {/* CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="animated-button-wrapper hidden sm:block shrink-0">
              <Link href="/get-started">
                <button className="animated-button gradient-gold text-white font-semibold px-3 md:px-5 py-1.5 md:py-2 rounded-md relative text-sm md:text-base font-sans">
                  <span className="relative z-10 whitespace-nowrap">
                    Get Started
                  </span>
                </button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-black hover:text-[#6abe54] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 overflow-hidden ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Content */}
          <div
            className={`absolute top-0 right-0 h-full w-[80%] max-w-sm bg-zinc-950 shadow-2xl transition-transform duration-500 transform ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            } flex flex-col pt-24 pb-12 px-8 overflow-y-auto`}
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={pathname === "/" ? link.href : `/${link.href}`}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-white text-xl font-bold hover:text-[#6abe54] transition-colors font-jameel-noori"
                >
                  {link.name}
                </Link>
              ))}

              <div className="mt-8">
                <Link
                  href="/get-started"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <button className="w-full gradient-gold text-black font-bold py-4 rounded-xl shadow-lg active:scale-95 transition-transform font-jameel-noori">
                    ابھی شروع کریں
                  </button>
                </Link>
              </div>
            </div>

            <div className="mt-auto pt-10 flex flex-col gap-4 text-gray-400 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#009FC8]" />
                <span>0305-2087083</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#009FC8]" />
                <span>0312-5545581</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#009FC8]" />
                <span>info@alquranclassesonline.com</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
