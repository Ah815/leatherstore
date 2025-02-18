import FeatureBanner from "@/components/FeatureBanner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "The Duke of Luxe Quilted Leather Jacket",
    image: "/images/bag1.webp",
    href: "#",
  },
  {
    id: 2,
    name: "The Grand Duke Hooded Leather Jacket",
    image: "/images/bag2.webp",
    href: "#",
  },
  {
    id: 3,
    name: "The Imperial Vintage Leather Jacket",
    image: "/images/bag3.webp",
    href: "#",
  },
];

const Page = () => {
  return (
    <>
      <Navbar />
      <section className="relative w-full min-h-[70vh] flex items-center justify-center bg-[#F5F5DC] ">
        <div className="absolute inset-0">
          <Image
            src="/images/bag.jpg"
            alt="Leather Jackets Background"
            fill
            style={{ objectFit: "cover" }}
            quality={100}
            priority
          />
        </div>
        <div className="relative z-10 text-center p-8 bg-white/70 shadow-lg rounded-lg max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#2F4F4F]">
            Luxury Leather Bags
          </h1>
          <p className="mt-4 text-lg text-[#556B2F] font-medium italic">
            Timeless elegance crafted to perfection.
          </p>
        </div>
      </section>

      <div className="  py-12 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative shadow-lg p-4 bg-white rounded-lg"
              >
                <div className="aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    objectFit="cover"
                    width={500}
                    height={500}
                    className="h-full w-full object-cover transition-opacity group-hover:opacity-75"
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
      <FeatureBanner />
      <Footer />
    </>
  );
};

export default Page;
