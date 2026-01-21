"use client";

import { Calendar, User, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "Benefits of Learning Quran",
      excerpt:
        "Learning the Quran brings spiritual peace and guidance to our lives. Discover why learning the Quran is essential for every Muslim.",
      image: "/quran.jpg",
      author: "Admin",
      date: "January 15, 2026",
      category: "Education",
    },
    {
      id: 2,
      title: "How to Teach Quran to Children",
      excerpt:
        "Teaching Quran to children requires patience and love. Learn some effective methods and tips to make Quran learning enjoyable for kids.",
      image: "/quran.jpg",
      author: "Admin",
      date: "January 10, 2026",
      category: "Parenting",
    },
    {
      id: 3,
      title: "Importance of Tajweed",
      excerpt:
        "Reading Quran with Tajweed is not only necessary but also highlights the beauty of the Quran. Learn why Tajweed matters.",
      image: "/quran.jpg",
      author: "Admin",
      date: "January 5, 2026",
      category: "Tajweed",
    },
  ];

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="inline-block bg-yellow-400 px-4 py-1 rounded-md text-black font-semibold text-sm">
              BLOG
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest Articles
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Helpful articles about Quranic education and Islamic knowledge
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-[#6abe54] to-[#0f6132] text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-[#0f6132] font-semibold hover:gap-3 transition-all"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            asChild
            className="bg-gradient-to-r from-[#6abe54] to-[#0f6132] text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            <Link href="/blog">View All Articles</Link>
          </Button>
        </div> 
      </div>
    </section>
  );
}
