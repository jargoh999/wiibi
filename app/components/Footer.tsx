import { Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-gray-400 mb-2">Our motto Empowering tomorrow, today</p>
        </div>

        <div className="flex flex-wrap justify-center items-center space-x-8 text-sm">
          <span className="font-semibold">Wiibi Limited</span>
          <a href="/packages" className="text-gray-400 hover:text-white">
            Packages &Pricing
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Installation and Service
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            FAQs
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Contact Us
          </a>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <Instagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
