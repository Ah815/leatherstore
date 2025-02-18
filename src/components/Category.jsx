import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Leather Jackets",
    imageUrl: "/images/leatherJackets.jpeg",
    altText: "Leather Jacket",
    link: "/products/jackets",
  },
  {
    title: "Leather Bags",
    imageUrl: "/images/bags.jpeg",
    altText: "Leather Bags",
    link: "/products/bags",
  },
  {
    title: "Premium Bike Gear",
    imageUrl: "/images/bike-gear.jpeg",
    altText: "Premium Bike Gear",
    link: "/products/bike-gear",
  },
];


export default function CategorySection() {
  return (
    <>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F5F5F0]">
        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl font-serif text-[#2C3E50] mb-12">
          Explore Our Collections
        </h2>

        {/* Categories Container */}
        <div className="container mx-auto p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 justify-items-center">
            {categories.map((category, index) => (
              <div
                key={`${category.title}-${index}`}
                className="relative w-full max-w-sm aspect-[3/4] overflow-hidden group"
              >
                {/* Image */}
                <Image
                  src={category.imageUrl || "/placeholder.svg"}
                  alt={category.altText}
                  layout="fill"
                  objectFit="cover"
                  className="brightness-90 group-hover:brightness-75 transition-all duration-300"
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-white bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl sm:text-2xl font-serif mb-4 text-center">
                    {category.title}
                  </h3>
                  <Link
                    href={category.link}
                    className="inline-block px-6 py-2 bg-[#2C3E50] hover:bg-[#34495E] rounded-none text-sm transition-colors border border-white uppercase tracking-wide"
                  >
                    Discover
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto bg-[#F5F5F0]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 p-4 md:p-8 lg:p-16">
          {/* Text Content */}
          <div className="flex-1 space-y-4 md:space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2C3E50] leading-tight">
              Timeless Elegance,
              <br />
              Uncompromising
              <br />
              <span className="text-[#8B5A2B]">Quality</span>
            </h2>
            <p className="text-[#34495E] text-base md:text-lg lg:text-xl max-w-xl font-light leading-relaxed">
              Experience the pinnacle of craftsmanship with our premium leather jackets. Each piece is a testament to
              enduring style and unparalleled comfort, perfect for the discerning individual.
            </p>
            <Link
              href="/collections"
              className="inline-block px-6 py-3 md:px-8 md:py-4 bg-[#2C3E50] text-white text-base md:text-lg font-serif 
                       hover:bg-[#34495E] transition-colors duration-200 uppercase tracking-wide"
            >
              View Collection
            </Link>
          </div>

          {/* Image */}
          <div className="flex-1 w-full max-w-md md:max-w-lg lg:max-w-xl">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/images/hangerJackets.jpeg"
                alt="Exquisite leather jackets displayed on wooden hangers"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto bg-[#F5DEB3]">
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-16 p-4 md:p-8 lg:p-16">
          {/* Text Content */}
          <div className="flex-1 space-y-4 md:space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2C3E50] leading-tight">
              Bespoke Luxury,
              <br />
              Tailored to
              <br />
              <span className="text-[#8B5A2B]">Perfection</span>
            </h2>
            <p className="text-[#34495E] text-base md:text-lg lg:text-xl max-w-xl font-light leading-relaxed">
              Indulge in the ultimate luxury experience with our bespoke service. From selecting the finest leathers to
              customizing every detail, create a piece that's uniquely yours.
            </p>
            <Link
              href="/bespoke-service"
              className="inline-block px-6 py-3 md:px-8 md:py-4 bg-[#2C3E50] text-white text-base md:text-lg font-serif 
                 hover:bg-[#34495E] transition-colors duration-200 uppercase tracking-wide"
            >
              Explore Bespoke Options
            </Link>
          </div>

          {/* Image */}
          <div className="flex-1 w-full max-w-md md:max-w-lg lg:max-w-xl">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/images/hangerJackets.jpeg"
                alt="Artisan crafting a bespoke leather jacket"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto bg-[#F5F5F0]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 p-4 md:p-8 lg:p-16">
          {/* Text Content */}
          <div className="flex-1 space-y-4 md:space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2C3E50] leading-tight">
              Bespoke Luxury,
              <br />
              Tailored to
              <br />
              <span className="text-[#8B5A2B]">Perfection</span>
            </h2>
            <p className="text-[#34495E] text-base md:text-lg lg:text-xl max-w-xl font-light leading-relaxed">
              Indulge in the ultimate luxury experience with our bespoke service. From selecting the finest leathers to
              customizing every detail, create a piece that's uniquely yours.
            </p>
            <Link
              href="/bespoke-service"
              className="inline-block px-6 py-3 md:px-8 md:py-4 bg-[#2C3E50] text-white text-base md:text-lg font-serif 
                       hover:bg-[#34495E] transition-colors duration-200 uppercase tracking-wide"
            >
              Explore Bespoke Options
            </Link>
          </div>

          {/* Image */}
          <div className="flex-1 w-full max-w-md md:max-w-lg lg:max-w-xl">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/images/hangerJackets.jpeg"
                alt="Artisan crafting a bespoke leather jacket"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F5DEB3] py-8 font-serif mb-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Container */}
        <div className="flex flex-col md:flex-row justify-around items-center">
          {/* Item 1 */}
          <div className="flex flex-col items-center space-x-3 mb-6 md:mb-0">
            <div className="flex-shrink-0">
              <Image
                src="/images/review1.jpg" // Replace with your icon path
                alt="Cart Icon"
                width={40}
                height={40}
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                15000+ Orders Dispached
              </h3>
            </div>
          </div>

          {/* Vertical Divider (hidden on mobile) */}
          <div className="hidden md:block h-20 w-px bg-gray-950"></div>

          {/* Item 2 */}
          <div className="flex flex-col items-center space-x-3 mb-6 md:mb-0">
            <div className="flex-shrink-0">
              <Image
                src="/images/review2.jpg" // Replace with your icon path
                alt="Leather Icon"
                width={40}
                height={40}
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                100% Genuine Leather
              </h3>
            </div>
          </div>

          {/* Vertical Divider (hidden on mobile) */}
          <div className="hidden md:block h-20 w-px bg-gray-950"></div>

          {/* Item 3 */}
          <div className="flex flex-col items-center space-x-3">
            <div className="flex-shrink-0">
              <Image
                src="/images/review3.jpg" // Replace with your icon path
                alt="Quality Icon"
                width={40}
                height={40}
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Premium Quality Guaranteed
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
