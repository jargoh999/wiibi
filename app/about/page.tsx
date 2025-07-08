import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { CheckCircle, Users, Award, Shield, Zap } from "lucide-react"

export default function AboutPage() {
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
              <a href="/services" className="text-gray-600 hover:text-gray-900 font-medium">
                Services
              </a>
              <a href="/about" className="text-orange-500 font-medium border-b-2 border-orange-500 pb-1">
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
            <h1 className="text-4xl font-light text-gray-900 mb-6">About Us</h1>
            <div className="max-w-4xl">
              <p className="text-gray-600 font-light text-lg leading-relaxed mb-6">
                WiibiEnergy is a full-service solar technology company dedicated to providing sustainable energy
                solutions for homes and businesses across Nigeria. With years of experience in the renewable energy
                sector, we have established ourselves as a trusted partner for clients seeking reliable, cost-effective
                solar power systems.
              </p>
              <p className="text-gray-600 font-light text-lg leading-relaxed">
                From initial consultation to installation, backup, our design team and skilled technicians work together
                to deliver customized solar solutions that meet each client's unique energy needs while contributing to
                a more sustainable future through innovative clean energy technologies and expert engineering.
              </p>
            </div>
          </div>

          {/* Mission and Vision */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                Our mission begins in innovation in sustainable energy solutions by providing reliable, affordable, and
                environmentally responsible solar power systems that help businesses and homes achieve energy
                independence and reduce their carbon footprint.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                To become Nigeria's leading renewable energy company, transforming communities through accessible clean
                energy solutions and contributing to a more sustainable future for generations to come.
              </p>
            </div>
          </div>

          {/* What We Do */}
          <div className="mb-20">
            <h2 className="text-3xl font-light text-gray-900 mb-12 text-center">What we do</h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
              <Card className="border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">Solar System Packages</h3>
                  <p className="text-sm text-gray-600 font-light">
                    High-efficiency solar panel systems designed for residential and commercial applications
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">Expert Technical Support</h3>
                  <p className="text-sm text-gray-600 font-light">
                    Comprehensive technical support from our certified solar energy specialists
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">System Service Benefits</h3>
                  <p className="text-sm text-gray-600 font-light">
                    Long-term maintenance and service packages to ensure optimal system performance
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">Energy Monitoring & IoT Solutions</h3>
                  <p className="text-sm text-gray-600 font-light">
                    Advanced monitoring systems to track energy production and consumption
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-20">
            <h2 className="text-3xl font-light text-gray-900 mb-12">Our Core Values</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-3"></div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Innovation</h3>
                    <p className="text-gray-600 font-light">
                      We continuously embrace cutting-edge technology to deliver the most efficient solar solutions
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-3"></div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Reliability</h3>
                    <p className="text-gray-600 font-light">
                      Our commitment to quality ensures dependable energy solutions that stand the test of time
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-3"></div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Sustainability</h3>
                    <p className="text-gray-600 font-light">
                      Environmental responsibility drives every decision we make in our business operations
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-3"></div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Customer Focus</h3>
                    <p className="text-gray-600 font-light">
                      We prioritize our customers' needs and provide personalized solutions for every project
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-2xl p-8 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Happy customers representing our core values - man and woman in orange and yellow clothing"
                    width={300}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-20">
            <h2 className="text-3xl font-light text-gray-900 mb-12 text-center">Why Choose Us?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border border-gray-200 rounded-lg">
                <CardContent className="p-6">
                  <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
                  <h3 className="font-medium text-gray-900 mb-3">Proven Track Record</h3>
                  <p className="text-gray-600 font-light text-sm">
                    Over 25 successful installations across 7 states with 99.9% uptime reliability
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-gray-200 rounded-lg">
                <CardContent className="p-6">
                  <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
                  <h3 className="font-medium text-gray-900 mb-3">Expert Team</h3>
                  <p className="text-gray-600 font-light text-sm">
                    Certified engineers and technicians with extensive experience in solar technology
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-gray-200 rounded-lg">
                <CardContent className="p-6">
                  <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
                  <h3 className="font-medium text-gray-900 mb-3">Comprehensive Support</h3>
                  <p className="text-gray-600 font-light text-sm">
                    From consultation to maintenance, we provide end-to-end service and support
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Data Driven Insights */}
          <div className="mb-20">
            <h2 className="text-3xl font-light text-gray-900 mb-12 text-center">Data Driven Insights</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-light text-green-500 mb-2">70%</div>
                <p className="text-gray-600 font-light">Energy Cost Reduction</p>
              </div>
              <div>
                <div className="text-5xl font-light text-green-500 mb-2">2Million</div>
                <p className="text-gray-600 font-light">Naira Saved</p>
              </div>
              <div>
                <div className="text-5xl font-light text-green-500 mb-2">80%</div>
                <p className="text-gray-600 font-light">Customer Satisfaction</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-orange-500 to-yellow-500 border-0 rounded-2xl overflow-hidden">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-light text-white mb-4">Ready to Go Solar?</h2>
              <p className="text-orange-100 font-light text-lg mb-8">Let us power your world sustainably</p>
              <Button className="bg-white text-orange-500 hover:bg-gray-100 font-medium px-8 py-3 rounded-lg">
                Get Started Today
              </Button>
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
