import { Facebook, Instagram, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#F5DEB3] text-[#935217] font-serif">
      <div className="container mx-auto px-4 py-4">
        {/* Logo */}
        <div className="mb-12 flex justify-center">
          <Image src="/images/logo.jpg" alt="Lordsman Leather Logo" width={200} height={40} className="h-40 w-auto" />
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Top Collections */}
          <div>
            <h2 className="mb-6 text-2xl font-bold border-b border-[#D4AF37] pb-2">Top Collections</h2>
            <ul className="space-y-3">
              {["Belts", "Bags", "Jackets", "Pets Accessories", "Customized Order"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-black hover:text-[#cb7120] text-md font-semibold hover:underline transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Policies */}
          <div>
            <h2 className="mb-6 text-2xl font-bold border-b border-[#D4AF37] pb-2">Services & Policies</h2>
            <ul className="space-y-3">
              {[
                "Shipping Policy",
                "Return & Refund Policy",
                "Privacy Policy",
                "Terms & Condition",
                "Exchange Policy",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-black hover:text-[#cb7120] text-md font-semibold hover:underline transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore Us */}
          <div>
            <h2 className="mb-6 text-2xl font-bold border-b border-[#D4AF37] pb-2">Explore Us</h2>
            <ul className="space-y-3">
              {["About Us", "Our Story", "Craftsmanship", "Testimonials", "Blog"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-black hover:text-[#cb7120] text-md font-semibold hover:underline transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h2 className="text-2xl font-bold border-b border-[#D4AF37] pb-2">Connect With Us</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Email:</p>
                <a
                  href="mailto:lordsmanleather@gmail.com"
                  className="text-black hover:text-[#cb7120] text-md font-semibold hover:underline transition-colors duration-300"
                >
                  lordsmanleather@gmail.com
                </a>
              </div>
              <div>
                <p className="font-semibold">Phone:</p>
                <a
                  href="tel:+923037610235"
                  className="text-black hover:text-[#cb7120] text-md font-semibold hover:underline transition-colors duration-300"
                >
                  +92 303 7610235
                </a>
              </div>
              <div>
                <p className="font-semibold">Location:</p>
                <p className="text-black text-md font-semibold">Sialkot, Punjab Pakistan 51310</p>
              </div>
              <div>
                <p className="font-semibold">Business Hours:</p>
                <p className="text-black text-md font-semibold">10:00 AM to 10:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-12 flex flex-col items-center space-y-3">
          <div className="text-2xl font-bold">FOLLOW US</div>
          <div className="flex space-x-6">
            <Link href="#" className="text-black hover:text-[#cb7120] transition-colors duration-300">
              <Instagram className="h-8 w-8" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-black hover:text-[#cb7120] transition-colors duration-300">
              <Facebook className="h-8 w-8" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="mailto:lordsmanleather@gmail.com"
              className="text-black hover:text-[#cb7120] transition-colors duration-300"
            >
              <Mail className="h-8 w-8" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 bg-[#935217] py-4 text-center">
        <p className="text-white text-sm font-bold">© 2025 Lordsman Leather. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

