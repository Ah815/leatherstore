import CategorySection from "@/components/Category";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import CarouselReviews from "@/components/ReviewCarousal";
import Image from "next/image";

export default function Home() {
  return (
<>
<Navbar />
<HeroSection />
<CategorySection />
<Footer />
</>
  );
}
