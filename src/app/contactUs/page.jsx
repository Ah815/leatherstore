import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Link from "next/link"

export default function ContactPage() {
  return (
    <>
    <Navbar />
    <div className="max-w-6xl mx-auto p-4">
      <div className="rounded-xl border-2 border-[#8B4513] p-10 grid md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div className="space-y-3">
          <h2 className="text-3xl font-bold text-[#8B4513]">Get in Touch</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-[#8B4513] font-medium mb-1">Email:</h3>
              <p className="text-gray-600">info@lordsmanleather.com</p>
            </div>

            <div>
              <h3 className="text-[#8B4513] font-medium mb-1">Phone:</h3>
              <p className="text-gray-600">+44 7414 254739</p>
            </div>

            <div>
              <h3 className="text-[#8B4513] font-medium mb-1">Location:</h3>
              <p className="text-gray-600">Sialkot, Punjab Pakistan 51310</p>
            </div>

            <div>
              <h3 className="text-[#8B4513] font-medium mb-1">Business Hours:</h3>
              <p className="text-gray-600">10:00 AM to 10:00 PM</p>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-[#8B4513] font-medium">Want to Customize Your Jackets?</p>
            <div>
              <Link href="#" className="text-black hover:underline font-semibold inline-block">
                Click Here
              </Link>
              <span className="text-gray-600 ml-2">for Customization</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-[#8B4513]">Contact Us for Further Assistance</h2>
            <p className="text-gray-600">Need any assistance? Our customer support team is ready to help you!</p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:border-transparent transition-all"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:border-transparent transition-all"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:border-transparent transition-all"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:border-transparent transition-all"
                />
              </div>

              <textarea
                placeholder="Type your message here"
                rows={6}
                className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:border-transparent transition-all resize-none"
              />

              <button
                type="submit"
                className="w-40 bg-[#8B4513] hover:bg-[#6B3410] text-white py-3 rounded-md font-medium transition-colors duration-200"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

