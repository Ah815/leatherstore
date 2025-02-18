'use client'
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Image from "next/image"

const AboutPage = () => {
  return (
    <div className="font-serif text-gray-900 bg-stone-100">
      <Navbar />
      <main>
        {/* About Section */}
        <section className="relative w-full min-h-[60vh] md:min-h-[70vh] lg:min-h-[85vh] flex items-center justify-center text-center text-white">
          <div className="absolute inset-0">
            <Image
              src="/images/hangerJackets.jpeg"
              alt="Leather Jackets Background"
              layout="fill"
              objectFit="cover"
              quality={95}
            />
            <div className="absolute inset-0 bg-black/50 backdrop-brightness-75"></div>
          </div>

          <div className="relative max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-[0.2em] mb-6 md:mb-8">
              About Us
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl leading-relaxed tracking-wide">
              Lordsman Leather, established in 1897, upholds a distinguished legacy of crafting exceptional leather
              goods for royal families. As a family-owned establishment, we marry traditional craftsmanship with refined
              techniques to create luxury pieces that elevate your lifestyle. Our creations embody elegance, confidence,
              and timeless quality, crafted with precision, innovation, and unwavering commitment to sustainability.
            </p>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 sm:py-20 md:py-24 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 text-center md:text-left">
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-light text-[#8B4513] uppercase tracking-[0.15em]">
                  Our Mission
                </h2>
                <div className="w-20 h-[1px] bg-[#8B4513] mx-auto md:mx-0"></div>
                <p className="text-gray-800 leading-relaxed tracking-wide">
                  A legacy of royal craftsmanship, delivering luxury leather goods of exceptional quality to a
                  discerning global clientele. Blending tradition with innovation, we focus on sustainable growth while
                  upholding integrity, fairness, and community impact.
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-light text-[#8B4513] uppercase tracking-[0.15em]">
                  Our Vision
                </h2>
                <div className="w-20 h-[1px] bg-[#8B4513] mx-auto md:mx-0"></div>
                <p className="text-gray-800 leading-relaxed tracking-wide">
                  To craft exceptional leather goods that embody sophistication and refinement. We aspire to be the
                  definitive choice for those who seek unparalleled elegance and exclusivity, delivering timeless luxury
                  that bestows a sense of distinction upon our esteemed clientele.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="relative w-full min-h-[400px] overflow-hidden mb-10">
      {/* Background Image */}
      <Image
        src="/images/hangerJackets.jpeg"
        alt="Leather crafting background"
        fill
        className="object-cover"
        priority
      />

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 py-16 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 max-w-3xl">
          <h2 className="text-center text-4xl md:text-5xl font-bold mb-6 text-[#8B4513]">WHY CHOOSE US</h2>
          <p className="text-center text-gray-800 text-lg md:text-xl leading-relaxed">
            We offer our customers the opportunity to indulge in the finest leather goods, where royal craftsmanship
            meets modern luxury, providing a lasting experience that stands the test of time
          </p>
        </div>
      </div>
    </div>
      </main>
      <Footer />
    </div>
  )
}

export default AboutPage

