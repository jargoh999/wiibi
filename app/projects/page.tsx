import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-['Inter',_'Poppins',_sans-serif]">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">W</span>
                </div>
                <span className="text-xl font-medium text-gray-900">Wiibi Energy</span>
              </div>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-600 hover:text-gray-900 font-medium">
                Home
              </a>
              <a href="/packages" className="text-gray-600 hover:text-gray-900 font-medium">
                Packages
              </a>
              <a href="/projects" className="text-orange-500 font-medium border-b-2 border-orange-500 pb-1">
                Projects
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">
                Services
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">
                About Us
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">
                Contact Us
              </a>
            </nav>

            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-medium">Get a Quote</Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-16">
            <h1 className="text-4xl font-light text-gray-900 mb-3">Projects</h1>
            <p className="text-gray-600 font-light text-lg">What we have worked on:</p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Joes Bar & Lounge */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Joes Bar & Lounge solar installation"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt="Joes Bar & Lounge detail 1"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt="Joes Bar & Lounge detail 2"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-light text-gray-900 mb-2">Joes Bar & Lounge</h3>
                <p className="text-gray-500 font-light">2023</p>
              </div>
            </div>

            {/* Admor Links */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Admor Links solar installation"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt="Admor Links detail 1"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt="Admor Links detail 2"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-light text-gray-900 mb-2">Admor Links</h3>
                <p className="text-gray-500 font-light">2025</p>
              </div>
            </div>

            {/* Mr. Joseph Residence */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Mr. Joseph Residence solar installation"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt="Mr. Joseph Residence detail 1"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt="Mr. Joseph Residence detail 2"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-light text-gray-900 mb-2">Mr. Joseph Residence</h3>
                <p className="text-gray-500 font-light">2025</p>
              </div>
            </div>

            {/* Operation Feed a Thousand Family */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Operation feed a thousand family project"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt="Easter giveaway project detail 1"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt="Easter giveaway project detail 2"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-light text-gray-900 mb-2 leading-relaxed">
                  Operation feed a thousand family and installation of solar power for business empowerment Easter
                  giveaway
                </h3>
                <p className="text-gray-500 font-light">2025</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <Card className="bg-gradient-to-r from-teal-800 to-teal-900 border-0 rounded-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 items-center">
                <div className="relative h-80 lg:h-96">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Friendly customer service representative"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  {/* Question mark bubble overlay */}
                  <div className="absolute top-8 right-8 bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">?</span>
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <h2 className="text-3xl lg:text-4xl font-light text-white mb-4 leading-relaxed">
                    Do you have questions? Contact our friendly team today
                  </h2>
                  <p className="text-teal-100 font-light mb-8 text-lg">Contact our friendly team today</p>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-lg">
                    Get a Quote
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-gray-400 mb-2 font-light">Our motto Empowering tomorrow, today</p>
          </div>

          <div className="flex flex-wrap justify-center items-center space-x-8 text-sm">
            <span className="font-medium">Wiibi Limited</span>
            <a href="/packages" className="text-gray-400 hover:text-white font-light">
              Packages &Pricing
            </a>
            <a href="#" className="text-gray-400 hover:text-white font-light">
              Installation and Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white font-light">
              FAQs
            </a>
            <a href="#" className="text-gray-400 hover:text-white font-light">
              Contact Us
            </a>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>📷
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>💼
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
