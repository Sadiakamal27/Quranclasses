import { MessageSquare, Globe, Phone, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer
      className="
  text-white py-16 border-t border-white/5
  bg-[url('/quranhousef-bg.png')]
  bg-cover bg-center bg-no-repeat
"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-20 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link
              href="/"
              className="shrink-0 transition-transform hover:scale-105 duration-300 block"
            >
              <Image
                src="/logos/footerlogo.svg"
                alt="Al Quran Logo"
                width={120}
                height={120}
                className="object-contain"
              />
            </Link>
            <p className="text-white leading-relaxed">
              Providing a unique package of religious and modern education under
              one roof. Highly trained, experienced, and certified teachers at
              your service.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3 text-white">
              <li>
                <Link
                  href="/#FeaturedCourses"
                  className="hover:text-[#6abe54] transition-colors"
                >
                  Featured Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/#top"
                  className="hover:text-[#6abe54] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#reviews"
                  className="hover:text-[#6abe54] transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/#how-to-enroll"
                  className="hover:text-[#6abe54] transition-colors"
                >
                  How to Enroll
                </Link>
              </li>
            </ul>
          </div>

          {/* Training Programs */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Our Programs</h4>
            <ul className="space-y-3 text-white">
              <li>
                <Link
                  href="/#FeaturedCourses"
                  className="hover:text-[#6abe54] transition-colors"
                >
                  Noorani Qaida
                </Link>
              </li>
              <li>
                <Link
                  href="/#FeaturedCourses"
                  className="hover:text-[#6abe54] transition-colors"
                >
                  Quran Reading
                </Link>
              </li>
              <li>
                <Link
                  href="/#FeaturedCourses"
                  className="hover:text-[#6abe54] transition-colors"
                >
                  Tajweed Mastery
                </Link>
              </li>
              <li>
                <Link
                  href="/#FeaturedCourses"
                  className="hover:text-[#6abe54] transition-colors"
                >
                  Hifz Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4 text-white">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#009FC8]" />
                <div className="flex flex-col">
                  <Link
                    href="https://wa.me/+923005806700"
                    target="_blank"
                    className="w-full sm:w-auto"
                  >
                    <span>+92 300 5806700</span>
                  </Link>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#009FC8]" />
                <span className="break-all"> info@quraanhouse.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-[#009FC8]" />
                <span>Available Onsite</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white text-sm">
          <p>
            &copy; {new Date().getFullYear()} Al Quran Classes Institution. All
            rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
