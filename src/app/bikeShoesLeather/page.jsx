import FeatureBanner from "@/components/FeatureBanner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "The Duke of Luxe Quilted Leather Jacket",
    image: "/images/test1.webp",
    href: "#",
  },
  {
    id: 2,
    name: "The Grand Duke Hooded Leather Jacket",
    image: "/images/test2.webp",
    href: "#",
  },
  {
    id: 3,
    name: "The Imperial Vintage Leather Jacket",
    image: "/images/test3.webp",
    href: "#",
  },
];

const Page = () => {
  return (
    <>
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
            Luxury Leather Biking Shous
          </h1>
          <p className="mt-4 text-lg text-[#556B2F] font-medium italic">
            Timeless elegance crafted to perfection.
          </p>
        </div>
      </section>

      <div className="py-12 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative shadow-lg p-4 bg-white rounded-lg"
              >
                <div className="aspect-square relative w-full rounded-lg overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover object-center transition-opacity group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-3 text-center text-lg font-serif font-semibold text-[#2F4F4F]">
                  {product.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <button className="bg-[#8B0000] text-white mb-6 py-3 px-10 rounded-full font-serif text-lg tracking-wide shadow-md hover:bg-[#5A0000] transition-all duration-200 focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2">
          Request a Quote
        </button>
      </div>
      <FeatureBanner />
      <Footer />
    </>
  );
};

export default Page;