'use client'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const categories = [
  {
    title: "Bike Leather Suits",
    imageUrl: "/images/leatherJackets.jpeg",
    altText: "Leather Bike Jacket",
    link: "/bikeSuitsLeather", // Fixed link
  },
  {
    title: "Bike Leather Gloves",
    imageUrl: "/images/dloves.webp",
    altText: "Leather Bike Gloves",
    link: "/bikeGlovesLeather",
  },
  {
    title: "Bike Leather Shoes",
    imageUrl: "/images/shoes.jpeg",
    altText: "Leather Bike Shoes",
    link: "/bikeShoesLeather",
  },
];

const Page = () => {
  return (
    <div>
      <Navbar />

      <section className="relative w-full min-h-[70vh] flex items-center justify-center bg-[#F5F5DC] border-b-2 border-gold">
        <div className="absolute inset-0">
          <Image
            src="/images/hangerJackets.jpeg"
            alt="Leather Jackets Background"
            fill
            style={{ objectFit: "cover" }}
            quality={100}
            priority
          />
        </div>
        <div className="relative z-10 text-center p-8 bg-white/70 shadow-lg rounded-lg max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#2F4F4F]">
            Luxury Leather Biking Gear
          </h1>
          <p className="mt-4 text-lg text-[#556B2F] font-medium italic">
            Timeless elegance crafted to perfection.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F5F5F0]">
        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl font-serif text-[#2C3E50] mb-12">
          Explore Biking Collection
        </h2>

        {/* Categories Container */}
        <div className="container mx-auto p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 justify-items-center">
            {categories.map((category, index) => (
              <div
                key={`${category.title}-${index}`}
                className="relative w-full max-w-sm aspect-[3/4] overflow-hidden group rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image Container */}
                <div className="relative w-full h-full">
                  <Image
                    src={category.imageUrl || "/placeholder.svg"}
                    alt={category.altText}
                    width={300}
                    height={400}
                    className="w-full h-full object-fill brightness-90 group-hover:brightness-75 transition-all duration-300"
                  />
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-white bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl sm:text-2xl font-serif mb-4 text-center">
                    {category.title}
                  </h3>
                  <Link
                    href={category.link}
                    className="inline-block px-6 py-2 bg-[#2C3E50] hover:bg-[#34495E] rounded text-sm transition-colors border border-white uppercase tracking-wide"
                  >
                    Discover
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Page;
