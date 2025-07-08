import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function ServicesPage() {
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
              <a href="/projects" className="text-gray-600 hover:text-gray-900 font-medium">
                Projects
              </a>
              <a href="/services" className="text-orange-500 font-medium border-b-2 border-orange-500 pb-1">
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
            <h1 className="text-4xl font-light text-gray-900 mb-3">Installation and Service</h1>
            <p className="text-gray-600 font-light text-lg">How we work.</p>
          </div>

          {/* Process Steps Grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-20">
            {/* Step 1 */}
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-0 rounded-2xl overflow-hidden relative group hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-6 left-6">
                <Badge className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold">
                  1
                </Badge>
              </div>
              <CardContent className="p-8 pt-20">
                <div className="flex justify-center mb-8">
                  <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Person with clipboard requesting quote"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-medium text-white mb-4">Request your free quote.</h3>
                <p className="text-slate-300 font-light leading-relaxed">Fill out a simple form or reach us directly</p>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-0 rounded-2xl overflow-hidden relative group hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-6 left-6">
                <Badge className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold">
                  2
                </Badge>
              </div>
              <CardContent className="p-8 pt-20">
                <div className="flex justify-center mb-8">
                  <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Site inspection with house and checklist"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-medium text-white mb-4">Site Inspection/ Checklist</h3>
                <p className="text-slate-300 font-light leading-relaxed">Fill out a simple form or reach us directly</p>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-0 rounded-2xl overflow-hidden relative group hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-6 left-6">
                <Badge className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold">
                  3
                </Badge>
              </div>
              <CardContent className="p-8 pt-20">
                <div className="flex justify-center mb-8">
                  <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Person with solar panel design"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-medium text-white mb-4">Personalized design systems</h3>
                <p className="text-slate-300 font-light leading-relaxed">Fill out a simple form or reach us directly</p>
              </CardContent>
            </Card>

            {/* Step 4 */}
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-0 rounded-2xl overflow-hidden relative group hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-6 left-6">
                <Badge className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold">
                  4
                </Badge>
              </div>
              <CardContent className="p-8 pt-20">
                <div className="flex justify-center mb-8">
                  <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Person with calendar scheduling"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-medium text-white mb-4">Calendar/ Schedule</h3>
                <p className="text-slate-300 font-light leading-relaxed">Fill out a simple form or reach us directly</p>
              </CardContent>
            </Card>

            {/* Step 5 */}
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-0 rounded-2xl overflow-hidden relative group hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-6 left-6">
                <Badge className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold">
                  5
                </Badge>
              </div>
              <CardContent className="p-8 pt-20">
                <div className="flex justify-center mb-8">
                  <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Professional installation team"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-medium text-white mb-4">Professional Installation</h3>
                <p className="text-slate-300 font-light leading-relaxed">Skilled engineers access your property</p>
              </CardContent>
            </Card>

            {/* Step 6 */}
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-0 rounded-2xl overflow-hidden relative group hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-6 left-6">
                <Badge className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold">
                  6
                </Badge>
              </div>
              <CardContent className="p-8 pt-20">
                <div className="flex justify-center mb-8">
                  <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Systems testing and commissioning"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-medium text-white mb-4">Systems & Commissioning</h3>
                <p className="text-slate-300 font-light leading-relaxed">Thorough testing and demonstration</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Section */}
          <Card className="bg-gradient-to-r from-slate-800 to-slate-900 border-0 rounded-2xl overflow-hidden shadow-2xl">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 items-center">
                <div className="relative h-80 lg:h-96 bg-gradient-to-br from-slate-700 to-slate-800">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt="Friendly customer service representative in orange Wiibi Energy shirt"
                        width={300}
                        height={300}
                        className="rounded-full border-4 border-orange-500"
                      />
                      {/* Question mark bubble */}
                      <div className="absolute -top-4 -right-4 bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                        <span className="text-white text-2xl font-bold">?</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <h2 className="text-3xl lg:text-4xl font-light text-white mb-4 leading-relaxed">
                    Do you have questions? Contact our friendly team today
                  </h2>
                  <p className="text-slate-300 font-light mb-8 text-lg">Contact our friendly team today</p>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
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
            <a href="/packages" className="text-gray-400 hover:text-white font-light transition-colors">
              Packages &Pricing
            </a>
            <a href="/services" className="text-gray-400 hover:text-white font-light transition-colors">
              Installation and Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white font-light transition-colors">
              FAQs
            </a>
            <a href="#" className="text-gray-400 hover:text-white font-light transition-colors">
              Contact Us
            </a>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>📷
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>💼
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
